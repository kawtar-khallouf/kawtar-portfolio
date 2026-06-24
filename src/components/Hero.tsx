import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const stats = [
    { num: '2', label: 'National Hackathon Wins', color: 'text-brand-indigo border-brand-indigo/20' },
    { num: '3', label: 'Projects Delivered', color: 'text-brand-violet border-brand-violet/20' },
    { num: 'Big Data', label: 'and Cloud Student', color: 'text-brand-teal border-brand-teal/20' },
    { num: '2026', label: 'PFA Internship Seeking', color: 'text-white border-white/10' },
  ];

  return (
    <section id="hero" className="relative min-height-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dot-grid flex flex-col justify-center">
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full glow-blur-indigo opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full glow-blur-teal opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-white/[0.06] text-xs font-semibold text-brand-indigo mb-6 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse" />
              Seeking PFA Internship – July / August 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
            >
              Kawtar Khallouf
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-teal text-3xl sm:text-4xl md:text-5xl mt-3 font-semibold tracking-normal">
                Big Data & Cloud Engineering Student
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              I am a second-year engineering student in Big Data & Cloud Computing at{' '}
              <strong className="text-slate-200">ENSET Mohammedia</strong>. Passionate about cloud architectures,
              scalable databases, full-stack development, and AI-powered data engineering solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <a
                href="/Kawtar_Khallouf_CV_EN_PFA.pdf"
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-brand-indigo/15"
              >
                <FaDownload /> Download CV
              </a>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold text-sm border border-white/[0.05] hover:border-white/[0.12] transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaEnvelope className="text-brand-muted" /> Contact Me
              </button>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-brand-muted hover:text-slate-200 font-semibold text-sm transition-colors duration-200"
              >
                <FaProjectDiagram /> View Projects
              </button>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative select-none"
            >
              {/* Elegant border glows */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-indigo/10 via-brand-violet/10 to-brand-teal/10 blur-xl opacity-80" />
              
              <div className="relative p-2.5 rounded-3xl glass-panel border-white/[0.05] bg-slate-950/40">
                <div className="relative overflow-hidden rounded-2xl w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
                  <img
                    src="/images/kawtar.jpeg"
                    alt="Kawtar Khallouf"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Glass highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Decorative design pill */}
              <div className="absolute -bottom-4 -left-4 glass-panel border-white/[0.08] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Available July 2026</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 border-t border-white/[0.06] pt-12 mt-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel border-white/[0.04] p-5 rounded-2xl flex flex-col items-start hover:border-white/[0.08] transition-colors duration-300"
            >
              <span className={`text-2xl md:text-3xl font-extrabold font-display ${stat.color} mb-1.5`}>
                {stat.num}
              </span>
              <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider text-left leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
