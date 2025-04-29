import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface JobApplicationProps {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    remote: boolean;
    posted: string;
    id: string;
  };
}

const JobApplicationDialog = ({ job }: JobApplicationProps) => {
  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const formspreeEndpoint = "https://formspree.io/f/xgvkebpw"; // Replace with your Formspree endpoint

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="whitespace-nowrap" onClick={() => setIsViewingDetails(true)}>
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        {!isApplying ? (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">{job.department}</Badge>
                <Badge variant="outline">{job.location}</Badge>
                <Badge variant="outline">{job.type}</Badge>
                {job.remote && <Badge variant="outline">Remote Eligible</Badge>}
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About the Role</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We are looking for a talented {job.title} to join our growing team...
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                  <li>5+ years of experience in {job.department}</li>
                  <li>Strong problem-solving abilities</li>
                  <li>Excellent communication skills</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                  <li>Design and implement solutions</li>
                  <li>Collaborate with cross-functional teams</li>
                  <li>Drive technical initiatives</li>
                </ul>
              </div>

              <Button 
                className="w-full bg-[#0F223D] hover:bg-[#1a3660] text-white"
                onClick={() => setIsApplying(true)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-6">Apply for {job.title}</DialogTitle>
            </DialogHeader>

            <form
              action={formspreeEndpoint}
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input type="hidden" name="job_title" value={job.title} />
              <input type="hidden" name="job_id" value={job.id} />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <Input required name="name" type="text" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input required name="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <Input required name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Resume</label>
                  <Input
                    required
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-crimson-50 file:text-crimson-700 hover:file:bg-crimson-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Cover Letter (Optional)</label>
                  <textarea
                    name="cover_letter"
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationDialog;