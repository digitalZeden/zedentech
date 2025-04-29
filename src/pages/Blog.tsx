
// import { ArrowRight, Filter, Search } from "lucide-react";
// import { formatDistance } from "date-fns";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import BackToTop from "@/components/BackToTop";
// import BlogCard from "@/components/BlogCard";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const featuredPost = {
//   title: "The Future of Cloud Computing: Trends to Watch in 2025",
//   excerpt: "Cloud computing continues to evolve at a rapid pace. In this article, we explore the emerging trends that will shape the cloud landscape in 2025 and beyond, from edge computing to serverless architectures and multi-cloud strategies.",
//   imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
//   date: new Date(2025, 3, 10), // April 10, 2025
//   author: "Michael Chen",
//   authorAvatar: "",
//   slug: "future-cloud-computing-trends-2025",
//   category: "Cloud Services"
// };

// const blogPosts = [
//   {
//     title: "Cybersecurity in the Age of AI: New Threats and Defenses",
//     excerpt: "As artificial intelligence becomes more sophisticated, so do cyber threats. Discover how AI is changing the cybersecurity landscape and the advanced defense mechanisms being developed to counter these new challenges.",
//     imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
//     date: new Date(2025, 3, 5), // April 5, 2025
//     author: "Sarah Johnson",
//     authorAvatar: "",
//     slug: "cybersecurity-age-of-ai-threats-defenses",
//     category: "Cybersecurity"
//   },
//   {
//     title: "Digital Transformation Success Stories: Lessons from Industry Leaders",
//     excerpt: "Learn from real-world digital transformation successes across different industries. This article highlights key strategies and lessons from companies that have successfully navigated the complex journey of digital transformation.",
//     imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3",
//     date: new Date(2025, 2, 28), // March 28, 2025
//     author: "David Rodriguez",
//     authorAvatar: "",
//     slug: "digital-transformation-success-stories",
//     category: "Digital Transformation"
//   },
//   {
//     title: "The Rise of Edge Computing: Revolutionizing Data Processing",
//     excerpt: "Edge computing is changing how data is processed and delivered. Explore how this technology is reducing latency, enhancing privacy, and enabling new applications from IoT to autonomous vehicles.",
//     imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3",
//     date: new Date(2025, 2, 20), // March 20, 2025
//     author: "Jennifer Lee",
//     authorAvatar: "",
//     slug: "rise-edge-computing-data-processing",
//     category: "Technology Trends"
//   },
//   {
//     title: "Building Resilient IT Infrastructure: Strategies for Business Continuity",
//     excerpt: "In an increasingly digital world, IT infrastructure resilience is crucial for business continuity. This article outlines key strategies for building robust systems that can withstand unexpected disruptions.",
//     imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3",
//     date: new Date(2025, 2, 15), // March 15, 2025
//     author: "Robert Thompson",
//     authorAvatar: "",
//     slug: "building-resilient-it-infrastructure-business-continuity",
//     category: "IT Infrastructure"
//   },
//   {
//     title: "The Business Value of Data Analytics: Beyond the Hype",
//     excerpt: "Data analytics offers tremendous business value, but realizing that potential requires more than just technology. Learn practical approaches to implementing analytics that deliver meaningful business outcomes.",
//     imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
//     date: new Date(2025, 2, 8), // March 8, 2025
//     author: "Amanda Park",
//     authorAvatar: "",
//     slug: "business-value-data-analytics-beyond-hype",
//     category: "Data Analytics"
//   },
//   {
//     title: "Demystifying DevOps: A Guide for Non-Technical Executives",
//     excerpt: "DevOps can seem complex and technical, but its business benefits are clear. This guide explains DevOps concepts in business terms and outlines how it can improve productivity, quality, and innovation.",
//     imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3",
//     date: new Date(2025, 2, 1), // March 1, 2025
//     author: "Christopher Wilson",
//     authorAvatar: "",
//     slug: "demystifying-devops-guide-non-technical-executives",
//     category: "DevOps"
//   },
//   {
//     title: "Sustainable IT: Reducing Your Organization's Carbon Footprint",
//     excerpt: "IT operations contribute significantly to carbon emissions. Discover practical steps to make your IT infrastructure more sustainable without compromising performance or reliability.",
//     imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3",
//     date: new Date(2025, 1, 22), // February 22, 2025
//     author: "Michelle Green",
//     authorAvatar: "",
//     slug: "sustainable-it-reducing-carbon-footprint",
//     category: "Sustainability"
//   },
//   {
//     title: "The Human Side of IT: Building Digital Skills in Your Workforce",
//     excerpt: "Technology transformation requires human transformation. Learn effective strategies for upskilling your workforce and creating a digital-ready culture that embraces technological change.",
//     imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
//     date: new Date(2025, 1, 15), // February 15, 2025
//     author: "James Peterson",
//     authorAvatar: "",
//     slug: "human-side-it-digital-skills-workforce",
//     category: "Digital Workplace"
//   }
// ];

