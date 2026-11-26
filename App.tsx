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

const App: React.FC = () => <div className="page-bg min-h-screen text-[#c3d0e0]">
  <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3 focus:text-black">Skip to content</a>
  <Navbar/>
  <main><Hero/><About/><Experience/><Projects/><Skills/><Awards/><Certifications/><Contact/></main>
  <footer className="border-t border-white/[.07] py-8"><div className="section-wrap flex flex-col items-start justify-between gap-4 text-[12px] text-[#8094aa] sm:flex-row sm:items-center"><div>© {new Date().getFullYear()} Kawtar Khallouf · Engineering, Big Data &amp; Cloud Computing</div><a href="#hero" className="font-bold text-[#a1cfcf] hover:text-white">Back to top ↑</a></div></footer>
</div>;
export default App;
