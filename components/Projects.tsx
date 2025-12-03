import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: "Study Tracker App",
    description: "A productivity tool designed for students to organize assignments and track study hours effectively.",
    tags: ["JavaScript", "Local Storage", "UI Design"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Weather Dashboard",
    description: "A clean, responsive interface displaying real-time weather data using public APIs with beautiful visualizations.",
    tags: ["API Integration", "CSS Grid", "Async/Await"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Personal Blog",
    description: "A minimalist blog platform where I document my learning journey and share technical tutorials.",
    tags: ["HTML5", "CSS3", "Responsive"],
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive educational tool that visualizes sorting algorithms like Bubble Sort and Merge Sort.",
    tags: ["Canvas API", "Algorithms", "Logic"],
    color: "from-emerald-500 to-teal-500"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of academic and personal projects that demonstrate my technical skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-panel group rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-t border-white/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <Code className="text-white" size={24} />
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="View Code">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="View Project">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;