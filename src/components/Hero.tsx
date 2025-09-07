import React from 'react';
import { ChevronDown, Zap, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-16 md:pt-0">
        {/* Main Content */}
        <div className="mb-8">
          {/* <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 animate-fade-in" data-aos="zoom-in-up" data-aos-duration="1800" data-aos-easing="ease-out-back">
            Cyber Sherpa Coun
          </h1> */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
            Command...Collaborate...Secure the Future.....
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
            Join an exclusive community of cybersecurity leaders shaping the future of digital defense
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" data-aos-easing="ease-out-back">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Strategic Excellence</h3>
            <p className="text-gray-300 text-sm">Advanced frameworks for cybersecurity leadership</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1200" data-aos-easing="ease-out-back">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Elite Network</h3>
            <p className="text-gray-300 text-sm">Connect with top-tier security executives</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" data-aos-easing="ease-out-back">
            <Zap className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Innovation Focus</h3>
            <p className="text-gray-300 text-sm">Cutting-edge insights and emerging technologies</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="1000" data-aos-easing="ease-out-back">
          <button
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Become a Member
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;