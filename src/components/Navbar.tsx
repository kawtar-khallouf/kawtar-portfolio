import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaArrowRight, FaDownload } from 'react-icons/fa';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },
];
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/10 bg-[#080e19]/95 backdrop-blur-xl' : 'bg-[#080e19]/40 backdrop-blur-md'}`}>
    <div className="section-wrap flex h-[78px] items-center justify-between gap-4">
      <a href="#hero" onClick={() => setOpen(false)} aria-label="Kawtar Khallouf — Home" className="flex items-center gap-2.5 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#78e5da]/30 bg-[#5cdacf]/10 text-sm font-extrabold text-[#7de9df]">K.</span>
        <span className="font-display text-[15px] font-extrabold tracking-[-.04em]">kawtar<span className="text-[#6cdbd1]">.</span>khallouf</span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
        {links.map(l => <a key={l.href} href={l.href} className="text-[12px] font-bold text-[#93a6bd] transition-colors hover:text-white">{l.label}</a>)}
      </nav>
      <a href="#contact" className="hidden items-center gap-2 rounded-xl border border-[#6cddd0]/25 bg-[#6cddd0]/10 px-4 py-2.5 text-xs font-bold text-[#9cebe4] transition-colors hover:bg-[#6cddd0]/20 sm:inline-flex">Let's connect <FaArrowRight className="text-[10px]"/></a>
      <button onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-xl border border-white/10 p-2.5 text-white lg:hidden">{open ? <FaTimes/> : <FaBars/>}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="h-[calc(100dvh-78px)] overflow-y-auto border-t border-white/[0.06] bg-[#090f1b] px-7 py-7 lg:hidden">
      {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.07] py-4 font-display text-xl font-bold text-white">{l.label}</a>)}
      <a href="/Kawtar_Khallouf_CV_PFE_2027_FR.pdf" download className="btn-main mt-8 w-full" onClick={() => setOpen(false)}><FaDownload/> Download CV</a>
    </nav>}
  </header>;
};
