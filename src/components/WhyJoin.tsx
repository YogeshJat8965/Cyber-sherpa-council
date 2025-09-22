import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data for the "Why Join Us" section ---
const joinReasons = [
  {
    title: 'Executive Networking',
    description: 'Connect with global security leaders to exchange best practices and strategic insight.',
    imagePath: '/images/Executive Networking.jpg', 
  },
  {
    title: 'Events',
    description: 'Participate in curated events at world-class venues that foster trust and transformation.',
    imagePath: '/images/Events.jpg',
  },
  {
    title: 'Actionable Intelligence',
    description: 'Access exclusive reports, thought leadership, and threat intelligence.',
    imagePath: '/images/Actionable Intelligence.jpg',
  },
  {
    title: 'Influence',
    description: 'Be acknowledged through industry awards and advisory opportunities.',
    imagePath: '/images/Influence.jpg',
  },
  {
    title: 'Cross-Sector Collaboration',
    description: 'Collaborate across sectors including finance, healthcare, government, telecom, energy, retail etc.',
    imagePath: '/images/Cross-Sector Collaboration .avif',
  },
];

// --- The Main React Component ---
const WhyJoinUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalItems = joinReasons.length;

  // Auto-sliding functionality - Customizable speed
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3500); // Current: 3.5 seconds (you can change this)
    // Fast: 2000ms (2 seconds)
    // Medium: 3500ms (3.5 seconds) 
    // Slow: 5000ms (5 seconds)
    // Very slow: 7000ms (7 seconds)

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  const goPrev = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    // Resume auto-play after user interaction (customizable delay)
    setTimeout(() => setIsAutoPlaying(true), 6000); // Current: 6 seconds
    // Options: 3000ms (3s), 6000ms (6s), 10000ms (10s)
  };

  const goNext = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    // Resume auto-play after user interaction (customizable delay)
    setTimeout(() => setIsAutoPlaying(true), 6000); // Current: 6 seconds
    // Options: 3000ms (3s), 6000ms (6s), 10000ms (10s)
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="why-join-us" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Why Join Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock unparalleled opportunities for growth, collaboration, and strategic leadership in the cybersecurity domain.
          </p>
        </div>

        <div 
          className="relative w-full h-[28rem] flex items-center justify-center mb-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container - Fixed positioning to prevent shifting */}
          <div className="relative w-full max-w-6xl h-full">
            {joinReasons.map((reason, index) => {
              const offset = (index - currentIndex + totalItems) % totalItems;
              
              let transform = '';
              let zIndex = 0;
              let opacity = 0;
              let visibility = 'hidden';

              if (offset === 0) {
                // Center card
                transform = 'translateX(-50%) scale(1.05)';
                zIndex = 20;
                opacity = 1;
                visibility = 'visible';
              } else if (offset === 1 || offset === totalItems - 1) {
                // Side cards
                const xTranslate = offset === 1 ? 'calc(-50% + 320px)' : 'calc(-50% - 320px)';
                transform = `translateX(${xTranslate}) scale(0.85)`;
                zIndex = 10;
                opacity = 0.7;
                visibility = 'visible';
              } else {
                // Hidden cards - completely hide them to prevent shifting
                transform = 'translateX(-50%) scale(0.7)';
                opacity = 0;
                visibility = 'hidden';
              }

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-0 w-80 md:w-96 h-full transition-all duration-700 ease-in-out"
                  // Transition speed options:
                  // duration-300 = 0.3s (very fast)
                  // duration-500 = 0.5s (fast) 
                  // duration-700 = 0.7s (current - smooth)
                  // duration-1000 = 1s (slow)
                  style={{ 
                    transform, 
                    zIndex, 
                    opacity
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden h-full group shadow-lg bg-gray-200">
                    <img
                      src={reason.imagePath}
                      alt={reason.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ imageRendering: 'crisp-edges' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/313D4F/FFFFFF?text=Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-200 mt-2 opacity-90">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-4 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator - Moved outside carousel container to prevent overlap */}
        <div className="flex justify-center space-x-3">
          {joinReasons.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 6000); // Current: 6 seconds
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;