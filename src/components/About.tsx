import React from 'react';
import { Globe, TrendingUp, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Globe, value: '500+', label: 'Global Members' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Target, value: '10+', label: 'Years Excellence' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/10 to-purple-900/10"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            About Cyber Sherpa Council
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            An exclusive community of cybersecurity executives dedicated to advancing the art and science of information security leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1400" data-aos-easing="ease-out-back">
              <h3 className="text-2xl font-bold text-white mb-4">Our Foundation</h3>
              <p className="text-gray-300 mb-4">
                Founded by industry veterans, the Cyber Sherpa Council brings together the most influential CISOs and security leaders from Fortune 500 companies, government agencies, and innovative startups.
              </p>
              <p className="text-gray-300">
                We bridge the gap between tactical cybersecurity operations and strategic business leadership, empowering our members to drive organizational transformation and resilience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1400" data-aos-easing="ease-out-back">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-300 mb-4">
                Through collaborative research, peer mentorship, and strategic advisory services, we've helped shape cybersecurity policies at the highest levels of government and industry.
              </p>
              <p className="text-gray-300">
                Our members collectively protect over $2 trillion in organizational assets and serve millions of customers worldwide.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={1000 + index * 150}
                  data-aos-duration="1200"
                  data-aos-easing="ease-out-back"
                >
                  <IconComponent className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-gradient-to-r border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Elite?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the difference that strategic cybersecurity leadership makes. Join a community that's shaping the future of digital security.
            </p>
            <button
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;