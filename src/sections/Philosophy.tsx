import React from 'react';
import { PRINCIPLES } from '../data/portfolioData';
import { PhilosophyCard } from '../components/PhilosophyCard';
import { SectionHeader } from '../components/SectionHeader';

export const Philosophy: React.FC = () => {
  return (
    <section className="section" style={{ paddingTop: '20px' }}>
      <div className="container">
        <SectionHeader
          number="01.1"
          label="ENGINEERING MINDSET"
          title="Principles guiding how I learn and build."
          description="A simple framework for developing lasting engineering capability."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {PRINCIPLES.map((principle) => (
            <PhilosophyCard key={principle.number} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
};
