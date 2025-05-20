import {
  ArrowRight,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
  Server,
  Users,
  TrendingUp,
  LineChart,
  Zap,
  Shield,
  FileCheck,
  Smartphone,
  Share2,
  RefreshCw,
  Search,
  BarChart2,
  Brain,
  Headphones,
  Clock,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard"; 

// Services data - unchanged
const services = [
  {
    category: "cloud",
    items: [
      {
        title: "IT Consulting",
        description:
          "Strategic IT Consulting for Business Growth. We analyze your tech needs and deliver tailored solutions—from cloud migration to cybersecurity—to boost efficiency and cut costs.",
        icon: <Headphones className="h-6 w-6" />,
        link: "/services/cloud/migration",
        imageUrl: "./assets/IT_Consulting.jpg",
      },
      {
        title: "IT Professional Services",
        description:
          "Expert IT Professional Services Tailored to Your Needs. Our certified team combines deep technical expertise with industry best practices to solve your toughest IT challenges. Let us handle the tech so you can focus on your business.",
        icon: <Users className="h-6 w-6" />,
        link: "/services/cloud/infrastructure",
        imageUrl: "./assets/IT_Professional_Services.jpg",
      },
      {
        title: "IT Infrastruresture",
        description:
          "Rock-Solid IT Infrastructure for Business Continuity. We design, implement and manage secure, high-performance networks, servers and cloud systems tailored to your operational needs. Our proactive monitoring and enterprise-grade solutions ensure 99.9% uptime and seamless scalability. Let's build the technology foundation that powers your growth.",
        icon: <Server className="h-6 w-6" />,
        link: "/services/cloud/multi-cloud",
        imageUrl:
          "./assets/IT_Infrastruresture.jpg",
      },
    ],
  },
  {
    category: "cybersecurity",
    items: [
      {
        title: "Cloud Migration",
        description:
          "Streamline Your Business with Seamless Cloud Migration.Our expert team ensures secure, cost-effective transitions to AWS, Azure, or Google Cloud with minimal downtime. We customize solutions to optimize performance, scalability, and security for your specific workloads. Let's modernize your infrastructure and unlock the full potential of cloud technology.",
        icon: <Cloud className="h-6 w-6" />,
        link: "/services/cybersecurity/assessment",
        imageUrl:
          "./assets/Cloud_Migration.jpg",
      },
      {
        title: "Cyber Security Assesment",
        description:
          "Fortify Your Defenses with Comprehensive Security Assessments We identify vulnerabilities across your networks, systems and applications through rigorous penetration testing and risk analysis. Our actionable reports prioritize threats and provide clear remediation strategies to strengthen your security posture. Protect your business before attackers strike – let's uncover your weak spots together.",
        icon: <Shield className="h-6 w-6" />,
        link: "/services/cybersecurity/protection",
        imageUrl:
          "./assets/Cyber_Security_Assesment.jpg",
      },
      {
        title: "Risk & Compilance Services",
        description:
          "Proactive Risk Management & Compliance Assurance We identify vulnerabilities, mitigate threats and ensure adherence to regulatory standards (GDPR, HIPAA, ISO) through comprehensive audits and tailored frameworks. Our experts translate complex requirements into actionable controls that protect your business while enabling growth. Achieve both security and compliance without compromising operational efficiency.",
        icon: <FileCheck className="h-6 w-6" />,
        link: "/services/cybersecurity/compliance",
        imageUrl:
          "./assets/Risk_Compilance_Services.jpg",
      },
    ],
  },
  {
    category: "software",
    items: [
      {
        title: "Application Development",
        description:
          "Tailored Solutions Through Custom Application Development. We design and build scalable, secure applications perfectly aligned with your unique business processes and goals. Our full-cycle development covers everything from initial concept to deployment and ongoing support. Transform your ideas into powerful digital solutions that drive efficiency and growth.",
        icon: <Code className="h-6 w-6" />,
        link: "/services/software/custom",
        imageUrl:
          "./assets/Application_Development.jpg",
      },
      {
        title: "Mobile App Development",
        description:
          "Powerful Mobile Apps Built for Your Business Needs. We develop custom iOS and Android applications with sleek UX, robust functionality, and seamless backend integration. Our agile approach ensures fast delivery of scalable, secure apps tailored to your users and objectives. Let's turn your mobile vision into an engaging digital experience.",
        icon: <Smartphone className="h-6 w-6" />,
        link: "/services/software/mobile",
        imageUrl:
          "./assets/Mobile_App_Development.jpg",
      },
      {
        title: "User Experience Services",
        description:
          "Elevate Engagement with Expert UX Services We craft intuitive, user-centered designs through research, wireframing and prototyping to optimize usability and satisfaction. Our data-driven approach transforms complex workflows into seamless digital experiences that boost conversions and loyalty. Let's design interfaces users love interacting with.",
        icon: <Share2 className="h-6 w-6" />,
        link: "/services/software/api",
        imageUrl:
          "./assets/User_Experience_Services.jpg",
      },
    ],
  },
  {
    category: "data",
    items: [
      {
        title: "Data Analytics",
        description:
          "Actionable Insights Through Powerful Data Analytics We transform your raw data into strategic intelligence with advanced analytics, visualization, and predictive modeling. Our solutions uncover hidden patterns, optimize decisions, and drive measurable business growth. Let's turn your data into your most valuable asset.",
        icon: <BarChart2 className="h-6 w-6" />,
        link: "/services/data/analytics",
        imageUrl:
          "./assets/Data_Analytics.jpg",
      },
      {
        title: "Data Visulization",
        description:
          "Leverage the power of artificial intelligence to automate processes and uncover new business opportunities.",
        icon: <Brain className="h-6 w-6" />,
        link: "/services/data/ai",
        imageUrl:
          "./assets/Data_visuals.png",
      },
      {
        title: "Data Management",
        description:
          "Streamline Your Data Ecosystem with Expert Data Management We design secure, scalable solutions for data integration, governance, and quality to turn information into your most strategic asset. Our approach ensures clean, organized and accessible data across all your systems. Let's build a future-proof foundation for analytics, AI and business growth.",
        icon: <Database className="h-6 w-6" />,
        link: "/services/data/management",
        imageUrl:
          "./assets/Data_Management.jpg",
      },
    ],
  },
  {
    category: "managed",
    items: [
      {
        title: "AI/ML Solution",
        description:
          "Intelligent AI/ML Solutions for Smarter Business Decisions We design and deploy custom artificial intelligence and machine learning models to automate processes, predict trends, and unlock data-driven insights. Our solutions integrate seamlessly with your systems to enhance efficiency, accuracy, and competitive advantage. Transform your operations with cutting-edge AI tailored to your specific needs.",
        icon: <Server className="h-6 w-6" />,
        link: "/services/managed/infrastructure",
        imageUrl:
          "./assets/AIML_Solution.jpg",
      },
      {
        title: "Salesforce Consulting",
        description:
          "Accelerate Growth with Expert Salesforce Consulting. We optimize your CRM with custom Salesforce solutions - from implementation to automation and analytics - tailored to your sales funnel. Our certified consultants streamline processes, enhance customer relationships, and drive revenue through the platform's full potential. Let's transform your Salesforce into a competitive advantage.",
        icon: <Clock className="h-6 w-6" />,
        link: "/services/managed/monitoring",
        imageUrl:
          "./assets/Salesforce.png",
      },
      {
        title: "Business Workflow Solutions",
        description:
          "Transform Operations with Smart Workflow Solutions. We analyze, automate and optimize your business processes to eliminate inefficiencies and boost productivity. Our tailored systems integrate seamlessly with your existing tools to create frictionless workflows. Let's redesign how work gets done to save time and reduce costs.",
        icon: <Headphones className="h-6 w-6" />,
        link: "/services/managed/helpdesk",
        imageUrl:
          "./assets/BusinessWorkflowSolutions.jpg",
      },
    ],
  },
];

// Helper function for category descriptions
const getCategoryDescription = (category) => {
  const descriptions = {
    cloud:
      "Transform your business with scalable and secure cloud solutions that optimize performance and reduce costs.",
    cybersecurity:
      "Protect your digital assets with comprehensive security solutions that safeguard against evolving threats.",
    software:
      "Custom software solutions that streamline operations and deliver exceptional user experiences.",
    consulting:
      "Strategic guidance to help you navigate the complex technology landscape and achieve your business goals.",
    data: "Turn your data into actionable insights with advanced analytics and AI-powered solutions.",
    managed:
      "Comprehensive IT management services that ensure your systems run smoothly 24/7.",
  };
  return descriptions[category] || "";
};

// Filter services by category for tabbed display
const getServicesByCategory = (categoryName) => {
  const category = services.find(c => c.category === categoryName);
  return category ? category.items : [];
};

// Service card component with expand/collapse functionality
const ExpandableServiceCard = ({ service, category }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-crimson-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded z-20">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
            {service.icon}
          </div>
          <h3 className="font-bold text-xl ml-3">{service.title}</h3>
        </div>
        
        <div className={`text-slate-600 dark:text-slate-300 mb-6 ${expanded ? '' : 'line-clamp-3'}`}>
          {service.description}
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={toggleExpand}
            className="text-crimson-500 font-medium flex items-center group-hover:text-crimson-600 transition-colors"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp className="ml-2 w-4 h-4 transition-transform" />
              </>
            ) : (
              <>
                Read More
                <ChevronDown className="ml-2 w-4 h-4 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-900">
      <Navbar />

      {/* Modern Hero Section with 3D-like elements */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-30" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-crimson-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crimson-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
              Your Technology Partner
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Our IT <span className="text-crimson-400">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              At ZedEnTech we help businesses leverage cutting-edge technology
              to solve complex challenges, optimize operations, and accelerate
              growth. Our strategic IT consulting services empower organizations
              to navigate digital disruption with confidence, from cloud
              adoption and cybersecurity to AI-driven automation and scalable
              software architectures.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button className="bg-[#f02238] text-white hover:bg-[#f02238]/90 text-lg px-8 py-6 rounded-lg font-medium">
                <a href="/services">Explore Services</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-medium">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-navy-900"></div>
      </section>

      {/* Services Section with Category Tabs and Card Grid */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-crimson-500/10 text-crimson-500 text-sm font-medium rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tailored technology services designed to address your unique business challenges
            </p>
          </div>

          {/* Services grid with hover effects and improved cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category) =>
              category.items.map((service, index) => (
                <ExpandableServiceCard 
                  key={`${category.category}-${index}`}
                  service={service}
                  category={category.category}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <section className="py-24 px-4 bg-white dark:bg-navy-800/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-crimson-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-navy-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-crimson-500/10 text-crimson-500 text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We deliver solutions with a methodical, client-focused approach
              that ensures successful outcomes.
            </p>
          </div>

          <div className="relative">
            {/* Process connection line with animation */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-crimson-200 via-crimson-300 to-navy-300 dark:from-navy-600 dark:via-crimson-700 dark:to-navy-600 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10 border-t-4 border-crimson-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold mt-6 mb-4 group-hover:text-crimson-500 transition-colors">
                  Discover
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We begin with a thorough discovery process to understand your
                  business objectives and challenges.
                </p>
              </div>

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10 border-t-4 border-crimson-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold mt-6 mb-4 group-hover:text-crimson-500 transition-colors">
                  Design
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Next, we design a tailored solution that addresses your
                  specific needs and aligns with your goals.
                </p>
              </div>

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10 border-t-4 border-crimson-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold mt-6 mb-4 group-hover:text-crimson-500 transition-colors">
                  Develop
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our development team brings your solution to life using
                  cutting-edge technologies and best practices.
                </p>
              </div>

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10 border-t-4 border-crimson-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-bold mt-6 mb-4 group-hover:text-crimson-500 transition-colors">
                  Deliver
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We ensure smooth deployment, provide comprehensive training,
                  and offer ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-crimson-500/10 text-crimson-500 text-sm font-medium rounded-full mb-4">
                Business Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of Our Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Our comprehensive IT services deliver tangible business outcomes
                that drive growth and innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-crimson-500">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Increased Efficiency
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Streamline operations and reduce costs with optimized IT
                    systems.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-crimson-500">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-4">
                    <Lock size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Enhanced Security</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Protect critical data and systems with advanced
                    cybersecurity.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-crimson-500">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-4">
                    <LineChart size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Data-Driven Insights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Make informed decisions with actionable data insights.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-crimson-500">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Competitive Advantage
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Stay ahead with innovative technology solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-crimson-500/20 to-navy-500/20 rounded-2xl blur-xl opacity-70"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="./assets/BenefitsofOurServices.jpg"
                    alt="Business team meeting"
                    className="w-full rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 p-10 md:p-16 shadow-xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-crimson-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-400/20 rounded-full blur-3xl"></div>
            
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-30"></div>
            
            <div className="max-w-4xl mx-auto text-center text-white relative z-10">
              <span className="inline-block px-4 py-1.5 bg-crimson-500/20 text-white text-sm font-medium rounded-full mb-6">
                Take Action Now
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Let's discuss how our tailored IT solutions can help you achieve
                your business goals and drive innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-crimson-500 hover:bg-crimson-600 text-lg"
                >
                  <a href="/contact">Schedule a Consultation</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#f02238] text-[#f02238] hover:bg-[#f02238] hover:text-white text-lg"
                >
                  <a href="/services">View Our Services</a>
                </Button>
              </div>
              <div className="mt-8 text-gray-300 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                <p>No obligations. Free initial consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;