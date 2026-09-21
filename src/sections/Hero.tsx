import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from '../components/HeroVisual';
import { ArrowDownRight, Terminal } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section id="top" className="section" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
      <div className="container">
        {/* Top small label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px',
            padding: '4px 12px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-primary)',
              boxShadow: '0 0 8px var(--accent-primary)'
            }}
          />
          <span className="mono-label" style={{ fontSize: '0.6875rem' }}>
            {PERSONAL_INFO.brand} / DEVELOPER PROFILE
          </span>
        </div>

        {/* Editorial Layout: Left side text & meta, Right side visual */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '48px'
          }}
        >
          {/* Left Column */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 750,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '24px'
              }}
            >
              {PERSONAL_INFO.tagline}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                maxWidth: '560px'
              }}
            >
              {PERSONAL_INFO.summary}
            </p>

            {/* Status line */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--accent-primary)',
                backgroundColor: 'rgba(0, 229, 153, 0.06)',
                border: '1px solid var(--border-subtle)',
                padding: '8px 14px',
                borderRadius: '2px',
                marginBottom: '32px'
              }}
            >
              <Terminal size={14} />
              <span>{PERSONAL_INFO.statusLine}</span>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button onClick={onExploreWork} className="btn-editorial btn-primary">
                <span>Explore my work</span>
                <ArrowDownRight size={16} />
              </button>

              <button onClick={onConnect} className="btn-editorial btn-secondary">
                <span>Let's connect</span>
              </button>
            </div>
          </div>

          {/* Right Column: Subtle Abstract Visual */}
          <div>
            <HeroVisual />
          </div>
        </div>

        {/* Minimal metadata band */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px'
          }}
        >
          {PERSONAL_INFO.meta.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                className="mono-label"
                style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)'
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
