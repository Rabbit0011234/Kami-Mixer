
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const socials = [
    {
      name: 'Twitter (X)',
      icon: <Twitter size={24} />,
      link: 'https://x.com/kami_2376',
      color: 'hover:bg-[#1DA1F2]'
    },
    {
      name: 'Discord',
      icon: <MessageSquare size={24} />,
      link: 'https://discord.com/users/kamipopolza1',
      color: 'hover:bg-[#5865F2]'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      link: 'mailto:Kaitomusic12345@gmail.com',
      color: 'hover:bg-brandBlue'
    }
  ];

  return (
    <footer id="contact" className="py-24 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect</h2>
            <p className="text-gray-400">Reach out through any of these platforms.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group ${social.color} hover:text-white`}
              >
                <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                <span className="font-bold">{social.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm">
            <p>© {new Date().getFullYear()} Kami髪. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brandCyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brandCyan transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
