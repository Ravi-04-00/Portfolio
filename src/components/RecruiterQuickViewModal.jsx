import React, { useEffect } from 'react';
import { X, CheckCircle2, Crown, Terminal, Download, Mail, ExternalLink, Zap, Shield, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function RecruiterQuickViewModal({ isOpen, onClose }) {
  const { theme } = useTheme();
  const { developerMode } = useDeveloperMode();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      onClose();
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      onClose();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter Quick Technical Dossier"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99995,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(5, 7, 13, 0.82)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        animation: 'fadeIn 0.3s ease forwards'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '720px',
          maxWidth: '95vw',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--theme-surface)',
          border: '1.5px solid var(--theme-accent)',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.65), 0 0 45px var(--theme-gold-glow)',
          padding: '38px',
          position: 'relative',
          animation: 'modal3DScale 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="interactive-target"
          aria-label="Close recruiter quick view"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--theme-surface-secondary)',
            border: '1px solid var(--theme-border)',
            color: 'var(--theme-text)',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {/* Header Badge & Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <Crown size={18} style={{ color: 'var(--theme-accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--theme-accent)',
              fontWeight: 700
            }}
          >
            RECRUITER TECHNICAL DOSSIER • 2026
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.4rem',
            fontWeight: 700,
            color: 'var(--theme-text)',
            lineHeight: 1.15,
            marginBottom: '6px'
          }}
        >
          Ravi Kumar
        </h3>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--theme-accent)',
            marginBottom: '20px',
            letterSpacing: '0.08em'
          }}
        >
          Python Full Stack Developer • Production Engineering
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--theme-text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
          Full-stack engineer with hands-on expertise building enterprise-grade RESTful APIs with Django and Python, resilient schema architectures in PostgreSQL, and high-performance user interfaces in React.js.
        </p>

        {/* 4 Architectural Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}
        >
          <div
            style={{
              padding: '16px 20px',
              background: 'var(--theme-surface-secondary)',
              border: '1px solid var(--theme-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-accent)' }}>
              <Terminal size={16} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700 }}>BACKEND CORE</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Python 3, Django, DRF</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--theme-text-secondary)' }}>
              JWT Auth, ORM queries, microservices, task pipelines
            </div>
          </div>

          <div
            style={{
              padding: '16px 20px',
              background: 'var(--theme-surface-secondary)',
              border: '1px solid var(--theme-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#61DAFB' }}>
              <Cpu size={16} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700 }}>FRONTEND CORE</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>React.js, JavaScript (ES6+)</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--theme-text-secondary)' }}>
              Custom React hooks, Context API, responsive mobile-first UI
            </div>
          </div>

          <div
            style={{
              padding: '16px 20px',
              background: 'var(--theme-surface-secondary)',
              border: '1px solid var(--theme-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981' }}>
              <Zap size={16} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700 }}>DATABASE ARCHITECTURE</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>PostgreSQL & SQL</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--theme-text-secondary)' }}>
              ACID compliance, schema normalization, query indexing
            </div>
          </div>

          <div
            style={{
              padding: '16px 20px',
              background: 'var(--theme-surface-secondary)',
              border: '1px solid var(--theme-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E06D38' }}>
              <Shield size={16} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700 }}>PERFORMANCE & QUALITY</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>&lt; 40ms Latency • 99.9% Uptime</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--theme-text-secondary)' }}>
              WCAG accessibility, secure tokens, production tested
            </div>
          </div>
        </div>

        {/* Flagship Production Projects */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--theme-accent)',
              marginBottom: '10px'
            }}
          >
            FLAGSHIP PRODUCTION PROJECTS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                padding: '12px 16px',
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Food Delivery Ecosystem</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-secondary)', marginLeft: '10px' }}>
                  Django REST • React • PostgreSQL
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)' }}>
                10,000+ Orders
              </span>
            </div>

            <div
              style={{
                padding: '12px 16px',
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Student Registration App</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-secondary)', marginLeft: '10px' }}>
                  Django • React • PostgreSQL Relational
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#10B981' }}>
                5,000+ Students
              </span>
            </div>

            <div
              style={{
                padding: '12px 16px',
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div>
                <strong style={{ fontSize: '0.92rem' }}>AI Video Generator</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-secondary)', marginLeft: '10px' }}>
                  Python AI Pipeline • React Studio UI
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#6D5DFB' }}>
                Fast AI Synthesis
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownload}
            className="futuristic-btn futuristic-btn-primary interactive-target"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            <Download size={16} />
            <span>DOWNLOAD CURRICULUM VITAE</span>
          </button>

          <button
            onClick={handleContact}
            className="futuristic-btn interactive-target"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            <Mail size={16} />
            <span>DIRECT DISPATCH TO RAVI</span>
          </button>

          <a
            href="https://github.com/ravikumar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="futuristic-btn interactive-target"
            style={{ padding: '12px 20px', fontSize: '0.85rem', textDecoration: 'none' }}
          >
            <GithubIcon size={16} />
            <span>GITHUB REPOSITORIES</span>
          </a>
        </div>
      </div>
    </div>
  );
}
