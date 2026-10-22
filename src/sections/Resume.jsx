import React, { useState } from 'react';
import { Download, Eye, FileText, CheckCircle2, Crown, Sparkles, X, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function Resume() {
  const { theme } = useTheme();
  const { modeInfo } = useDeveloperMode();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const skillsList = modeInfo.expertiseChips || [
    'Python',
    'Django & DRF',
    'React.js',
    'JavaScript (ES6+)',
    'PostgreSQL',
    'HTML5 & CSS3',
    'Bootstrap',
    'REST API Architecture',
    'Git & GitHub'
  ];

  const handleDownload = () => {
    // Generate text/pdf trigger
    const link = document.createElement('a');
    link.href = '/assets/Ravi-Kumar-Resume.pdf';
    link.download = 'Ravi-Kumar-Resume.pdf';
    window.print();
  };

  return (
    <section id="resume" className="section-wrapper">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06 • CURRICULUM VITAE</span>
          <h2 className="section-title">RESUME & CREDENTIALS</h2>
          <p className="section-subtitle">
            Python Full Stack Developer specializing in Django, React.js, PostgreSQL, modern responsive design, modular component architectures, and web performance.
          </p>
        </div>

        {/* Editorial Resume Card Container */}
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            border: '1px solid var(--theme-border)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Identity Block */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px',
              paddingBottom: '32px',
              borderBottom: '1px solid var(--theme-border)'
            }}
          >
            <div>
              <div className="editorial-label" style={{ marginBottom: '8px' }}>
                <Crown size={14} />
                <span>PROFESSIONAL PROFILE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 700, marginBottom: '6px' }}>
                Ravi Kumar
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--theme-accent)', letterSpacing: '0.08em' }}>
                {modeInfo.displayTitle}
              </p>
            </div>

            {/* Action Buttons: VIEW RESUME & DOWNLOAD RESUME */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="futuristic-btn interactive-target"
              >
                <Eye size={16} />
                <span>VIEW RESUME</span>
              </button>

              <button
                onClick={handleDownload}
                className="futuristic-btn futuristic-btn-primary interactive-target"
              >
                <Download size={16} />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Core Competencies & Skills Grid */}
          <div style={{ padding: '36px 0', borderBottom: '1px solid var(--theme-border)' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--theme-text-secondary)', marginBottom: '18px' }}>
              CORE TECHNICAL COMPETENCIES
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skillsList.map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--theme-surface-secondary)',
                    border: '1px solid var(--theme-border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--theme-text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--theme-accent)' }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              paddingTop: '36px'
            }}
          >
            {/* Practical Project Experience */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Briefcase size={18} style={{ color: 'var(--theme-accent)' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>
                  Frontend Engineering Highlights
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>React.js Single-Page Applications</div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', marginBottom: '4px' }}>
                    COMPONENT SYSTEMS • HOOKS • STATE MANAGEMENT
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.55 }}>
                    Engineered dynamic responsive interfaces, form validation logic, filtered data presentations, and smooth micro-interactions.
                  </p>
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>Modern CSS & Responsive Design</div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', marginBottom: '4px' }}>
                    CSS GRID • FLEXBOX • BOOTSTRAP • FLUID LAYOUTS
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.55 }}>
                    Built pixel-accurate mobile-first experiences with zero horizontal overflow, fluid clamp() typography, and high performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Version Control & Collaboration */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <GraduationCap size={18} style={{ color: 'var(--theme-accent)' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>
                  Workflow & Methodologies
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>Git Version Control & GitHub</div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', marginBottom: '4px' }}>
                    ATOMIC COMMITS • BRANCHING • CODE REVIEW
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.55 }}>
                    Disciplined version control habits with clear commit messages, structured pull requests, and automated deployment pipelines.
                  </p>
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>Clean Code & Accessibility (a11y)</div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', marginBottom: '4px' }}>
                    WCAG STANDARDS • SEMANTIC HTML5 • KEYBOARD NAVIGATION
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.55 }}>
                    Dedicated to semantic tag hierarchy, screen-reader compatibility, keyboard focus traps, and touch-target accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Resume Viewer */}
        {isPreviewOpen && (
          <div
            onClick={() => setIsPreviewOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(5, 7, 13, 0.88)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '40px',
                border: '1px solid var(--theme-accent)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px var(--theme-gold-glow)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setIsPreviewOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: '1px solid var(--theme-border)',
                  color: 'var(--theme-text)',
                  padding: '6px',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '1px solid var(--theme-border)', paddingBottom: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem' }}>RAVI KUMAR</h3>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', letterSpacing: '0.15em', fontSize: '0.9rem' }}>
                  PYTHON FULL STACK DEVELOPER
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--theme-text-secondary)', marginTop: '6px' }}>
                  Email: ravikumars.dev@gmail.com • India • Open to Global Remote Roles
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--theme-accent)', marginBottom: '8px' }}>
                  EXECUTIVE SUMMARY
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--theme-text)', lineHeight: 1.65 }}>
                  Passionate and detail-oriented Python Full Stack Developer with extensive hands-on experience building scalable web applications using Python, Django REST Framework, PostgreSQL, and React.js. Adept at designing resilient backend architectures, robust relational databases, and fluid user interfaces.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--theme-accent)', marginBottom: '8px' }}>
                  TECHNICAL SKILLS
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--theme-text-secondary)', lineHeight: 1.6 }}>
                  Python, Django, Django REST Framework, React.js, PostgreSQL, JavaScript (ES6+), HTML5, CSS3, Bootstrap, REST APIs, Git, GitHub.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--theme-accent)', marginBottom: '8px' }}>
                  FEATURED WORK
                </h4>
                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--theme-text)', lineHeight: 1.7 }}>
                  <li><strong>Food Delivery Ecosystem:</strong> Engineered end-to-end food ordering platform with Django DRF, PostgreSQL, and React.</li>
                  <li><strong>Student Registration App:</strong> Architected relational academic enrollment system with dynamic validations and metrics.</li>
                  <li><strong>AI Video Generator:</strong> Designed Python AI video synthesis pipeline integrated with interactive React studio UI.</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center', paddingTop: '16px' }}>
                <button
                  onClick={handleDownload}
                  className="futuristic-btn futuristic-btn-primary"
                >
                  <Download size={16} />
                  <span>DOWNLOAD PDF RESUME</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
