import React from 'react';
import { Globe, TrendingUp, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-300/10 to-gray-400/10"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gray-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            About Cyber Sherpa Council
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            The <b>Cyber Sherpa Council</b> is a strategic leadership consortium uniting cybersecurity executives across Industries and Geographies. In an age of unprecedented Disruption and Innovation, we offer a carefully curated suite of programs designed to prepare today's cybersecurity leaders for tomorrow's Autonomous, AI-powered threat landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 border border-gray-400/20" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1400" data-aos-easing="ease-out-back">
              <h3 className="text-2xl font-bold text-black mb-4">Our Foundation</h3>
              <p className="text-black mb-4">
                Founded by industry veterans, the <b> Cyber Sherpa Council </b> brings together the most influential CISOs and Security Leaders from Fortune 500 companies, Government Agencies, and Innovative Startups.
              </p>
              <p className="text-black">
                We bridge the gap between Tactical Cybersecurity Operations and Strategic Business Leadership, Empowering our members to drive organizational transformation and resilience.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 border border-gray-400/20" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1400" data-aos-easing="ease-out-back">
              <h3 className="text-2xl font-bold text-black mb-4">Our Impact</h3>
              <p className="text-black mb-4">
                Through collaborative research, peer mentorship, and strategic advisory services, we've helped shape cybersecurity policies at the highest levels of government and industry.
              </p>
              <p className="text-black">
                Our members collectively protect over $2 trillion in organizational assets and serve millions of customers worldwide.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/images/cisouse.webp" 
              alt="Cyber Sherpa Council Leadership" 
              className="w-full max-w-md h-auto"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1200"
              data-aos-easing="ease-out-back"
              onError={(e) => {
                // Fallback styling if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback content if image fails to load */}
            <div className="hidden w-full max-w-md h-64 bg-gradient-to-br from-gray-400/20 to-gray-500/20 rounded-2xl border border-gray-500/30 items-center justify-center">
              <p className="text-gray-600 text-lg font-semibold">CISO Leadership</p>
            </div>
          </div>
        </div>

        {/* Static Call to Action Content */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-700 mb-4">Ready to Join the Elite?</h3>
          <p className="text-black mb-6 max-w-2xl mx-auto text-lg">
            Experience the difference that strategic cybersecurity leadership makes. Join a community that's shaping the future of digital security.
          </p>
          <button
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 text-lg"
          >
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
