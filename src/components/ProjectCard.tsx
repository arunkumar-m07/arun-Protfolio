import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Github, FileText } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="project-card"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        padding: 'clamp(24px, 3.5vw, 36px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div>
        {/* Top Metadata Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '14px'
          }}
        >
          <span
            className="project-number"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              transition: 'transform 0.2s ease, color 0.2s ease'
            }}
          >
            {project.number}
          </span>
          <span
            className="mono-label project-category"
            style={{
              fontSize: '0.6875rem',
              color: 'var(--text-muted)',
              transition: 'color 0.2s ease'
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: 'clamp(1.35rem, 2vw, 1.6rem)',
            fontWeight: 650,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.875rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            marginBottom: '16px',
            opacity: 0.9
          }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}
        >
          {project.description}
        </p>

        {/* Key Features Bullet List */}
        <div style={{ marginBottom: '24px' }}>
          <div
            className="mono-label"
            style={{ fontSize: '0.6875rem', marginBottom: '10px', color: 'var(--text-muted)' }}
          >
            KEY ARCHITECTURE &amp; FEATURES
          </div>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              margin: 0,
              padding: 0
            }}
          >
            {project.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.75rem'
                  }}
                >
                  ›
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '24px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          {project.techFocus.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <button
            onClick={() => onSelect(project)}
            className="btn-editorial btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
            aria-label={`View technical case study for ${project.title}`}
          >
            <FileText size={15} />
            <span>Case Study</span>
            <ArrowUpRight size={15} className="action-arrow" style={{ transition: 'transform 0.2s ease' }} />
          </button>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial btn-secondary"
            style={{ padding: '12px 14px' }}
            aria-label={`View ${project.title} on GitHub`}
            title="Inspect source code on GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          border-color: var(--border-medium);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        .project-card:hover .project-number {
          transform: translateX(2px);
          color: #00ffaa;
        }
        .project-card:hover .project-category {
          color: var(--text-secondary);
        }
        .project-card:hover .action-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </article>
  );
};
