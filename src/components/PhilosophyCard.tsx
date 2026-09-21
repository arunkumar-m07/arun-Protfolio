import React from 'react';
import { Principle } from '../types';

interface PhilosophyCardProps {
  principle: Principle;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ principle }) => {
  return (
    <article
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color var(--transition-normal), transform var(--transition-normal)',
        position: 'relative',
        minHeight: '260px'
      }}
      className="philosophy-card"
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--accent-primary)'
            }}
          >
            {principle.number}
          </span>
          <span
            className="mono-label"
            style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}
          >
            PRINCIPLE
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            letterSpacing: '-0.01em'
          }}
        >
          {principle.title}
        </h3>

        <p
          style={{
            fontSize: '0.9375rem',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            lineHeight: 1.5
          }}
        >
          "{principle.tagline}"
        </p>
      </div>

      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginTop: 'auto'
        }}
      >
        {principle.description}
      </p>

      <style>{`
        .philosophy-card:hover {
          border-color: var(--border-medium);
          transform: translateY(-2px);
        }
      `}</style>
    </article>
  );
};
