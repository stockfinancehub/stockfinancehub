import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Naveen",
    review: "Bro your Smart Money Map is 🔥 finally I know where the big players are moving. Super helpful!",
  },
  {
    name: "Nandish",
    review: "Pre-market report saves my morning every day. Simple and straight to the point. Love it 💯",
  },
  {
    name: "Harsha",
    review: "Best stock research I've seen. No fluff, just what I need. Keep it up! 👏",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Subscribers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from real investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 text-base leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
