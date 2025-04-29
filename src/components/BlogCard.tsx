
import { NavLink } from "react-router-dom";
import { formatDistance } from "date-fns";
import { User, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: Date;
  author: string;
  authorAvatar?: string;
  slug: string;
  category: string;
}

const BlogCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  author,
  authorAvatar,
  slug,
  category
}: BlogCardProps) => {
  const formattedDate = formatDistance(date, new Date(), { addSuffix: true });

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
          <Badge className="bg-crimson-500 hover:bg-crimson-600">
            {category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-crimson-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {formattedDate}
          </div>
        </div>
        
        <NavLink 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-navy-600 dark:text-crimson-400 font-medium group-hover:text-crimson-500 dark:group-hover:text-crimson-300"
        >
          Read More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
