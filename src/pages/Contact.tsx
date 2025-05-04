
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-600 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Reach out to discuss how our IT services can help transform your business. We're here to answer your questions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <MapPin size={24} />,
                    title: "Our Headquarters",
                    content: (
                      <>
                        WeWork Prestige Atlanta, <br/>
                        80 Feet Main Road, Koramangala, 1A Block, <br/>
                        ​Bangalore-560034, Karnataka, India
                      </>
                    )
                  },
                  {
                    icon: <Phone size={24} />,
                    title: "Phone",
                    content: (
                      <>
                        <a href="tel:+919980520112" className="hover:text-crimson-500 transition-colors block">
                          Main: +91 9980520112
                        </a>
                        {/* <a href="tel:+9199805 20112" className="hover:text-crimson-500 transition-colors block mt-1">
                          Support: +91 9980520112
                        </a> */}
                      </>
                    )
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email",
                    content: (
                      <>
                        <a href="mailto:info@zedentech.com" className="hover:text-crimson-500 transition-colors block">
                          info@zedentech.com
                        </a>
                        <a href="mailto:sales@com" className="hover:text-crimson-500 transition-colors block mt-1">
                          sales@zedentech.com
                        </a>
                        {/* <a href="mailto:support@zedentech.com" className="hover:text-crimson-500 transition-colors block mt-1">
                          support@zedentech.com
                        </a> */}
                      </>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-navy-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-navy-600">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-crimson-500 to-crimson-600 flex items-center justify-center text-white shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                        <div className="text-slate-600 dark:text-slate-300">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Office Hours */}
              <div className="bg-white dark:bg-navy-700/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-navy-600 mb-8">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-crimson-500" />
                  ZedEnTech Business Hours
                </h3>
                <div className="space-y-4">
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
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-navy-800/30 dark:to-navy-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-crimson-500 font-semibold mb-2 block">FAQ</span>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you respond to a service request?</AccordionTrigger>
                <AccordionContent>
                  Our standard response time for service requests is within 4 hours during business hours. For critical issues, we offer 24/7 emergency support with a response time of under 1 hour.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you work with clients remotely?</AccordionTrigger>
                <AccordionContent>
                  Yes, we work with clients globally and can provide most of our services remotely. For certain projects, on-site work may be recommended, which we can arrange as needed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  We have deep expertise in financial services, healthcare, manufacturing, and retail, but our solutions are adaptable to virtually any industry. Our diverse team brings relevant experience to each client engagement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you handle data security and privacy?</AccordionTrigger>
                <AccordionContent>
                  We implement rigorous security protocols and comply with industry standards like GDPR, HIPAA, and SOC 2. Client data protection is paramount in all our services, and we regularly undergo third-party security audits.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>What is your pricing model?</AccordionTrigger>
                <AccordionContent>
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
