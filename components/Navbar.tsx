
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How to Order', href: '#order' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-6xl transition-all duration-500 rounded-full px-8 py-3 flex items-center justify-between border border-brandBlue/20 backdrop-blur-xl shadow-2xl ${
          isScrolled 
            ? 'bg-brandIndigo/20 border-brandBlue/30 shadow-brandBlue/10' 
            : 'bg-black/20 border-white/10'
        }`}>
          <a href="#" className="text-2xl font-medium tracking-tighter hover:opacity-80 transition-all flex items-center group">
            <span className="font-kanit bg-clip-text text-transparent bg-gradient-to-r from-brandCyan via-brandBlue to-brandIndigo transition-all">
              Kami
            </span>
            <span className="font-zen text-white ml-0.5">
              髪
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brandCyan transition-all hover:scale-105 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 text-white/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-0 right-0 mx-6 mt-4 bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-brandBlue/20 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-white/90 hover:text-brandCyan transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
