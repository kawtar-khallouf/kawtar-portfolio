import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      label: 'Email',
      value: 'khalloufkawtar09@gmail.com',
      href: 'mailto:khalloufkawtar09@gmail.com',
      icon: <FaEnvelope className="text-brand-indigo" />
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kawtar-khallouf',
      href: 'https://linkedin.com/in/kawtar-khallouf',
      icon: <FaLinkedin className="text-brand-indigo" />
    },
    {
      label: 'GitHub',
      value: 'github.com/kawtar-khallouf',
      href: 'https://github.com/kawtar-khallouf',
      icon: <FaGithub className="text-brand-indigo" />
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-white/[0.03]">
      {/* Background lights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full glow-blur-indigo opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-left">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-xs font-semibold text-brand-indigo mb-6"
            >
              <FaCalendarCheck className="text-[10px]" />
              Seeking PFA Internship – Summer 2026
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight"
            >
              Let's work together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed mb-8"
            >
              I am open to discussions about internship opportunities, collaborations, and cloud development. Feel free to connect or drop me an email!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 text-slate-300 font-medium text-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/[0.05] flex items-center justify-center text-slate-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-[10px] text-brand-muted uppercase tracking-wider font-semibold">Location</div>
                <div>El Jadida, Morocco</div>
              </div>
            </motion.div>
          </div>

          {/* Right link cards column */}
          <div className="md:col-span-6 flex flex-col gap-4">
            {contactDetails.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/[0.04] bg-slate-900/10 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/[0.05] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-brand-indigo/10 group-hover:border-brand-indigo/30 transition-all duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-0.5">
                      {contact.label}
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-indigo transition-colors duration-200">
                      {contact.value}
                    </div>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-brand-indigo transition-colors duration-200 text-xs font-semibold pr-2">
                  {contact.label === 'Email' ? 'Send Email' : 'Visit ↗'}
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
