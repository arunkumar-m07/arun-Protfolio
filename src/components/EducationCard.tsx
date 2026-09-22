import React from 'react';
import { EducationInfo } from '../types';
import { GraduationCap, Building2, Calendar, Award } from 'lucide-react';

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
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden'
      }}
      className="education-card"
    >
      {/* Decorative top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent-primary), transparent 70%)'
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px',
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
            color: 'var(--accent-primary)',
            backgroundColor: 'var(--accent-dim)',
            border: '1px solid var(--border-medium)',
            padding: '3px 10px',
            borderRadius: '2px',
            letterSpacing: '0.05em'
          }}
        >
          {education.tag}
        </span>
      </div>

      <div style={{ marginBottom: '22px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '8px'
          }}
        >
          <Building2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            {education.college}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1.05rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: '14px',
            paddingLeft: '28px'
          }}
        >
          <Award size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <span>{education.degree}</span>
        </div>

        {/* Batch & Expected Graduation Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            paddingLeft: '28px'
          }}
        >
          {education.batch && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-primary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-medium)',
                padding: '4px 10px',
                borderRadius: '2px'
              }}
            >
              <Calendar size={13} style={{ color: 'var(--accent-primary)' }} />
              <span>
                Batch: <strong style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{education.batch}</strong>
              </span>
            </div>
          )}

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>•</span>
            <span>Expected Completion: <span style={{ color: 'var(--text-secondary)' }}>{education.expectedGraduation}</span></span>
          </div>
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
          marginTop: '22px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-subtle)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            boxShadow: '0 0 6px var(--accent-primary)',
            display: 'inline-block'
          }}
        />
        <span>Currently Enrolled Undergraduate • School of Computer Science & Engineering</span>
      </div>
    </div>
  );
};
