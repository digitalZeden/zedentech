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
        description:
          "Strategic IT Consulting for Business Growth. We analyze your tech needs and deliver tailored solutions—from cloud migration to cybersecurity—to boost efficiency and cut costs.",
        icon: <Headphones className="h-6 w-6" />,
        link: "/services/cloud/migration",
        imageUrl:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      },
      {
        title: "IT Professional Services",
        description:
          "Expert IT Professional Services Tailored to Your Needs. Our certified team combines deep technical expertise with industry best practices to solve your toughest IT challenges. Let us handle the tech so you can focus on your business.",
        icon: <Users className="h-6 w-6" />,
        link: "/services/cloud/infrastructure",
        imageUrl:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      },
      {
        title: "IT Infrastruresture",
        description:
          "Rock-Solid IT Infrastructure for Business Continuity. We design, implement and manage secure, high-performance networks, servers and cloud systems tailored to your operational needs. Our proactive monitoring and enterprise-grade solutions ensure 99.9% uptime and seamless scalability. Let's build the technology foundation that powers your growth.",
        icon: <Server className="h-6 w-6" />, // Changed to Server for infrastructure
        link: "/services/cloud/multi-cloud",
        imageUrl:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3",
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
        icon: <Cloud className="h-6 w-6" />, // Changed to Cloud for cloud migration
        link: "/services/cybersecurity/assessment",
        imageUrl:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3",
      },
      {
        title: "Cyber Security Assesment",
        description:
          "Fortify Your Defenses with Comprehensive Security Assessments We identify vulnerabilities across your networks, systems and applications through rigorous penetration testing and risk analysis. Our actionable reports prioritize threats and provide clear remediation strategies to strengthen your security posture. Protect your business before attackers strike – let's uncover your weak spots together.",
        icon: <Shield className="h-6 w-6" />, // Changed to Shield for security
        link: "/services/cybersecurity/protection",
        imageUrl:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
      },
      {
        title: "Risk & Compilance Services",
        description:
          "Proactive Risk Management & Compliance Assurance We identify vulnerabilities, mitigate threats and ensure adherence to regulatory standards (GDPR, HIPAA, ISO) through comprehensive audits and tailored frameworks. Our experts translate complex requirements into actionable controls that protect your business while enabling growth. Achieve both security and compliance without compromising operational efficiency.",
        icon: <FileCheck className="h-6 w-6" />, // Kept FileCheck as it's appropriate
        link: "/services/cybersecurity/compliance",
        imageUrl:
          "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3",
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
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      },
      {
        title: "Mobile App Development",
        description:
          "Powerful Mobile Apps Built for Your Business Needs. We develop custom iOS and Android applications with sleek UX, robust functionality, and seamless backend integration. Our agile approach ensures fast delivery of scalable, secure apps tailored to your users and objectives. Let's turn your mobile vision into an engaging digital experience.",
        icon: <Smartphone className="h-6 w-6" />,
        link: "/services/software/mobile",
        imageUrl:
          "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3",
      },
      {
        title: "User Experience Services",
        description:
          "Elevate Engagement with Expert UX Services We craft intuitive, user-centered designs through research, wireframing and prototyping to optimize usability and satisfaction. Our data-driven approach transforms complex workflows into seamless digital experiences that boost conversions and loyalty. Let's design interfaces users love interacting with.",
        icon: <Share2 className="h-6 w-6" />,
        link: "/services/software/api",
        imageUrl:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3",
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
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      },
      {
        title: "Data Visulization",
        description:
          "Leverage the power of artificial intelligence to automate processes and uncover new business opportunities.",
        icon: <Brain className="h-6 w-6" />,
        link: "/services/data/ai",
        imageUrl:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3",
      },
      {
        title: "Data Management",
        description:
          "Streamline Your Data Ecosystem with Expert Data Management We design secure, scalable solutions for data integration, governance, and quality to turn information into your most strategic asset. Our approach ensures clean, organized and accessible data across all your systems. Let's build a future-proof foundation for analytics, AI and business growth.",
        icon: <Database className="h-6 w-6" />,
        link: "/services/data/management",
        imageUrl:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3",
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
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3",
      },
      {
        title: "Salesforce Consulting",
        description:
          "Accelerate Growth with Expert Salesforce Consulting. We optimize your CRM with custom Salesforce solutions - from implementation to automation and analytics - tailored to your sales funnel. Our certified consultants streamline processes, enhance customer relationships, and drive revenue through the platform's full potential. Let's transform your Salesforce into a competitive advantage.",
        icon: <Clock className="h-6 w-6" />,
        link: "/services/managed/monitoring",
        imageUrl:
          "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3",
      },
      {
        title: "Business Workflow Solutions ",
        description:
          "Transform Operations with Smart Workflow Solutions. We analyze, automate and optimize your business processes to eliminate inefficiencies and boost productivity. Our tailored systems integrate seamlessly with your existing tools to create frictionless workflows. Let's redesign how work gets done to save time and reduce costs.",
        icon: <Headphones className="h-6 w-6" />,
        link: "/services/managed/helpdesk",
        imageUrl:
          "https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3",
      },
    ],
  },
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
              At ZedEnTech we help businesses leverage cutting-edge technology
              to solve complex challenges, optimize operations, and accelerate
              growth. Our strategic IT consulting services empower organizations
              to navigate digital disruption with confidence, from cloud
              adoption and cybersecurity to AI-driven automation and scalable
              software architectures.{" "}
            </p>
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

      {/* Our Approach Section - with improved visuals */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-crimson-500 text-white text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We deliver solutions with a methodical, client-focused approach
              that ensures successful outcomes.
            </p>
          </div>

          <div className="relative">
            {/* Process connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-crimson-200 dark:bg-navy-600 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
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

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
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

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
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

              <div className="relative p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center group hover:shadow-xl transition-all z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-crimson-500 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
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

      {/* Benefits Section - with improved layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-crimson-100 dark:bg-navy-700 text-crimson-500 text-sm font-medium rounded-full mb-4">
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
                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all">
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

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-4">
                    <Lock size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Enhanced Security</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Protect critical data and systems with advanced
                    cybersecurity.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all">
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

                <div className="p-6 bg-white dark:bg-navy-700 rounded-xl shadow-sm hover:shadow-md transition-all">
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
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                  alt="Business team meeting"
                  className="rounded-lg shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More interactive and attention-grabbing */}
      <section className="py-20 px-4 bg-white dark:bg-navy-800">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-navy-600 to-navy-800 p-8 md:p-12 shadow-lg">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
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
              <div className="mt-8 text-gray-300">
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

// Add this helper function at the top of the file
const getCategoryDescription = (category: string) => {
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
  return descriptions[category as keyof typeof descriptions];
};

export default Services;
