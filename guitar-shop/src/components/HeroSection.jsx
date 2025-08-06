import React from 'react';
import '../App.css';
import img1 from '../assets/Butterfly.png';
import img2 from '../assets/heroimg.png';

const HeroSection = () => {
  return (
    <div className="relative bg-white px-8 md:px-16 pt-12 md:pt-20 overflow-hidden">


      <div className="w-full md:w-1/2 space-y-6 z-10 relative">
    <div className="flex items-center space-x-2">
  <img src={img1} alt="logo" className="w-10 h-10" />
  <span className="font-semibold text-xl text-gray-800">VibeStrings</span>
</div>
   

   
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Browse top quality <br />
        <span style={{ color: '#FF6428' }}>Guitars</span> online

        </h1>


        <p className="text-gray-500 text-sm md:text-base">
          Explore 50k+ latest collections of branded guitars online with VibeStrings.
        </p>
      </div>

      <div className="hidden md:block absolute top-0 right-0 mt-8 mr-8 z-0">
        <div className="rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 border-8 border-white shadow-lg">
          <img
            src={img2}
            alt="Guitar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
