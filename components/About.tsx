import React from 'react';
import { BookOpen, Target, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-panel p-8 rounded-2xl md:ml-10 transform hover:scale-[1.02] transition-transform duration-500">
             <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Hello! I'm <strong className="text-white">Nibedan</strong>, a passionate student dedicated to exploring the world of technology. 
              My journey is defined by curiosity and a relentless drive to understand how things work. 
              I don't just study for grades; I study to build, create, and innovate.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently focusing on computer science fundamentals, I spend my free time experimenting with code, 
              learning new frameworks, and participating in tech communities. I believe that every problem is just a puzzle waiting to be solved.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Current Focus</h3>
                <p className="text-slate-400">Deepening my understanding of algorithms, web development, and software design principles.</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Student Goals</h3>
                <p className="text-slate-400">To build impactful projects that solve real-world problems and to constantly grow as a developer.</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Interests</h3>
                <p className="text-slate-400">Coding, UI/UX Design, Open Source, and exploring emerging technologies like AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;