import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "Sree Venkateswara College Of Engineering",
      degree: "Computer Science & Engineering",
      score: "CGPA 7.6",
      period: "2021 – 2025",
      location: "Nellore, India"
    },
    {
      institution: "Dr.K.L.P Public School",
      degree: "Secondary Education (M.P.C)",
      score: "73%",
      period: "2019 – 2021",
      location: "Guntur, India"
    },
    {
      institution: "Montfort School",
      degree: "Central Board Of Secondary Education",
      score: "75%",
      period: "March 2019",
      location: "Kadapa, India"
    }
  ];

  const experience = [
    {
      title: "Braino vision Internship(AICTE)",
      company: "",
      period: "Dec 2024 – April 2025",
      details: [
        "Proficient in programming languages such as Python and SQL.",
        "Developed critical thinking and problem-solving skills to approach complex challenges with confidence.",
        "Created a comparative analysis of crime rates across different cities, highlighting high-impact areas.",
        "Received positive feedback from supervisors and team members on technical performance."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="about" className="relative overflow-hidden section-padding bg-zinc-950/20">
      <div className="container relative z-10">
        <motion.div
          className="mb-40"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none whitespace-nowrap">
            Academic & <span className="gradient-gold font-syne">Professional</span> Path
          </h2>
        </motion.div><br></br>
        <motion.div
          className="grid grid-cols-1 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education - Modern Minimalist */}
          <div className="space-y-16">
            <div className="flex items-center gap-4 text-accent-gold mb-8">
              <GraduationCap size={24} />
              <span className="text-base uppercase tracking-[0.2em] font-bold font-mono">Education</span>
            </div>

            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative group">
                <p className="text-xs text-zinc-400 font-bold mb-2 font-mono">{edu.period}</p>
                <h4 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">{edu.institution}</h4>
                <p className="text-zinc-300 text-base mb-4 font-light">{edu.degree}</p>

                <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold font-mono">
                  <span className="text-accent-gold">{edu.score}</span>
                  <span className="text-zinc-500 flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional - Elegant Card */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-accent-gold mb-8">
              <Briefcase size={24} />
              <span className="text-base uppercase tracking-[0.2em] font-bold font-mono">Experience</span>
            </div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >

                <div className="mb-8">
                  <p className="text-xs text-accent-gold font-bold tracking-[0.2em] mb-2 font-mono">{exp.period}</p>
                  <h4 className="text-3xl font-bold mb-1">{exp.title}</h4>
                </div>

                <ul className="space-y-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-4 text-zinc-400 text-base font-light leading-relaxed group/item">
                      <span className="text-teal-glow/50 transition-colors group-hover/item:text-teal-glow">/</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
