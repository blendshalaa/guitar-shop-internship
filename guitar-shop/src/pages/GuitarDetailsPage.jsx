import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_GUITAR_DETAILS } from '../graphql/queries';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { ArrowLeft, Loader2, AlertCircle, Music, Settings, Guitar } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '../components/Footer';
import '../App.css'

const GuitarDetailsPage = () => {
  const { language } = useLanguage();
  const { brandId, modelId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('specs');
  const [musiciansToShow, setMusiciansToShow] = useState(2);

  const { loading, error, data } = useQuery(GET_GUITAR_DETAILS, {
    variables: { brandId, modelId },
  });

  const guitar = data?.findUniqueModel;

  const handleLoadMoreMusicians = () => {
    setMusiciansToShow(prev => prev + 2);
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

  if (!guitar) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-gray-500">{getTranslation(language, 'noResults')}</p>
        </div>
      </div>
    );
  }

  const visibleMusicians = guitar.musicians.slice(0, musiciansToShow);
  const hasMoreMusicians = musiciansToShow < guitar.musicians.length;

  return (
    <div className="min-h-screen flex flex-col">
     <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
  <button
    onClick={() => navigate('/')}
    className="flex items-center gap-2 text-gray-800  "
  >
    <ArrowLeft className="w-5 h-5" />
    <span className="font-medium text-sm">{getTranslation(language, 'back') || 'Back'}</span>
  </button>

  <div className="bg-[#FF6428] text-white px-4 py-2 rounded-full ">
    <LanguageSwitcher />
  </div>
</header>

      <main className="flex-1 max-w-6xl mx-auto px-8 py-32 w-full">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gradient-to-r from-gray-50 to-gray-100">
            <div>
              <img 
                src={guitar.image} 
                alt={guitar.name} 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{guitar.name}</h2>
              <p className="text-xl text-gray-600 mb-2">{guitar.type}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{guitar.description}</p>
              <p className="text-3xl font-bold text-[#FF6428]">${guitar.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex gap-4 mb-8 border-b-2 border-gray-200">
              <button
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-200 ${
                  activeTab === 'specs' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                <Settings className="w-5 h-5" />
                {getTranslation(language, 'specs')}
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-200 ${
                  activeTab === 'musicians' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('musicians')}
              >
                <Music className="w-5 h-5" />
                {getTranslation(language, 'musicians')}
              </button>
            </div>

            <div>
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{getTranslation(language, 'body')}</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.bodyWood}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{getTranslation(language, 'neck')}</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.neckWood}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{getTranslation(language, 'fingerboard')}</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.fingerboardWood}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{getTranslation(language, 'pickups')}</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.pickups}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tuners</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.tuners}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Scale Length</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.scaleLength}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{getTranslation(language, 'bridge')}</h4>
                    <p className="text-gray-600 leading-relaxed">{guitar.specs.bridge}</p>
                  </div>
                </div>
              )}

              {activeTab === 'musicians' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleMusicians.map((musician, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={musician.musicianImage} 
                            alt={musician.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{musician.name}</h4>
                          <p className="text-gray-600 text-sm">{musician.bands.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {hasMoreMusicians && (
                    <div className="text-center">
                      <button onClick={handleLoadMoreMusicians} className="btn-primary">
                        {getTranslation(language, 'loadMore')}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuitarDetailsPage; 