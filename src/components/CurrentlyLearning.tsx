import React from 'react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';
import { Activity } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(24px, 3.5vw, 36px)',
        position: 'relative'
      }}
      className="currently-learning-card"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={18} style={{ color: 'var(--accent-primary)' }} />
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 650,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            What I'm working on now
          </h3>
        </div>
        <span
          className="mono-label"
          style={{
            fontSize: '0.6875rem',
            color: 'var(--accent-primary)',
            backgroundColor: 'var(--accent-dim)',
            padding: '2px 8px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          LIVE ITERATION
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {CURRENTLY_LEARNING.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              gap: '12px',
              flexWrap: 'wrap'
            }}
            className="learning-row"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '180px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)'
                }}
              >
                {item.id}
              </span>
              <span
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                {item.name}
              </span>
            </div>

            <div
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                flex: 1,
                minWidth: '220px'
              }}
            >
              {item.statusText}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  display: 'inline-block'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)'
                }}
              >
                IN PROGRESS
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .learning-row:hover {
          border-color: var(--border-medium);
        }
      `}</style>
    </div>
  );
};
