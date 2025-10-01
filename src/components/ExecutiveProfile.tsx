import React from 'react';
import { openFormInNewTab } from '../utils/formUtils';

const ExecutiveProfile: React.FC = () => {
  // Update the image URL to use cio.jpg
  const executiveImageUrl = "/images/cio.jpg"; 
  // Define the new lighter blue color for cleaner use
  const primaryBlue = '#3B82F6'; // Lighter blue color

  return (
    // CHANGE: Updated the background to a lighter blue gradient
    <section 
      id="leadership"
      className="py-20 md:py-28 font-sans transition-all duration-500 bg-gradient-to-br from-blue-50 via-blue-100 to-sky-100" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Advisory Leadership That Shapes the Future
          </h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Image Section */}
          <div className="lg:w-1/3 relative overflow-hidden bg-gray-200">
            <img 
              src={executiveImageUrl} 
              alt="Executive Profile Portrait"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Right Side: Text and Buttons Section */}
          <div className="lg:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Content */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                Led by elite CISOs and security visionaries, our council defines the frontier of Cyber Strategy, Innovation, and Global Resilience. Their collective insight powers Transformation, Trust, and Tactical Foresight for tomorrow's enterprise.
              </p>
            </div>

            {/* Buttons - Modern Redesign with Attractive Hover Effects */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              
              {/* Button 1: Meet the Advisory Board (Modern Outline with Slide Effect) */}
              <button 
                onClick={() => openFormInNewTab()}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1"
                style={{
                    border: `2px solid ${primaryBlue}`,
                    color: primaryBlue,
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
                }}
              >
                {/* Sliding background effect */}
                <span 
                  className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out group-hover:w-full rounded-full"
                ></span>
                
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></span>
                
                {/* Button text */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Meet the Advisory Board
                </span>
              </button>

              {/* Button 2: Join the Leadership Circle (Modern Solid with Glow Effect) */}
              <button 
                onClick={() => openFormInNewTab()}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1"
                style={{ 
                    background: `linear-gradient(135deg, ${primaryBlue}, #2563eb)`,
                    boxShadow: `0 8px 25px rgba(59, 130, 246, 0.3)`,
                }}
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                
                {/* Pulse ring effect */}
                <span className="absolute inset-0 rounded-full bg-blue-400/30 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out"></span>
                
                {/* Floating particles effect */}
                <span className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-100"></span>
                <span className="absolute top-3 right-6 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-800 delay-200"></span>
                <span className="absolute bottom-2 right-4 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-600 delay-300"></span>
                
                {/* Button text with subtle animation */}
                <span className="relative z-10 transition-all duration-300 group-hover:text-shadow">
                  Join the Leadership Circle
                </span>
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                          boxShadow: `0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                      }}
                ></span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveProfile;
