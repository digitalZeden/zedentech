
import { GraduationCap, Layers, Target, Trophy, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-navy-600 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ZedEnTech Solutions </h1>
            <p className="text-xl text-gray-200">
            {/* We are a leading IT services company committed to delivering innovative technology solutions that drive business success. */}
            Innovating with Cutting-Edge IT Application Services. Transforming Businesses with Next-Gen Technology Solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Founded in 2020, ZedEnTech Solutions began with a simple mission: to help businesses harness the power of technology to achieve their goals. What started as a small team of passionate IT professionals has grown into a global technology partner trusted by hundreds of organizations worldwide.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Through the years, we've stayed true to our core values of innovation, excellence, and customer focus, adapting to the evolving technology landscape while maintaining our commitment to delivering exceptional results for our clients.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
              Today, we have extend our services in UAE, Saudi Arabia & Canada and a team of over 200 IT professionals, 
              we continue to drive digital transformation and empower businesses to thrive in the digital age.              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3" 
                alt="Our team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-crimson-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-navy-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-navy-700 p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 rounded-lg bg-crimson-50 dark:bg-navy-800/50 flex items-center justify-center mb-6 text-crimson-500">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                To empower businesses with innovative technology solutions that enhance efficiency, drive growth, and create sustainable competitive advantages in an ever-evolving digital landscape.
              </p>
            </div>
            
            <div className="bg-white dark:bg-navy-700 p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 rounded-lg bg-crimson-50 dark:bg-navy-800/50 flex items-center justify-center mb-6 text-crimson-500">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                To be the trusted technology partner for organizations worldwide, known for our expertise, innovation, and unwavering commitment to client success in the digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We embrace new ideas and technologies to create forward-thinking solutions that address complex challenges.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We strive for excellence in everything we do, maintaining the highest standards of quality and professionalism.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We build strong, collaborative relationships with our clients, working together to achieve common goals.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We conduct business with honesty, transparency, and the highest ethical standards in all interactions.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We invest in ongoing education and professional development to stay at the forefront of technology.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-navy-700 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson-100 dark:bg-navy-600 flex items-center justify-center text-crimson-500 mb-6">
                <MountainSnow className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptability</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We embrace change and remain flexible, adjusting our approach to meet evolving client needs and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* {/* Leadership  Team*/}
      
      
      {/* Company Facts */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Facts</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              ZedEnTech Solutions has established itself as a leader in the IT services industry, with a strong track record of delivering exceptional results for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-crimson-500 text-white flex items-center justify-center text-2xl font-bold">
                    15+
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Years in Business</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Established in 2020, with a proven track record of success.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-crimson-500 text-white flex items-center justify-center text-2xl font-bold">
                    200+
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">IT Professionals</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      A team of certified experts across various technology domains.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-crimson-500 text-white flex items-center justify-center text-2xl font-bold">
                    500+
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Satisfied Clients</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      From startups to Fortune 500 companies across diverse industries.
                    </p>
                  </div>
                </div>
                
                {/* <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-crimson-500 text-white flex items-center justify-center text-2xl font-bold">
                    12
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Global Offices</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Strategic locations across North America, Europe, and Asia.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3" 
                alt="Our global offices" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We maintain the highest industry standards through rigorous certifications and partnerships.
            </p> */}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            {/* These would be replaced with actual certification logos */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
            {/* <div className="w-36 h-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div> */}
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

import { Linkedin, MountainSnow, Shield, Twitter } from "lucide-react";

export default About;
