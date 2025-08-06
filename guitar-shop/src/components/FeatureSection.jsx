import React from 'react';
import { Square, Truck, CreditCard } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function FeatureSection() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#121212] h-[508px] w-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {getTranslation(language, 'whyTry')} <span className="text-[#FF6428]">VibeStrings</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">

          <div>
            <Square className="mx-auto mb-4 w-12 h-12 text-white" />
            <h3 className="text-xl font-semibold mb-2">{getTranslation(language, 'premiumCraftTitle')}</h3>
            <p className="text-gray-400 text-sm">{getTranslation(language, 'premiumCraftDesc')}</p>
          </div>

          <div>
            <Truck className="mx-auto mb-4 w-12 h-12 text-white" />
            <h3 className="text-xl font-semibold mb-2">{getTranslation(language, 'fastShippingTitle')}</h3>
            <p className="text-gray-400 text-sm">{getTranslation(language, 'fastShippingDesc')}</p>
          </div>

          <div>
            <CreditCard className="mx-auto mb-4 w-12 h-12 text-white" />
            <h3 className="text-xl font-semibold mb-2">{getTranslation(language, 'securePaymentTitle')}</h3>
            <p className="text-gray-400 text-sm">{getTranslation(language, 'securePaymentDesc')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
