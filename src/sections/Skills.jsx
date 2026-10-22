import React, { useState, useEffect } from 'react';
import { Sparkles, Layers, Terminal, Database, Code2, Cpu, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/skills';
import { TECH_ICON_MAP } from '../components/TechIcons';

export default function Skills() {
  const { theme } = useTheme();
  const { modeInfo, developerMode } = useDeveloperMode();
  const [activeCategory, setActiveCategory] = useState(modeInfo.defaultCategory || 'All');
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0]);
  const [isRotating, setIsRotating] = useState(true);

  // Sync category emphasis when developer mode changes
  useEffect(() => {
    if (modeInfo.defaultCategory) {
      setActiveCategory(modeInfo.defaultCategory);
    }
  }, [developerMode, modeInfo.defaultCategory]);

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="content-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03 • TECHNICAL SPECIALIZATION</span>
          <h2 className="section-title">CORE SKILLS & TECHNOLOGIES</h2>
          <p className="section-subtitle">
            {modeInfo.skillsSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="interactive-target"
                style={{
                  padding: '8px 22px',
                  borderRadius: '0px',
                  background: isActive ? 'var(--theme-surface)' : 'transparent',
                  color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                  border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                  boxShadow: isActive ? '0 0 16px var(--theme-gold-glow)' : 'none',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Universe Layout: 2 Columns */}
        <div
          className="skills-universe-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: 3D Interactive Orbital Constellation */}
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              height: '490px',
              borderRadius: '0px',
              border: '1px solid var(--theme-border)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: 'absolute',
                width: '390px',
                height: '390px',
                borderRadius: '50%',
                background: theme.orbGradient,
                filter: 'blur(95px)',
                opacity: 0.38,
                pointerEvents: 'none'
              }}
            />

            {/* Orbital Rings */}
            <div
              style={{
                position: 'absolute',
                width: '370px',
                height: '370px',
                borderRadius: '50%',
                border: `1.5px dashed ${theme.accent || '#D4AF37'}`,
                opacity: 0.4,
                animation: isRotating ? 'rotateOrbit 40s linear infinite' : 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                border: `1.5px solid ${theme.primary}`,
                opacity: 0.3,
                animation: isRotating ? 'counterRotate 30s linear infinite' : 'none'
              }}
            />

            {/* Orbiting Skill Planetary Nodes with Official SVG Tech Icons */}
            <div
              style={{
                position: 'absolute',
                width: '370px',
                height: '370px',
                animation: isRotating ? 'rotateOrbit 35s linear infinite' : 'none'
              }}
            >
              {SKILLS_DATA.map((skill, index) => {
                const angle = (index / SKILLS_DATA.length) * (2 * Math.PI);
                const radius = 155; // px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedSkill.id === skill.id;
                const IconComponent = TECH_ICON_MAP[skill.id];

                return (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setIsRotating(false)}
                    onMouseLeave={() => setIsRotating(true)}
                    className="interactive-target"
                    title={`${skill.name} - ${skill.percentage}%`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isSelected ? 1.2 : 1})`,
                      width: '64px',
                      height: '64px',
                      borderRadius: '0px',
                      background: 'var(--theme-surface)',
                      backdropFilter: 'blur(14px)',
                      border: `1px solid ${isSelected ? 'var(--theme-accent)' : skill.color}`,
                      boxShadow: isSelected ? `0 0 25px ${skill.glow}, 0 0 15px var(--theme-gold-glow)` : `0 0 12px ${skill.glow}`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                      zIndex: isSelected ? 10 : 3,
                      animation: isRotating ? 'counterRotate 35s linear infinite' : 'none'
                    }}
                  >
                    {IconComponent ? (
                      <IconComponent size={24} />
                    ) : (
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{skill.icon}</span>
                    )}
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--theme-accent)' : 'var(--theme-text)',
                      marginTop: '2px'
                    }}>
                      {skill.percentage}%
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Central Glowing Core: "Frontend Core" with Royal Crown */}
            <div
              className="animate-pulse-glow"
              style={{
                width: '165px',
                height: '165px',
                borderRadius: '50%',
                background: 'var(--theme-surface)',
                border: `1.5px solid var(--theme-accent)`,
                boxShadow: `0 0 45px ${theme.glowColor}, inset 0 0 20px rgba(212, 175, 55, 0.2)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--theme-text)',
                zIndex: 4,
                cursor: 'pointer'
              }}
              onClick={() => setIsRotating(prev => !prev)}
              title="Click to toggle orbit rotation"
            >
              <Crown size={22} style={{ color: 'var(--theme-accent)', marginBottom: '4px' }} />
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}>
                {modeInfo.coreLabel}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--theme-accent)',
                letterSpacing: '0.12em',
                marginTop: '2px'
              }}>
                {isRotating ? 'ACTIVE ORBIT' : 'FROZEN'}
              </div>
            </div>

            {/* Bottom Orbit Tip */}
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--theme-text-secondary)',
                letterSpacing: '0.08em',
                zIndex: 5
              }}
            >
              CLICK ANY TECH NODE TO INSPECT ARCHITECTURE
            </div>
          </div>

          {/* Right Column: "Technologies" HUD Progress Bars & Deep Inspection */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              borderRadius: '0px',
              border: '1px solid var(--theme-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} style={{ color: 'var(--theme-accent)' }} />
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700
                }}>
                  Technologies
                </h3>
              </div>
              <span className="hud-badge" style={{ borderColor: 'var(--theme-accent)', color: 'var(--theme-accent)' }}>
                {filteredSkills.length} Tracked
              </span>
            </div>

            {/* Progress Bars List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {filteredSkills.map((s) => {
                const isSelected = selectedSkill.id === s.id;
                const IconComponent = TECH_ICON_MAP[s.id];

                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedSkill(s)}
                    className="interactive-target"
                    style={{
                      cursor: 'pointer',
                      padding: '8px 12px',
                      borderRadius: '0px',
                      background: isSelected ? 'var(--theme-surface-secondary)' : 'transparent',
                      border: `1px solid ${isSelected ? 'var(--theme-accent)' : 'transparent'}`,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {IconComponent ? (
                          <IconComponent size={18} />
                        ) : (
                          <span style={{ fontSize: '0.9rem' }}>{s.icon}</span>
                        )}
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: isSelected ? 'var(--theme-accent)' : 'var(--theme-text)'
                        }}>
                          {s.name}
                        </span>
                        <span style={{
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--theme-text-secondary)',
                          padding: '1px 6px',
                          border: '1px solid var(--theme-border)',
                          background: 'var(--theme-surface)'
                        }}>
                          {s.category}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: 'var(--theme-accent)'
                      }}>
                        {s.percentage}%
                      </span>
                    </div>

                    {/* Crisp Rectangular Progress Bar Track */}
                    <div
                      style={{
                        height: '4px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '0px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${s.percentage}%`,
                          background: `linear-gradient(90deg, ${s.color}, var(--theme-accent))`,
                          boxShadow: `0 0 10px ${s.glow}`,
                          transition: 'width 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Skill Inspector Panel */}
            <div
              style={{
                padding: '18px',
                borderRadius: '0px',
                background: 'var(--theme-surface-secondary)',
                border: `1px solid var(--theme-accent)`,
                boxShadow: `0 0 20px var(--theme-gold-glow)`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                {TECH_ICON_MAP[selectedSkill.id] ? (
                  React.createElement(TECH_ICON_MAP[selectedSkill.id], { size: 24 })
                ) : (
                  <span style={{ fontSize: '1.2rem' }}>{selectedSkill.icon}</span>
                )}
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--theme-text)' }}>
                  {selectedSkill.name} Architecture
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', lineHeight: 1.55 }}>
                {selectedSkill.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
