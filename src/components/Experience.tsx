import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Developer Intern – Wellness App',
      company: 'EKM',
      location: 'Casablanca',
      date: 'July 2025',
      points: [
        'Delivered a complete online booking platform with interactive calendar, client management, and admin dashboard.',
        'Deployed the platform into production.',
        'Automated appointment tracking and eliminated manual scheduling.'
      ]
    },
    {
      role: 'Laravel Developer Intern – Internal Project',
      company: 'Web Development',
      location: 'El Jadida',
      date: '2025',
      points: [
        'Built a functional Laravel web application using MVC architecture, Eloquent ORM, routes, and MySQL.',
        'Implemented a full CRUD system and delivered the project on time.'
      ]
    },
    {
      role: 'Junior Developer – Internal Java Project',
      company: 'Software Development',
      location: 'El Jadida',
      date: 'January 2025 – March 2025',
      points: [
        'Developed a Java/JavaFX application with complete business logic and functional UI.',
        'Used Git and documented tests to reduce regression bugs.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
            Career Pathway
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot marker */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-xs text-brand-indigo shadow-lg">
                <FaBriefcase />
              </div>

              {/* Glassmorphic card */}
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border-white/[0.04] bg-slate-900/10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-white/[0.04] pb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm font-medium text-brand-indigo">
                      <span>{exp.company}</span>
                      <span className="text-slate-700">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400 font-normal">
                        <FaMapMarkerAlt className="text-xs" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 border border-white/[0.04] text-xs font-semibold text-slate-300 self-start md:self-center">
                    <FaCalendarAlt className="text-[10px] text-brand-muted" />
                    {exp.date}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.points.map((point, pIndex) => (
                    <li key={pIndex} className="text-slate-400 text-sm md:text-[15px] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-brand-indigo font-bold mt-1 text-xs select-none">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
