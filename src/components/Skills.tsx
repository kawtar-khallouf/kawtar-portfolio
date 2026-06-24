import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaCloud, FaBrain } from 'react-icons/fa';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode className="text-brand-indigo" />,
      skills: ['Python', 'Java', 'C / C++', 'SQL', 'PHP']
    },
    {
      title: 'Web & Frameworks',
      icon: <FaLaptopCode className="text-brand-violet" />,
      skills: ['React', 'Node.js', 'Laravel', 'JavaFX']
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud className="text-brand-teal" />,
      skills: ['AWS', 'Huawei Cloud', 'Git', 'Linux']
    },
    {
      title: 'Data & AI',
      icon: <FaBrain className="text-pink-500" />,
      skills: ['Pandas', 'Scikit-learn', 'MongoDB', 'NLP']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
            Technical Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Core Competencies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/[0.04] bg-slate-900/10 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/[0.04] pb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/[0.05] flex items-center justify-center text-lg">
                  {category.icon}
                </div>
                <h3 className="text-[15px] font-bold text-white font-display">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-950 border border-white/[0.05] text-slate-300 hover:border-brand-indigo/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
