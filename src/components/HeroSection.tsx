
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: {
    primary: string;
    secondary: string;
    primaryLink: string;
    secondaryLink: string;
  };
  imageUrl: string;
}

const HeroSection = ({ title, subtitle, cta, imageUrl }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/75"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          {cta && (
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-crimson-500 hover:bg-crimson-600 text-white rounded-md">
                <a href={cta.primaryLink}>{cta.primary}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 rounded-md">
                <a href={cta.secondaryLink}>{cta.secondary}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
