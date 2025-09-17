import React from 'react';
import { Code, Database, Globe, Heart } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, icon: <Globe size={20} /> },
    { name: 'CSS', level: 90, icon: <Code size={20} /> },
    { name: 'JavaScript', level: 85, icon: <Code size={20} /> },
    { name: 'PHP', level: 80, icon: <Code size={20} /> },
    { name: 'MySQL', level: 85, icon: <Database size={20} /> },
  ];

  return (
    <section id="competences" className="py-20 px-6 relative">
      {/* Floating hearts decoration */}
      <div className="absolute top-20 left-20 animate-float">
        <Heart className="w-6 h-6 text-pink-300/40 dark:text-pink-400/30" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float delay-1000">
        <Heart className="w-4 h-4 text-rose-300/50 dark:text-rose-400/40" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies que je maîtrise pour créer des applications modernes et performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-pink-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 dark:border-pink-800/30 relative overflow-hidden"
            >
              {/* Skill level indicator background */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500 transition-all duration-1000 rounded-t-2xl" style={{ width: `${skill.level}%` }}></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              <div className="relative">
                <div className="bg-pink-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <span className="absolute -top-8 right-0 text-sm font-semibold text-pink-500 dark:text-pink-400">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;