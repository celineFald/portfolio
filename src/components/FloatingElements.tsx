import React from 'react';
import { Heart, Star, Sparkles, Flower } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <Heart className="w-4 h-4 text-pink-300/40 dark:text-pink-400/30" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-2000">
        <Star className="w-3 h-3 text-rose-300/50 dark:text-rose-400/40" fill="currentColor" />
      </div>
      <div className="absolute top-60 left-1/4 animate-bounce delay-3000">
        <Sparkles className="w-5 h-5 text-pink-200/60 dark:text-pink-500/40" />
      </div>
      <div className="absolute bottom-40 right-10 animate-pulse delay-4000">
        <Flower className="w-6 h-6 text-rose-200/50 dark:text-rose-400/30" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-5000">
        <Heart className="w-3 h-3 text-pink-300/40 dark:text-pink-400/30" fill="currentColor" />
      </div>
      
      {/* Floating circles */}
      <div className="absolute top-32 right-1/3 w-8 h-8 bg-gradient-to-br from-pink-200/30 to-rose-200/30 dark:from-pink-400/20 dark:to-rose-400/20 rounded-full animate-pulse delay-1500"></div>
      <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-gradient-to-br from-rose-200/40 to-pink-200/40 dark:from-rose-400/30 dark:to-pink-400/30 rounded-full animate-bounce delay-2500"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-gradient-to-br from-pink-300/50 to-rose-300/50 dark:from-pink-500/40 dark:to-rose-500/40 rounded-full animate-pulse delay-3500"></div>
    </div>
  );
};

export default FloatingElements;