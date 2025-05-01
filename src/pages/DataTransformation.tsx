import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataTransformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-navy-600 to-navy-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">DataSynergy</h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8">
            Let's Work Together to Transform Your Data
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white dark:bg-navy-900 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">OUR SOLUTIONS</h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Solution */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-navy-800 dark:text-white">
                Data analysis consulting services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Leading supplier of data analysis consulting services, Databiz can assist businesses in integrating and deploying BI platforms efficiently and rapidly. Businesses can quickly analyze and evaluate data through interactive reports and captivating visualizations from numerous sources using BI. Businesses can produce, edit, organize, and share reports on any device with the help of the cloud-based suite of business intelligence tools, which gives them a competitive advantage and real-time actionable insights.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By utilizing Databiz's experience to make the most of this potent technology, organizations may speed their BI installation and achieve greater outcomes with our consulting service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through personalized reports, Databiz's BI solutions may assist companies in realizing the full potential of their data. To empower your team to make defensible decisions based on data insights, we can assist you with integrating BI reports into your company processes. Our team of professionals will collaborate closely with you to determine and comprehend your data requirements and produce reports that are tailored to your company's needs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {/* Data Visualization */}
              <div className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-white mb-4">
                  Data Visualization
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  BI is excellent at presenting data through charts, graphs, and dashboards in a way that is simple to understand. This aids in the comprehension of data patterns, outliers, and trends.
                </p>
              </div>

              {/* Real-Time Analytics */}
              <div className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-white mb-4">
                  Real-Time Analytics
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  It makes it possible to process data in real-time, giving organizations the ability to decide based on the most up-to-date information.
                </p>
              </div>

              {/* Data Integration */}
              <div className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-white mb-4">
                  Data Integration
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  It may be integrated with a number of different data sources, such as Excel spreadsheets, on-premises and cloud-based databases, and external apps.
                </p>
              </div>

              {/* Custom Visuals and App Integration */}
              <div className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-white mb-4">
                  Custom Visuals and App Integration
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  BI may be customized to fit certain business needs thanks to its usage of custom visuals and ability to interact with other apps.
                </p>
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