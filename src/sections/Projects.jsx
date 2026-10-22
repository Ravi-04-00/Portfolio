import React, { useState } from 'react';
import { Eye, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';
import { PROJECTS_DATA, PROJECT_FILTERS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';

export default function Projects() {
  const { theme } = useTheme();
  const { modeInfo, developerMode } = useDeveloperMode();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter || p.technologies.includes(activeFilter));

  // Mode-aware project prioritization
  const prioritizedProjects = [...filteredProjects].sort((a, b) => {
    if (developerMode === 'frontend') {
      const aScore = a.technologies.includes('React') ? 1 : 0;
      const bScore = b.technologies.includes('React') ? 1 : 0;
      return bScore - aScore;
    } else if (developerMode === 'backend') {
      const aScore = (a.technologies.includes('Django') ? 2 : 0) + (a.technologies.includes('PostgreSQL') ? 1 : 0);
      const bScore = (b.technologies.includes('Django') ? 2 : 0) + (b.technologies.includes('PostgreSQL') ? 1 : 0);
      return bScore - aScore;
    }
    return 0;
  });

  return (
    <section id="projects" className="section-wrapper">
      <div className="content-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04 • SELECTED WORK</span>
          <h2 className="section-title">SELECTED WORK</h2>
          <p className="section-subtitle">
            {modeInfo.projectsSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '46px',
            flexWrap: 'wrap'
          }}
        >
          {PROJECT_FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="interactive-target"
                style={{
                  padding: '8px 22px',
                  borderRadius: '0px',
                  background: isActive ? 'var(--theme-accent)' : 'var(--theme-surface)',
                  color: isActive ? '#05070D' : 'var(--theme-text)',
                  border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* 3D Cards Grid */}
        <div
          className="projects-carousel-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'stretch',
            marginBottom: '40px'
          }}
        >
          {prioritizedProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for Project Detail View */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
