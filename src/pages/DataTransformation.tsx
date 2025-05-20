import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Clock, Database, Layers, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataTransformation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a2342]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              DataSynergy<span className="text-[#f02238]">.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white mb-10 leading-relaxed">
              Unlocking insights through intelligent data transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#f02238] text-white hover:bg-[#f02238]/90 text-lg px-8 py-6 rounded-lg font-medium">
              <a href="/services">Explore Services</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-medium">
              <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0a2342] to-transparent"></div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f02238] font-semibold mb-3 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-4xl font-bold text-[#0a2342] dark:text-white mb-6">Transformative Data Solutions</h2>
            <div className="w-20 h-1 bg-[#f02238] mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Main Solution */}
            <div className="space-y-6 bg-white dark:bg-[#0a2342]/80 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-[#0a2342]">
              <h3 className="text-2xl font-semibold text-[#0a2342] dark:text-white">
                Advanced Data Analytics Consultation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As specialists in data analytics, DataSynergy empowers organizations to harness the full potential of their business intelligence platforms. Our approach combines rapid deployment with strategic integration, allowing your team to extract maximum value from data assets across diverse sources.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Through interactive dashboards and compelling visualizations, we transform raw information into actionable insights. Our cloud-native intelligence tools give your team the competitive edge needed in today's data-driven landscape, with accessibility across all devices for seamless decision-making.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By partnering with our experts, you gain more than just technical implementation—you benefit from strategic guidance that aligns your data infrastructure with concrete business objectives. Our collaborative process ensures solutions tailored to your unique challenges and opportunities.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Visualization */}
              <div className="bg-white dark:bg-[#0a2342]/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-[#0a2342] flex flex-col">
                <div className="bg-[#f02238]/10 p-3 rounded-lg w-fit mb-5">
                  <BarChart3 className="h-6 w-6 text-[#f02238]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0a2342] dark:text-white mb-4">
                  Intuitive Data Visualization
                </h4>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Transform complex datasets into clear visual stories. Our visualization solutions make patterns, trends, and outliers immediately recognizable through carefully crafted interactive charts and dashboards optimized for clarity and impact.
                </p>
              </div>

              {/* Real-Time Analytics */}
              <div className="bg-white dark:bg-[#0a2342]/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-[#0a2342] flex flex-col">
                <div className="bg-[#f02238]/10 p-3 rounded-lg w-fit mb-5">
                  <Clock className="h-6 w-6 text-[#f02238]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0a2342] dark:text-white mb-4">
                  Real-Time Intelligence
                </h4>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Stay ahead with continuous data processing that delivers insights the moment they matter. Our real-time analytics solutions ensure your team always operates with the freshest information, enabling agile responses to emerging opportunities.
                </p>
              </div>

              {/* Data Integration */}
              <div className="bg-white dark:bg-[#0a2342]/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-[#0a2342] flex flex-col">
                <div className="bg-[#f02238]/10 p-3 rounded-lg w-fit mb-5">
                  <Database className="h-6 w-6 text-[#f02238]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0a2342] dark:text-white mb-4">
                  Seamless Data Integration
                </h4>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Unify your data landscape by connecting diverse sources into a coherent ecosystem. We specialize in harmonizing information from cloud platforms, on-premises databases, spreadsheets, and third-party applications into a single source of truth.
                </p>
              </div>

              {/* Custom Solutions */}
              <div className="bg-white dark:bg-[#0a2342]/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-[#0a2342] flex flex-col">
                <div className="bg-[#f02238]/10 p-3 rounded-lg w-fit mb-5">
                  <Layers className="h-6 w-6 text-[#f02238]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0a2342] dark:text-white mb-4">
                  Tailored Solutions & Integration
                </h4>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Every business has unique data needs. Our customization capabilities include specialized visualizations, bespoke analytics models, and seamless integration with your existing workflow applications to deliver precisely what your organization requires.
                </p>
              </div>
            </div>
            
            {/* CTA Section */}
            {/* <div className="mt-16 bg-[#0a2342] rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your data strategy?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's collaborate to build analytics solutions that drive meaningful business outcomes.
              </p>
              <Button className="bg-[#f02238] text-white hover:bg-[#f02238]/90 px-8 py-6 rounded-lg text-lg font-medium flex items-center gap-2 mx-auto">
                Schedule a Consultation <ArrowRight className="h-5 w-5" />
              </Button>
            </div> */}
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
    </div>
  );
};

export default DataTransformation;