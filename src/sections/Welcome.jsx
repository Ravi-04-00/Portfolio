import React, { useState } from 'react';
import { Sparkles, ArrowDown, Crown, Layers, ArrowRight, Eye } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';
import { SKILLS_DATA } from '../data/skills';
import { TECH_ICON_MAP } from '../components/TechIcons';

export default function Welcome() {
  const { theme } = useTheme();
  const { modeInfo, developerMode } = useDeveloperMode();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [skillsRevealed, setSkillsRevealed] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleScrollToHome = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSkillClick = (skill) => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Organic 3D spatial properties for each skill node (varied depth, scale, radius, vertical offset)
  const organicNodeProps = [
    { baseAngle: 0, radius: 215, yOffset: -35, zDepth: 35, scale: 1.15, duration: 22, blur: 0, opacity: 1 },
    { baseAngle: 45, radius: 170, yOffset: 25, zDepth: -20, scale: 0.92, duration: 28, blur: 0.5, opacity: 0.88 },
    { baseAngle: 90, radius: 230, yOffset: 15, zDepth: 40, scale: 1.2, duration: 24, blur: 0, opacity: 1 },
    { baseAngle: 135, radius: 185, yOffset: -25, zDepth: -15, scale: 0.95, duration: 26, blur: 0.4, opacity: 0.9 },
    { baseAngle: 180, radius: 220, yOffset: 30, zDepth: 30, scale: 1.1, duration: 20, blur: 0, opacity: 1 },
    { baseAngle: 225, radius: 165, yOffset: -18, zDepth: -25, scale: 0.88, duration: 30, blur: 0.6, opacity: 0.85 },
    { baseAngle: 270, radius: 225, yOffset: -40, zDepth: 45, scale: 1.22, duration: 21, blur: 0, opacity: 1 },
    { baseAngle: 315, radius: 190, yOffset: 20, zDepth: -10, scale: 0.96, duration: 27, blur: 0.3, opacity: 0.92 }
  ];

  return (
    <section
      id="welcome"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '80px 20px',
        overflow: 'hidden'
      }}
    >
      {/* Background Volumetric Beam & Radial Aura */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: theme.orbGradient,
          filter: 'blur(120px)',
          opacity: 0.35,
          pointerEvents: 'none',
          animation: 'pulseGlow 6s ease-in-out infinite'
        }}
      />

      {/* Holographic Concentric 3D Orbital System with Dual Axis Rotation */}
      <div
        style={{
          position: 'relative',
          width: '520px',
          height: '520px',
          maxWidth: '94vw',
          maxHeight: '94vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `perspective(1200px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Outer 3D Orbital Track Ring (Continuous Y Rotation 18s) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `1.5px dashed ${theme.accent}`,
            opacity: skillsRevealed ? 0.65 : 0.3,
            boxShadow: skillsRevealed ? `0 0 25px ${theme.glow}` : 'none',
            animation: 'rotateOrbit 18s linear infinite',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />

        {/* Secondary 3D Orbital Ring (Secondary X Axis Rotation 28s) */}
        <div
          style={{
            position: 'absolute',
            inset: '36px',
            borderRadius: '50%',
            border: `1.5px solid ${theme.primary}`,
            opacity: skillsRevealed ? 0.5 : 0.25,
            animation: 'counterRotate 28s linear infinite',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />

        {/* 8 Organically Orbiting Technology Badges (Fly Outward on Reveal) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            animation: skillsRevealed ? 'rotateOrbit 35s linear infinite' : 'none'
          }}
        >
          {SKILLS_DATA.map((skill, index) => {
            const prop = organicNodeProps[index % organicNodeProps.length];
            const rad = (prop.baseAngle * Math.PI) / 180;
            const currentRadius = skillsRevealed ? prop.radius : 0; // Collapsed inside core if unrevealed
            const x = Math.cos(rad) * currentRadius;
            const y = Math.sin(rad) * currentRadius + (skillsRevealed ? prop.yOffset : 0);
            const IconComponent = TECH_ICON_MAP[skill.id];
            const isHovered = hoveredSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillClick(skill);
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="interactive-target"
                title={`${skill.name} (${skill.percentage}%) - Click to inspect in Skills`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) translateZ(${skillsRevealed ? prop.zDepth : 0}px) scale(${skillsRevealed ? (isHovered ? prop.scale * 1.25 : prop.scale) : 0}) rotate(${prop.baseAngle % 20 - 10}deg)`,
                  opacity: skillsRevealed ? (isHovered ? 1 : prop.opacity) : 0,
                  filter: isHovered ? 'blur(0px)' : `blur(${prop.blur}px)`,
                  width: '56px',
                  height: '56px',
                  borderRadius: '0px',
                  background: 'var(--theme-surface)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${isHovered ? 'var(--theme-accent)' : skill.color}`,
                  boxShadow: isHovered
                    ? `0 0 30px ${skill.glow}, 0 0 15px var(--theme-gold-glow)`
                    : `0 0 16px ${skill.glow}, 0 4px 12px rgba(0,0,0,0.4)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: isHovered ? 30 : Math.round(prop.zDepth + 50),
                  transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease, filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  animation: skillsRevealed ? `counterRotate ${prop.duration}s linear infinite` : 'none'
                }}
              >
                {IconComponent ? (
                  <IconComponent size={28} />
                ) : (
                  <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
                )}

                {/* Floating Micro Label on Hover */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-28px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--theme-surface)',
                      border: '1px solid var(--theme-accent)',
                      padding: '2px 8px',
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--theme-accent)',
                      letterSpacing: '0.08em',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                    }}
                  >
                    {skill.name} • {skill.percentage}%
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Central 3D Technology Core: Click to Reveal Universe */}
        <div
          onClick={() => setSkillsRevealed(prev => !prev)}
          className="interactive-target animate-pulse-glow"
          title="Click to toggle 3D Technology Universe"
          style={{
            width: skillsRevealed ? '255px' : '240px',
            height: skillsRevealed ? '255px' : '240px',
            borderRadius: '50%',
            background: 'var(--theme-surface)',
            boxShadow: `0 0 55px ${theme.glowColor}, inset 0 0 25px rgba(212, 175, 55, 0.25)`,
            border: `2px solid var(--theme-accent)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '22px',
            color: 'var(--theme-text)',
            position: 'relative',
            zIndex: 10,
            cursor: 'pointer',
            transform: 'translateZ(20px)',
            transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {/* Ravi Kumar Real Photo in Editorial Frame */}
          <div
            className="editorial-image-frame"
            style={{
              width: '62px',
              height: '62px',
              borderRadius: 'px',
              padding: '2px',
              background: 'var(--theme-surface)',
              border: '1px solid var(--theme-accent)',
              boxShadow: '0 0 18px var(--theme-gold-glow)',
              marginBottom: '6px',
              overflow: 'hidden'
            }}
          >
            <img
              src="/assets/ravi_kumar.jpg"
              alt="Ravi Kumar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--theme-accent)',
            textTransform: 'uppercase',
            marginBottom: '2px'
          }}>
            WELCOME
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            color: 'var(--theme-text-secondary)',
            textTransform: 'uppercase',
            marginBottom: '4px'
          }}>
            TO MY PORTFOLIO
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            marginBottom: '4px',
            color: 'var(--theme-text)'
          }}>
            RAVI KUMAR
          </h2>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'var(--theme-accent)',
            textTransform: 'uppercase',
            borderTop: '1px solid var(--theme-border)',
            paddingTop: '6px',
            marginTop: '2px'
          }}>
            {modeInfo.welcomeSubtitle}
          </div>

          {/* Interactive Core Reveal Prompt */}
          <div style={{
            marginTop: '8px',
            fontSize: '0.62rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--theme-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Sparkles size={11} style={{ color: 'var(--theme-accent)' }} />
            <span>{skillsRevealed ? 'CLICK TO MINIMIZE' : 'CLICK TO REVEAL 3D SKILLS'}</span>
          </div>
        </div>
      </div>

      {/* Hovered Skill HUD readout banner */}
      <div
        style={{
          marginTop: '36px',
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {hoveredSkill ? (
          <div
            className="hud-badge"
            style={{
              padding: '8px 24px',
              fontSize: '0.88rem',
              background: 'var(--theme-surface)',
              borderRadius: '0px',
              borderColor: hoveredSkill.color,
              boxShadow: `0 0 20px ${hoveredSkill.glow}`
            }}
          >
            <span style={{ fontWeight: 700, color: 'var(--theme-text)' }}>{hoveredSkill.name}</span>
            <span style={{ color: 'var(--theme-accent)' }}>•</span>
            <span style={{ color: 'var(--theme-accent)', fontWeight: 700 }}>{hoveredSkill.percentage}% Mastery</span>
            <span style={{ color: 'var(--theme-text-secondary)' }}>•</span>
            <span style={{ color: 'var(--theme-text-secondary)' }}>{hoveredSkill.category}</span>
          </div>
        ) : (
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--theme-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.06em'
            }}
          >
            <Sparkles size={15} style={{ color: 'var(--theme-accent)' }} />
            <span>
              {skillsRevealed
                ? 'Floating in organic 3D space • Hover badges to inspect or click to jump'
                : 'Click the central 3D royal core to activate the technology universe'}
            </span>
          </div>
        )}
      </div>

      {/* Dual CTA Buttons: ENTER PORTFOLIO & EXPLORE MY WORK */}
      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={handleScrollToHome}
          className="futuristic-btn futuristic-btn-primary interactive-target"
          style={{
            padding: '12px 28px',
            fontSize: '0.88rem',
            letterSpacing: '0.12em'
          }}
        >
          <span>ENTER PORTFOLIO</span>
          <ArrowDown size={16} />
        </button>

        <button
          onClick={handleScrollToProjects}
          className="futuristic-btn interactive-target"
          style={{
            padding: '12px 28px',
            fontSize: '0.88rem',
            letterSpacing: '0.12em'
          }}
        >
          <span>EXPLORE MY WORK</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
