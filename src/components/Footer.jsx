import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer id="contact" className="section-padding border-t border-white/[0.03] bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 blur-[120px] rounded-full" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-xl">
            <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-none">Let's Design <br /> The <span className="gradient-gold font-serif">Future</span></h2>
            <p className="text-zinc-300 font-light text-lg leading-relaxed mb-12">
              Currently available for high-complexity projects and strategic full-stack collaborations.
            </p>


          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-12">
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent-gold mb-4 font-bold font-mono">Inquiries</p>
                <a href="mailto:sriharijaswanth@gmail.com" className="text-base md:text-lg font-bold text-zinc-300 group-hover:text-white transition-all underline decoration-white/0 hover:decoration-accent-gold/30 underline-offset-8 block truncate max-w-full">
                  sriharijaswanth@gmail.com
                </a>
              </div>
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent-gold mb-4 font-bold font-mono">Direct Communication</p>
                <a href="tel:+918309304688" className="text-base md:text-lg font-bold text-zinc-300 group-hover:text-white transition-all">
                  +91 83093 04688
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent-gold mb-4 font-bold font-mono">Location</p>
                <p className="text-base md:text-lg font-bold text-zinc-300">Kadapa, Andhrapadesh, India</p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-accent-gold font-bold font-mono">Connect</p>
                <div className="flex gap-8">
                  <motion.a
                    whileHover={{ scale: 1.2, color: '#fbbf24' }}
                    href="https://github.com/Jaswanth2244"
                    className="text-zinc-600 transition-all"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, color: '#fbbf24' }}
                    href="https://linkedin.com"
                    className="text-zinc-600 transition-all"
                  >
                    <FaLinkedinIn size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, color: '#fbbf24' }}
                    href="mailto:sriharijaswanth@gmail.com"
                    className="text-zinc-600 transition-all"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
