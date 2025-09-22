import React, { useState, useEffect, useRef } from 'react';

// --- Data for the Awards Section ---
const awardsData = [
  {
    title: "The GlobalCybersherpa 100",
    organization: "World Economic Forum",
    description: " An annual recognition of the most impactful and visionary CISOs, nominated by peers and selected by an independent global panel.",
    imagePath: "/images/1awards.webp" 
  },
  {
    title: "Industry Leadership Program of the Year",
    organization: "CyberSecurity Excellence Awards",
    description: "Top-rated executive development program in the cybersecurity industry.",
    imagePath: "/images/2awards.jpg"
  },
  {
    title: "Innovation in Security Education",
    organization: "InfoSec Awards",
    description: "Pioneering approach to strategic cybersecurity leadership training.",
    imagePath: "/images/3awards.webp"
  }
];

// Data for the animated stats section
const recognitions = [
  {
    label: "Member Satisfaction",
    description: "Highest rated cybersecurity leadership program globally"
  },
  {
    label: "Industry Awards",
    description: "Recognition from leading cybersecurity organizations"
  },
  {
    label: "Ranked Program",
    description: "Top-rated executive development program (CyberSeek)",
  },
  {
    label: "Success Stories",
    description: "CISOs accelerated to new leadership positions"
  }
];

// --- The Main React Component ---
const AwardsAndRecognition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated counter function
  const animateCounter = (
    end: number,
    duration: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutCubic * end);
      setCounter(currentValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer to detect when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: reset when it goes out of view
          setIsVisible(false);
          setSatisfactionCount(0);
          setAwardsCount(0);
          setSuccessCount(0);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Start animations when component becomes visible
  useEffect(() => {
    if (isVisible) {
      const timeout1 = setTimeout(() => animateCounter(95, 2200, setSatisfactionCount), 200);
      const timeout2 = setTimeout(() => animateCounter(50, 1800, setAwardsCount), 600);
      const timeout3 = setTimeout(() => animateCounter(500, 2500, setSuccessCount), 1000);
      
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [isVisible]);

  return (
    <section id="awards" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
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
            Industry-leading recognition for excellence in cybersecurity leadership development.
          </p>
        </div>

        {/* Responsive Grid for Award Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={award.imagePath}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Image';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 h-14">
                  {award.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  {award.organization}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Stats with Animation */}
        <div ref={statsRef} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30">
          <h3 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 mb-2 transition-all duration-500 ${isVisible ? 'scale-110' : 'scale-100'}`}>
                  {index === 0 && `${satisfactionCount}%`}
                  {index === 1 && `${awardsCount}+`}
                  {index === 2 && '#1'}
                  {index === 3 && `${successCount}+`}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{recognition.label}</h4>
                <p className="text-gray-300 text-sm">{recognition.description}</p>
              </div>
            ))}
          </div>
          {isVisible && (
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AwardsAndRecognition;

