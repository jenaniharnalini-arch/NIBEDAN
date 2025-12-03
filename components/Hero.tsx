import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const navHeight = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-300 text-sm font-medium tracking-wide animate-[fadeIn_1s_ease-out]">
          Welcome to my portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block text-white mb-2 animate-[slideUp_0.8s_ease-out_0.2s_both]">Hi, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 animate-[slideUp_0.8s_ease-out_0.4s_both] inline-block">
            NIBEDAN
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.6s_both]">
          Aspiring Student & Learner
        </p>

        <div className="animate-[fadeIn_1s_ease-out_1s_both]">
          <button 
            onClick={handleScrollDown}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <span className="text-slate-200 group-hover:text-cyan-400 font-medium">Explore My Work</span>
            <ArrowDown size={20} className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;