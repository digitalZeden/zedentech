import { useState, useEffect, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    const shouldBeVisible = window.scrollY > 300;
    if (isVisible !== shouldBeVisible) {
      setIsVisible(shouldBeVisible);
    }
  }, [isVisible]);

  useEffect(() => {
    // Set initial visibility based on scroll position
    toggleVisibility();

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

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
        transform-gpu will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTop;
