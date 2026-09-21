import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ContactSection } from '../components/ContactSection';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          number="05"
          label="CONTACT"
          title="Let's build something useful."
          description="Open to collaborative student projects, discussions about data systems, or software engineering conversations."
        />

        <ContactSection />
      </div>
    </section>
  );
};
