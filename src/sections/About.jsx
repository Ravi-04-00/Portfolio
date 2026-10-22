import React from 'react';
import { MapPin, Mail, CheckCircle2, Download, Terminal, Quote, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function About() {
  const { theme } = useTheme();
  const { modeInfo } = useDeveloperMode();

  const handleDownloadResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02 • EDITORIAL PROFILE</span>
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            {modeInfo.heroDescription}
          </p>
        </div>

        {/* Asymmetric 12-Column Editorial Grid */}
        <div
          className="about-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Large Editorial Portrait with Grayscale Default and 1600ms Hover Color Reveal */}
          <div
            className="glass-panel-interactive editorial-image-frame"
            style={{
              border: '1px solid var(--theme-border)',
              position: 'relative',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '28px'
            }}
          >
            {/* Ravi Kumar's Real Photo with 1600ms Color Reveal */}
            <img
              src="/assets/ravi_kumar.jpg"
              alt="Ravi Kumar"
              style={{
                position: 'absolute',
                inset: 0,
                width: '95%',
                height: '95%',
                objectFit: 'cover',
                objectPosition: 'center '
              }}
            />

            {/* Dark Editorial Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 45%, var(--theme-background) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Identity Tag */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                zIndex: 3
              }}
            >
              <div
                className="hud-badge"
                style={{
                  background: 'var(--theme-surface)',
                  borderColor: 'var(--theme-accent)',
                  color: 'var(--theme-accent)'
                }}
              >
                <Crown size={14} />
                <span>{modeInfo.aboutTag}</span>
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-border)',
                padding: '20px 24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Quote size={16} style={{ color: 'var(--theme-accent)' }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.18em',
                  color: 'var(--theme-accent)',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  CORE CREED
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'var(--theme-text)',
                lineHeight: 1.5
              }}>
                "Code is not just a skill, it's my way of thinking."
              </p>
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--theme-text-secondary)',
                marginTop: '8px',
                textAlign: 'right',
                fontFamily: 'var(--font-mono)'
              }}>
                — Ravi Kumar
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Competencies & Details */}
          <div>
            <div className="editorial-label" style={{ marginBottom: '16px' }}>
              <Terminal size={14} />
              <span>{modeInfo.aboutEditorialLabel}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.4rem',
              fontWeight: 700,
              lineHeight: 1.18,
              marginBottom: '20px',
              color: 'var(--theme-text)'
            }}>
              {modeInfo.aboutHeading}
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--theme-text-secondary)',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              {modeInfo.aboutBio1}
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--theme-text-secondary)',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              {modeInfo.aboutBio2}
            </p>

            {/* Editorial Contact Quick Details */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '36px'
              }}
            >
              <div
                className="glass-panel"
                style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <MapPin size={20} style={{ color: 'var(--theme-accent)' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    LOCATION
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>India (Open to Remote)</div>
                </div>
              </div>

              <div
                className="glass-panel"
                style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <Mail size={20} style={{ color: 'var(--theme-primary)' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    EMAIL
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>ravikumars.dev@gmail.com</div>
                </div>
              </div>

              <div
                className="glass-panel"
                style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <CheckCircle2 size={20} style={{ color: '#10B981' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    AVAILABILITY
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#10B981' }}>
                    Open for {modeInfo.displayTitle} Roles
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleDownloadResume}
              className="futuristic-btn futuristic-btn-primary interactive-target"
            >
              <Download size={17} />
              <span>VIEW RESUME & CREDENTIALS</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
