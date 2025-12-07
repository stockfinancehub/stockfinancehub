const FounderSection = () => {
  return (
    <section id="founder" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Leadership</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Founder Section */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">Hemanth M M</h3>
              <p className="text-primary font-medium">CEO, Founder & Research Head – Stock Finance Hub</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am the Founder and Research Head of Stock Finance Hub, a research-first financial
                platform focused on transparent equity research, company fundamentals, and long-term
                wealth creation.
              </p>

              <p>My journey into finance was not planned — it evolved naturally.</p>

              <p>
                I initially pursued a BCA degree but soon realized that it did not align with my
                long-term vision. During this time, my interest in the stock market began to grow.
                After joining a financial institute, I observed that most platforms focused largely
                on short-term trading tactics, while genuine research and long-term investing
                remained neglected.
              </p>

              <p className="text-foreground font-medium">This led me to take a different path.</p>

              <p>
                I devoted myself to studying the foundations of financial markets, including business
                models, financial statements, sector analysis, valuation basics, and long-term
                portfolio construction. Over time, I developed strong competence in equity research,
                fundamental analysis, and market structure.
              </p>

              <p>
                I am currently pursuing a B.Com degree to fulfill the educational requirements for
                SEBI Research Analyst registration, for which I am actively preparing. Regulatory
                compliance, ethics, and investor education remain central to my vision.
              </p>

              <p>
                Stock Finance Hub was created to deliver unbiased, structured, and ethical market
                intelligence, free from hype and shortcuts.
              </p>

              <p className="text-primary font-semibold mt-4">
                We are on the path to becoming SEBI Registered Research Analysts.
              </p>
            </div>
          </div>

          {/* Co-Founder Section */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">Naveen M E</h3>
              <p className="text-primary font-medium">COO, Co-Founder – Stock Finance Hub</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Naveen M E is the Co-Founder of Stock Finance Hub and a major pillar of the company's 
                growth. He has completed his B.Com and supports all key operations including research 
                workflows, client support, data management, reporting structure, and business organisation. 
                His commitment, discipline, and operational strength help maintain high-quality standards 
                across all services. Naveen contributes actively to the company's long-term vision of 
                building India's leading research-first financial brand, ensuring transparency, ethics, 
                and value creation for all clients.
              </p>

              <div className="mt-6">
                <h4 className="text-foreground font-semibold mb-3">Core Contributions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Supports daily research operations and data handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Maintains smooth workflow across reports and client processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Ensures quality and consistency in research output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Helps build structure, systems, and organisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Contributes to strategy and long-term business decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
