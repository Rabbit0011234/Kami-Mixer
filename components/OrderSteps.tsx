
import React from 'react';
import { motion } from 'framer-motion';
import { ORDER_STEPS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const OrderSteps: React.FC = () => {
  return (
    <section id="order" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Order</h2>
            <p className="text-gray-400">Ensure your materials are ready to get the best results.</p>
          </motion.div>

          <div className="space-y-4">
            {ORDER_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-brandBlue/20 transition-colors"
              >
                <div className="bg-brandBlue/10 p-2 rounded-full text-brandCyan flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-brandBlue uppercase tracking-widest mb-1">Step 0{i + 1}</span>
                  <p className="text-lg font-medium text-gray-200">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-brandCyan via-brandBlue to-brandIndigo text-white text-center shadow-2xl shadow-brandBlue/20"
          >
            <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
            <p className="opacity-90 mb-6">Contact me below to discuss your project requirements and get a quote.</p>
            <a 
              href="#contact"
              className="inline-block px-10 py-3 bg-white text-brandIndigo rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
