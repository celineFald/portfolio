import React from 'react';
import { Palette, Monitor, Server, Lightbulb, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Web Design",
      description: "Création de sites web personnalisés avec une attention particulière à l'expérience utilisateur et au design moderne."
    },
    {
      icon: <Monitor size={32} />,
      title: "Développement Front-end",
      description: "Développement d'interfaces utilisateur interactives et responsives avec les technologies modernes."
    },
    {
      icon: <Server size={32} />,
      title: "Développement Back-end",
      description: "Création d'APIs robustes et de systèmes back-end performants pour vos applications web."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Design Thinking",
      description: "Conception centrée utilisateur et gestion des bases de données MySQL & MongoDB pour des solutions complètes."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      {/* Floating hearts */}
      <div className="absolute top-10 left-1/4 animate-float delay-500">
        <Heart className="w-5 h-5 text-pink-300/40 dark:text-pink-400/30" fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-1/4 animate-float delay-1500">
        <Heart className="w-4 h-4 text-rose-300/50 dark:text-rose-400/40" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Les services que je propose pour donner vie à vos projets digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-pink-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 dark:border-pink-800/30 text-center relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-pink-200/20 to-rose-200/20 dark:from-pink-400/10 dark:to-rose-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 p-4 rounded-full w-fit mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                {service.icon}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;