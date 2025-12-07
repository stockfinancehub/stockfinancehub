import { AlertCircle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Important Disclaimer
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  This daily market report provides <strong className="text-foreground">market intelligence and analysis</strong> strictly for <strong className="text-foreground">educational and informational purposes only</strong>. It is NOT investment advice, stock recommendations, or buy/sell/hold signals.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We do not provide portfolio advice, guaranteed returns, or specific trading calls. All market investments carry risk, and past performance does not guarantee future results.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please consult a SEBI-registered investment advisor before making any investment decisions. Use this research as one input among many in your decision-making process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
