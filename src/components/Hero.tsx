import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen sm:h-[95vh] md:h-screen flex items-center justify-center relative bg-blue-900 pt-20 sm:pt-24 md:pt-[100px]">
      {/* Global CIO Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Global-cio-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Minimal overlay for text readability only */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Main Content */}
        <div className="mb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold">
            Command.. <br /> Collaborate.. <br /> Secure the Future...
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-normal">
            The World's Fastest-Growing Community
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 font-normal">
            An elite network of cyber leaders shaping tomorrow's digital defense and intelligent risk strategies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
          <button
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg"
          >
            Become a Member
          </button>
          <button
            onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-lg"
          >
            Programs Track
          </button>
        </div>

        {/* Scroll Indicator - Centered */}
        <div className="flex justify-center">
          <button
            onClick={scrollToNext}
            className="text-white hover:text-gray-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;