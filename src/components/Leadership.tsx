import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Dr. Alexandra Vasquez",
      title: "Founder & Chief Executive",
      bio: "Former NSA Deputy Director with 25+ years in cybersecurity. Led digital transformation initiatives across Fortune 500 companies.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      expertise: ["Strategic Leadership", "Risk Management", "Digital Transformation"]
    },
    {
      name: "Michael Chen",
      title: "Chief Strategy Officer",
      bio: "Former CISO at three Fortune 100 companies. Expert in building world-class security programs and executive leadership development.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      expertise: ["Executive Development", "Program Design", "Innovation Strategy"]
    },
    {
      name: "Sarah Thompson",
      title: "Director of Research",
      bio: "PhD in Cybersecurity from MIT. Leading researcher in AI-powered security technologies and emerging threat landscapes.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      expertise: ["AI Security", "Threat Research", "Technology Innovation"]
    },
    {
      name: "James Rodriguez",
      title: "Head of Global Operations",
      bio: "Former military cyber operations leader. Specializes in crisis management, incident response, and international cybersecurity policy.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      expertise: ["Crisis Management", "Global Operations", "Policy Development"]
    }
  ];

  const advisoryBoard = [
    {
      name: "Former NSA Director",
      title: "Strategic Security Advisor",
      company: "US Government"
    },
    {
      name: "Fortune 10 CISO",
      title: "Enterprise Security Advisor",
      company: "Technology Sector"
    },
    {
      name: "EU Cybersecurity Chief",
      title: "International Policy Advisor",
      company: "European Union"
    },
    {
      name: "Venture Capital Partner",
      title: "Innovation & Investment Advisor",
      company: "Cybersecurity VC"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-gray-800 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Advisory Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class cybersecurity leaders guiding the future of the industry
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Executive Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-white mb-2">{leader.name}</h4>
                    <p className="text-purple-400 font-medium mb-3">{leader.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{leader.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded-full border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start space-x-3">
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                        <LinkedinIcon className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                        <TwitterIcon className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                        <MailIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Strategic Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{advisor.name.charAt(0)}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{advisor.name}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">{advisor.title}</p>
                <p className="text-gray-400 text-xs">{advisor.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Leadership Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Our leadership team brings together decades of experience from the highest levels of government, 
              Fortune 500 enterprises, and cutting-edge research institutions. We believe that exceptional 
              cybersecurity leadership requires a unique blend of technical expertise, strategic vision, 
              and the ability to communicate complex security concepts to diverse stakeholders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">100+ Years</div>
                <div className="text-gray-300">Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">15 Countries</div>
                <div className="text-gray-300">Global Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">500+ Leaders</div>
                <div className="text-gray-300">Developed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;