import { Clock, MessageCircle, CheckCircle } from "lucide-react";

const DeliverySection = () => {
  const deliveryFeatures = [
    {
      icon: Clock,
      text: "Report delivered every trading day at 8:00 AM (IST)",
    },
    {
      icon: MessageCircle,
      text: "Delivery via WhatsApp",
    },
    {
      icon: CheckCircle,
      text: "Timely, structured, and easy-to-consume format",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-foreground">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Daily Report Delivery
          </h2>
          <p className="text-background/70 max-w-xl mx-auto leading-relaxed">
            Stay ahead of the market with timely, actionable intelligence delivered right to your phone.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {deliveryFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-background/10 rounded-lg px-6 py-4"
            >
              <feature.icon className="h-6 w-6 text-primary shrink-0" />
              <span className="text-background font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
