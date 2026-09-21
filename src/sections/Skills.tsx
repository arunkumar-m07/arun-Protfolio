import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { SkillGroup } from '../components/SkillGroup';
import { CurrentlyLearning } from '../components/CurrentlyLearning';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          number="03"
          label="TOOLBOX"
          title="Tools I use to think, build, and learn."
          description="Technologies, frameworks, and fundamentals prioritized based on engineering depth."
        />

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillGroup key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Dynamic Currently Learning Panel */}
        <CurrentlyLearning />
      </div>
    </section>
  );
};
