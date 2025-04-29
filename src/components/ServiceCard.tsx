
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  imageUrl: string;
  category: string;
}

const ServiceCard = ({ title, description, icon, link, imageUrl, category }: ServiceCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-navy-700 shadow-md hover:shadow-xl transition-all duration-300 group">
      {imageUrl && (
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
      )}
      
      <div className="relative z-10 p-6">
        <div className="w-14 h-14 rounded-lg bg-crimson-50 dark:bg-navy-800/50 flex items-center justify-center mb-6 text-crimson-500 group-hover:bg-crimson-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-crimson-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          {description}
        </p>
        
        <NavLink 
          to={link} 
          className="inline-flex items-center text-navy-600 dark:text-crimson-400 font-medium group-hover:text-crimson-500 dark:group-hover:text-crimson-300"
        >
          {/* Learn More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" /> */}
        </NavLink>
      </div>
      
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-crimson-500 to-crimson-700 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
