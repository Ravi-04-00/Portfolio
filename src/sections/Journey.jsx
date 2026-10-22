import React, { useState } from 'react';
import { Compass, CheckCircle2, Milestone, ArrowRight, Sparkles, Map, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { JOURNEY_STEPS } from '../data/journey';

export default function Journey() {
  const { theme } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="journey" className="section-wrapper">
      <div className="content-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05 • DEVELOPMENT TIMELINE</span>
          <h2 className="section-title">MY JOURNEY</h2>
          <p className="section-subtitle">
            Royal cinematic timeline progressively unfolding through Learning, Python, Django, React, Real-world Projects, and Deployment.
          </p>
        </div>

        {/* 2-Column Split: Scenic Frame on Left, Step Explorer on Right */}
        <div
          className="journey-timeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Landscape Frame showing Ravi Kumar as the Explorer */}
          <div
            className="glass-panel"
            style={{
              height: '520px',
              borderRadius: '0px',
              border: '1px solid var(--theme-border)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px'
            }}
          >
            {/* Thematic Background Ambient Graphic */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.12) 0%, var(--theme-surface) 85%)`,
                pointerEvents: 'none'
              }}
            />

            {/* Top Status & Ravi Kumar Photo Avatar Badge */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="hud-badge" style={{ borderColor: 'var(--theme-accent)', color: 'var(--theme-accent)' }}>
                <Crown size={14} />
                <span>STAGE 0{activeStepIndex + 1} / 06</span>
              </div>

              {/* Developer Avatar in Journey with 1600ms hover reveal */}
              <div
                className="editorial-image-frame"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '0px',
                  padding: '2px',
                  background: 'var(--theme-surface)',
                  border: '1px solid var(--theme-accent)',
                  boxShadow: '0 0 14px var(--theme-gold-glow)'
                }}
              >
                <img
                  src="/assets/ravi_kumar.jpg"
                  alt="Ravi Kumar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Center Visual Art: Active Phase Large Indicator */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '0px',
                  background: 'var(--theme-surface)',
                  border: '1px solid var(--theme-accent)',
                  boxShadow: '0 0 25px var(--theme-gold-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: 'var(--theme-accent)',
                  marginBottom: '10px'
                }}
              >
                {JOURNEY_STEPS[activeStepIndex].number}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--theme-accent)', letterSpacing: '0.15em' }}>
                ACTIVE PHASE
              </div>
            </div>

            {/* Bottom Active Step Summary Card */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                padding: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--theme-accent)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em'
                }}>
                  PHASE {JOURNEY_STEPS[activeStepIndex].number}
                </span>
                <span style={{ color: 'var(--theme-accent)' }}>•</span>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text-secondary)' }}>
                  {JOURNEY_STEPS[activeStepIndex].period}
                </span>
              </div>

              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--theme-text)',
                marginBottom: '6px'
              }}>
                {JOURNEY_STEPS[activeStepIndex].title}
              </h4>

              <p style={{ fontSize: '0.86rem', color: 'var(--theme-text-secondary)', lineHeight: 1.5, marginBottom: '10px' }}>
                {JOURNEY_STEPS[activeStepIndex].description}
              </p>

              <div style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--theme-accent)',
                background: 'var(--theme-surface)',
                padding: '6px 10px',
                border: '1px solid var(--theme-border)'
              }}>
                ✦ Focus: {JOURNEY_STEPS[activeStepIndex].highlight}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Path Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className="interactive-target"
                  style={{
                    padding: '18px 22px',
                    borderRadius: '0px',
                    border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                    background: isActive ? 'var(--theme-surface-secondary)' : 'var(--theme-surface)',
                    boxShadow: isActive ? '0 0 20px var(--theme-gold-glow)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Glowing Number Circle */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '0px',
                        background: isActive ? 'var(--theme-surface)' : 'transparent',
                        border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                        boxShadow: isActive ? '0 0 12px var(--theme-gold-glow)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                        flexShrink: 0
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Step Titles */}
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: isActive ? 'var(--theme-accent)' : 'var(--theme-text)'
                      }}>
                        {step.title}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--theme-text-secondary)',
                        marginTop: '2px'
                      }}>
                        {step.technologies}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    style={{
                      color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
