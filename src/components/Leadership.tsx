import React, { useState, useEffect, useRef } from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

const Leadership: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [leadersCount, setLeadersCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);

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

  // Clear any existing animation timeouts
  const clearAnimationTimeouts = () => {
    animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
    animationTimeouts.current = [];
  };

  // Reset counters to 0
  const resetCounters = () => {
    setYearsCount(0);
    setCountriesCount(0);
    setLeadersCount(0);
  };

  // Intersection Observer to detect when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset counters and clear any existing animations
          clearAnimationTimeouts();
          resetCounters();
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit earlier
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      clearAnimationTimeouts();
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animated counter function
  const animateCounter = (
    start: number,
    end: number,
    duration: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let startTimestamp: number | null = null;
    let animationId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(start + (end - start) * easeOutCubic);
      
      setCounter(currentValue);
      
      if (progress < 1) {
        animationId = window.requestAnimationFrame(step);
      }
    };
    
    animationId = window.requestAnimationFrame(step);
    
    // Return cleanup function
    return () => {
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  };

  // Start animations when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Clear any existing timeouts
      clearAnimationTimeouts();
      
      // Create new animation timeouts with staggered delays
      const timeout1 = setTimeout(() => {
        animateCounter(0, 100, 2000, setYearsCount);
      }, 200);
      
      const timeout2 = setTimeout(() => {
        animateCounter(0, 15, 1800, setCountriesCount);
      }, 600);
      
      const timeout3 = setTimeout(() => {
        animateCounter(0, 500, 2500, setLeadersCount);
      }, 1000);
      
      // Store timeouts for cleanup
      animationTimeouts.current = [timeout1, timeout2, timeout3];
    } else {
      // Clear animations when not visible
      clearAnimationTimeouts();
      resetCounters();
    }
  }, [isVisible]);

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
            Advisory Leadership That Shapes the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Led by elite CISOs and security visionaries, our council defines the frontier of cyber strategy, innovation, and global resilience. Their collective insight powers transformation, trust, and tactical foresight for tomorrow's enterprise.
          </p>
        </div>

        {/* Executive Leadership */}
        

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
            
            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className={`text-4xl font-bold text-cyan-400 mb-2 transition-all duration-500 ${isVisible ? 'scale-110' : 'scale-100'}`}>
                  {yearsCount}+
                  <span className="text-2xl ml-1">Years</span>
                </div>
                <div className="text-gray-300 font-medium">Combined Experience</div>
              </div>
              <div className="text-center group">
                <div className={`text-4xl font-bold text-purple-400 mb-2 transition-all duration-500 ${isVisible ? 'scale-110' : 'scale-100'}`}>
                  {countriesCount}
                  <span className="text-2xl ml-1">Countries</span>
                </div>
                <div className="text-gray-300 font-medium">Global Expertise</div>
              </div>
              <div className="text-center group">
                <div className={`text-4xl font-bold text-green-400 mb-2 transition-all duration-500 ${isVisible ? 'scale-110' : 'scale-100'}`}>
                  {leadersCount}+
                  <span className="text-2xl ml-1">Leaders</span>
                </div>
                <div className="text-gray-300 font-medium">Developed</div>
              </div>
            </div>

            {/* Additional visual feedback */}
            {isVisible && (
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50 min-w-[280px]">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="group-hover:translate-x-1 transition-transform duration-200">Meet the Advisory Board</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
          </button>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 min-w-[280px]">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="group-hover:-translate-x-1 transition-transform duration-200">Join the Leadership Circle</span>
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;