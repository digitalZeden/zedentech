
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-crimson-500 rounded-2xl flex items-center justify-center text-white text-5xl font-bold">
            404
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="gap-2">
            <a href="/" className="flex items-center">
              <ArrowLeft size={16} />
              Go Back
            </a>
          </Button>
          <Button asChild className="gap-2">
            <a href="/" className="flex items-center">
              <Home size={16} />
              Back to Homepage
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
