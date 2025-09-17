import React from 'react';
import { GraduationCap, Calendar, Sparkles } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Diplôme Développeur Informatique Full Stack",
      institution: "Institut WISIG",
      period: "2022 - 2024",
      description: "Formation complète en développement web front-end et back-end"
    },
    {
      degree: "Baccalauréat en Science Économique et Gestion",
      institution: "École Central",
      period: "2020 - 2021",
      description: "Fondements en gestion et économie appliquée"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50/30 to-white dark:from-gray-800 dark:via-pink-900/10 dark:to-gray-900 transition-colors duration-500 relative">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-200/20 dark:from-pink-400/10 dark:to-rose-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-rose-400/15 dark:to-pink-400/15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-400 dark:text-pink-300 animate-sparkle" />
            <Sparkles className="w-4 h-4 text-rose-400 dark:text-rose-300 animate-sparkle delay-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              Éducation
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Mon parcours académique qui m'a menée vers le développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-pink-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 dark:border-pink-800/30 relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-rose-200/30 dark:from-pink-400/20 dark:to-rose-400/20 rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-pink-500 dark:text-pink-400 mb-3">
                    <Calendar size={16} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;