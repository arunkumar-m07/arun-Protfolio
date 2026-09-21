import { useState, useEffect } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Philosophy } from './sections/Philosophy';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Journey } from './sections/Journey';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const sections = ['about', 'work', 'skills', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onConnect={() => scrollToSection('contact')}
        />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Philosophy />

        <div className="section-divider" />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Journey />

        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Expandable Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
