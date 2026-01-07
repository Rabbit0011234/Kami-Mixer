
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Music, Mic2 } from 'lucide-react';
import { PortfolioCategory, PortfolioItem } from '../types';
import { generateMockPortfolio } from '../constants';

const ITEMS_PER_PAGE = 12;

const CATEGORY_IMAGES = {
  [PortfolioCategory.ARRANGEMENT]: 'https://images.unsplash.com/photo-1514525253344-a8135a43cf71?q=80&w=2000&auto=format&fit=crop',
  [PortfolioCategory.MIXING]: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
};

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const arrangementItems = generateMockPortfolio(PortfolioCategory.ARRANGEMENT);
  const mixingItems = generateMockPortfolio(PortfolioCategory.MIXING);

  const activeItems = selectedCategory === PortfolioCategory.ARRANGEMENT ? arrangementItems : mixingItems;
  const paginatedItems = activeItems.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(activeItems.length / ITEMS_PER_PAGE);

  const handleCategoryClick = (category: PortfolioCategory) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setTimeout(() => {
      const element = document.getElementById('portfolio-grid-top');
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="portfolio" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="selection-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-20 text-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-brandCyan font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                >
                  Showcase
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Portfolio</h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                  A curated collection of professional sound engineering and musical arrangements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {[PortfolioCategory.ARRANGEMENT, PortfolioCategory.MIXING].map((cat) => (
                  <motion.div
                    key={cat}
                    whileHover={{ scale: 1.02, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(cat)}
                    className="relative cursor-pointer group aspect-[4/5] md:aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 shadow-2xl"
                  >
                    <img 
                      src={CATEGORY_IMAGES[cat]} 
                      alt={cat}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-12">
                      <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                        {cat === PortfolioCategory.ARRANGEMENT ? <Music className="text-brandCyan" /> : <Mic2 className="text-brandCyan" />}
                        <span className="text-brandCyan font-bold text-sm tracking-widest uppercase">Explore Works</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-brandCyan transition-colors">
                        {cat}
                      </h3>
                      <p className="text-gray-300 text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                        {cat === PortfolioCategory.ARRANGEMENT ? 'Composition, MIDI & Backing Tracks' : 'Professional Vocal Post-Production'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              id="portfolio-grid-top"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen"
            >
              {/* Header for Category View */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-2 text-brandCyan font-bold text-xs uppercase tracking-widest hover:text-white transition-colors mb-6 group"
                  >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                    Back to categories
                  </button>
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 pb-3 leading-[1.1]">
                    {selectedCategory}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-2 rounded-full border border-white/10">
                  <button 
                    onClick={() => handleCategoryClick(PortfolioCategory.ARRANGEMENT)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === PortfolioCategory.ARRANGEMENT ? 'bg-white text-black' : 'hover:text-brandCyan'}`}
                  >
                    Arrangement
                  </button>
                  <button 
                    onClick={() => handleCategoryClick(PortfolioCategory.MIXING)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === PortfolioCategory.MIXING ? 'bg-white text-black' : 'hover:text-brandCyan'}`}
                  >
                    Mixing
                  </button>
                </div>
              </div>

              {/* Enhanced Immersive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
                {paginatedItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="group relative flex flex-col bg-gray-900/40 rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-brandCyan/30 hover:shadow-2xl hover:shadow-brandCyan/10 transition-all duration-500"
                    onClick={() => setSelectedVideo(item)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="bg-brandCyan rounded-full p-5 text-black transform scale-90 group-hover:scale-100 transition-all duration-500 shadow-xl">
                          <Play fill="black" size={28} />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <h4 className="text-xl font-semibold text-white/90 leading-tight group-hover:text-brandCyan transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                          {item.label || (selectedCategory === PortfolioCategory.ARRANGEMENT ? 'Mix & Instrumental' : 'Professional Mix')}
                        </span>
                        <ChevronRight size={16} className="text-brandCyan opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Improved Pagination Control */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-6 pb-20">
                  <div className="flex items-center gap-2">
                    <button 
                      disabled={currentPage === 0}
                      onClick={() => {
                        setCurrentPage(p => Math.max(0, p - 1));
                        window.scrollTo({ top: document.getElementById('portfolio-grid-top')?.offsetTop || 0, behavior: 'smooth' });
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 disabled:opacity-20 transition-all hover:bg-white/10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                      <span className="text-brandCyan font-bold">{currentPage + 1}</span>
                      <span className="text-white/20">/</span>
                      <span className="text-white/60">{totalPages}</span>
                    </div>

                    <button 
                      disabled={currentPage === totalPages - 1}
                      onClick={() => {
                        setCurrentPage(p => Math.min(totalPages - 1, p + 1));
                        window.scrollTo({ top: document.getElementById('portfolio-grid-top')?.offsetTop || 0, behavior: 'smooth' });
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 disabled:opacity-20 transition-all hover:bg-white/10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Player Overlay */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-12 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.15)] border border-white/10"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
                  <h4 className="text-xl font-bold text-white max-w-md truncate">{selectedVideo.title}</h4>
                  <button 
                    onClick={() => setSelectedVideo(null)}
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all group"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;