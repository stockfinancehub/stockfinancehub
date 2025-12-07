import { Check, X } from "lucide-react";

const WhoIsThisForSection = () => {
  const forWho = [
    "Long-term investors tracking market trends",
    "Disciplined traders planning daily strategies",
    "Finance professionals seeking quick market overview",
    "Serious learners who value research and data",
  ];

  const notForWho = [
    "Those seeking hot tips or guaranteed profits",
    "Intraday tip-seekers looking for quick calls",
    "People expecting buy/sell recommendations",
    "Anyone looking for portfolio management advice",
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Who Is This Report For?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* This Report IS For */}
            <div className="bg-background rounded-xl border border-border p-6 border-l-4 border-l-finance-success">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Check className="h-6 w-6 text-finance-success" />
                This Report Is For
              </h3>
              <ul className="space-y-3">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-finance-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Report IS NOT For */}
            <div className="bg-background rounded-xl border border-border p-6 border-l-4 border-l-destructive">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <X className="h-6 w-6 text-destructive" />
                This Report Is NOT For
              </h3>
              <ul className="space-y-3">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
