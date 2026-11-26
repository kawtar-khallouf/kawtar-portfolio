import React from 'react';
import { FaBrain, FaCloud, FaCode, FaDatabase } from 'react-icons/fa';
const blocks=[
  {title:'Data & databases',icon:FaDatabase,names:['Python','SQL / MySQL','InfluxDB','Pandas','ETL','Grafana']},
  {title:'AI & computer vision',icon:FaBrain,names:['Machine Learning','Scikit-learn','OpenCV','MediaPipe','Computer Vision']},
  {title:'Cloud & DevOps',icon:FaCloud,names:['AWS','Oracle Cloud','Huawei Cloud','Docker','Docker Compose','Linux','Git']},
  {title:'Development & integration',icon:FaCode,names:['Java','React','Node.js','Laravel','REST APIs','MQTT','PHP']},
];
export const Skills: React.FC = ()=><section id="skills" className="border-y border-white/[.045] bg-[#0a111e]/55 py-24 md:py-32"><div className="section-wrap"><div className="mb-11"><div className="eyebrow">04 / Technical toolkit</div><h2 className="section-title">The tools behind <span className="text-glow">the work.</span></h2><p className="max-w-[680px] text-sm leading-[1.9] text-[#a4b7ca]">A growing toolkit informed by engineering coursework, internships and team projects.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{blocks.map(b=><article key={b.title} className="surface-card surface-hover p-6"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-[#6ad6c9]/20 bg-[#62d4c9]/10 text-xl text-[#8ae6dc]"><b.icon/></div><h3 className="mb-5 text-lg font-extrabold">{b.title}</h3><div className="flex flex-wrap gap-2">{b.names.map(t=><span key={t} className="chip">{t}</span>)}</div></article>)}</div></div></section>;
