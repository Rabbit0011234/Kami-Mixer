
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Services</h2>
          <p className="text-gray-400">Transparent rates for professional music production.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {SERVICES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-brandCyan to-brandIndigo rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-6 flex-1">
                {category.tiers.map((tier) => (
                  <div 
                    key={tier.title}
                    className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brandBlue/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold group-hover:text-brandCyan transition-colors">{tier.title}</h4>
                      <span className="text-brandBlue font-bold text-lg">{tier.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
