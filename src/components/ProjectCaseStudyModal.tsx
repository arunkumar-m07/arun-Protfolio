import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Code2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)',
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(24px, 4vw, 48px)',
          position: 'relative',
          borderRadius: '4px',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Header Action Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                color: 'var(--accent-primary)',
                fontWeight: 600
              }}
            >
              PROJECT {project.number}
            </span>
            <span style={{ color: 'var(--border-medium)' }}>/</span>
            <span className="mono-label" style={{ fontSize: '0.75rem' }}>
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              padding: '6px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease'
            }}
            className="close-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div style={{ marginBottom: '32px' }}>
          <h2
            id="case-study-title"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '10px'
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px'
          }}
        >
          {project.techFocus.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {/* 01 Overview */}
          <section>
            <div className="mono-label" style={{ marginBottom: '10px', color: 'var(--accent-primary)' }}>
              01 // OVERVIEW
            </div>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              {caseStudy.overview}
            </p>
          </section>

          {/* 02 Problem */}
          <section>
            <div className="mono-label" style={{ marginBottom: '10px', color: 'var(--accent-primary)' }}>
              02 // THE PROBLEM
            </div>
            <div
              style={{
                borderLeft: '2px solid var(--accent-primary)',
                paddingLeft: '16px',
                backgroundColor: 'rgba(0, 229, 153, 0.03)',
                paddingTop: '12px',
                paddingBottom: '12px'
              }}
            >
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                {caseStudy.problem}
              </p>
            </div>
          </section>

          {/* 03 Approach */}
          <section>
            <div className="mono-label" style={{ marginBottom: '10px', color: 'var(--accent-primary)' }}>
              03 // TECHNICAL APPROACH
            </div>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              {caseStudy.approach}
            </p>
          </section>

          {/* 04 Implementation */}
          <section>
            <div className="mono-label" style={{ marginBottom: '10px', color: 'var(--accent-primary)' }}>
              04 // IMPLEMENTATION ARCHITECTURE
            </div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '14px'
              }}
            >
              {caseStudy.implementation.title}
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {caseStudy.implementation.details.map((detail, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  <ArrowRight size={15} style={{ color: 'var(--accent-primary)', marginTop: '4px', flexShrink: 0 }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {caseStudy.implementation.codeSnippet && (
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 14px',
                    backgroundColor: 'var(--bg-tertiary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Code2 size={13} style={{ color: 'var(--accent-primary)' }} />
                    <span>CODE EXCERPT ({caseStudy.implementation.codeSnippet.language.toUpperCase()})</span>
                  </div>
                  <span>SOURCE REFERENCE</span>
                </div>
                <pre
                  style={{
                    padding: '16px',
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.6,
                    color: '#c9d1d9',
                    overflowX: 'auto',
                    tabSize: 4
                  }}
                >
                  <code>{caseStudy.implementation.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>

          {/* 05 What I learned */}
          <section>
            <div className="mono-label" style={{ marginBottom: '12px', color: 'var(--accent-primary)' }}>
              05 // WHAT I LEARNED
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {caseStudy.whatILearned.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '14px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 06 Future Improvements */}
          <section>
            <div className="mono-label" style={{ marginBottom: '12px', color: 'var(--accent-primary)' }}>
              06 // FUTURE IMPROVEMENTS & ROADMAP
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {caseStudy.futureImprovements.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '2px' }}>
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial btn-primary"
          >
            <Github size={16} />
            <span>Inspect on GitHub</span>
            <ExternalLink size={14} />
          </a>

          <button onClick={onClose} className="btn-editorial btn-secondary">
            Close Case Study
          </button>
        </div>

        <style>{`
          .close-btn:hover {
            color: var(--text-primary);
            border-color: var(--border-medium);
            background-color: rgba(255, 255, 255, 0.05);
          }
        `}</style>
      </div>
    </div>
  );
};
