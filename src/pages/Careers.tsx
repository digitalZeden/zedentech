import { ArrowRight, Award, CheckCircle, Filter, GraduationCap, Heart, Search, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Add this import at the top
import JobApplicationDialog from "@/components/JobApplicationDialog";

const jobOpenings = [
  {
    title: "Senior Cloud Architect",
    department: "Engineering",
    location: "Silicon Valley, CA",
    type: "Full-time",
    remote: true,
    posted: "2 weeks ago",
    id: "cloud-architect-2025"
  },
  {
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "New York, NY",
    type: "Full-time",
    remote: true,
    posted: "1 week ago",
    id: "cybersecurity-analyst-2025"
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
    posted: "3 days ago",
    id: "fullstack-developer-2025"
  },
  {
    title: "Data Scientist",
    department: "Data Analytics",
    location: "London, UK",
    type: "Full-time",
    remote: true,
    posted: "5 days ago",
    id: "data-scientist-2025"
  },
  {
    title: "IT Project Manager",
    department: "Operations",
    location: "Singapore",
    type: "Full-time",
    remote: false,
    posted: "1 week ago",
    id: "project-manager-2025"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    remote: true,
    posted: "2 days ago",
    id: "ux-designer-2025"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Silicon Valley, CA",
    type: "Full-time",
    remote: true,
    posted: "1 week ago",
    id: "devops-engineer-2025"
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    remote: false,
    posted: "2 weeks ago",
    id: "marketing-specialist-2025"
  }
];

const departments = [
  "All",
  "Engineering",
  "Security",
  "Data Analytics",
  "Operations",
  "Design",
  "Marketing",
];

const locations = [
  "All",
  "Remote",
  "Silicon Valley",
  "New York",
  "London",
  "Singapore",
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-navy-600 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200 mb-8">
              Build your career at ZedEnTech Solutions, where innovation meets opportunity. Discover exciting roles in a collaborative, growth-oriented environment.
            </p>
            <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600">
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join ZedEnTech Solutions?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We offer more than just a job. Discover the benefits of building your career with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Continuous learning opportunities, mentorship programs, and clear career progression paths to help you reach your full potential.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Work alongside talented professionals in a supportive environment that values teamwork, diversity, and creative thinking.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learning & Development</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Access to cutting-edge technologies, training programs, certifications, and educational resources to advance your skills.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impactful Work</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Contribute to meaningful projects that solve real business challenges and make a difference for clients across industries.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Opportunities</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Work with international clients and teams, with potential for global assignments and cross-cultural collaboration.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Benefits</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Competitive compensation, health and wellness programs, flexible work arrangements, and other benefits that support your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Life at ZedEnTech Solutions */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Life at ZedEnTech Solutions</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                At ZedEnTech Solutions, we believe that great work happens when people feel valued, inspired, and empowered. Our culture is built on collaboration, innovation, and a shared commitment to excellence.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500 shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Work-Life Balance</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Flexible work arrangements, generous time off, and a culture that respects personal time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500 shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Diversity & Inclusion</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      A workplace that celebrates diverse perspectives, backgrounds, and experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500 shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Social Impact</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Opportunities to give back through volunteer initiatives and community engagement programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500 shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Team Activities</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Regular team events, hackathons, and social gatherings that foster camaraderie and connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3" 
                alt="Team working together" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3" 
                alt="Office collaboration" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3" 
                alt="Team building" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                alt="Office space" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Openings */}
      <section id="openings" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our available positions and find the perfect opportunity to grow your career with us.
            </p>
          </div>
          
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search positions..." className="pl-10" />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              
              <Select>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="data">Data Analytics</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="silicon-valley">Silicon Valley</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-navy-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      {job.remote && <Badge variant="outline">Remote Eligible</Badge>}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Posted {job.posted}</p>
                  </div>
                  
                  <JobApplicationDialog job={job} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button asChild variant="outline">
              <a href="/careers/general-application">
                Submit General Application
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Learn what to expect when you apply for a position at ZedEnTech Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Application</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Submit your application with your resume and cover letter through our careers portal.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Initial Screening</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our recruitment team reviews your application and schedules an initial phone or video interview.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Technical Assessment</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Complete a skills assessment or technical challenge relevant to the role you're applying for.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Final Interviews</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Meet with the hiring team for in-depth discussions about your experience and fit for the role.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about careers at ZedEnTech Solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the interview process like?</AccordionTrigger>
                <AccordionContent>
                  Our interview process typically includes an initial screening call, a technical assessment relevant to the role, and final interviews with the hiring team and potential teammates. The entire process usually takes 2-3 weeks, though this can vary depending on the position.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer remote work options?</AccordionTrigger>
                <AccordionContent>
                  Yes, many of our positions offer flexible remote work options. Some roles may require occasional in-office presence for team meetings or client interactions, while others are fully remote. The job description will specify the work arrangement for each position.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What development opportunities do you offer?</AccordionTrigger>
                <AccordionContent>
                  We provide numerous development opportunities including formal training programs, certification support, mentorship, conference attendance, and internal mobility across teams and projects. Each employee has a professional development budget and dedicated time for learning.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What benefits do you offer?</AccordionTrigger>
                <AccordionContent>
                  Our comprehensive benefits package includes competitive compensation, health insurance, retirement plans with company matching, paid time off, parental leave, wellness programs, education assistance, and performance bonuses. Benefits may vary by location and employment status.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                <AccordionContent>
                  From application to offer, the process typically takes 3-4 weeks. We strive to keep candidates informed at each stage and provide timely feedback. Our recruitment team is committed to ensuring a smooth and transparent hiring experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-navy-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our current openings and take the first step toward a rewarding career at ZedEnTech Solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600">
              <a href="#openings">View Open Positions</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/contact">Contact Recruiting</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

import { Globe, Rocket } from "lucide-react";

export default Careers;
