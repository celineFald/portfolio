import React from 'react';
import { Briefcase, MapPin, Calendar, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Application Developer",
      company: "BB-BANK",
      period: "Juillet 2023 – Présent",
      location: "Kenitra, Maroc",
      description: "Développement d'une application web de gestion bancaire complète avec interface utilisateur moderne et sécurisée.",
      achievements: [
        "Conception et développement d'interfaces utilisateur intuitives",
        "Intégration de systèmes de paiement sécurisés",
        "Optimisation des performances de l'application"
      ]
    },
    {
      title: "Stagiaire Développeur",
      company: "Kromberg & Schubert",
      period: "Mai – Juin 2023",
      location: "Kenitra, Maroc",
      description: "Stage de développement web axé sur la création de sites web et la gestion des erreurs système.",
      achievements: [
        "Création de sites web responsives",
        "Mise en place de systèmes de gestion d'erreurs",
        "Collaboration avec l'équipe de développement"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50/30 to-white dark:from-gray-800 dark:via-pink-900/10 dark:to-gray-900 transition-colors duration-500 relative">
      {/* Decorative stars */}
      <div className="absolute top-16 right-16 animate-sparkle">
        <Star className="w-5 h-5 text-pink-300/60 dark:text-pink-400/50" fill="currentColor" />
      </div>
      <div className="absolute bottom-16 left-16 animate-sparkle delay-1000">
        <Star className="w-4 h-4 text-rose-300/60 dark:text-rose-400/50" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              Expérience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Mon parcours professionnel dans le développement web
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-pink-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 dark:border-pink-800/30 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={32} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-pink-500 dark:text-pink-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Réalisations principales :</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;