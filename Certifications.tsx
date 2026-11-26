import React from 'react';
import { FaCertificate, FaArrowRight } from 'react-icons/fa';
const certs=[
  {title:'Cloud Architecting & Data Engineering',from:'AWS Academy',tag:'Cloud & data'},
  {title:'Machine Learning',from:'DeepLearning.AI / Stanford',tag:'AI'},
  {title:'Data Analytics Essentials',from:'Cisco Networking Academy',tag:'Analytics'},
  {title:'HCIA — Cloud Computing',from:'Huawei',tag:'Cloud'},
  {title:'Cybersecurity Foundations',from:'Hackviser · 2026',tag:'Security'},
  {title:'Python Essentials',from:'Cisco Networking Academy',tag:'Programming'},
];
export const Certifications: React.FC = ()=><section id="certifications" className="border-y border-white/[.045] bg-[#0a111e]/55 py-24 md:py-32"><div className="section-wrap"><div className="mb-11"><div className="eyebrow">06 / Continuous learning</div><h2 className="section-title">Selected <span className="text-glow">credentials.</span></h2></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{certs.map(c=><article key={c.title} className="surface-card surface-hover group flex items-start gap-4 p-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5cdaca]/20 bg-[#5cdaca]/[.08] text-[#8aeade]"><FaCertificate/></div><div className="flex-1"><span className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#7bd8ce]">{c.tag}</span><h3 className="mb-1 mt-1 text-[14px] font-extrabold leading-snug">{c.title}</h3><p className="text-xs text-[#92a5bb]">{c.from}</p></div><FaArrowRight className="mt-1 text-[10px] text-[#54677b] transition-colors group-hover:text-[#8be6dc]"/></article>)}</div></div></section>;
