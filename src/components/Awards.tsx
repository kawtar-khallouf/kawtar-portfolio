import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal } from 'react-icons/fa';

export const Awards: React.FC = () => {
  const awards = [
    {
      place: '1st Place',
      event: '36h Hackathon – ENSET Challenge',
      icon: <FaTrophy className="text-yellow-500" />,
      tag: 'Winner'
    },
    {
      place: '1st Place',
      event: 'Hackathon ENIM Rabat – Business Forum',
      icon: <FaTrophy className="text-yellow-500" />,
      tag: 'Winner'
    },
    {
      place: '2nd Place',
      event: 'Hackathon 3rd Edition – ENSEM Casablanca',
      icon: <FaMedal className="text-slate-300" />,
      tag: 'Runner-up'
    }
  ];

  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-white/[0.03]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Hackathons & Awards
          </h2>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/[0.04] bg-slate-900/10 flex items-start gap-4 relative overflow-hidden"
            >
              <div className="text-2xl p-3.5 rounded-xl bg-slate-950 border border-white/[0.05] flex-shrink-0">
                {award.icon}
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-bold text-brand-indigo uppercase tracking-wider mb-1">
                    {award.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {award.place}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.event}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
