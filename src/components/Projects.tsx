import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRobot } from 'react-icons/fa';

export const Projects: React.FC = () => {
  const projects = [
    {
      num: '01',
      title: 'Gestura – Sign Language Converter',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Blender', 'React'],
      desc: 'AI-powered sign language converter using real-time hand and pose detection. The system detects visual gestures, processes spatial coordinates, maps them to avatar animation sequences, and presents a React learning interface.',
      icon: <FaLaptopCode className="text-brand-indigo" />,
      role: 'Core Developer'
    },
    {
      num: '02',
      title: 'Autonomous Robot – Project Lead',
      tech: ['C++', 'Robotics', 'Systems Engineering'],
      desc: 'Led multiple student teams to design and construct an autonomous robot for a national robotics competition. Orchestrated electrical routing, sensor calibration (LiDAR/Ultrasonic), and trajectory optimization algorithms in C++.',
      icon: <FaRobot className="text-brand-teal" />,
      role: 'Project Lead / Coordination'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
            Technical Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Academic & Competition Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl border-white/[0.04] bg-slate-900/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top decoration corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/[0.05] flex items-center justify-center text-xl">
                    {proj.icon}
                  </div>
                  <span className="text-4xl font-extrabold font-display text-white/[0.03] group-hover:text-brand-indigo/10 transition-colors duration-300">
                    {proj.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-indigo transition-colors duration-200">
                  {proj.title}
                </h3>
                
                {/* Role badge */}
                <div className="inline-block text-[11px] font-semibold text-brand-muted uppercase tracking-wider mb-4">
                  Role: <span className="text-slate-300 font-bold">{proj.role}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {proj.desc}
                </p>
              </div>

              {/* Footer tech tags */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
