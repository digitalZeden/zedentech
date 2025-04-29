
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className={`
        fixed bottom-6 right-6 z-50 
        rounded-full h-12 w-12 shadow-lg
        bg-navy-500 text-white
        hover:bg-crimson-500 transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTop;
