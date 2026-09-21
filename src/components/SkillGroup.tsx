import React from 'react';
import { SkillCategory } from '../types';

interface SkillGroupProps {
  category: SkillCategory;
  index: number;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, index }) => {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      className="skill-group-card"
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px'
          }}
        >
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            {category.title}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-primary)'
            }}
          >
            [0{index + 1}]
          </span>
        </div>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: 0,
            margin: 0
          }}
        >
          {category.skills.map((skill) => (
            <li
              key={skill}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                transition: 'all 0.15s ease'
              }}
              className="skill-list-item"
            >
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  fontWeight: 450
                }}
              >
                {skill}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--accent-primary)',
                  opacity: 0.7
                }}
              >
                ACTIVE
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .skill-group-card:hover {
          border-color: var(--border-medium);
        }
        .skill-list-item:hover {
          border-color: var(--border-medium);
          background-color: rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </div>
  );
};
