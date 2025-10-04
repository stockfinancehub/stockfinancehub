import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import sfhLogo from "@/assets/sfh-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition <= bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      {/* SEBI Registration Notice */}
      <div className="bg-gradient-hero text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Processing
            </Badge>
            <span>SEBI Registration in Progress - Services launching soon!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={sfhLogo} 
              alt="Stock Finance Hub Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              className={`transition-colors font-medium px-3 py-2 rounded-md ${
                activeSection === 'about' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`transition-colors font-medium px-3 py-2 rounded-md ${
                activeSection === 'services' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Services
            </a>
            <a 
              href="#vision" 
              className={`transition-colors font-medium px-3 py-2 rounded-md ${
                activeSection === 'vision' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Vision
            </a>
            <a 
              href="#contact" 
              className={`transition-colors font-medium px-3 py-2 rounded-md ${
                activeSection === 'contact' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className={`transition-colors font-medium py-2 px-3 rounded-md ${
                  activeSection === 'about' 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className={`transition-colors font-medium py-2 px-3 rounded-md ${
                  activeSection === 'services' 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#vision" 
                className={`transition-colors font-medium py-2 px-3 rounded-md ${
                  activeSection === 'vision' 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </a>
              <a 
                href="#contact" 
                className={`transition-colors font-medium py-2 px-3 rounded-md ${
                  activeSection === 'contact' 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="default" size="sm" className="w-fit mt-2">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;