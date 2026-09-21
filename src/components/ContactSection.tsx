import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, Copy, Check, Send, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    // Generate mailto link or friendly feedback
    const mailto = `mailto:${CONTACT_DATA.email}?subject=Contact from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'start'
      }}
    >
      {/* Left Column: Direct channels and info */}
      <div>
        <div
          className="mono-label"
          style={{ marginBottom: '14px', color: 'var(--accent-primary)' }}
        >
          DIRECT COMMS
        </div>
        <h3
          style={{
            fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
            fontWeight: 650,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}
        >
          {CONTACT_DATA.heading}
        </h3>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '32px',
            maxWidth: '500px'
          }}
        >
          {CONTACT_DATA.supportingText}
        </p>

        {/* Channels List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
          {/* GitHub */}
          <a
            href={CONTACT_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              transition: 'all 0.2s ease'
            }}
            className="contact-channel"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Github size={18} style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  GitHub
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  github.com/arunkumar-m07
                </div>
              </div>
            </div>
            <ExternalLink size={16} style={{ color: 'var(--text-muted)' }} />
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_DATA.linkedinUrl.startsWith('http') ? CONTACT_DATA.linkedinUrl : '#'}
            onClick={(e) => {
              if (!CONTACT_DATA.linkedinUrl.startsWith('http')) {
                e.preventDefault();
                alert('Placeholder link: edit CONTACT_DATA.linkedinUrl in src/data/portfolioData.ts');
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              transition: 'all 0.2s ease'
            }}
            className="contact-channel"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Linkedin size={18} style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  LinkedIn
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {CONTACT_DATA.linkedinUrl}
                </div>
              </div>
            </div>
            <ExternalLink size={16} style={{ color: 'var(--text-muted)' }} />
          </a>

          {/* Email with copy */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Email
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {CONTACT_DATA.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="btn-editorial btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
            >
              {copiedEmail ? <Check size={14} style={{ color: 'var(--accent-primary)' }} /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Availability status line */}
        <div
          style={{
            borderLeft: '2px solid var(--border-medium)',
            paddingLeft: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          {CONTACT_DATA.availability}
        </div>
      </div>

      {/* Right Column: Clean Editorial Direct Message Form */}
      <div
        style={{
          border: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-secondary)',
          padding: 'clamp(24px, 3.5vw, 36px)',
          borderRadius: '2px'
        }}
      >
        <div
          className="mono-label"
          style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}
        >
          TRANSMIT MESSAGE
        </div>

        {submitted ? (
          <div
            style={{
              padding: '32px 16px',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 229, 153, 0.05)',
              border: '1px solid var(--accent-dim)'
            }}
          >
            <Check size={28} style={{ color: 'var(--accent-primary)', marginBottom: '12px' }} />
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.1rem' }}>
              Mail client opened
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Your email client was invoked with pre-filled content.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label
                htmlFor="contact-name"
                className="mono-label"
                style={{ display: 'block', marginBottom: '8px', fontSize: '0.6875rem' }}
              >
                NAME
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your name or affiliation"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: '0.9375rem',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mono-label"
                style={{ display: 'block', marginBottom: '8px', fontSize: '0.6875rem' }}
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="your.email@domain.com"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: '0.9375rem',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-msg"
                className="mono-label"
                style={{ display: 'block', marginBottom: '8px', fontSize: '0.6875rem' }}
              >
                MESSAGE
              </label>
              <textarea
                id="contact-msg"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Discussing a technical project, DSA problem, or engineering inquiry..."
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: '0.9375rem',
                  borderRadius: '2px',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-editorial btn-primary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <Send size={15} />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>

      <style>{`
        .contact-channel:hover {
          border-color: var(--border-medium);
          background-color: rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </div>
  );
};
