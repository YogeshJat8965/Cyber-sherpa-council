import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Zap } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      icon: Crown,
      title: "Global Cybersecurity Excellence Award",
      year: "2024",
      organization: "World Economic Forum",
      description: "Recognized for outstanding contribution to global cybersecurity leadership development.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Trophy,
      title: "Industry Leadership Program of the Year",
      year: "2023",
      organization: "CyberSecurity Excellence Awards",
      description: "Top-rated executive development program in the cybersecurity industry.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Star,
      title: "Innovation in Security Education",
      year: "2023",
      organization: "InfoSec Awards",
      description: "Pioneering approach to strategic cybersecurity leadership training.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Medal,
      title: "Best Professional Development Program",
      year: "2022",
      organization: "Global CISO Forum",
      description: "Highest-rated program for cybersecurity executive advancement.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Award,
      title: "Outstanding Community Impact",
      year: "2022",
      organization: "Cybersecurity & Infrastructure Security Agency",
      description: "Significant contribution to national cybersecurity capability development.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation Leadership",
      year: "2021",
      organization: "Harvard Business Review",
      description: "Recognized for advancing cybersecurity's role in digital transformation.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const recognitions = [
    {
      stat: "95%",
      label: "Member Satisfaction",
      description: "Highest rated cybersecurity leadership program globally"
    },
    {
      stat: "50+",
      label: "Industry Awards",
      description: "Recognition from leading cybersecurity organizations"
    },
    {
      stat: "#1",
      label: "Ranked Program",
      description: "Top-rated executive development program (CyberSeek)"
    },
    {
      stat: "500+",
      label: "Success Stories",
      description: "CISOs accelerated to new leadership positions"
    }
  ];

  const mediaFeatures = [
    { outlet: "Harvard Business Review", feature: "The Future of Cybersecurity Leadership" },
    { outlet: "Wall Street Journal", feature: "Executive Security: New Paradigms" },
    { outlet: "Forbes", feature: "Top 10 Cybersecurity Leadership Programs" },
    { outlet: "MIT Technology Review", feature: "Strategic Cyber Defense Innovation" },
    { outlet: "Financial Times", feature: "Digital Risk Management Excellence" },
    { outlet: "CIO Magazine", feature: "CISO Career Development Success Stories" }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading recognition for excellence in cybersecurity leadership development
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 text-center">{award.title}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4 text-center">{award.organization}</p>
                <p className="text-gray-300 text-sm leading-relaxed text-center">{award.description}</p>
              </div>
            );
          })}
        </div>

        {/* Recognition Stats */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {recognition.stat}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{recognition.label}</h4>
                <p className="text-gray-300 text-sm">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Featured In</h3>
          <p className="text-gray-300 text-center mb-8">Leading publications recognize our impact on cybersecurity leadership</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300">
                <h4 className="text-cyan-400 font-semibold mb-2">{feature.outlet}</h4>
                <p className="text-gray-300 text-sm">{feature.feature}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              Join the Award-Winning Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;