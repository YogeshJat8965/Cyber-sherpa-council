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
  CalendarDays
} from 'lucide-react';

// --- The Main React Component ---
const ProgramTracks: React.FC = () => {
  // Redesigned tracks with consistent structure and length
  const tracks = [
    {
      icon: TrendingUp,
      title: 'CISO Ascend',
      // description: 'Transform into a strategic business leader with boardroom influence and executive brand elevation.',
      features: ['Executive storytelling & communication', 'M&A security strategy', 'Crisis leadership management', 'Personal branding & thought leadership'],
      color: 'bg-cyan-500'
    },
    {
      icon: Gamepad2,
      title: 'The CISO Arena',
      // description: 'Master real-time adversarial scenarios through gamified command center simulations.',
      features: ['Live crisis drill simulations', 'SOC optimization laboratories', 'AI-based cyber warfare modeling', 'Zero-day response protocols'],
      color: 'bg-red-500'
    },
    {
      icon: BrainCircuit,
      title: 'CyberThink',
      // description: 'Shape the future of digital trust through exclusive strategy exchanges and policy development.',
      features: ['Quarterly strategic councils', 'Policy whitepaper development', 'Government collaboration tracks', 'Regulatory foresight planning'],
      color: 'bg-indigo-500'
    },
    {
      icon: Orbit,
      title: 'Sentinel Studio',
      // description: 'Stay ahead with cutting-edge security innovations and deep-tech immersion programs.',
      features: ['Deep-dive GenAI security sessions', 'Blockchain security architecture', 'Zero-trust implementation', 'Post-quantum cryptography'],
      color: 'bg-green-500'
    },
    {
      icon: HeartHandshake,
      title: 'CyberEdge Mentorship',
      // description: 'Build future cybersecurity leaders through dual-path mentorship and knowledge transfer.',
      features: ['Shadow-a-CISO program', 'Women in cybersecurity initiatives', 'DEI+ leadership development pods', 'Cross-generational mentoring'],
      color: 'bg-pink-500'
    },
  
    {
      icon: BadgeCheck,
      title: 'CISO Vanguard Certification',
      // description: 'Exclusive certification for holistic leadership in cognitive security environments.',
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
    <>
      {/* Modern CSS styles for flip animation */}
      <style>{`
        .flip-card-container {
          perspective: 1200px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          border-radius: 1rem;
        }
        
        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }
        
        .flip-card-container:hover .flip-card-front,
        .flip-card-container:hover .flip-card-back {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }
        
        .flip-card-front {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid transparent;
          z-index: 2;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          z-index: 1;
        }
        
        /* Front side animations */
        .flip-icon {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .flip-card-container:hover .flip-icon {
          transform: scale(1.15) rotate(5deg);
        }
        
        .flip-title {
          transition: all 0.3s ease;
        }
        
        .flip-card-container:hover .flip-title {
          transform: translateY(-3px);
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        /* Back side content - Always visible when card is flipped */
        .back-title {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .key-point {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .key-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .key-point span {
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.5;
        }
        
        /* Decorative elements */
        .corner-decoration {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.4);
        }
        
        .corner-top-right {
          top: 12px;
          right: 12px;
          border-left: none;
          border-bottom: none;
          border-top-right-radius: 8px;
        }
        
        .corner-bottom-left {
          bottom: 12px;
          left: 12px;
          border-right: none;
          border-top: none;
          border-bottom-left-radius: 8px;
        }
        
        /* Hover indicator animation */
        .hover-indicator {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg" data-aos="fade-up" data-aos-duration="600" data-aos-offset="50" data-aos-easing="ease-out">
            Program Tracks
          </h2>
        </div>

        {/* Modern Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            
            // Color mapping for gradients
            const colorMap: { [key: string]: string } = {
              'bg-cyan-500': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
              'bg-red-500': 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              'bg-indigo-500': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              'bg-green-500': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              'bg-pink-500': 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
              'bg-blue-500': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
            };
            
            return (
              <div
                key={index}
                className="flip-card-container h-72"
                data-aos="fade-up" 
                data-aos-duration="400" 
                data-aos-delay={index * 100}
                data-aos-offset="100"
                data-aos-easing="ease-out"
              >
                <div className="flip-card-inner">
                  {/* Front Side - Logo and Title Only */}
                  <div className="flip-card-front">
                    <div className="h-full flex flex-col items-center justify-center p-8 relative">
                      <div className={`flip-icon w-24 h-24 rounded-full ${track.color} flex items-center justify-center mb-6 shadow-xl`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="flip-title text-2xl font-bold text-gray-800 text-center leading-tight">
                        {track.title}
                      </h3>
                      
                      {/* Subtle hover indicator */}
                      <div className="absolute bottom-4 right-4 text-gray-300 opacity-50">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Key Points */}
                  <div 
                    className="flip-card-back"
                    style={{
                      background: colorMap[track.color] || colorMap['bg-blue-500']
                    }}
                  >
                    <div className="h-full flex flex-col justify-center p-8 text-white relative">
                      <h4 className="back-title text-xl font-bold mb-8 text-center">Key Focus Areas</h4>
                      
                      <div className="space-y-4">
                        {track.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="key-point flex items-start space-x-4">
                            <div className="key-bullet"></div>
                            <span className="text-sm font-medium leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Decorative corners */}
                      <div className="corner-decoration corner-top-right"></div>
                      <div className="corner-decoration corner-bottom-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="500" data-aos-offset="80" data-aos-easing="ease-out">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">CISO Vanguard Certification Pathway</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center px-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center group p-4"
                  data-aos="zoom-in" 
                  data-aos-duration="350" 
                  data-aos-delay={index * 100}
                  data-aos-offset="50"
                  data-aos-easing="ease-out"
                >
                  <div className="w-40 h-40 bg-gray-100 border-2 border-cyan-400 rounded-full flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-cyan-500 mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{cert.title}</h4>
                    <p className="text-gray-600 text-xs">{cert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-duration="400" data-aos-offset="50" data-aos-easing="ease-out">
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
    </>
  );
};

export default ProgramTracks;