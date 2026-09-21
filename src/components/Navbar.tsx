import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  number: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'work', number: '02', label: 'Work' },
  { id: 'skills', number: '03', label: 'Skills' },
  { id: 'journey', number: '04', label: 'Journey' },
  { id: 'contact', number: '05', label: 'Contact' }
];

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(9, 10, 13, 0.92)' : 'rgba(9, 10, 13, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'all 0.2s ease',
        height: 'var(--header-height)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--text-primary)'
          }}
          aria-label="Arun Kumar M. - Scroll to top"
        >
          <span
            style={{
              color: 'var(--accent-primary)',
              backgroundColor: 'var(--accent-dim)',
              padding: '2px 6px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            AKM
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 400 }}>
            / PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.03em',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)',
                  padding: '6px 0',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    fontSize: '0.6875rem',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)'
                  }}
                >
                  {item.number}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      backgroundColor: 'var(--accent-primary)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            color: 'var(--text-primary)',
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 99
          }}
        >
          <div className="mono-label" style={{ marginBottom: '8px' }}>
            DIRECTORY
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 550,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--accent-primary)'
                  }}
                >
                  {item.number}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
