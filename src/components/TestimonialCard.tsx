
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
  imageUrl?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  company,
  rating = 5,
  imageUrl
}: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-navy-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-slate-700 dark:text-slate-200 mb-8 italic">
        "{quote}"
      </blockquote>

      {/* Person */}
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-bold text-navy-700 dark:text-white">{name}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {title}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
