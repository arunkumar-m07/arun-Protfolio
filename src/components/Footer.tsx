import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
        padding: '36px 0',
        marginTop: '60px'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              color: 'var(--accent-primary)',
              backgroundColor: 'var(--accent-dim)',
              padding: '2px 8px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            AKM
          </span>
          <span
            className="mono-label"
            style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
          >
            ENGINEERING NOTEBOOK
          </span>
        </div>

        {/* Center */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)'
          }}
        >
          Built with curiosity.
        </div>

        {/* Right + Back to top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}
          >
            © 2026 Arun Kumar M.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="btn-text"
            style={{ fontSize: '0.75rem' }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
