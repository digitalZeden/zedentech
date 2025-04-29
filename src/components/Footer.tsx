import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/zedentech_logo.jpg"
                alt="ZedEnTech Solutions Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-white">
                ZedEnTech Solutions
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Delivering cutting-edge IT services and solutions to businesses worldwide.
              Transform your digital landscape with our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-crimson-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-crimson-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-crimson-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-crimson-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Cloud Services", to: "/services" },
                { name: "Cybersecurity", to: "/services" },
                { name: "Software Development", to: "/services" },
                { name: "IT Consulting", to: "/services" },
                { name: "Managed IT Services", to: "/services" },
              ].map(({ name, to }) => (
                <li key={name}>
                  <NavLink to={to} className="text-gray-300 hover:text-white transition-colors">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", to: "/about" },
                { name: "Case Studies", to: "/case-studies" },
                // { name: "Blog", to: "/blog" },
                { name: "Careers", to: "/careers" },
                { name: "Contact Us", to: "/contact" },
              ].map(({ name, to }) => (
                <li key={name}>
                  <NavLink to={to} className="text-gray-300 hover:text-white transition-colors">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-crimson-400 mt-1" size={18} />
                <span>
                WeWork Prestige Atlanta, 80 Feet Main Road, Koramangala, 1A Block, ​Bangalore-560034, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-crimson-400" size={18} />
                <a href="tel:+11234567890" className="hover:text-white transition-colors">
                  +91 99805 20112
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-crimson-400" size={18} />
                <a href="mailto:info@crimsonnexus.com" className="hover:text-white transition-colors">
                info@zedentech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ZedEnTech Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <NavLink to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
