import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'profiles', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-purple-600/30 selection:text-purple-200">
      {/* Dynamic Ambient Background Canvas */}
      <BackgroundCanvas />

      {/* Sticky Translucent Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
