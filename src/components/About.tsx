import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaCode, FaBrain } from 'react-icons/fa';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <FaCloud className="text-brand-indigo" />,
      title: 'Cloud Architectures',
      desc: 'Deploying high-availability infrastructure using AWS and Huawei Cloud, managing virtualized compute and storage nodes.'
    },
    {
      icon: <FaDatabase className="text-brand-teal" />,
      title: 'Data Engineering',
      desc: 'Designing structured and relational database layers, utilizing SQL and Pandas frameworks for robust data ingestion.'
    },
    {
      icon: <FaCode className="text-brand-violet" />,
      title: 'Full-Stack Integration',
      desc: 'Building modern web applications from robust Laravel REST backends to interactive React client interfaces.'
    },
    {
      icon: <FaBrain className="text-pink-500" />,
      title: 'AI & Automation',
      desc: 'Implementing machine learning models, natural language processing, and real-time computer vision systems.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Styled Avatar & Tech Frame */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden glass-panel border-white/[0.06] p-3"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
                <img
                  src="/images/kawtar.jpeg"
                  alt="Kawtar Khallouf Portrait"
                  className="w-full h-full object-cover grayscale opacity-90 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 via-transparent to-transparent mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950 to-transparent">
                  <div className="text-xs font-semibold text-slate-300">Kawtar Khallouf</div>
                  <div className="text-[10px] text-brand-muted">ENSET Mohammedia · Big Data</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2"
            >
              Professional Background
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-white mb-6"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 space-y-5 text-sm md:text-base leading-relaxed mb-10"
            >
              <p>
                I am a second-year <strong className="text-slate-200">Big Data & Cloud Engineering student</strong> at{' '}
                <span className="text-white font-medium">ENSET Mohammedia</span>, with a strong background in software
                development, cloud computing, databases, and AI-based projects.
              </p>
              <p>
                I have delivered several real-world projects, including a production-ready wellness booking platform,
                a Laravel web application, and a Java/JavaFX internal project. I am passionate about building useful,
                scalable, and clean digital solutions that solve real problems.
              </p>
            </motion.div>

            {/* Micro-Services Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.04] flex items-center justify-center text-lg flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h3>
                    <p className="text-[12px] text-brand-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
