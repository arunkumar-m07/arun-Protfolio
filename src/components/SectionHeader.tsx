import React from 'react';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`section-header ${className}`} style={{ marginBottom: '48px' }}>
      <div
        className="mono-label"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '14px',
          color: 'var(--text-secondary)'
        }}
      >
        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{number}</span>
        <span style={{ opacity: 0.35 }}>/</span>
        <span style={{ letterSpacing: '0.12em' }}>{label}</span>
      </div>
      <h2
        style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 650,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)',
          maxWidth: '850px'
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            marginTop: '16px',
            fontSize: '1.0625rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '680px'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
