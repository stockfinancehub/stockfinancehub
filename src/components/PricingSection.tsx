import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "3-Month Plan",
    price: "₹399",
    period: "for 3 months",
    link: "https://payments.cashfree.com/forms/stockfinancehub",
    popular: false,
    bestSavings: false,
  },
  {
    name: "6-Month Plan",
    price: "₹599",
    period: "for 6 months",
    link: "https://payments.cashfree.com/forms/stockfinance",
    popular: true,
    bestSavings: false,
  },
  {
    name: "Annual Plan – Best Savings",
    price: "₹799",
    period: "for 12 months",
    perMonth: "Only ₹67 per month",
    urgencyNote: "Limited-time founding member pricing",
    valueLine: "Price locked for 12 months",
    link: "https://payments.cashfree.com/forms/financehub",
    popular: false,
    bestSavings: true,
  },
];

const features = [
  "Daily market report at 8:00 AM IST",
  "WhatsApp delivery",
  "Market Mood Index & sentiment data",
  "Global market overview",
  "Derivatives & volume analysis",
  "Institutional activity tracking",
  "Corporate updates & IPO alerts",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Subscription Plans</h2>
          <p className="section-subtitle mx-auto">
            Choose a plan that fits your investment journey. All plans include full access to daily market reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background rounded-xl border p-6 relative ${
                plan.popular
                  ? "border-2 border-primary ring-2 ring-primary/20"
                  : plan.bestSavings
                  ? "border-2 border-finance-success ring-2 ring-finance-success/20"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.bestSavings && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-finance-success text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Best Savings
                  </span>
                </div>
              )}

              <div className="text-center pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
                
                {plan.perMonth && (
                  <p className="text-sm font-medium text-finance-success mt-1">{plan.perMonth}</p>
                )}
                {plan.valueLine && (
                  <p className="text-xs text-muted-foreground mt-1">{plan.valueLine}</p>
                )}
                {plan.urgencyNote && (
                  <p className="text-xs text-finance-warning font-medium mt-2 bg-finance-warning/10 px-2 py-1 rounded">
                    {plan.urgencyNote}
                  </p>
                )}

                <Button
                  variant={plan.popular ? "default" : plan.bestSavings ? "default" : "outline"}
                  className={`w-full mt-6 ${plan.bestSavings ? "bg-finance-success hover:bg-finance-success/90" : ""}`}
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="max-w-2xl mx-auto">
          <h4 className="text-center font-semibold text-foreground mb-6">
            All plans include:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-finance-success shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-background border border-border rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>📄</span>
              Subscription Disclaimer
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This subscription provides access to daily market reports strictly for{" "}
              <strong className="text-foreground">educational and informational purposes only</strong>. No buy/sell/hold
              recommendations, portfolio advice, or guaranteed returns are provided. Market
              investments are subject to risk. Please consult a SEBI-registered advisor before
              making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
