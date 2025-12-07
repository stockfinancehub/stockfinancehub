import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DeliverySection from "@/components/DeliverySection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatsIncludedSection />
        <WhoIsThisForSection />
        <TestimonialsSection />
        <DeliverySection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
