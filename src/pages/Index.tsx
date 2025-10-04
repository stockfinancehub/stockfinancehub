import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  PieChart, 
  Briefcase, 
  Shield, 
  TrendingUp, 
  Users,
  Target,
  Building2,
  Mail,
  CheckCircle,
  Award,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Instagram
} from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";
import Header from "@/components/Header";


const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center section-gradient overflow-hidden pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-navy px-4 py-2 rounded-full mb-8 font-medium">
              <Lightbulb className="w-4 h-4 text-gold" />
              SEBI Registration in Progress
            </div>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-navy leading-tight">
              Stock Finance <span className="text-gold">Hub</span>
            </h1>
            <p className="text-3xl md:text-4xl text-burgundy mb-8 font-medium animate-fade-in-delay">
              Building India's No.1 Research Brand
            </p>
            <p className="text-xl md:text-2xl text-warm-gray mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-left-delay">
              Empowering investors with comprehensive financial research, expert analysis, 
              and personalized investment solutions for sustainable wealth creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right-delay">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6 group">
                Explore Our Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="elegant" size="lg" className="text-lg px-12 py-6">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Reports Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-navy">Research Excellence</h2>
              <div className="w-24 h-1 professional-gradient mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                In-depth market analysis and comprehensive research reports designed to guide your investment decisions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 border-0 card-gradient">
                <CardHeader className="text-center">
                  <BarChart3 className="w-16 h-16 text-gold mx-auto mb-4" />
                  <CardTitle className="text-xl text-navy">Market Analysis</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Comprehensive market insights covering sectors, trends, and investment opportunities across Indian markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 border-0 card-gradient">
                <CardHeader className="text-center">
                  <FileText className="w-16 h-16 text-burgundy mx-auto mb-4" />
                  <CardTitle className="text-xl text-navy">Stock Research</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Detailed company analysis with fundamental and technical insights for informed investment decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 border-0 card-gradient">
                <CardHeader className="text-center">
                  <TrendingUp className="w-16 h-16 text-forest mx-auto mb-4" />
                  <CardTitle className="text-xl text-navy">Investment Strategy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Strategic recommendations tailored to different risk profiles and investment horizons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-navy">About Us</h2>
              <div className="w-24 h-1 professional-gradient mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in-left">
                <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                      <Building2 className="text-gold" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-warm-gray leading-relaxed mb-4">
                      Stock Finance Hub is in the process of becoming a SEBI-registered Research Analyst and Advisory. 
                      Once the SEBI registration is completed, we will officially launch our services to the public.
                    </p>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      Our mission is to build India's No.1 Research Brand by providing trusted, data-driven financial insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-slide-in-right">
                <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-navy">
                      <Briefcase className="text-burgundy" />
                      Business Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      We provide professional research reports, advisory, and financial solutions to both 
                      individual investors and institutions including PMS, mutual funds, and corporates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Founders Section */}
            <div className="mb-16">
              <h3 className="font-heading text-3xl font-bold text-center mb-12 text-navy">Meet Our Founders</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">Hemanth M M</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gold">Founder</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-gray leading-relaxed">
                      Dedicated to building a transparent and professional research brand with a vision 
                      to empower investors across India.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">Naveen M E</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gold">Co-Founder</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-gray leading-relaxed">
                      Focused on strengthening operations, ensuring compliance, and supporting 
                      the company's growth journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Values Section */}
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold mb-12 text-navy">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6">
                  <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-navy">Transparency</h4>
                  <p className="text-warm-gray">Clear, honest communication in all our research and advisory services.</p>
                </div>
                <div className="p-6">
                  <Shield className="w-12 h-12 text-burgundy mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-navy">Compliance</h4>
                  <p className="text-warm-gray">Strict adherence to regulatory guidelines and ethical standards.</p>
                </div>
                <div className="p-6">
                  <TrendingUp className="w-12 h-12 text-forest mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-navy">Long-term Wealth Creation</h4>
                  <p className="text-warm-gray">Focus on sustainable investment strategies for lasting prosperity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-gold mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Our vision is to empower investors with trusted research and become India's leading financial research hub.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We aim to democratize professional financial research and make quality investment guidance accessible to every Indian investor.
            </p>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-navy">Our Services</h2>
              <div className="w-24 h-1 professional-gradient mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                Comprehensive financial services designed to help you achieve your investment objectives and build long-term wealth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group">
                <CardHeader>
                  <FileText className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">Research Reports</CardTitle>
                  <CardDescription className="text-burgundy font-medium">Core service</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    In-depth analysis and actionable insights to guide your investment decisions with professional research quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group [animation-delay:100ms]">
                <CardHeader>
                  <PieChart className="w-12 h-12 text-burgundy mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">Model Portfolios</CardTitle>
                  <CardDescription className="text-gold font-medium">Ready-made strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    Professionally designed investment portfolios for different risk profiles and investment horizons.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group [animation-delay:200ms]">
                <CardHeader>
                  <Users className="w-12 h-12 text-forest mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">Private Consulting</CardTitle>
                  <CardDescription className="text-burgundy font-medium">Personalized advisory</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    Customized one-on-one financial advisory tailored to your unique investment needs and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group [animation-delay:300ms]">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">Mutual Funds</CardTitle>
                  <CardDescription className="text-forest font-medium">Fund selection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    Expert guidance on mutual fund selection and portfolio optimization strategies for better returns.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group [animation-delay:400ms]">
                <CardHeader>
                  <Shield className="w-12 h-12 text-burgundy mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">Insurance</CardTitle>
                  <CardDescription className="text-gold font-medium">Protection solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    Comprehensive protection and security solutions for you and your family's financial future.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-0 card-gradient group [animation-delay:500ms]">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-forest mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-navy">PMS Distribution</CardTitle>
                  <CardDescription className="text-burgundy font-medium">Portfolio management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray">
                    Access to professional portfolio management services for sophisticated and high net worth investors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-navy">Who We Serve</h2>
              <div className="w-24 h-1 professional-gradient mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                Serving diverse clientele across India with tailored financial solutions and expert guidance
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-elevated transition-all duration-300">
                <CardHeader className="text-center">
                  <Users className="w-16 h-16 text-gold mx-auto mb-4" />
                  <CardTitle className="text-2xl text-navy">Retail Investors</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Helping beginners and individual investors grow wealth through informed decisions and professional guidance for long-term success.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-elevated transition-all duration-300">
                <CardHeader className="text-center">
                  <Award className="w-16 h-16 text-burgundy mx-auto mb-4" />
                  <CardTitle className="text-2xl text-navy">HNIs & Families</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Offering tailored investment and protection solutions for high net worth individuals and family offices with personalized strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-elevated transition-all duration-300">
                <CardHeader className="text-center">
                  <Building2 className="w-16 h-16 text-forest mx-auto mb-4" />
                  <CardTitle className="text-2xl text-navy">Institutions</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-warm-gray leading-relaxed">
                    Providing comprehensive research and distribution support to PMS companies, mutual funds, and corporate entities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-navy">Contact Us</h2>
            <div className="w-24 h-1 professional-gradient mx-auto mb-12 rounded-full"></div>
            
            <Card className="shadow-elevated border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12">
                <Mail className="w-16 h-16 text-gold mx-auto mb-6" />
                <div className="space-y-6">
                  <p className="text-2xl font-semibold text-navy">Get in Touch</p>
                  <div className="bg-cream p-6 rounded-lg">
                    <p className="text-lg mb-2">
                      <span className="text-warm-gray font-medium">Email:</span>
                    </p>
                    <a 
                      href="mailto:contact@stockfinancehub.com" 
                      className="text-2xl text-gold hover:text-burgundy transition-colors font-semibold"
                    >
                      contact@stockfinancehub.com
                    </a>
                  </div>
                  
                  {/* Social Media */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-lg font-medium text-navy mb-4">Follow Us</p>
                    <a 
                      href="https://www.instagram.com/stockfinance.hub?igsh=bDd6OWdydnBsbDll"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-burgundy hover:text-gold transition-colors group"
                    >
                      <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">@stockfinance.hub</span>
                    </a>
                  </div>
                  
                  <p className="text-warm-gray bg-muted/50 p-4 rounded-lg">
                    Additional contact details will be available soon. Stay tuned for our official launch post SEBI registration approval.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold mb-4">Stock Finance Hub</h3>
              <p className="text-white/80 text-lg mb-6">Building India's No.1 Research Brand</p>
              
              {/* Social Media */}
              <div className="flex justify-center">
                <a 
                  href="https://www.instagram.com/stockfinance.hub?igsh=bDd6OWdydnBsbDll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Follow us on Instagram</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/80 mb-6 text-lg">
                © 2025 Stock Finance Hub | All Rights Reserved
              </p>
              <div className="bg-burgundy/20 p-6 rounded-lg max-w-3xl mx-auto">
                <p className="text-white/90 font-medium mb-2">
                  <strong className="text-gold">Important Disclaimer</strong>
                </p>
                <p className="text-sm text-white/80">
                  Currently in SEBI registration process. All services will be available post-approval. 
                  This website is for informational purposes only and does not constitute investment advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;