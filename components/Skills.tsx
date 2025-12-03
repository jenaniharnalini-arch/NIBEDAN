import React from 'react';

const skillCategories = [
  {
    title: "Web Basics",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    title: "Programming",
    skills: ["Python", "C++", "Java Basics", "Data Structures"]
  },
  {
    title: "Creativity",
    skills: ["UI/UX Principles", "Figma", "Problem Solving", "Sketching"]
  },
  {
    title: "Tools & Soft Skills",
    skills: ["Git & GitHub", "VS Code", "Teamwork", "Time Management"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-2xl hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 group-hover:border-cyan-500/50 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
                    <span className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;