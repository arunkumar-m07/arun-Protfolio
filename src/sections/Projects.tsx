import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          number="02"
          label="SELECTED WORK"
          title="Things I've built while learning."
          description="A selection of coursework, systems experiments, algorithmic repositories, and engineering projects."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
