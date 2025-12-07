import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SampleReportSection = () => {
  return (
    <section id="sample-report" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="finance-card">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-finance-navy/10">
                <FileText className="h-8 w-8 text-finance-navy" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sample Daily Market Report (Preview)
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Explore a sample version of our Daily Market Report to understand the structure,
              clarity, and presentation style before subscribing.
            </p>

            <Button variant="hero-primary" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1-6-NIfXXFF3TuV67rCN87Y98IC4Bag0S/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Sample PDF
              </a>
            </Button>

            <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-6">
              This sample report is provided strictly for preview and educational purposes only.
              It does not contain any investment advice or recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportSection;
