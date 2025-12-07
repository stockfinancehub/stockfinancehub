import {
  TrendingUp,
  Globe,
  BarChart3,
  Activity,
  Target,
  Building,
  LineChart,
  Calculator,
  Landmark,
  AlertTriangle,
  Briefcase,
  Calendar,
  Newspaper,
  Users,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Market Mood Index (MMI)",
    items: ["Current Market Mood", "Previous Day", "Last Week", "Last Month"],
  },
  {
    icon: Globe,
    title: "Global Market Overview",
    items: ["US Markets", "Asian Markets", "European Markets", "Commodities & Currency Snapshot"],
  },
  {
    icon: BarChart3,
    title: "Market Snapshot",
    items: ["Nifty 50 Overview", "Bank Nifty Overview", "India VIX", "Advance–Decline Ratio"],
  },
  {
    icon: Activity,
    title: "Derivatives & Volume Analysis",
    items: ["Volume Shockers", "Long Build-up", "Short Build-up", "Long Unwinding", "Short Covering"],
  },
  {
    icon: Target,
    title: "52-Week Market Data",
    items: ["Stocks at 52-Week High", "Stocks at 52-Week Low"],
  },
  {
    icon: Building,
    title: "Sector Performance",
    items: ["Sectoral Indices Performance", "Relative Strength Analysis"],
  },
  {
    icon: LineChart,
    title: "Index Outlook",
    items: ["Nifty 50 Outlook", "Bank Nifty Outlook", "Key Pivot Levels"],
  },
  {
    icon: Calculator,
    title: "Options & Market Sentiment",
    items: ["Weekly Options Open Interest", "Put-Call Ratio (PCR)"],
  },
  {
    icon: Landmark,
    title: "Institutional Activity",
    items: ["FII Activity", "DII Activity"],
  },
  {
    icon: AlertTriangle,
    title: "Regulatory Alerts",
    items: ["Stocks in F&O Ban List"],
  },
  {
    icon: Briefcase,
    title: "Corporate Tracker",
    items: ["Corporate Results", "Board Meetings", "Key Corporate Actions (Dividend, Bonus, Split)"],
  },
  {
    icon: Calendar,
    title: "IPOs & Events",
    items: ["Current IPOs", "Important Corporate & Market Events"],
  },
  {
    icon: Newspaper,
    title: "Trending Stock News",
    items: ["Top Market Headlines", "Stock-Specific News Updates", "Breaking Market Developments"],
  },
  {
    icon: Users,
    title: "Insider & Deal Activity",
    items: ["Insider Trading Activity", "Bulk Deals", "Block Deals"],
  },
];

const WhatsIncludedSection = () => {
  return (
    <section id="what-included" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What's Included in the Daily Market Report</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive market intelligence covering every aspect you need to make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl border border-border p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
