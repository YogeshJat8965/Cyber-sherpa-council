import React from 'react';
import { Network, TrendingUp, Shield, Users, Lightbulb, Globe2 } from 'lucide-react';

const WhyJoin: React.FC = () => {
  const benefits = [
    {
      icon: Network,
      title: 'Executive Networking',
      description: 'Connect with global security leaders to exchange best practices and strategic insight.',
      stats: '500+ Members'
    },
    {
      icon: TrendingUp,
      title: 'Career Acceleration',
      description: 'Average 40% salary increase and 85% promotion rate within 18 months of joining.',
      stats: '40% Avg. Increase'
    },
    {
      icon: Shield,
      title: 'Inspirational Events',
      description: 'Participate in curated events at world-class venues that foster trust and transformation.',
      stats: '25+ Successful Events'
    },
    {
      icon: Lightbulb,
      title: 'Cross-Sector Collaboration',
      description: 'Collaborate across sectors including finance, healthcare, government, telecom, energy, retail etc.',
      stats: '50+ Partners'
    },
    {
      icon: Users,
      title: 'Actionable Intelligence',
      description: 'Access exclusive reports, thought leadership, and threat intelligence.',
      stats: '100+ Reports'
    },
    {
      icon: Globe2,
      title: 'Recognition & Influence',
      description: 'Be acknowledged through industry awards and advisory opportunities.',
      stats: '10+ Awards'
    }
  ];

  const testimonials = [
    {
      quote: "Joining the Cyber Sherpa Council transformed my approach to cybersecurity leadership. The strategic frameworks and peer network are unmatched.",
      author: "Sarah Chen",
      title: "CISO, Fortune 100 Tech Company",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      quote: "The Innovation Track gave me the insights needed to successfully lead our digital transformation while maintaining security excellence.",
      author: "Marcus Rodriguez",
      title: "Chief Security Officer, Financial Services",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      quote: "The executive network and mentorship program accelerated my career beyond anything I thought possible. Truly invaluable.",
      author: "Dr. Amanda Foster",
      title: "Director of Cybersecurity, Healthcare",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Why Join Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the transformative benefits of joining the world's most exclusive cybersecurity leadership community
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <IconComponent className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {benefit.stats}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Our Members Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Measurable Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Member Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Avg. Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-gray-300">Promotion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Join the Elite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;