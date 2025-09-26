import React from 'react';

// --- Main Component Data & Structure ---

const pillarData = [
  {
    number: '01',
    title: 'Our Mission',
    description: 'To cultivate a global network of cybersecurity leaders co-creating the future of secure digital transformation through intelligence sharing, strategic foresight, and innovation leadership.',
    iconSrc: '/images/mission.png',
    color: 'cyan',
  },
  {
    number: '02',
    title: 'Our Vision',
    description: 'To redefine the role of CISOs as not only guardians of security, but as enterprise enablers and architects of trust embedded in business decisions, digital strategy.',
    iconSrc: '/images/vission.png',
    color: 'orange',
  },
  {
    number: '03',
    title: 'Our Values',
    description: 'We stand for trust, integrity, and collaboration—championing knowledge sharing and ethical responsibility to secure the digital future.',
    iconSrc: '/images/value.png',
    color: 'pink',
  },
  {
    number: '04',
    title: 'Our Goals',
    description: 'To build resilient and sustainable digital ecosystems by empowering leaders, fostering collaboration, and driving innovation against emerging cyber threats.',
    iconSrc: '/images/goal.png',
    color: 'blue',
  },
];

const colorVariants = {
    cyan: {
        bg: 'bg-gradient-to-br from-cyan-400 to-teal-500',
        shadow: 'shadow-cyan-500/50',
        base: 'from-cyan-500 to-teal-600'
    },
    orange: {
        bg: 'bg-gradient-to-br from-orange-400 to-amber-500',
        shadow: 'shadow-orange-500/50',
        base: 'from-orange-500 to-amber-600'
    },
    pink: {
        bg: 'bg-gradient-to-br from-pink-500 to-rose-500',
        shadow: 'shadow-pink-500/50',
        base: 'from-pink-600 to-rose-600'
    },
    blue: {
        bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        shadow: 'shadow-blue-500/50',
        base: 'from-blue-600 to-indigo-700'
    }
}

const StrategicPillars: React.FC = () => {
  return (
    <section id="mission" className="min-h-screen font-sans flex flex-col items-center justify-center p-4 lg:p-8 relative">
      {/* Blurred Background Image Layer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/backgroundImageForMission.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)'
        }}
      ></div>
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content - Sharp and Clear */}
      <div className="relative z-10 w-full max-w-7xl lg:mt-[-3rem] mt-16 sm:mt-20">
        <header className="text-center mb-12 lg:mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-offset="50" data-aos-easing="ease-out">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider mb-4">OUR VISION & MISSION</h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium tracking-wide">The Values That Drive Us Forward</p>
        </header>

        <main className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-32">
            {pillarData.map((pillar, index) => {
              const variant = colorVariants[pillar.color as keyof typeof colorVariants];
              return (
                <div 
                  key={pillar.number} 
                  className="relative flex justify-center group cursor-pointer pt-8 pb-8"
                  data-aos="fade-up" 
                  data-aos-duration="500" 
                  data-aos-delay={index * 100}
                  data-aos-offset="100"
                  data-aos-easing="ease-out"
                >
                  <div className="relative pt-12 w-full max-w-sm transition-transform duration-300 ease-in-out group-hover:-translate-y-3">
                    {/* Angled Base */}
                    <div className={`absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-r ${variant.base} rounded-lg transform skew-y-[-4deg] transition-transform duration-300 group-hover:skew-y-[-6deg] group-hover:scale-105`}></div>

                    {/* Main Content Card */}
                    <div className="relative bg-white rounded-xl shadow-lg p-6 text-center z-10 transition-shadow duration-300 group-hover:shadow-2xl h-90 flex flex-col">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${variant.bg} shadow-lg ${variant.shadow} transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6`}>
                          <img 
                            src={pillar.iconSrc} 
                            alt={pillar.title}
                            className="w-12 h-12 object-contain filter brightness-0 invert"
                            onError={(e) => {
                              // Fallback to a simple icon if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = '<div class="w-12 h-12 bg-white rounded-full opacity-80"></div>';
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="pt-12 flex-1 flex flex-col justify-between">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">{pillar.title}</h2>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                        <div className="mt-6">
                          <hr className="border-t border-gray-200 mb-4" />
                          <p className="text-3xl font-bold text-gray-300">{pillar.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

export default StrategicPillars;