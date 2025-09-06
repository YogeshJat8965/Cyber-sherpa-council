import React from 'react';
import { GraduationCap, Crown, Rocket, Users2, BookOpen, Award } from 'lucide-react';

const ProgramTracks: React.FC = () => {
  const tracks = [
    {
      icon: GraduationCap,
      title: 'Foundation Track',
      level: 'Entry Level',
      duration: '6 Months',
      description: 'Essential cybersecurity leadership fundamentals for emerging CISOs and senior security managers.',
      features: [
        'Leadership Fundamentals',
        'Risk Assessment Frameworks',
        'Business Alignment Strategies',
        'Team Building & Communication',
        'Peer Mentorship Program'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Crown,
      title: 'Executive Track',
      level: 'Advanced',
      duration: '12 Months',
      description: 'Advanced strategic leadership for experienced CISOs ready to drive organizational transformation.',
      features: [
        'Strategic Planning & Execution',
        'Board-Level Communication',
        'Crisis Leadership & Response',
        'Innovation Management',
        'Executive Advisory Board Access'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Rocket,
      title: 'Innovation Track',
      level: 'Specialized',
      duration: '9 Months',
      description: 'Cutting-edge technology leadership for CISOs driving digital transformation initiatives.',
      features: [
        'Emerging Technology Assessment',
        'Digital Transformation Leadership',
        'AI/ML Security Integration',
        'Cloud-Native Security Strategies',
        'Technology Research Partnerships'
      ],
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const certifications = [
    { icon: BookOpen, title: 'Cyber Sherpa Certified', description: '6-month cohort' },
    { icon: Award, title: 'Strategic Leader', description: 'Blockchain credentialing' },
    { icon: Users2, title: 'Innovation Pioneer', description: 'Portfolio-based evaluation' }
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Program Tracks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored learning paths designed to accelerate your cybersecurity leadership journey
          </p>
        </div>

        {/* Program Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${track.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{track.title}</h3>
                  <div className="flex justify-center space-x-4 text-sm text-gray-400">
                    <span>{track.level}</span>
                    <span>•</span>
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {track.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {track.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.gradient}`}></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full bg-gradient-to-r ${track.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/30">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center group">
                  <IconComponent className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">
              All certifications are recognized by leading cybersecurity organizations and Fortune 500 companies
            </p>
            <button
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;