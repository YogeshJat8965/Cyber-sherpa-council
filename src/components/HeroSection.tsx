import React from 'react';

const HeroText = () => {
  return (
    <div className="relative flex items-center justify-center h-96 md:h-[500px] bg-gray-900 text-white p-4 overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGY5MXVyeTBrNWRjazhxODZ2MXgyZGttZjFodnI3ZzRtY3c0cmllYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MBVRgrfOBPeH5zNWJU/giphy.gif"
          alt="Background animation of network connections"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center font-sans">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-4">
          Command..Collaborate..Secure the Future...
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-normal">
          An elite network of cyber leaders shaping tomorrow’s digital defense and intelligent risk strategies.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
