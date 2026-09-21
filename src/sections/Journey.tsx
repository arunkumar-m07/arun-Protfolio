import React from 'react';
import { LEARNING_JOURNEY } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { Timeline } from '../components/Timeline';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHeader
          number="04"
          label="JOURNEY"
          title="Currently building the foundation."
          description="A chronological perspective on the technical domains I have engaged with and where my focus is directed."
        />

        <div style={{ maxWidth: '840px' }}>
          <Timeline items={LEARNING_JOURNEY} />
        </div>
      </div>
    </section>
  );
};
