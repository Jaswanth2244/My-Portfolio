import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: "Python : Full-Stack", issuer: "Full-Stack Specialist" },
    { name: "Communication Skills and Teamwork", issuer: "Edx" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none whitespace-nowrap mb-12">
            Professional <span className="gradient-gold font-syne">Certifications</span>
          </h2>
        </motion.div><br></br>
        <motion.div
          className="grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative border-b border-white/5 pb-8 hover:border-accent-gold/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-accent-gold/40 group-hover:text-accent-gold transition-colors duration-500">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors">{cert.name}</h3>
                    <p className="text-accent-gold font-bold text-xs uppercase tracking-[0.3em] font-mono mt-2">{cert.issuer}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block">
                  <CheckCircle className="text-accent-gold" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
