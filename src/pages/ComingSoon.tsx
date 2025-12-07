import Header from "@/components/Header";
import ComingSoonSection from "@/components/ComingSoonSection";
import Footer from "@/components/Footer";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ComingSoonSection />
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
