'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import Link from 'next/link';
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Star,
  Check,
  Play,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your digital performance with comprehensive analytics and reporting.'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to discover hidden patterns and optimization opportunities.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Data Security',
    description: 'Enterprise-grade security ensures your business data is always protected and compliant.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Real-time Monitoring',
    description: 'Monitor your digital presence 24/7 with instant alerts and automated recommendations.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in collaboration tools and workspace management.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Multi-platform Integration',
    description: 'Connect all your digital channels in one unified dashboard for complete visibility.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Local Café Co.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'InsightNode transformed how we understand our customers. Our engagement increased by 150% in just 3 months.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'Urban Fitness Studio',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'The AI insights are incredible. We discovered opportunities we never knew existed and doubled our online bookings.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Artisan Bakery',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'Finally, a platform that makes data simple. The dashboard is beautiful and the insights are actionable.',
    rating: 5
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small local businesses getting started with digital insights.',
    features: [
      'Up to 2 social media accounts',
      'Basic analytics dashboard',
      'Weekly AI insights',
      'Email support',
      '1 user account'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses that need advanced analytics and team collaboration.',
    features: [
      'Up to 10 social media accounts',
      'Advanced analytics & reporting',
      'Daily AI insights & recommendations',
      'Priority support',
      'Up to 5 user accounts',
      'Custom integrations',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations requiring custom solutions and dedicated support.',
    features: [
      'Unlimited social media accounts',
      'Enterprise analytics suite',
      'Real-time AI insights',
      'Dedicated account manager',
      'Unlimited user accounts',
      'Custom integrations',
      'White-label solutions',
      'SLA guarantee'
    ],
    popular: false
  }
];

const faqs = [
  {
    question: 'How does InsightNode help my local business?',
    answer: 'InsightNode provides AI-powered insights into your digital presence, helping you understand customer behavior, optimize your content strategy, and identify growth opportunities specific to your local market.'
  },
  {
    question: 'What social media platforms do you support?',
    answer: 'We currently support Facebook, Instagram, LinkedIn, Twitter, and Google My Business. We\'re constantly adding new platforms based on user feedback.'
  },
  {
    question: 'Is my data secure with InsightNode?',
    answer: 'Absolutely. We use enterprise-grade encryption and follow strict data protection protocols. Your data is never shared with third parties and you maintain full ownership.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data will remain accessible for 30 days after cancellation.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
  },
  {
    question: 'How accurate are the AI insights?',
    answer: 'Our AI models are trained on millions of data points and are constantly learning. We maintain an accuracy rate of over 90% for our insights and recommendations.'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              🚀 New: AI-Powered Insights Available Now
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Empower Your Local Brand with Digital Clarity
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get actionable insights, automated reporting, and AI-powered recommendations to grow your business in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything you need to succeed digitally
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed specifically for local businesses to thrive in the digital world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Local Businesses</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150%</div>
              <p className="text-muted-foreground">Average Growth</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Monitoring</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Loved by local businesses everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              See how InsightNode is helping local brands achieve digital success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for your business. Upgrade or downgrade at any time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about InsightNode.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to transform your digital presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of local businesses already using InsightNode to grow their digital reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}