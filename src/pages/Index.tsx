import { ArrowRight, BarChart2, Cloud, Code, Database, Headphones, Laptop, Lock, PhoneCall, Server, Smartphone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";

const services = [
  {
    title: "IT Consulting",
    description: "Accelerate your digital transformation with our scalable, secure cloud solutions tailored for your business needs.",
    icon: <Headphones className="h-6 w-6" />,
    link: "/services/cloud",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3"
  },
  {
    title: "IT Professional Services",
    description: "Protect your business with our comprehensive cybersecurity solutions that safeguard your critical data and systems.",
    icon: <Laptop className="h-6 w-6" />,
    link: "/services/cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3"
  },
  {
    title: "Application Development",
    description: "Custom software solutions designed to optimize your business processes and create exceptional user experiences.",
    icon: <Code className="h-6 w-6" />,
    link: "/services/software-development",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3"
  },
  {
    title: "Mobile App Development",
    description: "Strategic IT consulting that aligns technology with your business goals to drive growth and innovation.",
    icon: <Smartphone className="h-6 w-6" />,
    link: "/services/consulting",
    imageUrl: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3"
  },
  {
    title: "Data Management",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
    icon: <Database className="h-6 w-6" />,
    link: "/solutions/data-analytics",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
  },
  {
    title: "Cloud Migration",
    description: "Comprehensive IT management services that optimize performance, reliability, and security of your infrastructure.",
    icon: <Cloud className="h-6 w-6" />,
    link: "/services/managed-services",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
  }
];

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
    imageUrl: "https://images.unsplash.com/photo-1553406830-f6e44ac97624?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "manufacturing-iot-implementation",
    tags: ["IoT", "Data Analytics", "Smart Factory"]
  }
];

const testimonials = [
  {
    quote: "ZedEnTech Solutions transformed our IT infrastructure with their cloud migration expertise. They delivered on time and exceeded our expectations.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "Global Retail Solutions",
    rating: 5
  },
  {
    quote: "Their cybersecurity team identified vulnerabilities we had missed for years. Implementation was smooth and now we feel protected against modern threats.",
    name: "Michael Chen",
    title: "IT Director",
    company: "HCC Financial",
    rating: 5
  },
  {
    quote: "The custom software they developed has streamlined our operations and reduced processing time by over 40%. A true game-changer for our business.",
    name: "Lisa Rodriguez",
    title: "Operations Manager",
    company: "Logistics Pro",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Innovating with Cutting-Edge IT Application Services"
        subtitle="Transforming businesses through strategic technology solutions, custom software development, and expert IT management."
        cta={{
          primary: "Get Started",
          secondary: "Learn More",
          primaryLink: "/contact",
          secondaryLink: "/services"
        }}
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3"
      />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                imageUrl={service.imageUrl}
                category={service.title.split(' ')[0]} // Add this line to provide the category
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <a href="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-navy-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-crimson-400">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-crimson-400">20+</div>
              <div className="text-gray-300">Clients Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-crimson-400">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-crimson-400">40+</div>
              <div className="text-gray-300">IT Professionals</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore how we've helped organizations solve complex challenges and achieve their business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                {...study}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <a href="/case-studies" className="inline-flex items-center">
                View All Case Studies
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ZedEnTech Solutions?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              At ZedEnTech Solutions, we deliver scalable, secure, and high-performance IT applications powered by the latest advancements in software development, AI, cloud computing, and automation.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Innovative Solutions</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cutting-edge technologies tailored to your specific business challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Certified professionals with deep expertise across multiple industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson-100 dark:bg-navy-700 flex items-center justify-center text-crimson-500">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Round-the-clock assistance and monitoring for your critical systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-crimson-500 hover:bg-crimson-600">
                  <a href="/about">Learn About Us</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3" 
                alt="Team working together" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-crimson-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-navy-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Hear what our clients have to say about working with ZedEnTech Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-navy-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our IT services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600">
              <a href="/contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          {/* <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
          </div> */}
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {/* These would be replaced with actual partner logos */}
            {/* <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
