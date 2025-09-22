import React from 'react';

// --- Data for the Four Pillars ---
// Updated with your specific images
const pillarData = [
  {
    id: 1,
    title: 'Resilience Leadership',
    imageUrl: '/images/leadershipImage.png',
  },
  {
    id: 2,
    title: 'Collaborative Intelligence',
    imageUrl: '/images/CollaborativeIntelligence.jpg',
  },
  {
    id: 3,
    title: 'Secure Innovation',
    imageUrl: '/images/innovationImage.jpg',
  },
  {
    id: 4,
    title: 'Boardroom Integration',
    imageUrl: '/images/Boardroom Integration.webp',
  },
];

// --- The Main React Component ---
const StrategicPillarsPage: React.FC = () => {
  return (
    <>
      {/* Keyframes for animations */}
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="w-full bg-gray-100 font-sans py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">
              Our Strategic Pillars
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding our mission to build a secure and resilient digital future.
            </p>
          </div>

          {/* Grid container for the pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillarData.map((pillar, index) => (
              <div
                key={pillar.id}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                      target.alt = `${pillar.title} - Image not available`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Number circle */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 shadow-lg border-2 border-white transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                  {`0${pillar.id}`}
                </div>

                {/* Content container */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 h-16 flex items-center">
                    {pillar.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategicPillarsPage;