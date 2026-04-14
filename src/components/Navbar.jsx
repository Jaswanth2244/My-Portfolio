import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="container flex justify-between items-center group">
        <div className="md:block hidden w-32" /> {/* Placeholder/Balance space removed logo */}
        
        <div className="hidden md:flex gap-10 items-center bg-zinc-900/40 border border-white/5 py-3 px-8 rounded-full backdrop-blur-2xl">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-accent-gold transition-all duration-300 relative group/link font-inter font-medium"
            >
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="relative z-10"
              >
                {item}
              </motion.span>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] overflow-hidden">
                <div className="w-0 h-full bg-accent-gold group-hover/link:w-full transition-all duration-500 ease-out"></div>
              </div>
            </a>
          ))}
        </div>

        <div className="md:block hidden w-32" /> {/* Right-side balance placeholder */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
