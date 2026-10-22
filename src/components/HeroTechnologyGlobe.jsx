import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Crown, RotateCw, ArrowRight, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';
import { TECHNOLOGY_GLOBE_NODES, FULL_STACK_FLOW_STEPS } from '../data/technologyGlobeData';
import { TECH_ICON_MAP } from './TechIcons';
import InteractiveSkillModal from './InteractiveSkillModal';
import RecruiterQuickViewModal from './RecruiterQuickViewModal';

export default function HeroTechnologyGlobe() {
  const { theme } = useTheme();
  const { developerMode } = useDeveloperMode();

  // 360-degree rotation angles (in degrees)
  const [rotation, setRotation] = useState({ yaw: 0, pitch: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [flowStepIndex, setFlowStepIndex] = useState(0);

  // Orbital independent ring rotations
  const [ringAngles, setRingAngles] = useState({ ring1: 0, ring2: 0, ring3: 0 });

  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0, yaw: 0, pitch: 0 });
  const autoRotateRef = useRef(0);
  const animationFrameRef = useRef(null);
  const mouseTiltRef = useRef({ pitch: 0, yaw: 0 });

  // Full-stack request-response continuous animation flow
  useEffect(() => {
    if (developerMode !== 'python_full_stack') return;
    const interval = setInterval(() => {
      setFlowStepIndex((prev) => (prev + 1) % FULL_STACK_FLOW_STEPS.length);
    }, 1100);
    return () => clearInterval(interval);
  }, [developerMode]);

  // Continuous slow cinematic 360-degree rotation & multi-axis ring spin
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Independent multi-axis ring spin
      setRingAngles((prev) => ({
        ring1: (prev.ring1 + 18 * delta) % 360,
        ring2: (prev.ring2 - 14 * delta) % 360,
        ring3: (prev.ring3 + 10 * delta) % 360
      }));

      if (!isDragging) {
        // Slow rotation down when hovering a node for easy inspection
        const baseSpeed = hoveredNode ? 3 : 13; // degrees per second
        autoRotateRef.current = (autoRotateRef.current + baseSpeed * delta) % 360;

        setRotation((prev) => ({
          yaw: (prev.yaw + baseSpeed * delta) % 360,
          pitch: prev.pitch * 0.96 + mouseTiltRef.current.pitch * 0.04
        }));
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isDragging, hoveredNode]);

  // Mouse move subtle perspective response when hovering container
  const handleMouseMove = (e) => {
    if (isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseTiltRef.current = {
      yaw: nx * 12,
      pitch: -ny * 10
    };
  };

  const handleMouseLeave = () => {
    mouseTiltRef.current = { yaw: 0, pitch: 0 };
  };

  // Mouse & Touch Drag Handlers for 360-degree rotation
  const handlePointerDown = (e) => {
    if (e.target.closest('.tech-node-btn') || e.target.closest('.hud-action-btn')) return;

    setIsDragging(true);
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      yaw: rotation.yaw,
      pitch: rotation.pitch
    };
  };

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;

    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;

    // Sensitivities for smooth 360 rotation
    const newYaw = (dragStartRef.current.yaw + deltaX * 0.6) % 360;
    const newPitch = Math.max(-45, Math.min(45, dragStartRef.current.pitch - deltaY * 0.4));

    setRotation({ yaw: newYaw, pitch: newPitch });
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  // Double-click to reset globe to default orientation smoothly
  const handleDoubleClick = () => {
    setRotation({ yaw: 0, pitch: 0 });
    mouseTiltRef.current = { yaw: 0, pitch: 0 };
    autoRotateRef.current = 0;
  };

  const currentFlowStep = FULL_STACK_FLOW_STEPS[flowStepIndex];

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
      className="hero-character-wrapper interactive-target"
      title="Click and drag to rotate technology globe 360°. Double-click to reset."
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '430px',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        userSelect: 'none',
        touchAction: 'none',
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
    >
      {/* Ambient Lighting Volumetric Halo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px',
          height: '390px',
          borderRadius: '50%',
          background: theme.orbGradient,
          filter: 'blur(80px)',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      {/* 360-DEGREE ROTATING 3D GALAXY WORLD */}
      <div
        style={{
          position: 'relative',
          width: '370px',
          height: '370px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.pitch}deg) rotateY(${rotation.yaw}deg)`
        }}
      >
        {/* ============================================================ */}
        {/* 1. THREE INDEPENDENT MULTI-AXIS ORBITAL RINGS */}
        {/* ============================================================ */}

        {/* RING 1: FRONTEND ORBITAL RING (Inner / Fast) */}
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `1.5px ${developerMode === 'frontend' ? 'solid' : 'dashed'} ${theme.accent || '#FF6B57'}`,
            boxShadow: developerMode === 'frontend' ? `0 0 25px ${theme.goldGlow || theme.glowColor}` : 'none',
            opacity: developerMode === 'backend' ? 0.35 : 0.75,
            transform: `rotateX(72deg) rotateY(12deg) rotateZ(${ringAngles.ring1}deg)`,
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease'
          }}
        />

        {/* RING 2: BACKEND ORBITAL RING (Middle / Counter-tilt) */}
        <div
          style={{
            position: 'absolute',
            width: '390px',
            height: '390px',
            borderRadius: '50%',
            border: `1.5px ${developerMode === 'backend' ? 'solid' : 'dashed'} ${theme.primary || '#FF6B57'}`,
            boxShadow: developerMode === 'backend' ? `0 0 25px ${theme.glowColor}` : 'none',
            opacity: developerMode === 'frontend' ? 0.35 : 0.75,
            transform: `rotateX(-65deg) rotateY(28deg) rotateZ(${ringAngles.ring2}deg)`,
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease'
          }}
        />

        {/* RING 3: DATABASE ORBITAL RING (Outer / Wide Tilt) */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            border: `1.5px dotted ${theme.secondary || '#8A9A86'}`,
            opacity: 0.55,
            transform: `rotateX(42deg) rotateY(-40deg) rotateZ(${ringAngles.ring3}deg)`,
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease'
          }}
        />

        {/* Globe Meridian Latitude/Longitude Wireframe Sphere Overlay */}
        <div
          style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.05)',
            transform: 'rotateX(90deg)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            transform: 'rotateY(90deg)',
            pointerEvents: 'none'
          }}
        />

        {/* ============================================================ */}
        {/* 2. CENTRAL PLANETARY TECHNOLOGY CORE (With Ravi Kumar Photo) */}
        {/* ============================================================ */}
        <div
          style={{
            position: 'relative',
            width: '215px',
            height: '215px',
            borderRadius: '50%',
            background: 'var(--theme-surface)',
            border: '2px solid var(--theme-accent)',
            boxShadow: `0 0 50px ${theme.glowColor}, inset 0 0 30px rgba(255, 255, 255, 0.2)`,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transform: 'translateZ(0px)',
            transition: 'border-color 0.4s ease'
          }}
        >
          {/* Ravi Kumar Real Photo Inside Planetary Core */}
          <img
            src="/assets/ravi_kumar.jpg"
            alt="Ravi Kumar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 12%'
            }}
          />

          {/* Planetary Core Meridian Lines Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              pointerEvents: 'none',
              background: 'radial-gradient(circle at 35% 30%, transparent 60%, rgba(0, 0, 0, 0.45) 100%)'
            }}
          />

          {/* Core Status Overlay Pill */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              padding: '3px 10px',
              background: 'rgba(5, 7, 13, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--theme-accent)',
              borderRadius: '0px',
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--theme-accent)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Crown size={10} />
            <span>CORE 360°</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. TWELVE INTERACTIVE 3D TECHNOLOGY NODES */}
        {/* ============================================================ */}
        {TECHNOLOGY_GLOBE_NODES.map((node) => {
          // Calculate 3D spherical orbital coordinates
          const rad = (node.angle * Math.PI) / 180;
          let tiltX = 0;
          let tiltY = 0;

          if (node.layer === 'frontend') {
            tiltX = 72;
            tiltY = 12;
          } else if (node.layer === 'backend') {
            tiltX = -65;
            tiltY = 28;
          } else {
            tiltX = 42;
            tiltY = -40;
          }

          const baseRadius = node.orbitRadius;
          const x = Math.cos(rad) * baseRadius;
          const y = Math.sin(rad) * baseRadius;

          const isHovered = hoveredNode?.id === node.id;
          const isFlowActive = currentFlowStep?.node === node.id;
          const IconComponent = TECH_ICON_MAP[node.id];

          // Mode-specific emphasis
          let isDimmed = false;
          if (developerMode === 'frontend' && node.layer !== 'frontend') isDimmed = true;
          if (developerMode === 'backend' && node.layer === 'frontend') isDimmed = true;

          // When any node is hovered or active, other nodes subtly soften
          const shouldSoftDim = hoveredNode && !isHovered;

          return (
            <div
              key={node.id}
              className="tech-node-btn interactive-target"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSkill(node);
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              title={`${node.name} (${node.layerTitle}) - Click to inspect 3D skill architecture`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `
                  rotateY(${tiltY}deg)
                  rotateX(${tiltX}deg)
                  translate3d(${x}px, ${y}px, ${isHovered ? 28 : isFlowActive ? 18 : 0}px)
                  rotateX(${-tiltX}deg)
                  rotateY(${-tiltY}deg)
                  scale(${isHovered ? 1.32 : isFlowActive ? 1.22 : 1})
                `,
                width: isHovered ? '48px' : '42px',
                height: isHovered ? '48px' : '42px',
                borderRadius: '0px',
                background: 'var(--theme-surface)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1.5px solid ${isHovered ? 'var(--theme-accent)' : isFlowActive ? '#10B981' : node.color}`,
                boxShadow: isHovered
                  ? `0 0 28px ${node.glow}, 0 0 16px var(--theme-gold-glow)`
                  : isFlowActive
                  ? `0 0 28px #10B981, 0 0 12px rgba(16, 185, 129, 0.8)`
                  : `0 0 14px ${node.glow}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isDimmed ? 0.35 : shouldSoftDim ? 0.65 : 1,
                filter: shouldSoftDim ? 'blur(0.4px)' : 'none',
                zIndex: isHovered ? 30 : isFlowActive ? 25 : 15,
                transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease, filter 0.3s ease, box-shadow 0.25s ease'
              }}
            >
              {/* Soft chrome highlight edge */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '35%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />

              {IconComponent ? (
                <IconComponent size={20} />
              ) : (
                <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{node.icon}</span>
              )}

              {/* Floating Node Label on Hover or Active Flow */}
              {(isHovered || isFlowActive) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    background: 'var(--theme-surface)',
                    border: `1px solid ${isFlowActive ? '#10B981' : 'var(--theme-accent)'}`,
                    padding: '3px 8px',
                    borderRadius: '0px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    color: isFlowActive ? '#10B981' : 'var(--theme-accent)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.6)',
                    pointerEvents: 'none',
                    zIndex: 35
                  }}
                >
                  {node.name}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM HUD CONTROLS & RECRUITER QUICK VIEW */}
      {/* ============================================================ */}
      <div
        style={{
          position: 'relative',
          marginTop: '18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 20
        }}
      >
        {/* Full-Stack Dynamic Data Flow Indicator */}
        {developerMode === 'python_full_stack' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'var(--theme-surface)',
              border: '1px solid var(--theme-border)',
              borderRadius: '0px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--theme-text-secondary)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <Zap size={12} style={{ color: '#10B981', animation: 'pulseGlow 1.2s infinite' }} />
            <span style={{ color: 'var(--theme-accent)', fontWeight: 700 }}>
              LIVE FLOW:
            </span>
            <span>{currentFlowStep?.name}</span>
            <span style={{ color: 'var(--theme-border)' }}>•</span>
            <span style={{ color: '#10B981', fontWeight: 600 }}>{currentFlowStep?.action}</span>
          </div>
        )}

        {/* 360 Drag Interaction Guide */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'var(--theme-text-secondary)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <RotateCw size={12} style={{ color: 'var(--theme-accent)' }} />
          <span>DRAG 360° TO ROTATE • DOUBLE CLICK TO RESET</span>
        </div>

        {/* Recruiter Quick View One-Click Action */}
        <button
          onClick={() => setIsRecruiterModalOpen(true)}
          className="hud-action-btn interactive-target"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 18px',
            background: 'var(--theme-surface)',
            border: '1px solid var(--theme-accent)',
            boxShadow: '0 0 18px var(--theme-gold-glow)',
            color: 'var(--theme-accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--theme-accent)';
            e.currentTarget.style.color = '#05070D';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--theme-surface)';
            e.currentTarget.style.color = 'var(--theme-accent)';
          }}
        >
          <Crown size={14} />
          <span>RECRUITER QUICK VIEW</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* ============================================================ */}
      {/* 5. MODALS: 3D SKILL INSPECTION & RECRUITER DOSSIER */}
      {/* ============================================================ */}
      {selectedSkill && (
        <InteractiveSkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
          onSelectRelated={(skillName) => {
            const found = TECHNOLOGY_GLOBE_NODES.find(
              (n) => n.name.toLowerCase().includes(skillName.toLowerCase()) || n.id.toLowerCase() === skillName.toLowerCase()
            );
            if (found) setSelectedSkill(found);
          }}
        />
      )}

      {isRecruiterModalOpen && (
        <RecruiterQuickViewModal
          isOpen={isRecruiterModalOpen}
          onClose={() => setIsRecruiterModalOpen(false)}
        />
      )}
    </div>
  );
}
