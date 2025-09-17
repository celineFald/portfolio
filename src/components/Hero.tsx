import React from 'react';
import { Download, Heart, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV
    alert('Téléchargement du CV en cours...');
  };

  return (
    <section id="accueil" className="pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-200/30 to-rose-200/30 dark:from-pink-400/20 dark:to-rose-400/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float delay-1000">
        <div className="w-32 h-32 bg-gradient-to-br from-rose-200/20 to-pink-200/20 dark:from-rose-400/15 dark:to-pink-400/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 dark:from-pink-400/50 dark:via-rose-400/50 dark:to-pink-500/50 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 via-rose-50 to-white dark:from-gray-800 dark:via-pink-900/30 dark:to-gray-700 flex items-center justify-center shadow-inner">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 dark:from-pink-400/40 dark:via-rose-400/40 dark:to-pink-500/40 flex items-center justify-center relative overflow-hidden">
                    <Heart size={120} className="text-pink-400 dark:text-pink-300 animate-heart-beat" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent dark:from-pink-500/20"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">💖</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-300 dark:from-rose-400 dark:to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="absolute top-10 -left-6 w-8 h-8 bg-gradient-to-br from-pink-300 to-rose-300 dark:from-pink-400 dark:to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Star size={16} className="text-white" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
                Fadli Zineb
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Développeuse Full Stack passionnée par les nouvelles technologies et l'innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="group bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:from-pink-500 hover:via-rose-500 hover:to-pink-600 dark:hover:from-pink-600 dark:hover:via-rose-600 dark:hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download size={20} className="group-hover:animate-bounce" />
                Télécharger mon CV
              </button>
              
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-400 dark:border-pink-500 text-pink-500 dark:text-pink-400 px-8 py-4 rounded-full font-semibold hover:bg-pink-400 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                Me contacter
              </button>
            </div>

            {/* Decorative text elements */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-pink-400 dark:text-pink-300">
              <Heart size={16} className="animate-pulse" fill="currentColor" />
              <span className="text-sm font-medium italic">Créer • Innover • Inspirer</span>
              <Heart size={16} className="animate-pulse delay-500" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;