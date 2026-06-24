import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Academy Cloud Computing & Data Engineering',
      issuer: 'Amazon Web Services',
      tag: 'Cloud & Data'
    },
    {
      title: 'HCIA-Cloud Computing V5.5',
      issuer: 'Huawei Technologies',
      tag: 'Cloud Infrastructure'
    },
    {
      title: 'Cisco CCNA – Routing & Switching Essentials',
      issuer: 'Cisco',
      tag: 'Networking'
    },
    {
      title: 'Linux Essentials',
      issuer: 'Cisco NetAcad / LPI',
      tag: 'Linux Systems'
    },
    {
      title: 'Python Essentials 1 & 2',
      issuer: 'Cisco Networking Academy',
      tag: 'Programming'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Professional Certifications
          </h2>
        </div>

        {/* Certifications Grid List */}
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover p-5 rounded-xl border-white/[0.04] bg-slate-900/10 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/[0.05] flex items-center justify-center text-brand-indigo flex-shrink-0">
                <FaCertificate />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-0.5">
                  {cert.tag}
                </div>
                <h3 className="text-sm font-bold text-white leading-snug truncate" title={cert.title}>
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
