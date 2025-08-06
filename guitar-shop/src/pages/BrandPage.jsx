import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_BRANDS } from '../graphql/queries';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { Guitar, Loader2, AlertCircle } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '../components/Footer';
import '../App.css';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import BrowseSection from '../components/BrowseSection';

const BrandsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_BRANDS);

  const handleBrandClick = (brandId) => {
    navigate(`/brand/${brandId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <Loader2 className="w-12 h-12 text-gray-500 animate-spin" />
          <p className="text-gray-600">{getTranslation(language, 'loading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <p className="text-red-600">{getTranslation(language, 'error')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Language Switcher top-right */}
      <div className="relative">
        <div className="absolute top-6 right-6 z-10 bg-[#FF6428] rounded-md p-1">
          <LanguageSwitcher />
        </div>
      </div>

      <HeroSection />

      {/* Brands Section */}
      <main className="flex-1 max-w-6xl mx-auto px-8 py-12 w-full mt-60">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {getTranslation(language, 'brands').replace('Best Brands', '')}
            <span style={{ color: '#FF6428' }}>{'Best Brands'}</span>
          </h2>

          <p className="text-lg text-gray-600">{getTranslation(language, 'brandDescription')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data?.findAllBrands?.slice(0, 8).map((brand) => (
            <div
              key={brand.id}
              className="card p-8 text-center cursor-pointer group"
              onClick={() => handleBrandClick(brand.id)}
            >
              <div className="mb-6">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-[120px] max-h-[80px] object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{brand.name}</h3>
              {brand.origin && (
                <p className="text-sm text-gray-500 mb-3">
                  {/* Example: "From USA" */}
                  {`${getTranslation(language, 'from') || 'From'} ${brand.origin}`}
                </p>
              )}
              {brand.categories && brand.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {brand.categories.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <FeatureSection />
      <BrowseSection />

      <Footer />
    </div>
  );
};

export default BrandsPage;
