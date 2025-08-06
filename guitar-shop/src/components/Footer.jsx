import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#121212] text-gray-400">
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

   
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {getTranslation(language, 'title')}
          </h3>
        </div>


        <div>
          <h4 className="text-white font-semibold mb-3">{getTranslation(language, 'pages')}</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'store')}</a></li>
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'collections')}</a></li>
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'support')}</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-semibold mb-3">{getTranslation(language, 'products')}</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'copyright')}</a></li>
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'terms')}</a></li>
            <li><a href="#" className="hover:text-white">{getTranslation(language, 'privacyPolicy')}</a></li>
          </ul>
        </div>

 
        <div>
          <h4 className="text-white font-semibold mb-3">{getTranslation(language, 'followUs')}</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#FF6428] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#FF6428] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#FF6428] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-8 py-6 text-center text-xs text-gray-500">
          {getTranslation(language, 'footer')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
