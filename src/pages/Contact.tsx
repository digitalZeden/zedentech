import { Clock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-900">
      <Navbar />
      
      {/* Hero Section - Simplified and more focused */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-navy-700 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Reach out to discuss how our IT services can help transform your business. 
              We're here to answer your questions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Cards - Prominent and easy to scan */}
      <section className="py-10 px-4 -mt-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone size={22} />,
                title: "Call Us",
                content: "+91 9980520112",
                action: "tel:+919980520112",
                label: "Call now"
              },
              {
                icon: <Mail size={22} />,
                title: "Email Us",
                content: "info@zedentech.com",
                action: "mailto:info@zedentech.com",
                label: "Send email"
              },
              {
                icon: <MapPin size={22} />,
                title: "Visit Us",
                content: "Koramangala, Bangalore",
                action: "#office-location",
                label: "Get directions"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-navy-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-crimson-500/10 flex items-center justify-center text-crimson-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{item.content}</p>
                  <a 
                    href={item.action} 
                    className="text-sm font-medium text-crimson-500 hover:text-crimson-600 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content - Two-column layout with clear visual separation */}
      <section className="py-16 px-4" id="office-location">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <div className="sticky top-24">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Our Contact Details</h2>
                  <div className="h-1 w-20 bg-crimson-500 rounded mb-6"></div>
                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    Reach out to us through any of these channels. We look forward to hearing from you.
                  </p>
                </div>
                
                {/* Detailed Contact Information */}
                <div className="space-y-6 mb-10">
                  <div className="bg-white dark:bg-navy-700/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy-600">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-crimson-500" />
                      Office Location
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      WeWork Prestige Atlanta, <br/>
                      80 Feet Main Road, Koramangala, 1A Block, <br/>
                      ​Bangalore-560034, Karnataka, India
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-700/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy-600">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-crimson-500" />
                      Phone Numbers
                    </h3>
                    <a href="tel:+919980520112" className="block text-slate-600 dark:text-slate-300 hover:text-crimson-500 transition-colors">
                      Main: +91 9980520112
                    </a>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-700/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy-600">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-crimson-500" />
                      Email Addresses
                    </h3>
                    <a href="mailto:info@zedentech.com" className="block text-slate-600 dark:text-slate-300 hover:text-crimson-500 transition-colors">
                      info@zedentech.com
                    </a>
                    <a href="mailto:sales@zedentech.com" className="block mt-1 text-slate-600 dark:text-slate-300 hover:text-crimson-500 transition-colors">
                      sales@zedentech.com
                    </a>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="bg-white dark:bg-navy-700/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy-600">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-crimson-500" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
                      { days: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
                      { days: "Sunday", hours: "Closed" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-navy-600 last:border-0">
                        <span className="text-slate-600 dark:text-slate-300">{schedule.days}</span>
                        <span className="font-medium bg-slate-100 dark:bg-navy-600 px-3 py-1 rounded-full text-sm">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white dark:bg-navy-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-navy-600">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <div className="h-1 w-20 bg-crimson-500 rounded mb-6"></div>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Cleaner design with more whitespace */}
      <section className="py-16 px-4 bg-white dark:bg-navy-800/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-crimson-500/10 text-crimson-500 font-medium rounded-full text-sm mb-3">FAQ</span>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy-700/50 rounded-xl shadow-lg p-1 md:p-6 border border-gray-100 dark:border-navy-600">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium py-4">How quickly can you respond to a service request?</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 pt-2">
                  Our standard response time for service requests is within 4 hours during business hours. For critical issues, we offer 24/7 emergency support with a response time of under 1 hour.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium py-4">Do you work with clients remotely?</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 pt-2">
                  Yes, we work with clients globally and can provide most of our services remotely. For certain projects, on-site work may be recommended, which we can arrange as needed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium py-4">What industries do you specialize in?</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 pt-2">
                  We have deep expertise in financial services, healthcare, manufacturing, and retail, but our solutions are adaptable to virtually any industry. Our diverse team brings relevant experience to each client engagement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium py-4">How do you handle data security and privacy?</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 pt-2">
                  We implement rigorous security protocols and comply with industry standards like GDPR, HIPAA, and SOC 2. Client data protection is paramount in all our services, and we regularly undergo third-party security audits.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium py-4">What is your pricing model?</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4 pt-2">
                  We offer flexible pricing models including project-based, monthly retainer, and hourly rates depending on the service. We provide detailed proposals after understanding your specific requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;