import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { GithubIcon } from './SocialIcons';

export default function ProjectDetail({ project, onClose }) {
  const { theme } = useTheme();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Gallery items for project
  const galleryItems = [
    { title: 'Responsive Application Dashboard', color: project.accentColor },
    { title: 'Interactive Form & Search Interface', color: 'var(--theme-accent)' },
    { title: 'Component Architecture & State Hierarchy', color: 'var(--theme-primary)' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveGalleryIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, galleryItems.length]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
        background: 'rgba(5, 7, 13, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px',
        overflowY: 'auto'
      }}
    >
      <div
        className="glass-panel modal-project-content"
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '1px solid var(--theme-accent)',
          boxShadow: `0 30px 80px rgba(0, 0, 0, 0.7), 0 0 35px var(--theme-gold-glow)`,
          padding: '44px',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="interactive-target"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '42px',
            height: '42px',
            background: 'var(--theme-surface)',
            border: '1px solid var(--theme-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--theme-text)',
            cursor: 'pointer',
            zIndex: 10
          }}
          title="Close modal (Esc)"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="editorial-label" style={{ marginBottom: '10px' }}>
            <Sparkles size={14} />
            <span>CASE STUDY & ARCHITECTURAL BREAKDOWN</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 700,
              color: 'var(--theme-text)',
              marginBottom: '10px'
            }}
          >
            {project.title}
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--theme-text-secondary)', maxWidth: '780px', lineHeight: 1.7 }}>
            {project.summary}
          </p>
        </div>

        {/* Main 2-Column Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
            marginBottom: '40px'
          }}
        >
          {/* Left Column: Specs, Features & Tech Stack */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                color: 'var(--theme-accent)'
              }}
            >
              ENGINEERING FEATURES
            </h4>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--theme-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.94rem', color: 'var(--theme-text)', lineHeight: 1.55 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text-secondary)', marginBottom: '10px', letterSpacing: '0.12em' }}>
                TECHNOLOGIES UTILIZED:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      padding: '5px 14px',
                      background: 'var(--theme-surface-secondary)',
                      border: '1px solid var(--theme-border)',
                      color: 'var(--theme-text)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Live Demo & Github */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="futuristic-btn futuristic-btn-primary interactive-target"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={16} />
                <span>LIVE DEMO</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="futuristic-btn interactive-target"
                style={{ textDecoration: 'none' }}
              >
                <GithubIcon size={16} />
                <span>GITHUB REPOSITORY</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Gallery Presentation */}
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              height: '350px',
              border: `1px solid var(--theme-border)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              background: 'var(--theme-surface-secondary)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 16px auto',
                  background: 'var(--theme-surface)',
                  border: `2px solid var(--theme-accent)`,
                  boxShadow: `0 0 25px var(--theme-gold-glow)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'var(--theme-accent)'
                }}
              >
                {activeGalleryIndex + 1}
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '6px' }}>
                {galleryItems[activeGalleryIndex].title}
              </h4>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-text-secondary)', letterSpacing: '0.12em' }}>
                INTERACTIVE PREVIEW {activeGalleryIndex + 1} OF {galleryItems.length}
              </div>
            </div>

            {/* Prev / Next controls */}
            <button
              onClick={() => setActiveGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
              className="interactive-target"
              style={{
                position: 'absolute',
                left: '14px',
                width: '38px',
                height: '38px',
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-border)',
                color: 'var(--theme-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Previous Screenshot"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % galleryItems.length)}
              className="interactive-target"
              style={{
                position: 'absolute',
                right: '14px',
                width: '38px',
                height: '38px',
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-border)',
                color: 'var(--theme-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Next Screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div>
          <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text-secondary)', marginBottom: '12px', letterSpacing: '0.15em' }}>
            GALLERY VIEWS:
          </div>
          <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '6px' }}>
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className="interactive-target"
                style={{
                  padding: '12px 18px',
                  border: `1px solid ${activeGalleryIndex === idx ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                  background: activeGalleryIndex === idx ? 'var(--theme-surface-secondary)' : 'var(--theme-surface)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--theme-text)' }}>
                  View 0{idx + 1}: {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
