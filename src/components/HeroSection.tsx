import { Clock, ArrowRight, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrustBadge from "@/components/TrustBadge";
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <div className="animate-fade-in mb-6 flex justify-center">
            <TrustBadge />
          </div>

          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Clock className="h-4 w-4" />
            <span>Daily report delivered at 8:00 AM on every trading day</span>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Daily Market Intelligence for{" "}
            <span className="text-primary">Long-Term Investors</span> &{" "}
            <span className="text-primary">Disciplined Traders</span>
          </h1>

          {/* Clarification Line */}
          <p className="animate-slide-up stagger-1 text-base md:text-lg font-medium text-foreground mb-6">
            Designed for serious investors and disciplined traders. Not for tip-seekers.
          </p>

          {/* Subheadline */}
          <p className="animate-slide-up stagger-1 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10 leading-relaxed">
            Start every trading day prepared and informed. Get structured market intelligence, sentiment analysis, and institutional activity insights — delivered to your WhatsApp at 8:00 AM before market open.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up stagger-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/pricing">
                Get Daily Reports
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="#what-included">
                <FileText className="mr-2 h-5 w-5" />
                View What's Included
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://drive.google.com/file/d/1-6-NIfXXFF3TuV67rCN87Y98IC4Bag0S/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Sample PDF
              </a>
            </Button>
          </div>

          {/* Sample PDF Trust Line */}
          <p className="animate-slide-up stagger-2 text-sm text-muted-foreground mb-6">
            See exactly what you'll receive — no hidden surprises.
          </p>

          {/* Trust Indicators */}
          <div className="animate-fade-in stagger-3 mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-finance-success" />
              <span>Research-First Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>SEBI Compliance Aware</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-finance-charcoal" />
              <span>No Tips or Guaranteed Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
