import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
const items = [
  {
    role:'IoT & Data Monitoring Intern',company:'Azure Group',where:'Mohammedia, Morocco',when:'Jun — Jul 2026',label:'Recent internship',
    desc:'Designed a data collection and monitoring workflow integrating connected equipment with MQTT and REST APIs, Python/Node-RED processing, InfluxDB, Grafana dashboards and Docker Compose.',
    tech:['Python','MQTT','Node-RED','InfluxDB','Grafana','Docker Compose']
  },
  {
    role:'Web Development Intern',company:'EKM',where:'Casablanca, Morocco',when:'Jul 2025',label:'Development internship',
    desc:'Developed a Laravel/MySQL booking platform with an interactive calendar, administrative workspace and appointment-management features.',
    tech:['Laravel','MySQL','Web application']
  }
];
export const Experience: React.FC = () => <section id="experience" className="relative border-y border-white/[.045] bg-[#0a111e]/55 py-24 md:py-32">
  <div className="section-wrap">
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><div className="eyebrow">02 / Experience</div><h2 className="section-title mb-0">Learning by <span className="text-glow">building.</span></h2></div><p className="max-w-[320px] text-sm text-[#a5b6c9]">Hands-on work across industrial IoT, data monitoring and web applications.</p></div>
    <div className="relative ml-3 space-y-7 border-l border-[#75cfca]/25 pl-7 sm:ml-6 sm:pl-10">
      {items.map((x,i)=><motion.article key={x.company} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="surface-card surface-hover relative p-6 sm:p-8">
        <span className="absolute -left-[41px] top-8 flex h-7 w-7 items-center justify-center rounded-full border border-[#64d7cd]/50 bg-[#102c38] text-[10px] text-[#80e9de] sm:-left-[55px]"><FaBriefcase/></span>
        <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#78dcd1]">{x.label}</div><h3 className="text-xl font-extrabold md:text-2xl">{x.role}</h3><p className="mt-1 text-sm font-bold text-[#ccd8e8]">{x.company}</p></div><span className="chip"><FaCalendarAlt className="text-[#79e3d5]"/>{x.when}</span></div>
        <p className="mt-2 flex items-center gap-2 text-xs text-[#8499b1]"><FaMapMarkerAlt/>{x.where}</p>
        <p className="my-5 max-w-[850px] text-sm leading-[1.95] text-[#a9b9cc]">{x.desc}</p>
        <div className="flex flex-wrap gap-2">{x.tech.map(t=><span key={t} className="chip">{t}</span>)}</div>
      </motion.article>)}
    </div>
  </div>
</section>;
