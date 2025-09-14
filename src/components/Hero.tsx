import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import logoImage from '@/assets/sfh-logo.jpg';
import logoImage from "../../public/sfh-logo.jpg"


const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={logoImage} 
              alt="Stock Finance Hub Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Stock Finance Hub
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-8 max-w-3xl mx-auto">
            Building India's No.1 Research Brand
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering investors with comprehensive financial research, expert analysis, 
            and personalized investment solutions for sustainable wealth creation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;