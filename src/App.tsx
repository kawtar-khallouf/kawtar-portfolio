import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070f] text-slate-200 selection:bg-brand-indigo/35 selection:text-white relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Section contents */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/[0.04] text-center text-xs text-brand-muted bg-[#03050a] z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Kawtar Khallouf. Big Data & Cloud Computing Student.
          </div>
          <div className="flex gap-6 font-semibold">
            <a 
              href="https://github.com/kawtar-khallouf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-slate-800 select-none">•</span>
            <a 
              href="https://linkedin.com/in/kawtar-khallouf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="text-slate-800 select-none">•</span>
            <a 
              href="mailto:khalloufkawtar09@gmail.com" 
              className="hover:text-white transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
