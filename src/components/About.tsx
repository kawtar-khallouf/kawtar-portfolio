import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaCode, FaDatabase, FaGraduationCap } from 'react-icons/fa';
const features = [
  { icon: FaDatabase, name: 'Data engineering', detail: 'SQL, Python, processing pipelines and data visualization.' },
  { icon: FaBrain, name: 'Artificial intelligence', detail: 'Machine learning, computer vision and intelligent applications.' },
  { icon: FaCloud, name: 'Cloud & IoT', detail: 'Containerized services, telemetry, monitoring and APIs.' },
  { icon: FaCode, name: 'Software development', detail: 'Full-stack applications, REST integration and product delivery.' },
];
export const About: React.FC = () => <section id="about" className="relative border-t border-white/[.045] py-24 md:py-32">
  <div className="section-wrap">
    <div className="grid items-start gap-14 lg:grid-cols-[.87fr_1.13fr] lg:gap-20">
      <div className="lg:sticky lg:top-28">
        <div className="eyebrow">01 / About</div>
        <h2 className="section-title">Curiosity backed by <span className="text-glow">hands-on engineering.</span></h2>
        <p className="max-w-[500px] text-[15px] leading-[1.95] text-[#a9bbcf]">I enjoy taking an idea from first prototype to a usable solution — connecting the dots between data, intelligent systems and real-world needs.</p>
        <div className="surface-card mt-8 flex gap-4 p-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#61dccd]/10 text-xl text-[#75ddd2]"><FaGraduationCap/></div><div><div className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#76e0d5]">Education · 2024–2027</div><h3 className="mt-1 text-sm font-bold">Engineering Degree — Big Data &amp; Cloud Computing</h3><p className="mt-1 text-xs text-[#9aacc3]">ENSET Mohammedia · Morocco</p></div></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f,i)=><motion.article key={f.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{delay:i*.08}} className="surface-card surface-hover min-h-[225px] p-7">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#74d6cf]/15 bg-[#7ce0d4]/[.07] text-xl text-[#79e0d5]"><f.icon/></div>
          <h3 className="mb-2 text-lg font-extrabold">{f.name}</h3><p className="text-[13px] leading-[1.85] text-[#a1b1c6]">{f.detail}</p>
        </motion.article>)}
      </div>
    </div>
  </div>
</section>;
