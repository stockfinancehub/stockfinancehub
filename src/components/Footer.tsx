import { Mail, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sfhLogo from "@/assets/sfh-logo.jpg";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=919901978233&text=Hello%20Stock%20Finance%20Hub,%20I%20need%20support";

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={sfhLogo} alt="Stock Finance Hub Logo" className="h-12 w-auto rounded-lg" />
            </div>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              A research-first financial platform focused on transparent equity research, company
              fundamentals, and long-term wealth creation.
            </p>
            <Button variant="whatsapp" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
              </a>
            </Button>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.instagram.com/stockfinance.hub?igsh=bDd6OWdydnBsbDll" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/stock-finance-hub/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1CyvfehPjG/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/stockfinancehub?t=LhoOV97gQ6qRQ8-hwBTT4Q&s=09" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
              <Link
                  to="/coming-soon"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Coming Soon Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@stockfinancehub.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@stockfinancehub.com
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  +91 99019 78233
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="bg-background/5 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-background text-sm mb-2">Disclaimer</h4>
            <p className="text-xs text-background/60 leading-relaxed">
              Stock Finance Hub provides market information strictly for educational and
              informational purposes only. We do not provide any buy/sell/hold recommendations,
              portfolio advice, or guaranteed returns. All content is prepared for general awareness
              purposes only. Market investments are subject to market risk. Investors are advised to
              consult a SEBI-registered investment advisor before making any investment decisions.
              Past performance is not indicative of future results.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Stock Finance Hub – All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-background/30">|</span>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
