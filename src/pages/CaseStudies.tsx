
import { ArrowRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const caseStudies = [
  {
    title: "Digital Transformation for Global Financial Institution",
    client: "Major Bank",
    industry: "Finance",
    excerpt: "Implemented a comprehensive digital transformation strategy, modernizing legacy systems and introducing cloud solutions that improved operational efficiency by 35%.",
    imageUrl: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3",
    slug: "financial-digital-transformation",
    tags: ["Digital Transformation", "Cloud Migration", "Enterprise Architecture"]
  },
  {
    title: "Healthcare Provider Security Enhancement",
    client: "National Healthcare Group",
    industry: "Healthcare",
    excerpt: "Developed and implemented an advanced cybersecurity framework that protected patient data and ensured HIPAA compliance while improving system performance.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
    slug: "healthcare-security-enhancement",
    tags: ["Cybersecurity", "Compliance", "Infrastructure"]
  },
  {
    title: "Smart Manufacturing IoT Implementation",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    excerpt: "Designed and deployed an IoT solution connecting over 500 manufacturing devices, resulting in 28% reduced downtime and real-time production monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1717444308634-0d96bf5cdd53?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "manufacturing-iot-implementation",
    tags: ["IoT", "Data Analytics", "Smart Factory"]
  },
  {
    title: "Cloud Migration for Retail Chain",
    client: "Continental Retail",
    industry: "Retail",
    excerpt: "Migrated legacy on-premise systems to a secure cloud infrastructure, reducing IT costs by 40% and enabling rapid scaling during peak shopping seasons.",
    imageUrl: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3",
    slug: "retail-cloud-migration",
    tags: ["Cloud Migration", "Infrastructure", "Cost Optimization"]
  },
  {
    title: "AI-Powered Customer Service Platform",
    client: "Global Telecom Provider",
    industry: "Telecommunications",
    excerpt: "Developed an AI-driven customer service platform that reduced response times by 65% and improved customer satisfaction scores by 28%.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
    slug: "telecom-ai-customer-service",
    tags: ["AI", "Machine Learning", "Customer Experience"]
  },
  {
    title: "Enterprise Data Warehouse Implementation",
    client: "International Logistics Corporation",
    industry: "Logistics",
    excerpt: "Designed and deployed a comprehensive data warehouse solution that consolidated data from 15 disparate systems, enabling advanced analytics and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3",
    slug: "logistics-data-warehouse",
    tags: ["Data Analytics", "Business Intelligence", "Integration"]
  },
  {
    title: "DevOps Transformation for Insurance Provider",
    client: "National Insurance Group",
    industry: "Insurance",
    excerpt: "Implemented CI/CD pipelines and DevOps practices that reduced deployment times from weeks to hours and improved software quality.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3",
    slug: "insurance-devops-transformation",
    tags: ["DevOps", "Automation", "Software Development"]
  },
  {
    title: "Mobile Banking Application Development",
    client: "Regional Credit Union",
    industry: "Finance",
    excerpt: "Developed a secure, feature-rich mobile banking application that increased digital engagement by 45% and enabled new customer acquisition channels.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
    slug: "credit-union-mobile-banking",
    tags: ["Mobile Development", "UX Design", "Security"]
  },
  {
    title: "Blockchain Supply Chain Solution",
    client: "Global Pharmaceutical Company",
    industry: "Healthcare",
    excerpt: "Created a blockchain-based supply chain tracking system that ensured compliance, reduced counterfeiting, and improved visibility across the distribution network.",
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3",
    slug: "pharma-blockchain-supply-chain",
    tags: ["Blockchain", "Supply Chain", "Compliance"]
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-navy-600 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-200">
              Explore how we've helped organizations across industries solve complex challenges and achieve exceptional results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-10 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-2xl font-bold">Our Success Stories</h2>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              
              <Select>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="telecom">Telecommunications</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Solution Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Solutions</SelectItem>
                  <SelectItem value="cloud">Cloud Services</SelectItem>
                  <SelectItem value="security">Cybersecurity</SelectItem>
                  <SelectItem value="data">Data Analytics</SelectItem>
                  <SelectItem value="digital">Digital Transformation</SelectItem>
                  <SelectItem value="software">Software Development</SelectItem>
                  <SelectItem value="ai">AI & Machine Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Case Study */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-navy-700 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <Badge className="mb-6">Featured Case Study</Badge>
                <h2 className="text-3xl font-bold mb-4">Digital Transformation Journey for Global Financial Institution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A comprehensive transformation initiative that modernized legacy systems, implemented cloud infrastructure, and enhanced digital customer experiences, resulting in 35% improved efficiency and 22% cost reduction.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="font-medium w-32">Client:</span>
                    <span className="text-slate-600 dark:text-slate-300">Major Bank</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-32">Industry:</span>
                    <span className="text-slate-600 dark:text-slate-300">Finance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-32">Timeline:</span>
                    <span className="text-slate-600 dark:text-slate-300">18 months</span>
                  </div>
                </div>
                
                <Button asChild className="group">
                  <a href="/case-studies/financial-digital-transformation" className="inline-flex items-center">
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3" 
                  alt="Digital Transformation Case Study" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                {...study}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="group">
              <span className="inline-flex items-center">
                Load More Case Studies
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-navy-500 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">"</div>
            <blockquote className="text-2xl mb-8 italic">
              The ZedEnTech Solutions team exceeded our expectations at every stage of our digital transformation journey. Their strategic approach and technical expertise has transformed our business.
            </blockquote>
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-gray-500 mr-4"></div>
              <div className="text-left">
                <div className="font-bold text-lg">Robert Johnson</div>
                <div className="text-gray-300">CTO, Major Bank</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our IT services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600">
              <a href="/contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CaseStudies;
