import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
export const Hero: React.FC = () => {
  return <section id="hero" className="relative overflow-hidden pb-16 pt-[154px] md:pb-24 md:pt-[172px]">
    <div className="noise-grid pointer-events-none absolute inset-0 opacity-60" />
    <div className="pointer-events-none absolute right-[-210px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#3b78b0]/10 blur-[120px]" />
    <div className="section-wrap relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-8">
        <div>
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#5cd4c9]/20 bg-[#50c9be]/[.075] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-[#9de8e1]">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#67e5d3]/50"/><span className="relative h-2 w-2 rounded-full bg-[#70ead9]"/></span>
            Open to PFE internships · January 2027
          </motion.div>
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.06}} className="mb-3 text-sm font-semibold tracking-[.12em] text-[#dce5f3]">HELLO, I'M KAWTAR KHALLOUF</motion.p>
          <motion.h1 initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.12}} className="mb-6 max-w-[760px] text-[clamp(2.75rem,5.6vw,5.25rem)] font-extrabold leading-[1.095]">
            Turning data into <span className="text-glow">meaningful impact.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.19}} className="mb-8 max-w-[610px] text-[15px] leading-[1.95] text-[#a5b5c9] md:text-[17px]">
            Final-year Computer Science Engineering student specializing in <strong className="font-bold text-white">Big Data &amp; Cloud Computing</strong> at ENSET Mohammedia. I design practical solutions at the intersection of data, AI, IoT and software engineering.
          </motion.p>
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.28}} className="mb-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-main">Explore projects <FaArrowRight className="text-xs"/></a>
            <a href="/Kawtar_Khallouf_CV_PFE_2027_FR.pdf" download className="btn-ghost"><FaDownload className="text-xs"/> Download CV</a>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold text-[#91a8bf]">
            <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#79ddd3]"/> Morocco · Open to opportunities</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-[#79ddd3]"/> PFE 2027</span>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.75,delay:.22}} className="relative mx-auto w-full max-w-[450px] lg:ml-auto">
          <div className="absolute inset-[-25px] rounded-[44px] border border-[#70cbd3]/10"/>
          <div className="absolute inset-[-49px] rounded-[58px] border border-[#70cbd3]/[.065]"/>
          <div className="photo-ring relative rounded-[33px] shadow-[0_35px_100px_rgba(0,0,0,.43)]">
            <div className="overflow-hidden rounded-[32px] bg-[#12243c]">
              <img src="/images/kawtar.jpeg" alt="Portrait of Kawtar Khallouf" className="h-[390px] w-full object-cover object-center sm:h-[495px]" fetchPriority="high" />
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#071522]/85 via-transparent to-transparent"/>
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-3">
                <div><div className="mb-1 text-xs font-extrabold uppercase tracking-[.2em] text-[#80e8dd]">Computer Science</div><div className="font-display text-lg font-extrabold text-white">Big Data &amp; Cloud</div></div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-extrabold text-white backdrop-blur-md">ENSET</div>
              </div>
            </div>
          </div>
          <div className="art-glass absolute -bottom-5 -left-4 rounded-2xl border border-white/15 bg-[#172335]/95 px-5 py-4 sm:-left-10"><div className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-[#83dcd4]">Current focus</div><div className="text-sm font-extrabold text-white">Data · AI · Cloud</div></div>
        </motion.div>
      </div>
      <div className="mt-28 grid gap-5 border-t border-white/[.09] pt-9 sm:grid-cols-3">
        {[
          ['01 / BUILD','End-to-end applications'],
          ['02 / CONNECT','Cloud & IoT systems'],
          ['03 / LEARN','AI-driven solutions']
        ].map(([title,desc])=><div key={title} className="flex items-start gap-4"><span className="text-[11px] font-extrabold text-[#73dcd1]">{title}</span><span className="text-[12px] font-semibold text-[#b6c5d7]">{desc}</span></div>)}
      </div>
    </div>
  </section>;
};
