import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
          NIBEDAN
        </h2>
        
        <div className="flex gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
            <Instagram size={20} />
          </a>
        </div>
        
        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Nibedan. All rights reserved. <br/>
          Built with curiosity and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;