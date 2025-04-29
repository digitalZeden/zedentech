import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm">
      <img src="/zedentech_logo.jpg" alt="ZedEnTech Solutions Logo" className="w-6 h-6 object-contain" />
    </div>
    <span className="font-bold text-lg hidden sm:inline-block">ZedEnTech Solutions</span>
  </div>
);

const navItems = [
  {     label: "Home",
    path: "/"
  },
  { 
    label: "Services", 
    path: "/services"
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-md ${
        isScrolled ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="z-10">
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            'dropdown' in item ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className="px-3 py-2 text-foreground/80 hover:text-foreground flex items-center gap-1 rounded-md hover:bg-secondary transition-colors">
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {(item.dropdown as Array<{ label: string; path: string }>).map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.label} asChild>
                      <NavLink 
                        to={dropdownItem.path}
                        className="w-full cursor-pointer"
                      >
                        {dropdownItem.label}
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md hover:bg-secondary transition-colors ${
                    isActive ? 'text-crimson-500 font-medium' : 'text-foreground/80 hover:text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        {/* <div className="hidden lg:block">
          <Button>Get Started</Button>
        </div> */}

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="lg:hidden">
            <div className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                <div key={item.label} className="py-1">
                  {'dropdown' in item ? (
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-lg">{item.label}</div>
                      <div className="pl-4 flex flex-col gap-2 mt-2">
                        {(item.dropdown as Array<{ label: string; path: string }>).map((dropdownItem) => (
                          <NavLink
                            key={dropdownItem.label}
                            to={dropdownItem.path}
                            className={({ isActive }) =>
                              `text-sm py-1 ${isActive ? 'text-crimson-500 font-medium' : 'text-muted-foreground'}`
                            }
                          >
                            {dropdownItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block text-lg py-1 ${isActive ? 'text-crimson-500 font-medium' : 'text-foreground'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
              {/* <Button className="mt-4">Get Started</Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
