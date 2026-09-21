import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { EducationCard } from '../components/EducationCard';
import { Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          number="01"
          label="ABOUT"
          title="Learning the systems behind the software."
          description="Understanding how software behaves at runtime, from memory allocations to relational schemas."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '48px'
          }}
        >
          {/* Main Editorial Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-primary)',
                lineHeight: 1.7
              }}
            >
              I am an engineering student actively developing core foundations across computer
              science and software engineering. Rather than treating frameworks as opaque black boxes,
              I am drawn to understanding the mechanics underneath: how memory is organized in C,
              how relational query planners execute joins in SQL, and how data structures dictate
              algorithmic performance.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}
            >
              My learning path is deliberately structured around first principles. By practicing low-level
              file management, 2D matrix manipulation, and rigorous algorithmic problem solving, I aim to
              build the disciplined mental models required to design reliable, data-intensive software
              systems as I progress toward data science and engineering roles.
            </p>

            {/* Currently Exploring */}
            <div
              style={{
                marginTop: '12px',
                padding: '20px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}
              >
                <Compass size={16} style={{ color: 'var(--accent-primary)' }} />
                <span className="mono-label" style={{ color: 'var(--accent-primary)', fontSize: '0.6875rem' }}>
                  CURRENTLY EXPLORING
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {PERSONAL_INFO.currentlyExploring.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card Column */}
          <div>
            <EducationCard education={EDUCATION_DATA} />
          </div>
        </div>
      </div>
    </section>
  );
};
