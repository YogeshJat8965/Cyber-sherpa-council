import React from 'react';
import { Brain, Users, Lightbulb, Zap, Shield, Globe } from 'lucide-react';

const StrategicPillars: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Strategic Leadership',
      description: 'Developing next-generation cybersecurity leaders with business acumen and strategic vision.',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'Peer Collaboration',
      description: 'Fostering meaningful connections and knowledge sharing among industry leaders.',
      color: 'purple'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Driving innovation through research, emerging technology adoption, and strategic partnerships.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Building agile response capabilities for emerging threats and crisis management.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Risk Excellence',
      description: 'Advancing risk management frameworks and organizational resilience strategies.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Influencing policy and standards at national and international levels.',
      color: 'red'
    }
  ];

  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-400/50 text-cyan-400',
    purple: 'border-purple-500/20 hover:border-purple-400/50 text-purple-400',
    green: 'border-green-500/20 hover:border-green-400/50 text-green-400',
    yellow: 'border-yellow-500/20 hover:border-yellow-400/50 text-yellow-400',
    blue: 'border-blue-500/20 hover:border-blue-400/50 text-blue-400',
    red: 'border-red-500/20 hover:border-red-400/50 text-red-400'
  };

  return (
    <section id="pillars" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Strategic Pillars
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six foundational pillars that guide our approach to cybersecurity leadership development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const colorClass = colorClasses[pillar.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${colorClass} transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <IconComponent className={`w-16 h-16 mx-auto mb-4 ${colorClass.split(' ')[2]} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-center">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Framework Overview */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Integrated Framework</h3>
            <p className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              Our Strategic Pillars work synergistically to create a comprehensive leadership development ecosystem. 
              Each pillar reinforces and amplifies the others, ensuring our members develop well-rounded capabilities 
              that translate into measurable organizational impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">360°</div>
                <div className="text-gray-300">Comprehensive Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Practical Application</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;