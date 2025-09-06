import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-800 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving the future of cybersecurity through strategic leadership and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
                To cultivate a global network of cybersecurity leaders co-creating the future of secure digital transformation through intelligence sharing, strategic foresight, and innovation leadership.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To redefine the role of CISOs as not only guardians of security, but as enterprise enablers and architects of trust embedded in business decisions, digital strategy, and boardroom influence.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 group">
            <div className="text-center mb-6">
              <Compass className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Strategic Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Collaborative Innovation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Ethical Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-6">Our Commitment</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that exceptional cybersecurity leadership is the cornerstone of organizational success in the digital age. 
              Through our comprehensive programs, strategic partnerships, and unwavering commitment to excellence, we empower 
              our members to not just defend against threats, but to enable and accelerate their organization's most ambitious goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;