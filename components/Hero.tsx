
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Motion Elements */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brandCyan/10 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brandIndigo/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="relative">
          {/* Main Header with static entrance only */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-medium tracking-tighter mb-4 pb-4 select-none flex items-center justify-center gap-2"
          >
            <span className="font-kanit bg-clip-text text-transparent bg-gradient-to-br from-brandCyan via-brandBlue to-brandIndigo drop-shadow-sm inline-block">
              Kami
            </span>
            <span className="font-zen text-white drop-shadow-2xl inline-block">
              髪
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className="text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl mx-auto tracking-wide flex items-center justify-center gap-2 select-none">
              Mix / Music Arrange <span className="text-white drop-shadow-sm font-bold">Form Delta.▿</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="text-brandBlue/30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-brandBlue to-transparent mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
