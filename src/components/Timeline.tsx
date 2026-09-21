import React from 'react';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div style={{ position: 'relative', paddingLeft: '32px' }} className="timeline-container">
      {/* Vertical line */}
      <div
        style={{
          position: 'absolute',
          left: '11px',
          top: '8px',
          bottom: '16px',
          width: '1px',
          backgroundColor: 'var(--border-subtle)'
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: 'relative'
            }}
            className="timeline-item"
          >
            {/* Timeline Node marker */}
            <div
              style={{
                position: 'absolute',
                left: '-32px',
                top: '4px',
                width: '23px',
                height: '23px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-primary)'
              }}
            >
              <div
                style={{
                  width: '9px',
                  height: '9px',
                  backgroundColor: index === 0 ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                  border: `1px solid ${index === 0 ? 'var(--accent-primary)' : 'var(--border-medium)'}`,
                  borderRadius: '1px'
                }}
              />
            </div>

            {/* Content card */}
            <div
              style={{
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-secondary)',
                padding: '24px 28px',
                transition: 'border-color var(--transition-normal)'
              }}
              className="timeline-card"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '12px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-primary)',
                    backgroundColor: 'var(--accent-dim)',
                    padding: '2px 8px',
                    borderRadius: '2px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {item.period}
                </span>
                {item.highlight && (
                  <span
                    className="mono-label"
                    style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}
                  >
                    FOCUS: {item.highlight}
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '14px'
                }}
              >
                {item.subtitle}
              </div>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-card:hover {
          border-color: var(--border-medium);
        }
      `}</style>
    </div>
  );
};
