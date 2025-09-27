import React, { useState } from 'react';

const StayConnected: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      setShowNotification(true);
      setEmail(''); // Clear the input
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    } else {
      // You could add validation message here if needed
      alert('Please enter a valid email address');
    }
  };

  return (
    <section className="relative overflow-hidden w-full">
      {/* Full width image that covers the entire section */}
      <img 
        src="/images/stayconnected.png" 
        alt="Stay Connected" 
        className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[450px]"
        style={{ display: 'block' }}
      />
      
      {/* Stay Connected Card Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
        <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-700/50 max-w-xs sm:max-w-sm md:max-w-md w-full transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:from-gray-800 hover:via-gray-700 hover:to-gray-800">
          {/* Card Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              STAY CONNECTED
            </h2>
            <p className="text-gray-300 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
              Get exclusive insights and updates from cybersecurity leaders
            </p>
          </div>

          {/* Email Input Section */}
          <div className="space-y-4 sm:space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 group-hover:border-cyan-500 group-hover:bg-gray-700/50 text-sm sm:text-base"
              />
            </div>
            
            {/* Submit Button */}
            <button 
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-base sm:text-lg"
            >
              Subscribe Now
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
        </div>
      </div>

      {/* Success Notification Popup */}
      {showNotification && (
        <div className="fixed top-4 sm:top-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 transform transition-all duration-500 ease-out animate-in slide-in-from-top sm:slide-in-from-right">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl border border-green-400/50 backdrop-blur-lg">
            <div className="flex items-center space-x-3">
              {/* Success Icon */}
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              {/* Notification Content */}
              <div className="flex-1">
                <p className="font-semibold text-sm">Successfully Subscribed!</p>
                <p className="text-xs text-green-100">You'll receive exclusive cybersecurity insights soon.</p>
              </div>
              {/* Close Button */}
              <button 
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 text-green-100 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StayConnected;
