
import { NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  tags: string[];
}

const CaseStudyCard = ({
  title,
  client,
  industry,
  excerpt,
  imageUrl,
  slug,
  tags
}: CaseStudyCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white dark:bg-navy-700 shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-navy-500 dark:bg-navy-500 dark:text-white">
            {industry}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-crimson-500 font-medium mb-2">{client}</div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-crimson-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <NavLink 
          to={`/case-studies/${slug}`} 
          className="inline-flex items-center text-navy-600 dark:text-crimson-400 font-medium group-hover:text-crimson-500 dark:group-hover:text-crimson-300"
        >
          {/* View Case Study
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" /> */}
        </NavLink>
      </div>
    </div>
  );
};

export default CaseStudyCard;
