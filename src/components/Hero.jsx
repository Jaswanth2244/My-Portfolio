import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, ArrowDown, User, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-[80px] relative">
      <div className="container">
        <motion.div
          className="max-w-none mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        ><br></br>
          <div className="flex flex-col items-center">
            {/* Profile Image - Circle Crop */}
            <motion.div
              variants={itemVariants}
              className="relative mb-8 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/50 to-gold-glow/50 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-accent-gold/20 glass p-1">
                <img
                  src={profileImg}
                  alt="Jada Sreehari Jaswanth"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: '50% 20%', transform: 'scale(1.0)' }}
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Jada+Sreehari+Jaswanth&background=020617&color=fbbf24&size=512';
                  }}
                />
              </div>
            </motion.div><br></br>
            {/* Personal Details */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center mb-20 space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Jada Sreehari Jaswanth</h2>
              <div className="flex items-center gap-4 text-zinc-400 font-mono text-xs uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><User size={12} className="text-accent-gold" /> Male</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="flex items-center gap-1.5"><GraduationCap size={12} className="text-accent-gold" /> B.Tech CSE (2025 Passed Out)</span>
              </div>
            </motion.div>
            <br></br>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tighter whitespace-nowrap">
              Full-Stack <span className="gradient-gold">Engineer</span>
            </motion.h1><br></br>
            <motion.p variants={itemVariants} className="text-lg text-zinc-300 mb-10 max-w-3xl font-inter font-normal leading-relaxed tracking-tight">
              Hi I am <span className="text-white font-medium">Jada Sreehari Jaswanth</span>, a Full-Stack Engineer focused on building scalable, user-centric applications. I specialize in bridging the gap between complex backend logic and seamless frontend experiences.I specialize in crafting robust digital solutions from the ground up. By leveraging the Django REST Framework for powerful server-side logic and React.js for dynamic frontends, I create full-cycle applications rooted in clean code and efficient SQL architecture. I'm passionate about scalability, performance, and the art of modern web development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-8 mt-10 text-zinc-400 justify-center">
              <a href="https://github.com/Jaswanth2244" className="hover:text-accent-gold transition-all duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-accent-gold transition-all duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:sriharijaswanth@gmail.com" className="hover:text-accent-gold transition-all duration-300">
                <Mail size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator removed per request */}
    </section>
  );
};

export default Hero;