// const recentCategories = [
//   "Cloud Services",
//   "Cybersecurity",
//   "Digital Transformation",
//   "Technology Trends",
//   "Data Analytics",
//   "DevOps",
//   "IT Infrastructure",
//   "Sustainability"
// ];

// const Blog = () => {
//   const featuredDate = formatDistance(featuredPost.date, new Date(), { addSuffix: true });
  
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="pt-24 pb-16 bg-gradient-to-r from-navy-600 to-navy-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
//             <p className="text-xl text-gray-200">
//               Expert perspectives on technology trends, industry insights, and practical IT strategies for business success.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Search & Filter Section */}
//       <section className="py-10 px-4 bg-gray-50 dark:bg-navy-800/30">
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="relative w-full md:w-96">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <Input placeholder="Search articles..." className="pl-10" />
//             </div>
            
//             <div className="flex flex-wrap gap-4 items-center">
//               <div className="flex items-center gap-2">
//                 <Filter size={16} />
//                 <span className="text-sm font-medium">Filter by:</span>
//               </div>
              
//               <Select>
//                 <SelectTrigger className="w-44">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {recentCategories.map((category) => (
//                     <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               <Select>
//                 <SelectTrigger className="w-44">
//                   <SelectValue placeholder="Date" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="newest">Newest First</SelectItem>
//                   <SelectItem value="oldest">Oldest First</SelectItem>
//                   <SelectItem value="thisMonth">This Month</SelectItem>
//                   <SelectItem value="lastMonth">Last Month</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Featured Post */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="relative overflow-hidden rounded-xl bg-white dark:bg-navy-700 shadow-xl">
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               <div className="p-10 lg:p-16">
//                 <Badge className="mb-6">{featuredPost.category}</Badge>
//                 <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
//                 <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
//                   {featuredPost.excerpt}
//                 </p>
                
//                 <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-8">
//                   <div className="flex items-center mr-4">
//                     <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
//                     {featuredPost.author}
//                   </div>
//                   <div>
//                     {featuredDate}
//                   </div>
//                 </div>
                
//                 <Button asChild className="group">
//                   <a href={`/blog/${featuredPost.slug}`} className="inline-flex items-center">
//                     Read Full Article
//                     <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
//                   </a>
//                 </Button>
//               </div>
              
//               <div className="hidden lg:block">
//                 <img 
//                   src={featuredPost.imageUrl}
//                   alt={featuredPost.title}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Blog Posts Grid */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <BlogCard 
//                 key={index}
//                 title={post.title}
//                 excerpt={post.excerpt}
//                 imageUrl={post.imageUrl}
//                 date={post.date}
//                 author={post.author}
//                 authorAvatar={post.authorAvatar}
//                 slug={post.slug}
//                 category={post.category}
//               />
//             ))}
//           </div>
          
//           <div className="mt-12 text-center">
//             <Button variant="outline" className="group">
//               <span className="inline-flex items-center">
//                 Load More Articles
//                 <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
//               </span>
//             </Button>
//           </div>
//         </div>
//       </section>
      
//       {/* Categories Section */}
//       <section className="py-16 px-4 bg-gray-50 dark:bg-navy-800/30">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
//             <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
//               Explore our content organized by topic to find the information most relevant to you.
//             </p>
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-4">
//             {recentCategories.map((category) => (
//               <a 
//                 key={category} 
//                 href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="px-6 py-3 bg-white dark:bg-navy-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//               >
//                 {category}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Newsletter Section */}
//       <section className="py-20 px-4 bg-navy-500 text-white">
//         <div className="container mx-auto">
//           <div className="max-w-xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//             <p className="text-lg text-gray-300 mb-8">
//               Subscribe to our newsletter for the latest insights, trends, and expert perspectives delivered to your inbox.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
//               />
//               <Button className="bg-crimson-500 hover:bg-crimson-600 whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </div>
            
//             <p className="text-sm text-gray-400 mt-4">
//               We respect your privacy. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       <Footer />
//       <BackToTop />
//     </div>
//   );
// };

// export default Blog;
