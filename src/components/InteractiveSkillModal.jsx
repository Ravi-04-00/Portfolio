import React, { useState, useEffect } from 'react';
import { X, Terminal, ArrowRight, Layers, CheckCircle2, Bot, Activity, ExternalLink, Zap } from 'lucide-react';
import { TECH_ICON_MAP } from './TechIcons';

export default function InteractiveSkillModal({ skill, onClose, onSelectRelated }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'aiGuide' | 'liveFlow' | 'projects'

  // Escape key listener to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  const IconComponent = TECH_ICON_MAP[skill.id];

  const handleJumpToProjects = () => {
    onClose();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${skill.name} 3D Skill Visualization`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99995,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(5, 7, 13, 0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        animation: 'fadeIn 0.3s ease forwards'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '680px',
          maxWidth: '96vw',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--theme-surface)',
          border: `1.5px solid ${skill.color || 'var(--theme-accent)'}`,
          boxShadow: `0 35px 90px rgba(0, 0, 0, 0.65), 0 0 50px ${skill.glow || 'var(--theme-gold-glow)'}`,
          padding: '32px',
          position: 'relative',
          animation: 'modal3DScale 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="interactive-target"
          aria-label="Close skill inspection"
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
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Top 3D Holographic Artifact Presentation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '22px',
            borderBottom: '1px solid var(--theme-border)',
            paddingBottom: '20px'
          }}
        >
          {/* 3D Floating Isometric Object Shield */}
          <div
            style={{
              width: '94px',
              height: '94px',
              borderRadius: '0px',
              background: 'var(--theme-surface-secondary)',
              border: `2px solid ${skill.color}`,
              boxShadow: `0 0 35px ${skill.glow}, inset 0 0 20px ${skill.glow}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transform: 'perspective(400px) rotateY(-10deg) rotateX(8deg)',
              animation: 'floatGentle 4s ease-in-out infinite',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Soft chrome rim light */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            {IconComponent ? (
              <IconComponent size={44} />
            ) : (
              <span style={{ fontSize: '2.4rem' }}>{skill.icon}</span>
            )}
          </div>

          <div style={{ flex: 1, paddingRight: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: skill.color,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700
                }}
              >
                {skill.layerTitle}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 8px',
                  background: 'var(--theme-surface-secondary)',
                  border: '1px solid var(--theme-border)',
                  color: 'var(--theme-accent)',
                  fontWeight: 800
                }}
              >
                {skill.mastery}% MASTERY
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 8px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10B981',
                  color: '#10B981',
                  fontWeight: 700
                }}
              >
                PRODUCTION TESTED
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.1rem',
                fontWeight: 700,
                color: 'var(--theme-text)',
                lineHeight: 1.1,
                marginBottom: '4px'
              }}
            >
              {skill.name}
            </h3>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--theme-text-secondary)' }}>
              {skill.tag}
            </div>
          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '20px',
            borderBottom: '1px solid var(--theme-border)',
            paddingBottom: '8px',
            overflowX: 'auto'
          }}
        >
          {[
            { id: 'overview', label: '3D ARCHITECTURE', icon: Layers },
            { id: 'aiGuide', label: 'AI DEVELOPER GUIDE', icon: Bot },
            { id: 'liveFlow', label: 'LIVE ARCHITECTURE FLOW', icon: Activity },
            { id: 'projects', label: 'PROJECT GRAVITY & CODE', icon: Terminal }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  background: isActive ? 'var(--theme-accent)' : 'transparent',
                  color: isActive ? '#05070D' : 'var(--theme-text-secondary)',
                  border: `1px solid ${isActive ? 'var(--theme-accent)' : 'transparent'}`,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* TAB 1: OVERVIEW & 3D ARCHITECTURE */}
        {/* ================================================================= */}
        {activeTab === 'overview' && (
          <div>
            {/* 3D Visual Object Description */}
            <div
              style={{
                padding: '12px 16px',
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--theme-text-secondary)' }}>3D OBJECT:</span>
                <span style={{ color: 'var(--theme-accent)', fontWeight: 700 }}>{skill.visualObject}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {(skill.materials || ['Glass', 'Brushed Metal', 'Chrome']).map((m) => (
                  <span
                    key={m}
                    style={{
                      fontSize: '0.64rem',
                      padding: '2px 6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--theme-border)',
                      color: 'var(--theme-text-secondary)'
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Architectural Usage */}
            <div style={{ marginBottom: '20px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--theme-accent)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Terminal size={14} />
                <span>CORE ARCHITECTURAL USAGE</span>
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--theme-text)', lineHeight: 1.65 }}>
                {skill.coreUsage}
              </p>
            </div>

            {/* Real-World Project Usage */}
            <div style={{ marginBottom: '20px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--theme-accent)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                <span>REAL-WORLD PROJECT IMPLEMENTATION</span>
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--theme-text-secondary)', lineHeight: 1.6 }}>
                {skill.projectUsage}
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: AI DEVELOPER GUIDE */}
        {/* ================================================================= */}
        {activeTab === 'aiGuide' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div
              style={{
                padding: '16px',
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-accent)',
                borderRadius: '0px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Bot size={16} style={{ color: 'var(--theme-accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-accent)', fontWeight: 700, letterSpacing: '0.12em' }}>
                  AI ARCHITECTURAL BRIEF
                </span>
              </div>
              <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '8px', color: 'var(--theme-text)' }}>
                {skill.aiGuide?.headline || `${skill.name} in Enterprise Full-Stack Engineering`}
              </h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.65 }}>
                {skill.aiGuide?.summary || skill.coreUsage}
              </p>
            </div>

            <div
              style={{
                padding: '14px 16px',
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid #10B981',
                borderRadius: '0px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Zap size={14} style={{ color: '#10B981' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#10B981', fontWeight: 700, letterSpacing: '0.1em' }}>
                  KEY ARCHITECTURAL ADVANTAGE
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--theme-text)', lineHeight: 1.6 }}>
                {skill.aiGuide?.keyStrength || 'Optimized for high-throughput, predictable rendering, and long-term modular maintainability.'}
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: LIVE ARCHITECTURE FLOW */}
        {/* ================================================================= */}
        {activeTab === 'liveFlow' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-text-secondary)', marginBottom: '14px', letterSpacing: '0.12em' }}>
              EXECUTION PIPELINE • STEP-BY-STEP DATA TRAVERSAL
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(skill.flow || ['Input', 'Processing', 'Validation', 'Output']).map((step, idx) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 16px',
                    background: 'var(--theme-surface-secondary)',
                    border: '1px solid var(--theme-border)',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '0px',
                      background: idx === 0 ? 'var(--theme-accent)' : idx === (skill.flow?.length - 1) ? '#10B981' : 'var(--theme-surface)',
                      color: idx === 0 ? '#05070D' : 'var(--theme-text)',
                      border: '1px solid var(--theme-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--theme-text)' }}>
                      {step}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      Stage {idx + 1} of {skill.flow?.length || 4} in active pipeline
                    </div>
                  </div>

                  <ArrowRight size={15} style={{ color: 'var(--theme-border)' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: PROJECT GRAVITY & CODE DNA */}
        {/* ================================================================= */}
        {activeTab === 'projects' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-accent)', fontWeight: 700, letterSpacing: '0.14em' }}>
                  CONNECTED PORTFOLIO PROJECTS
                </span>
                <button
                  onClick={handleJumpToProjects}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--theme-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>View All Projects</span>
                  <ExternalLink size={12} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {(skill.projects || [{ id: 'food-delivery', title: 'Food Delivery Platform', role: 'Full Stack Integration' }]).map((p) => (
                  <div
                    key={p.id}
                    onClick={handleJumpToProjects}
                    className="interactive-target"
                    style={{
                      padding: '12px 14px',
                      background: 'var(--theme-surface-secondary)',
                      border: '1px solid var(--theme-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--theme-text)' }}>{p.title}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>{p.role}</div>
                    </div>
                    <ArrowRight size={14} style={{ color: 'var(--theme-accent)' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Code DNA Fragment */}
            {skill.codeDNA && (
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-text-secondary)', marginBottom: '6px', letterSpacing: '0.14em' }}>
                  CODE DNA FRAGMENT
                </div>
                <pre
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid var(--theme-border)',
                    padding: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: skill.color,
                    overflowX: 'auto',
                    margin: 0
                  }}
                >
                  <code>{skill.codeDNA}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Bottom Connected Technology Constellation */}
        <div style={{ borderTop: '1px solid var(--theme-border)', paddingTop: '16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--theme-text-secondary)',
              marginBottom: '10px'
            }}
          >
            CONNECTED TECHNOLOGY CONSTELLATION (CLICK TO INSPECT)
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {skill.relatedSkills.map((relName) => (
              <button
                key={relName}
                onClick={() => onSelectRelated && onSelectRelated(relName)}
                className="interactive-target"
                style={{
                  padding: '6px 12px',
                  background: 'var(--theme-surface-secondary)',
                  border: '1px solid var(--theme-border)',
                  color: 'var(--theme-text)',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: onSelectRelated ? 'pointer' : 'default',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--theme-accent)';
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--theme-border)';
                  e.currentTarget.style.color = 'var(--theme-text)';
                }}
              >
                {relName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
