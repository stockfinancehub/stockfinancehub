import { Clock, FileBarChart, PieChart, Building2, TrendingUp, Wallet, Shield, Users } from "lucide-react";

const offerings = [
  {
    icon: FileBarChart,
    name: "Equity Research Reports",
    description: "In-depth analysis of individual stocks",
  },
  {
    icon: PieChart,
    name: "Model Portfolios",
    description: "Curated investment portfolios",
  },
  {
    icon: Building2,
    name: "PMS Distribution*",
    description: "Portfolio Management Services distribution",
  },
  {
    icon: TrendingUp,
    name: "AIF Distribution*",
    description: "Alternative Investment Funds",
  },
  {
    icon: Wallet,
    name: "Mutual Fund Distribution*",
    description: "Comprehensive MF solutions",
  },
  {
    icon: Shield,
    name: "Insurance Agency*",
    description: "Protection planning services",
  },
  {
    icon: Users,
    name: "Private Consulting*",
    description: "Personalized financial guidance",
  },
];

const ComingSoonSection = () => {
  return (
    <section id="coming-soon" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            Coming Soon Services
          </div>
          <h2 className="section-title">Core Business Offerings</h2>
          <p className="section-subtitle mx-auto">
            Expanding our services to provide comprehensive financial solutions for serious investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {offerings.map((offering) => (
            <div
              key={offering.name}
              className="bg-background rounded-xl border border-border p-6 opacity-90 hover:opacity-100 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <offering.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{offering.name}</h3>
                  <p className="text-xs text-muted-foreground">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-background border border-border rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">*</span> All services will be launched
              only after SEBI registration and regulatory approvals are obtained.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
