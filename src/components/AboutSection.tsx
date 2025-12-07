import { Target, BookOpen, Shield, Users, TrendingUp, User, Landmark, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Vision & Mission</h2>
          <p className="section-subtitle mx-auto">
            Building India's most trusted research brand for long-term wealth creation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="bg-background rounded-xl border border-border p-6 border-l-4 border-l-foreground">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Vision
            </h3>
            <p className="text-lg text-foreground font-medium italic leading-relaxed">
              "To become India's top research brand — known for unbiased analysis, ethical practices,
              and empowering investors with knowledge-driven decisions."
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-background rounded-xl border border-border p-6 border-l-4 border-l-primary">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Mission
            </h3>
            <p className="text-lg text-foreground font-medium italic leading-relaxed">
              "To help people grow wealth the right way — with knowledge, fundamentals, discipline,
              and patience."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
          <div className="bg-background rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground text-sm">Research-First</h4>
            <p className="text-xs text-muted-foreground mt-1">Data-driven analysis</p>
          </div>

          <div className="bg-background rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground text-sm">SEBI Compliant</h4>
            <p className="text-xs text-muted-foreground mt-1">Regulatory focused</p>
          </div>

          <div className="bg-background rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors">
            <Target className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground text-sm">Long-Term Focus</h4>
            <p className="text-xs text-muted-foreground mt-1">Wealth creation</p>
          </div>

          <div className="bg-background rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground text-sm">Investor Education</h4>
            <p className="text-xs text-muted-foreground mt-1">Knowledge sharing</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Who We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Retail Investors */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
              <User className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-3">Retail Investors</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supporting individual investors and beginners with simplified, research-backed market insights that help build discipline, clarity, and confidence in long-term investing decisions.
              </p>
            </div>

            {/* HNIs & Families */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
              <Landmark className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-3">HNIs & Families</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Providing high-net-worth individuals and families with structured research, risk-aware strategies, and customized insights aligned with long-term wealth preservation and growth objectives.
              </p>
            </div>

            {/* Institutions */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-3">Institutions</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Delivering comprehensive market research, data-driven insights, and analytical support to institutional participants such as PMS firms, mutual fund distributors, and corporate clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
