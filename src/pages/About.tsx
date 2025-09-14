import Layout from '@/components/Layout';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize financial knowledge and provide world-class investment research that empowers every investor to make informed decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To become India\'s most trusted and comprehensive financial research platform, setting new standards in investment advisory services.',
    },
    {
      icon: Award,
      title: 'Our Expertise',
      description: 'Years of experience in financial markets, backed by rigorous research methodologies and proven investment strategies.',
    },
    {
      icon: Users,
      title: 'Our Commitment',
      description: 'Dedicated to building long-term relationships with our clients through transparency, integrity, and exceptional service quality.',
    },
  ];

  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About Stock Finance Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building India's premier financial research platform with a commitment to excellence, 
                innovation, and investor success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
                Our Story
              </h2>
              
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Stock Finance Hub is in the process of becoming a SEBI-registered Research Analyst and Advisory. 
                  Once the SEBI registration is completed, we will officially launch our services to the public.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our mission is to build India's No.1 Research Brand by providing trusted, data-driven financial insights.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We believe in transparency, compliance, and long-term wealth creation for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every decision we make and every service we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border bg-card hover:shadow-large transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Hemanth M M
                  </h3>
                  <p className="text-primary font-semibold mb-4">Founder</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated to building a transparent and professional research brand with a vision to empower investors across India.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-large transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Naveen M E
                  </h3>
                  <p className="text-primary font-semibold mb-4">Co-Founder</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Focused on strengthening operations, ensuring compliance, and supporting the company's growth journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-primary p-8 rounded-2xl text-center shadow-large">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Join Our Growing Community
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Be part of India's leading financial research community and start your journey 
                  towards informed investing today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;