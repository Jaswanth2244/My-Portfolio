import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

// Custom Cursor Removed


// Subtle background glow
const AuraBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="aura-blob top-[-10%] left-[-10%] animate-pulse" />
    <div className="aura-blob bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="aura-blob top-[30%] right-[20%] opacity-50" />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium loading simulation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-bg-slate text-white selection:bg-accent-gold/30 min-h-screen relative">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] bg-slate-deep flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-accent-gold"
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xs tracking-[0.3em] uppercase text-accent-gold font-light font-serif"
            >
              Welcome to Jaswanth Portfolio
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AuraBackground />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <TechnicalSkills />
              <Projects />
              <Certifications />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
