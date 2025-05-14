import { ArrowRight, ChevronDown, ChevronUp, ChevronRight, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Enhanced case study card component
// Enhanced case study card component with expandable content
const EnhancedCaseStudyCard = ({
  title,
  client,
  industry,
  excerpt,
  imageUrl,
  slug,
  tags,
  index,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white dark:bg-navy-800">
      <div className="aspect-[16/9] overflow-hidden relative">
        <Badge className="absolute top-4 right-4 z-10 bg-navy-600 text-white">
          {industry}
        </Badge>
        <img
          src={imageUrl || `/api/placeholder/600/340`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-crimson-600 font-medium mb-3">
          Client: {client}
        </p>

        <div
          className={`text-gray-600 dark:text-gray-200 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {excerpt}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-gray-100 dark:bg-navy-700 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          onClick={toggleExpand}
          className="mt-4 text-crimson-600 hover:text-crimson-700 flex items-center p-0 bg-transparent hover:bg-transparent"
        >
          {expanded ? (
            <>
              Show Less
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              Read More
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    title: "Digital Transformation for Ed-Tech Company",
    client: "Millionaire's Academy",
    industry: "Education",
    excerpt:
      "Future-Ready Learning Through Digital Transformation. We modernize Ed-Tech platforms with cloud-based solutions, AI-driven personalization, and seamless LMS integrations to enhance engagement and scalability.",
    imageUrl: "./lms.jpg",
    slug: "financial-digital-transformation",
    tags: [
      "Digital Transformation",
      "Ed-Tech",
      "Cloud Solutions",
      "Operational Efficiency",
    ],
  },
  {
    title: "Mobile Application Development",
    client: "Precision Scientific Equipment",
    industry: "Manufacturing",
    excerpt:
      "Precision Calibration at Your Fingertips. Our iPad app streamlines scientific equipment calibration with step-by-step guidance, automated documentation, and real-time accuracy validation.",
    imageUrl: "./manufacturing.jpg",
    slug: "credit-union-mobile-banking",
    tags: ["Mobile Development", "UX Design", "Security"],
  },
  {
    title: "Healthcare Provider Security Enhancement",
    client: "Arrazi Clinics",
    industry: "Healthcare",
    excerpt:
      "Secure Patient Data with HIPAA-Compliant Protection. We implement robust cybersecurity measures tailored for healthcare systems, including risk assessments, access controls, and encryption to safeguard PHI.",
    imageUrl: "./healthcare.jpg",
    slug: "healthcare-security-enhancement",
    tags: ["Cybersecurity", "Healthcare", "Compliance", "System Performance"],
  },
  {
    title: "Smart Manufacturing IoT Implementation",
    client: "Precision Valves Services",
    industry: "Manufacturing",
    excerpt:
      "Revolutionize Valve Production with Smart IoT Solutions. We implement cutting-edge IoT sensors and real-time monitoring systems to optimize your manufacturing efficiency and quality control.",
    imageUrl: "./iot.jpg",
    slug: "manufacturing-iot-implementation",
    tags: ["IoT", "Manufacturing", "Smart Factory", "Real-Time Monitoring"],
  },
];

// Filter options
const industries = [
  "All Industries",
  "Education",
  "Manufacturing",
  "Healthcare",
];
const solutionTypes = [
  "All Solutions",
  "Digital Transformation",
  "Mobile Development",
  "Cybersecurity",
  "IoT",
];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All Industries");
  const [activeTag, setActiveTag] = useState("All Solutions");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-900">
      <Navbar />

      {/* Hero Section - More dynamic with background pattern */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-navy-700 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-crimson-400">Success</span> Stories
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore how we've partnered with organizations across industries
              to solve complex challenges and deliver exceptional results.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-crimson-500 hover:bg-crimson-600"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#f02238] text-[#f02238] hover:bg-[#f02238] hover:text-white text-lg"
              >
                <a href="/case-studies">View Case Studies</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-crimson-500/20 rounded-tl-full blur-3xl"></div>
        <div className="absolute top-0 left-10 w-24 h-24 bg-crimson-400/30 rounded-full blur-xl"></div>
      </section>

      {/* Featured Case Study - Highlight one of them */}
      <section
        className="py-16 px-4 bg-white dark:bg-navy-900"
        id="case-studies"
      >
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Success Story
            </h2>
            <div className="w-24 h-1 bg-crimson-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how we transformed business operations and outcomes through
              innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-navy-50 dark:bg-navy-800/40 p-8 rounded-2xl">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
              <img
                src="./lms.jpg"
                alt="Digital Transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                <Badge className="bg-crimson-500 mb-2">Education</Badge>
                <h3 className="text-2xl font-bold">
                  Digital Transformation for Ed-Tech Company
                </h3>
              </div>
            </div>

            <div className="space-y-6 px-4">
              <Badge
                variant="outline"
                className="border-crimson-500 text-crimson-500 px-3 py-1"
              >
                Client: Millionaire's Academy
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">
                Future-Ready Learning Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We modernized an Ed-Tech platform with cloud-based solutions,
                AI-driven personalization, and seamless LMS integrations to
                enhance engagement and scalability. Our tailored approach
                bridged pedagogy with technology to create immersive,
                data-informed learning experiences.
              </p>

              <div className="flex flex-wrap gap-2 py-3">
                {caseStudies[0].tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className="bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                {/* <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600 group">
                  <a href={`/case-studies/${caseStudies[0].slug}`} className="flex items-center">
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Staggered grid for visual interest */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-navy-900/80">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">More Success Stories</h2>
            <div className="w-16 h-1 bg-crimson-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore more examples of how our tailored solutions have helped
              businesses achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {caseStudies.slice(1).map((study, index) => (
              <EnhancedCaseStudyCard key={index} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - More dynamic and visually appealing */}
      <section className="py-24 px-4 relative bg-navy-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl relative">
              <div className="text-6xl text-crimson-400 absolute top-6 left-6 opacity-30">
                "
              </div>
              <div className="text-6xl text-crimson-400 absolute bottom-6 right-6 opacity-30 rotate-180">
                "
              </div>

              <blockquote className="text-xl md:text-2xl mb-8 relative z-10">
                The ZedEnTech Solutions team exceeded our expectations at every
                stage of our digital transformation journey. Their strategic
                approach and technical expertise has transformed our business.
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-500 mr-4 overflow-hidden">
                  <img
                    src="/api/placeholder/64/64"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">Abdul Razzaq</div>
                  <div className="text-crimson-300">
                    CEO, Millionaire's Academy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-crimson-500/30 rounded-tl-full blur-3xl"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-crimson-400/20 rounded-full blur-xl"></div>
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

export default CaseStudies;
