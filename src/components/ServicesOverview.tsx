import { FileText, PieChart, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: FileText,
    title: 'Research Reports',
    description: 'In-depth market analysis and stock research reports to guide your investment decisions.',
  },
  {
    icon: PieChart,
    title: 'Model Portfolios',
    description: 'Professionally curated investment portfolios designed for different risk profiles.',
  },
  {
    icon: Users,
    title: 'Private Consulting',
    description: 'Personalized financial consulting services tailored to your unique investment goals.',
  },
  {
    icon: TrendingUp,
    title: 'Mutual Funds',
    description: 'Expert guidance on mutual fund selection and portfolio optimization strategies.',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive insurance solutions to protect your wealth and family\'s future.',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial services designed to help you achieve your investment objectives 
            and build long-term wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 border-border bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg transition-colors duration-200"
          >
            Learn More About Our Services
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;