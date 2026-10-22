import React, { useState } from 'react';
import { Eye, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ProjectCard({ project, onSelectProject }) {
  const { theme } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="interactive-target"
      style={{
        perspective: '1200px',
        transition: 'transform 0.3s ease'
      }}
    >
      <div
        className="glass-panel"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          border: `1px solid ${isHovered ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
          boxShadow: isHovered
            ? `0 24px 60px rgba(0, 0, 0, 0.35), 0 0 25px var(--theme-gold-glow)`
            : '0 12px 35px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* Editorial Visual Header Frame */}
        <div
          className="editorial-image-frame"
          style={{
            height: '220px',
            position: 'relative',
            background: 'var(--theme-surface-secondary)',
            borderBottom: '1px solid var(--theme-border)'
          }}
        >
          {/* Cover image representation */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 50% 30%, ${project.accentColor}25 0%, var(--theme-surface) 80%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 12px auto',
                  background: 'var(--theme-surface)',
                  border: `1px solid var(--theme-accent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--theme-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 900,
                  fontSize: '1.4rem'
                }}
              >
                {project.name.charAt(0)}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--theme-accent)', letterSpacing: '0.18em' }}>
                {project.badge}
              </div>
            </div>
          </div>

          {/* Top Category Badge */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '4px 10px',
                background: 'var(--theme-surface)',
                color: 'var(--theme-text)',
                border: '1px solid var(--theme-border)',
                textTransform: 'uppercase'
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '10px',
              color: 'var(--theme-text)'
            }}
          >
            {project.title}
          </h3>

          {/* Summary */}
          <p
            style={{
              fontSize: '0.94rem',
              color: 'var(--theme-text-secondary)',
              lineHeight: 1.65,
              marginBottom: '22px',
              flexGrow: 1
            }}
          >
            {project.summary}
          </p>

          {/* Tech Badges List */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '26px'
            }}
          >
            {project.technologies.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  padding: '4px 10px',
                  background: 'var(--theme-surface-secondary)',
                  border: '1px solid var(--theme-border)',
                  color: 'var(--theme-text)'
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Trigger Button */}
          <button
            onClick={() => onSelectProject(project)}
            className="futuristic-btn interactive-target"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px 20px',
              fontSize: '0.84rem'
            }}
          >
            <Eye size={16} />
            <span>VIEW PROJECT</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
