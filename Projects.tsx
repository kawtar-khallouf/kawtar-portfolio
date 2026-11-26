import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaBolt, FaCodeBranch, FaEye, FaLeaf, FaNetworkWired, FaRobot } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type Project = {id:string;title:string;category:'AI & Data'|'Cloud & IoT'|'Software';kind:string;desc:string;tech:string[];icon:IconType;art:string;short:string;};
const projects: Project[] = [
  {id:'01',title:'Industrial IoT & Data Monitoring',category:'Cloud & IoT',kind:'PFA internship · Azure Group · 2026',desc:'An industrial monitoring workflow connecting IoT equipment, ingesting telemetry through MQTT and REST, storing time-series data and displaying actionable dashboards.',tech:['Python','MQTT','Node-RED','InfluxDB','Grafana','Docker'],icon:FaNetworkWired,art:'art-iot',short:'Telemetry → insights'},
  {id:'02',title:'AGRIVISION',category:'AI & Data',kind:'Smart agriculture · Innovation project',desc:'A precision-agriculture prototype combining IoT information, drone imagery, computer vision and a decision-support dashboard to explore smarter farming decisions.',tech:['Data','Computer Vision','IoT','Drone imagery'],icon:FaLeaf,art:'art-agri',short:'Intelligence for agriculture'},
  {id:'03',title:'STADEAT',category:'Cloud & IoT',kind:'Autonomous delivery · Competition project',desc:'A stadium-delivery solution featuring client and administrator interfaces with a 3D digital twin for visualization and supervision of connected delivery operations.',tech:['React','Python','MQTT','Digital Twin 3D'],icon:FaRobot,art:'art-stad',short:'Autonomous delivery concept'},
  {id:'04',title:'Smart Energy Guardian',category:'AI & Data',kind:'Energy · Industry innovation',desc:'An energy-optimization and predictive-maintenance project exploring how monitoring and intelligent analysis can help organizations improve operational decisions.',tech:['Energy Analytics','Predictive Maintenance','AI'],icon:FaBolt,art:'art-energy',short:'Energy meets intelligence'},
  {id:'05',title:'NEXUS Territoire',category:'Software',kind:'SaaS product · Web development',desc:'Development and deployment of a SaaS platform with API integrations, WhatsApp verification, PayPal payments and subscription-management workflows.',tech:['SaaS','REST APIs','WhatsApp','PayPal'],icon:FaCodeBranch,art:'art-saas',short:'Connected web services'},
  {id:'06',title:'Gestura',category:'AI & Data',kind:'Computer vision · Academic project',desc:'A gesture-recognition and learning experience using computer vision, spatial gesture processing and an animated-avatar interface.',tech:['Python','OpenCV','MediaPipe','React'],icon:FaEye,art:'art-vision',short:'Technology for inclusion'},
];
const filters = ['All projects','AI & Data','Cloud & IoT','Software'] as const;
export const Projects: React.FC = () => {
  const [filter,setFilter]=useState<(typeof filters)[number]>('All projects');
  const visible = filter === 'All projects' ? projects : projects.filter(p => p.category === filter);
  return <section id="projects" className="py-24 md:py-32">
    <div className="section-wrap">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><div className="eyebrow">03 / Selected work</div><h2 className="section-title mb-0">Projects with <span className="text-glow">purpose.</span></h2></div><p className="max-w-[330px] text-sm text-[#a6b9cc]">From connected systems and computer vision to applications built for real users.</p></div>
      <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)} className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${filter===f ? 'border-[#6ce0d5]/70 bg-[#61ded2]/15 text-[#a9fff2]' : 'border-white/10 bg-white/[.025] text-[#9eafc3] hover:bg-white/[.07] hover:text-white'}`}>{f}</button>)}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p)=><motion.article layout key={p.id} initial={{opacity:0,scale:.96,y:10}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.95,y:-10}} transition={{duration:.26}} className="surface-card surface-hover group flex h-full min-w-0 flex-col overflow-hidden">
            <div className={`project-art ${p.art}`} aria-hidden="true">
              <div className="absolute left-6 top-6 z-10 rounded-lg border border-white/20 bg-[#06111d]/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white/80 backdrop-blur-lg">{p.category}</div>
              <div className="absolute right-6 top-6 z-10 font-display text-[38px] font-extrabold text-white/[.12]">{p.id}</div>
              <div className="absolute bottom-5 left-6 right-6 z-10 flex items-end justify-between gap-2"><div className="art-glass flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-[#a4f7e9]/20 bg-[#071724]/55 text-3xl text-[#9af5e5]"><p.icon/></div><div className="max-w-[170px] text-right text-[11px] font-semibold uppercase leading-5 tracking-[.16em] text-[#d9f7f5]/80">{p.short}</div></div>
            </div>
            <div className="flex flex-1 flex-col p-6"><p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#78dacf]">{p.kind}</p><h3 className="mb-3 text-xl font-extrabold transition-colors group-hover:text-[#8eeadd]">{p.title}</h3><p className="mb-6 flex-1 text-[13px] leading-[1.85] text-[#a4b4c8]">{p.desc}</p><div className="mb-6 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded-md border border-white/[.09] bg-white/[.04] px-2.5 py-1.5 text-[10px] font-semibold text-[#bacadd]">{t}</span>)}</div><a href={`mailto:khalloufkawtar09@gmail.com?subject=${encodeURIComponent('Project enquiry: '+p.title)}`} className="flex items-center justify-between border-t border-white/[.08] pt-4 text-[12px] font-extrabold text-[#8ee9dd] transition-colors hover:text-white"><span>Ask me about this project</span><FaArrowRight className="transition-transform group-hover:translate-x-1"/></a></div>
          </motion.article>)}
        </AnimatePresence>
      </motion.div>
      <p className="mt-8 text-[11px] leading-6 text-[#7f94a9]">Project graphics are illustrative. Technical documentation and demos can be shared on request.</p>
    </div>
  </section>;
};
