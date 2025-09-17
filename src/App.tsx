import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`bg-gradient-to-br from-pink-50 via-rose-50/50 to-white dark:from-gray-900 dark:via-pink-900/20 dark:to-gray-800 min-h-screen transition-colors duration-500 relative ${isDark ? 'dark' : ''}`}>
      <FloatingElements />
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;