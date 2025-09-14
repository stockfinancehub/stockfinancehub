import Layout from '@/components/Layout';
import { FileText, PieChart, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'PMS (Portfolio Management Services)',
      description: 'Professional portfolio management tailored to your investment objectives.',
      features: [
        'Customized investment strategies',
        'Active portfolio management',
        'Risk-adjusted returns',
        'Regular performance reviews',
        'Dedicated relationship manager',
      ],
      highlight: 'Coming Soon',
    },
    {
      icon: FileText,
      title: 'Equity Research',
      description: 'In-depth analysis and custom research reports for informed investment decisions.',
      features: [
        'Detailed sector analysis',
        'Individual stock research',
        'Market trend reports',
        'Technical analysis',
        'Fundamental research',
      ],
      highlight: 'Professional Research',
    },
    {
      icon: PieChart,
      title: 'Mutual Fund Distribution',
      description: 'Helping investors choose the right funds for their financial goals.',
      features: [
        'Fund selection assistance',
        'SIP planning',
        'Portfolio optimization',
        'Performance monitoring',
        'Tax-efficient strategies',
      ],
      highlight: 'Smart Distribution',
    },
    {
      icon: Shield,
      title: 'Insurance Agency',
      description: 'Protection solutions for long-term security and wealth preservation.',
      features: [
        'Life insurance planning',
        'Health insurance guidance',
        'Term plan selection',
        'Policy review services',
        'Claims assistance',
      ],
      highlight: 'Complete Protection',
    },
    {
      icon: Users,
      title: 'Finance Advising',
      description: 'Professional financial guidance for individuals & institutions.',
      features: [
        'Personal investment strategy',
        'Portfolio review sessions',
        'Goal-based planning',
        'Risk assessment',
        'Regular consultations',
      ],
      highlight: 'Expert Guidance',
    },
    {
      icon: CheckCircle,
      title: 'Model Portfolios',
      description: 'Pre-built strategies tailored for different risk profiles and objectives.',
      features: [
        'Conservative portfolios',
        'Balanced asset allocation',
        'Growth-focused strategies',
        'Regular rebalancing',
        'Performance tracking',
      ],
      highlight: 'Structured Approach',
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
                Professional Services
              </h1>
              <div className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                Coming Soon
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial services designed to help you achieve your investment 
                objectives and build long-term wealth through our SEBI-registered advisory platform.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-large transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary mb-1">
                          {service.highlight}
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center shadow-large">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Take the first step towards informed investing. Contact us today to discuss 
                your financial goals and discover how our services can help you achieve them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;