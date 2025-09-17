import React from 'react';
import { Mail, Phone, MapPin, Calendar, GraduationCap, Languages, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "zinebf885@gmail.com" },
    { icon: <Phone size={20} />, label: "Téléphone", value: "+212 7 826 200 15" },
    { icon: <MapPin size={20} />, label: "Adresse", value: "Kenitra, Maroc" },
    { icon: <Calendar size={20} />, label: "Date de naissance", value: "26/04/2001" },
    { icon: <GraduationCap size={20} />, label: "Diplôme", value: "Bac+2 en informatique" },
    { icon: <Languages size={20} />, label: "Langues", value: "Arabe, Français, Anglais" },
  ];

  return (
    <section id="apropos" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50/30 to-white dark:from-gray-800 dark:via-pink-900/10 dark:to-gray-900 transition-colors duration-500 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 animate-sparkle">
        <Sparkles className="w-6 h-6 text-pink-300/50 dark:text-pink-400/40" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float">
        <Heart className="w-5 h-5 text-rose-300/60 dark:text-rose-400/50" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              À propos
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Apprenez-en plus sur mon profil et mes coordonnées
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-pink-800/30 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-200/20 dark:from-pink-400/10 dark:to-rose-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Informations personnelles</h3>
                <Heart className="w-5 h-5 text-pink-400 dark:text-pink-300 animate-pulse" fill="currentColor" />
              </div>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors duration-300">
                    <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 p-2 rounded-full text-white shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{info.label}</p>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-pink-800/30 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-rose-400/15 dark:to-pink-400/15 rounded-full blur-xl"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Qui suis-je ?</h3>
                <Sparkles className="w-5 h-5 text-pink-400 dark:text-pink-300 animate-sparkle" />
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Passionnée par le développement web et les nouvelles technologies, je suis une développeuse full stack 
                  avec une approche créative et orientée solutions.
                </p>
                <p>
                  Mon parcours m'a menée de l'économie à l'informatique, me donnant une perspective unique sur 
                  les besoins business et techniques des projets web.
                </p>
                <p>
                  J'aime créer des applications qui allient performance technique et expérience utilisateur 
                  exceptionnelle, avec un œil pour le design et l'innovation.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 via-rose-100/50 to-pink-50 dark:from-pink-900/30 dark:via-rose-900/20 dark:to-pink-800/30 rounded-xl border border-pink-200/50 dark:border-pink-700/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-pink-500 dark:text-pink-400" fill="currentColor" />
                  <Heart className="w-3 h-3 text-rose-400 dark:text-rose-300" fill="currentColor" />
                </div>
                <p className="text-pink-600 dark:text-pink-400 font-medium italic text-center">
                  "L'innovation distingue un leader d'un suiveur" - Steve Jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;