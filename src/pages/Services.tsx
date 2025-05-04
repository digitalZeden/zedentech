import { 
  ArrowRight, Cloud, Code, Database, Globe, Lock, Server, Users,
  TrendingUp, LineChart, Zap, Shield, FileCheck, Smartphone, Share2,
  RefreshCw, Search, BarChart2, Brain, Headphones, Clock,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

// Add after imports and before the Services component
const services = [
  {
    category: "cloud",
    items: [
      {
        title: "IT Consulting",
        description: "Seamlessly migrate your existing infrastructure to the cloud with our proven methodology that minimizes disruption and optimizes performance.",
        icon: <Headphones className="h-6 w-6" />, // Changed to Headphones for consulting
        link: "/services/cloud/migration",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
      },
      {
        title: "IT Professional Services",
        description: "Build scalable, resilient cloud infrastructure designed for your specific business requirements and performance needs.",
        icon: <Users className="h-6 w-6" />, // Changed to Users for professional services
        link: "/services/cloud/infrastructure",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
      },
      {
        title: "IT Infrastruresture",
        description: "Develop and implement a strategic multi-cloud approach that leverages the best capabilities of different cloud providers.",
        icon: <Server className="h-6 w-6" />, // Changed to Server for infrastructure
        link: "/services/cloud/multi-cloud",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3"
      }
    ]
  },
  {
    category: "cybersecurity",
    items: [
      {
        title: "Cloud Migration",
        description: "Comprehensive evaluation of your security posture to identify vulnerabilities and provide actionable recommendations.",
        icon: <Cloud className="h-6 w-6" />, // Changed to Cloud for cloud migration
        link: "/services/cybersecurity/assessment",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3"
      },
      {
        title: "Cyber Security Assesment",
        description: "Advanced threat detection and response solutions that proactively protect your systems from emerging cybersecurity threats.",
        icon: <Shield className="h-6 w-6" />, // Changed to Shield for security
        link: "/services/cybersecurity/protection",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3"
      },
      {
        title: "Risk & Compilance Services",
        description: "Ensure your organization meets regulatory requirements with our comprehensive compliance and governance programs.",
        icon: <FileCheck className="h-6 w-6" />, // Kept FileCheck as it's appropriate
        link: "/services/cybersecurity/compliance",
        imageUrl: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3"
      }
    ]
  },
  {
    category: "software",
    items: [
      {
        title: "Application Development",
        description: "Tailor-made software solutions designed to address your unique business challenges and provide competitive advantages.",
        icon: <Code className="h-6 w-6" />,
        link: "/services/software/custom",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
        icon: <Smartphone className="h-6 w-6" />,
        link: "/services/software/mobile",
        imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3"
      },
      {
        title: "User Experience Services",
        description: "Robust and scalable API solutions that enable seamless integration between systems and applications.",
        icon: <Share2 className="h-6 w-6" />,
        link: "/services/software/api",
        imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3"
      }
    ]
  },
  {
    category: "data",
    items: [
      {
        title: "Data Analytics",
        description: "Transform your raw data into actionable insights with our advanced analytics and visualization solutions.",
        icon: <BarChart2 className="h-6 w-6" />,
        link: "/services/data/analytics",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
      },
      {
        title: "Data Visulization",
        description: "Leverage the power of artificial intelligence to automate processes and uncover new business opportunities.",
        icon: <Brain className="h-6 w-6" />,
        link: "/services/data/ai",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3"
      },
      {
        title: "Data Management",
        description: "Comprehensive data management solutions ensuring data quality, security, and accessibility.",
        icon: <Database className="h-6 w-6" />,
        link: "/services/data/management",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3"
      }
    ]
  },
  {
    category: "managed",
    items: [
      {
        title: "AI/ML Solution",
        description: "End-to-end management of your IT infrastructure ensuring optimal performance and reliability.",
        icon: <Server className="h-6 w-6" />,
        link: "/services/managed/infrastructure",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
      },
      {
        title: "Salesforce Consulting",
        description: "Round-the-clock monitoring and support to ensure your systems are always running smoothly.",
        icon: <Clock className="h-6 w-6" />,
        link: "/services/managed/monitoring",
        imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3"
      },
      {
        title: "Business Workflow Solutions ",
        description: "Dedicated help desk support providing quick resolution to technical issues and user queries.",
        icon: <Headphones className="h-6 w-6" />,
        link: "/services/managed/helpdesk",
        imageUrl: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3"
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-600 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our IT Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            At ZedEnTech we help businesses leverage cutting-edge technology to solve complex challenges, optimize operations, and accelerate growth. Our strategic IT consulting services empower organizations to navigate digital disruption with confidence, from cloud adoption and cybersecurity to AI-driven automation and scalable software architectures.            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category) => 
              category.items.map((service, index) => (
                <ServiceCard
                  key={`${category.category}-${index}`}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  imageUrl={service.imageUrl}
                  category={category.category}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We deliver solutions with a methodical, client-focused approach that ensures successful outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Discover</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We begin with a thorough discovery process to understand your business objectives and challenges.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Design</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Next, we design a tailored solution that addresses your specific needs and aligns with your goals.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Develop</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our development team brings your solution to life using cutting-edge technologies and best practices in software engineering.
              </p>
            </div>
            
            <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mt-6 mb-4">Deliver</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We ensure smooth deployment, provide comprehensive training, and offer ongoing support to maximize your solution's value.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3" 
                alt="Business team meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Our Services</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Our comprehensive IT services deliver tangible business outcomes that drive growth and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Increased Efficiency</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Streamline your operations and reduce costs with optimized IT systems and processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Enhanced Security</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Protect your critical data and systems with advanced cybersecurity solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <LineChart size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Data-Driven Insights</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Make informed decisions with actionable insights derived from your data.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Competitive Advantage</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Stay ahead of the competition with innovative technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-navy-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/case-studies">View Case Studies</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

// Add this helper function at the top of the file
const getCategoryDescription = (category: string) => {
  const descriptions = {
    cloud: "Transform your business with scalable and secure cloud solutions that optimize performance and reduce costs.",
    cybersecurity: "Protect your digital assets with comprehensive security solutions that safeguard against evolving threats.",
    software: "Custom software solutions that streamline operations and deliver exceptional user experiences.",
    consulting: "Strategic guidance to help you navigate the complex technology landscape and achieve your business goals.",
    data: "Turn your data into actionable insights with advanced analytics and AI-powered solutions.",
    managed: "Comprehensive IT management services that ensure your systems run smoothly 24/7."
  };
  return descriptions[category as keyof typeof descriptions];
};

export default Services;
