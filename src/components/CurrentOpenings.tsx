// import { useState } from "react";
// import {
//   Badge,
//   Button,
//   Input,
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui"; // Adjust these imports to your actual components
// import { Search, Filter } from "lucide-react";

// // Example jobOpenings prop (use your real data)
// const jobOpenings = [
//   {
//     id: "frontend-dev",
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-time",
//     posted: "2 days ago",
//     remote: true,
//   },
//   // ... more jobs
// ];

// const departments = [
//   "All",
//   "Engineering",
//   "Security",
//   "Data Analytics",
//   "Operations",
//   "Design",
//   "Marketing",
// ];

// const locations = [
//   "All",
//   "Remote",
//   "Silicon Valley",
//   "New York",
//   "London",
//   "Singapore",
// ];

// const CurrentOpenings = () => {
//     export default function CareersSection() {
//         const [searchTerm, setSearchTerm] = useState("");
//         const [selectedDept, setSelectedDept] = useState("All");
//         const [selectedLocation, setSelectedLocation] = useState("All");
      
//         const filteredJobs = jobOpenings.filter((job) => {
//           const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
//           const matchesDept = selectedDept === "All" || job.department === selectedDept;
//           const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
//           return matchesSearch && matchesDept && matchesLocation;
//         });
      
//         return (
//           <section id="openings" className="py-20 px-4">
//             <div className="container mx-auto">
//               {/* Header */}
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
//                 <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
//                   Explore our available positions and find the perfect opportunity to grow your career with us.
//                 </p>
//               </div>
      
//               {/* Search + Filters */}
//               <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
//                 <div className="relative w-full md:w-96">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                   <Input
//                     placeholder="Search positions..."
//                     className="pl-10"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
      
//                 <div className="flex flex-wrap gap-4 items-center">
//                   {/* Filter by Location */}
//                   <Select onValueChange={(val) => setSelectedLocation(val)} defaultValue="All">
//                     <SelectTrigger className="w-44">
//                       <SelectValue placeholder="Location" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {locations.map((loc) => (
//                         <SelectItem key={loc} value={loc}>
//                           {loc}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
      
//               {/* Department Pills */}
//               <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
//                 {departments.map((dept) => (
//                   <button
//                     key={dept}
//                     onClick={() => setSelectedDept(dept)}
//                     className={`px-4 py-2 rounded-full border transition-all text-sm ${
//                       selectedDept === dept
//                         ? "bg-crimson-500 text-white"
//                         : "border-gray-300 text-gray-600 hover:bg-gray-100"
//                     }`}
//                   >
//                     {dept}
//                   </button>
//                 ))}
//               </div>
      
//               {/* Job Cards */}
//               <div className="space-y-4">
//                 {filteredJobs.length === 0 && (
//                   <p className="text-center text-gray-400">No jobs found. Try adjusting your filters.</p>
//                 )}
//                 {filteredJobs.map((job, index) => (
//                   <div
//                     key={index}
//                     className="p-6 bg-white dark:bg-navy-700 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.01] transition-transform"
//                   >
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                       <div>
//                         <h3 className="text-xl font-bold mb-1">{job.title}</h3>
//                         <div className="flex flex-wrap gap-2 mb-3">
//                           <Badge variant="secondary">{job.department}</Badge>
//                           <Badge variant="outline">{job.location}</Badge>
//                           <Badge variant="outline">{job.type}</Badge>
//                           {job.remote && <Badge variant="outline">Remote Eligible</Badge>}
//                         </div>
//                         <p className="text-sm text-slate-500 dark:text-slate-400">Posted {job.posted}</p>
//                       </div>
      
//                       <Button asChild className="whitespace-nowrap">
//                         <a href={`/careers/${job.id}`}>View Details</a>
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
      
//               {/* General Application CTA */}
//               <div className="mt-10 text-center">
//                 <p className="text-slate-600 dark:text-slate-300 mb-4">
//                   Don't see a position that matches your skills?
//                 </p>
//                 <Button asChild variant="outline">
//                   <a href="/careers/general-application">Submit General Application</a>
//                 </Button>
//               </div>
//             </div>
//           </section>
//         );