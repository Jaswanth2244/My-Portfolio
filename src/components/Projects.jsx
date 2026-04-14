import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, ShoppingCart, Globe, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Narayana Fresh Mutton",
      subtitle: "Full-Stack B2C Meat Distribution Architecture",
      details: [
        "Primary objective: Designed and deployed a feature-rich, full-stack e-commerce engine using Django REST Framework, React.js, MySQL, and JWT for a premium meat distribution business.",
        "Security Architecture: Implemented robust JWT (JSON Web Token) authentication for session management, protected high-security routes (cart, checkout), and enforced server-side data validation.",
        "Performance Optimization: Engineered structured API endpoints and optimized a MySQL database for complex inventory management, user profiles, and high-speed query performance for large product catalogs."
      ],
      tech: ["Django REST", "React.js", "MySQL", "JWT"],
      icon: <ShoppingCart size={24} />,
      link: "#"
    },
    {
      id: "02",
      title: "Crypto Network",
      subtitle: "Virtual Digital Asset Exchange Simulation",
      details: [
        "Infrastructure: Built a virtual cryptocurrency trading platform designed for high-performance buying and selling of digital assets.",
        "Security & Storage: Integrated a secure database for user balances and profiles, implementing robust authentication and authorization protocols for all transactions.",
        "System Synthesis: Gained significant experience in handling complex transaction logic and user interactions while optimizing database management for efficient retrieval."
      ],
      tech: ["Python", "Django", "JavaScript", "SQL"],
      icon: <Layers size={24} />,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <motion.div
          className="mb-40"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tighter whitespace-nowrap">
            <span className="gradient-gold">Projects</span>
          </h2>
        </motion.div>
        <br></br>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative py-16 border-b border-white/5 last:border-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <div className="relative h-full flex flex-col gap-10 z-10">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-8">
                    <span className="text-6xl font-bold text-white/5 group-hover:text-accent-gold/10 transition-colors">{project.id}</span>
                    <div>
                      <h3 className="text-4xl font-bold mb-3 tracking-tighter">{project.title}</h3>
                      <p className="text-accent-gold text-xs uppercase tracking-[0.3em] font-bold font-mono">{project.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center text-accent-gold border border-accent-gold/20"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>

                {project.details ? (
                  <ul className="space-y-4 mb-2">
                    {project.details.map((point, idx) => (
                      <li key={idx} className="flex gap-4 text-zinc-300 text-lg font-inter font-normal leading-relaxed group/item">
                        <span className="text-accent-gold/40 transition-colors group-hover/item:text-accent-gold">/</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-300 text-xl font-inter font-normal leading-relaxed max-w-3xl mb-2 group-hover:text-zinc-100 transition-colors">
                    {project.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
