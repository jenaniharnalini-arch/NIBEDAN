import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-white">
      <Background />
      <div className="relative z-10 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;