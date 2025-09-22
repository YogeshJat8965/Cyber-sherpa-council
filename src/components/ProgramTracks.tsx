import React from 'react';
import { 
  TrendingUp, 
  Gamepad2, 
  BrainCircuit, 
  Orbit, 
  HeartHandshake, 
  Mountain, 
  BadgeCheck,
  BookOpen,
  Award,
  Users2,
  Download,
  CalendarDays,
  Clock,
  Users
} from 'lucide-react';

// --- The Main React Component ---
const ProgramTracks: React.FC = () => {
  // Redesigned tracks with consistent structure and length
  const tracks = [
    {
      icon: TrendingUp,
      title: 'CISO Ascend',
      level: 'Executive Leadership',
      duration: '12 Months',
      description: 'Transform into a strategic business leader with boardroom influence and executive brand elevation.',
      features: ['Executive storytelling & communication', 'M&A security strategy', 'Crisis leadership management', 'Personal branding & thought leadership'],
      color: 'bg-cyan-500'
    },
    {
      icon: Gamepad2,
      title: 'The CISO Arena',
      level: 'Simulation & Labs',
      duration: '6 Months',
      description: 'Master real-time adversarial scenarios through gamified command center simulations.',
      features: ['Live crisis drill simulations', 'SOC optimization laboratories', 'AI-based cyber warfare modeling', 'Zero-day response protocols'],
      color: 'bg-red-500'
    },
    {
      icon: BrainCircuit,
      title: 'CyberThink',
      level: 'Strategic Policy',
      duration: '9 Months',
      description: 'Shape the future of digital trust through exclusive strategy exchanges and policy development.',
      features: ['Quarterly strategic councils', 'Policy whitepaper development', 'Government collaboration tracks', 'Regulatory foresight planning'],
      color: 'bg-indigo-500'
    },
    {
      icon: Orbit,
      title: 'Sentinel Studio',
      level: 'Emerging Tech',
      duration: '8 Months',
      description: 'Stay ahead with cutting-edge security innovations and deep-tech immersion programs.',
      features: ['Deep-dive GenAI security sessions', 'Blockchain security architecture', 'Zero-trust implementation', 'Post-quantum cryptography'],
      color: 'bg-green-500'
    },
    {
      icon: HeartHandshake,
      title: 'CyberEdge Mentorship',
      level: 'Leadership Development',
      duration: '18 Months',
      description: 'Build future cybersecurity leaders through dual-path mentorship and knowledge transfer.',
      features: ['Shadow-a-CISO program', 'Women in cybersecurity initiatives', 'DEI+ leadership development pods', 'Cross-generational mentoring'],
      color: 'bg-pink-500'
    },
  
    {
      icon: BadgeCheck,
      title: 'CISO Vanguard Certification',
      level: 'AI-Ready Leadership',
      duration: '6 Months',
      description: 'Exclusive certification for holistic leadership in cognitive security environments.',
      features: ['Peer-reviewed cohort learning', 'Blockchain-verified credentials', 'Portfolio-based assessments', 'Board simulation capstone'],
      color: 'bg-blue-500'
    }
  ];

  // Updated certifications content
  const certifications = [
    { icon: BookOpen, title: '6-Month Cohort', description: 'Peer-reviewed learning' },
    { icon: Award, title: 'Blockchain Credentialing', description: 'Verifiable and secure' },
    { icon: Users2, title: 'Portfolio-Based Evaluation', description: 'Real-world-ready skills' }
  ];

  return (
    <section 
      id="tracks" 
      className="py-20 relative overflow-hidden bg-gray-800"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/texture2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          opacity: 0.3
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Program Tracks
          </h2>
        </div>

        {/* Redesigned cards with perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl flex flex-col h-[520px]"
              >
                {/* Header Section - Fixed 140px height */}
                <div className="text-center p-6 pb-4" style={{ height: '140px' }}>
                  <div className={`w-16 h-16 rounded-full ${track.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{track.title}</h3>
                </div>

                {/* Level & Duration Section - Fixed 60px height */}
                <div className="px-6 pb-4" style={{ height: '60px' }}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{track.level}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{track.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description Section - Fixed 80px height */}
                <div className="px-6 pb-4" style={{ height: '80px' }}>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Key Focus Section - Remaining space with fixed positioning */}
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3 text-center">Key Focus</h4>
                    <div className="space-y-2 flex-1">
                      {track.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${track.color} flex-shrink-0 mt-1.5`}></div>
                          <span className="text-gray-600 text-xs leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">CISO Vanguard Certification Pathway</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-32 h-32 bg-gray-100 border-2 border-cyan-400 rounded-full flex flex-col items-center justify-center p-3 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-cyan-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{cert.title}</h4>
                    <p className="text-gray-600 text-xs">{cert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105">
                <CalendarDays className="w-5 h-5" />
                View Upcoming Programs
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105">
                <Download className="w-5 h-5" />
                Download Program Brochure
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;