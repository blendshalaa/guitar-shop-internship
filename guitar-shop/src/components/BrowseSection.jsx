import React from 'react';
import '../App.css';
import appstore from '../assets/appstore.png';
import appstore2 from '../assets/appstore2.png';
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function BrowseSection() {
  const { language } = useLanguage();

  return (
    <section className="bg-white w-full px-8 py-60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {getTranslation(language, 'browseBuy')} <span className="text-[#FF6428]">VibeStrings</span>.
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            <img src={appstore} alt="Google Play" className="h-10" />
            <img src={appstore2} alt="App Store" className="h-10" />
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="absolute w-20 h-20 md:w-72 md:h-42 rounded-full bg-[#FF6428] z-0"></div>

          <div className="flex gap-4 z-10">
            <img src={mobile1} alt="Mobile Screen 1" className="w-32 md:w-40 rounded-lg" />
            <img src={mobile2} alt="Mobile Screen 2" className="w-32 md:w-40 rounded-lg" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BrowseSection;
