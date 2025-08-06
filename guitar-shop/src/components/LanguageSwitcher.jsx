import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mk', name: 'Македонски' },
    { code: 'al', name: 'Shqip' },
  ];

  return (
    <div className="flex items-center gap-2  px-4 py-2 rounded-lg">
      <Globe className="w-5 h-5 text-white" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className=" border-none text-white text-sm font-medium cursor-pointer outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher; 