import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  const skills = [
    "Python",
    "SQL",
    "Javascript",
    "Django-Rest Framework",
    "React.js"
  ];

  return (
    <section id="technical-skills" className="section-padding relative">
      <div className="container">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            Technical <span className="gradient-gold font-syne">Skills</span>
          </h2>
        </motion.div><br></br>
        <div className="flex flex-col gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex items-baseline gap-6 border-b border-white/[0.03] pb-6">
                <span className="text-accent-gold opacity-40 font-bold">/</span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent-gold transition-colors duration-500">
                  {skill}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
