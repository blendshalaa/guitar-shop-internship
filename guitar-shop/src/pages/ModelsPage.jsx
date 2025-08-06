import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_MODELS } from '../graphql/queries';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { ArrowLeft, Search, Filter, Loader2, AlertCircle, Guitar } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '../components/Footer';
import '../App.css'

const ModelsPage = () => {
  const { language } = useLanguage();
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [displayedModels, setDisplayedModels] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);


  const sortBy = { field: 'name', order: 'ASC' };

  const { loading, error, data } = useQuery(GET_MODELS, {
    variables: { brandId, sortBy },
  });

  useEffect(() => {
    if (data?.findBrandModels) {
      let filtered = data.findBrandModels.filter((model) => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || model.type === selectedType;
        return matchesSearch && matchesType;
      });
      setDisplayedModels(filtered);
      setVisibleCount(12);
    }
  }, [data, searchTerm, selectedType]);


  const loadMore = useCallback(() => {
    if (visibleCount < displayedModels.length && !isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleCount(prev => prev + 12);
        setIsLoadingMore(false);
      }, 500);
    }
  }, [visibleCount, displayedModels.length, isLoadingMore]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore]);

  const handleModelClick = (modelId) => {
    navigate(`/brand/${brandId}/guitar/${modelId}`);
  };

  const guitarTypes = data?.findBrandModels 
    ? Array.from(new Set(data.findBrandModels.map((model) => model.type)))
    : [];

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

  const visibleModels = displayedModels.slice(0, visibleCount);
  const hasMore = visibleCount < displayedModels.length;

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
        <div className="flex gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder={getTranslation(language, 'search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none outline-none text-base min-w-[200px] placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border-none outline-none text-base min-w-[200px]"
            >
              <option value="all">{getTranslation(language, 'allTypes')}</option>
              {guitarTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {visibleModels.map((model) => (
            <div
              key={model.id}
              className="card overflow-hidden cursor-pointer"
              onClick={() => handleModelClick(model.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{model.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{model.type}</p>
                <p className="text-2xl font-bold text-[#FF6428]">${model.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

      
        {hasMore && (
          <div ref={loadMoreRef} className="h-24 flex items-center justify-center mt-8">
            {isLoadingMore && (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-8 h-8 text-gray-500 animate-spin" />
                <p className="text-gray-600">{getTranslation(language, 'loading')}</p>
              </div>
            )}
          </div>
        )}

        {visibleModels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{getTranslation(language, 'noResults')}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ModelsPage; 