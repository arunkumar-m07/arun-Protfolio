import React from 'react';
import { EducationInfo } from '../types';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  education: EducationInfo;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(24px, 3vw, 36px)',
        position: 'relative'
      }}
      className="education-card"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationCap size={18} style={{ color: 'var(--accent-primary)' }} />
          <span className="mono-label" style={{ color: 'var(--accent-primary)' }}>
            ACADEMIC PROFILE
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            border: '1px dashed var(--border-medium)',
            padding: '2px 8px',
            borderRadius: '2px'
          }}
        >
          {education.tag}
        </span>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '6px'
          }}
        >
          {education.college}
        </div>
        <div
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '4px'
          }}
        >
          {education.degree}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--accent-primary)'
          }}
        >
          Expected Completion: {education.expectedGraduation}
        </div>
      </div>

      <div>
        <div
          className="mono-label"
          style={{ fontSize: '0.6875rem', marginBottom: '10px', color: 'var(--text-muted)' }}
        >
          CORE COURSEWORK
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {education.coursework.map((course) => (
            <span key={course} className="tech-tag">
              {course}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-subtle)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span style={{ color: 'var(--accent-primary)' }}>*</span>
        <span>Values with bracket notation can be updated directly in <code>src/data/portfolioData.ts</code></span>
      </div>
    </div>
  );
};
