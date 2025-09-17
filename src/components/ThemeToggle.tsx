import React from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-3 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 hover:from-pink-200 hover:to-rose-200 dark:hover:from-pink-800/40 dark:hover:to-rose-800/40 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200/50 dark:border-pink-700/50"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-400 animate-pulse" />
        ) : (
          <Moon className="w-6 h-6 text-pink-500" />
        )}
        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-pink-400 animate-pulse opacity-70" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-pink-200 dark:border-pink-700 whitespace-nowrap">
        {isDark ? 'Mode clair' : 'Mode sombre'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 rotate-45 border-l border-t border-pink-200 dark:border-pink-700"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;