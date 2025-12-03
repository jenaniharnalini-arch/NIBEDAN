import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="text-yellow-400" size={24} />,
    title: "1st Place - School Coding Hackathon",
    year: "2024",
    description: "Led a team of 3 to build an educational web game under 24 hours."
  },
  {
    icon: <Award className="text-cyan-400" size={24} />,
    title: "Web Development Bootcamp Certification",
    year: "2023",
    description: "Completed an intensive 8-week course covering full-stack fundamentals."
  },
  {
    icon: <Star className="text-purple-400" size={24} />,
    title: "High Honor Roll",
    year: "2022 - Present",
    description: "Consistently maintained top grades in Computer Science and Mathematics."
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-xl mb-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:translate-x-2 transition-transform duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">{item.year}</span>
                </div>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;