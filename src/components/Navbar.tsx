import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', ...navItems.map(item => item.id)];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#05070f]/80 backdrop-blur-md border-b border-white/[0.06] shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-1.5 focus:outline-none"
        >
          Kawtar<span className="text-brand-indigo">.</span>Khallouf
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-white focus:outline-none relative ${
                activeSection === item.id ? 'text-white' : 'text-brand-muted'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-indigo rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right buttons (Socials + Resume) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/kawtar-khallouf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted hover:text-white transition-colors p-2 text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kawtar-khallouf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-muted hover:text-white transition-colors p-2 text-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:khalloufkawtar09@gmail.com"
            className="text-brand-muted hover:text-white transition-colors p-2 text-lg"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/Kawtar_Khallouf_CV_EN_PFA.pdf"
            download
            className="flex items-center gap-2 px-4  py-2 rounded-full border border-brand-indigo/30 hover:border-brand-indigo text-xs font-semibold text-white bg-brand-indigo/10 hover:bg-brand-indigo transition-all duration-200"
          >
            <FaDownload className="text-[10px]" />
            CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 focus:outline-none hover:bg-white/5 rounded-lg"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#05070f] z-40 border-t border-white/[0.06] flex flex-col justify-between py-8 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium text-left focus:outline-none ${
                  activeSection === item.id ? 'text-brand-indigo font-bold' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-6">
            <a
              href="/Kawtar_Khallouf_CV_EN_PFA.pdf"
              download
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-indigo/35 text-white bg-brand-indigo/20 font-semibold text-sm"
            >
              <FaDownload /> Download CV
            </a>
            <div className="flex justify-center gap-6 text-2xl py-2">
              <a href="https://github.com/kawtar-khallouf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/kawtar-khallouf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="mailto:khalloufkawtar09@gmail.com" className="text-slate-400 hover:text-white">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
