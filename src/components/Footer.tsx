import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 dark:from-pink-600 dark:via-rose-600 dark:to-pink-700 text-white py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-10 animate-sparkle">
          <Star className="w-4 h-4 text-white/30" fill="currentColor" />
        </div>
        <div className="absolute top-8 right-20 animate-float delay-1000">
          <Heart className="w-3 h-3 text-white/40" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 left-1/3 animate-sparkle delay-2000">
          <Sparkles className="w-5 h-5 text-white/30" />
        </div>
        <div className="absolute bottom-6 right-10 animate-float delay-3000">
          <Star className="w-3 h-3 text-white/40" fill="currentColor" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-pink-200 animate-sparkle" />
            <h3 className="text-2xl font-bold">Fadli Zineb</h3>
            <Sparkles className="w-5 h-5 text-pink-200 animate-sparkle delay-500" />
          </div>
          <p className="text-pink-100">Développeuse Full Stack</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart size={16} className="text-pink-200 animate-pulse" fill="currentColor" />
          <Heart size={12} className="text-pink-300 animate-pulse delay-300" fill="currentColor" />
          <span className="text-pink-100">Merci de votre visite</span>
          <Heart size={12} className="text-pink-300 animate-pulse delay-600" fill="currentColor" />
          <Heart size={16} className="text-pink-200 animate-pulse delay-900" fill="currentColor" />
        </div>
        
        <div className="border-t border-pink-400/50 pt-6">
          <p className="text-pink-100">
            © 2024 Fadli Zineb. Tous droits réservés.
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Heart size={12} className="text-pink-300/60 animate-pulse" fill="currentColor" />
            <Heart size={10} className="text-pink-200/60 animate-pulse delay-500" fill="currentColor" />
            <Heart size={12} className="text-pink-300/60 animate-pulse delay-1000" fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;