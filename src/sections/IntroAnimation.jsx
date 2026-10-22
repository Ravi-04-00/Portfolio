import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FastForward, Sparkles, CheckCircle2 } from 'lucide-react';
import RKLogoMonogram from '../components/RKLogoMonogram';
import {
  PythonIcon,
  DjangoIcon,
  ReactIcon,
  PostgreSQLIcon,
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon
} from '../components/TechIcons';

// Core 7 supported technology badges shown in identity reference
const INTRO_TECH_STACK = [
  { id: 'python', name: 'Python', icon: PythonIcon, color: '#387EB8', glow: 'rgba(56, 126, 184, 0.6)' },
  { id: 'django', name: 'Django', icon: DjangoIcon, color: '#092E20', glow: 'rgba(68, 183, 139, 0.6)' },
  { id: 'react', name: 'React', icon: ReactIcon, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.6)' },
  { id: 'postgresql', name: 'PostgreSQL', icon: PostgreSQLIcon, color: '#336791', glow: 'rgba(51, 103, 145, 0.6)' },
  { id: 'html5', name: 'HTML5', icon: HTML5Icon, color: '#E44D26', glow: 'rgba(228, 77, 38, 0.6)' },
  { id: 'css3', name: 'CSS3', icon: CSS3Icon, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.6)' },
  { id: 'javascript', name: 'JavaScript', icon: JavaScriptIcon, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.6)' }
];

export default function IntroAnimation({ onComplete }) {
  const [elapsed, setElapsed] = useState(0); // 0 to 10 seconds
  const [isSkipped, setIsSkipped] = useState(false);
  const [portraitSrc, setPortraitSrc] = useState('/assets/ravi_kumar_clean_portrait.png');

  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const completedRef = useRef(false);

  // Safe completion handler
  const finishIntro = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    try {
      localStorage.setItem('ravi-intro-completed', 'true');
    } catch {
      // LocalStorage fallback
    }

    setIsSkipped(true);

    // Smoothly scroll to the Hero section (#home)
    const heroEl = document.getElementById('home');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Call onComplete after brief fade-out transition
    setTimeout(() => {
      onComplete?.();
    }, 450);
  }, [onComplete]);

  // Handle Skip button & keyboard shortcut (Escape / Space)
  const handleSkip = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    finishIntro();
  }, [finishIntro]);

  useEffect(() => {
    // 1. Accessibility: Check for reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishIntro();
      return;
    }

    // 2. Keyboard shortcut for Skip Intro (Escape or Space)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 3. Absolute fail-safe timeout: never trap users in intro
    const failSafeTimer = setTimeout(() => {
      if (!completedRef.current) {
        finishIntro();
      }
    }, 10800);

    // 4. Smooth 60fps clock driving the 10-second timeline
    const totalDuration = 10000; // 10.0 seconds

    const tick = (now) => {
      if (!startTimeRef.current) {
        startTimeRef.current = now;
      }
      const diff = now - startTimeRef.current;
      const currentSeconds = Math.min(diff / 1000, 10.0);
      setElapsed(currentSeconds);

      if (diff >= totalDuration) {
        finishIntro();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(failSafeTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [finishIntro, handleSkip]);

  // Derived timeline stages
  // Phase 1: 0 - 1.0s (Laser blink & anamorphic sweep)
  // Phase 2: 1.0 - 2.0s (RK Monogram reveal)
  // Phase 3: 2.0 - 4.0s (Welcome to My Portfolio reveal)
  // Phase 4: 4.0 - 6.0s (RAVIKUMAR & Python Full Stack Developer reveal)
  // Phase 5: 6.0 - 8.0s (Supported technology icons reveal)
  // Phase 6: 8.0 - 10.0s (Real portrait reveal & light sweep into hero theme)

  const progressPercent = Math.min(100, Math.round((elapsed / 10) * 100));

  return (
    <div
      role="dialog"
      aria-label="Portfolio Introduction Animation"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#030508',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s ease',
        opacity: isSkipped ? 0 : 1,
        pointerEvents: isSkipped ? 'none' : 'auto'
      }}
    >
      {/* Background Volumetric Glow & Hologram Overlay */}
      <div
        className="hologram-grid-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      />

      {/* Atmospheric Gold and Blue Cosmic Radial Auroras */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47, 128, 255, 0.16) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          transition: 'opacity 1.5s ease',
          opacity: elapsed >= 1 ? 0.8 : 0.2
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          transition: 'opacity 1.5s ease',
          opacity: elapsed >= 2 ? 0.9 : 0.2
        }}
      />

      {/* Skip Button (Top Right with Accessible Label & Keyboard Hint) */}
      <button
        onClick={handleSkip}
        className="futuristic-btn interactive-target"
        aria-label="Skip Intro Animation (Press Escape)"
        style={{
          position: 'absolute',
          top: '28px',
          right: '32px',
          zIndex: 50,
          padding: '8px 18px',
          fontSize: '0.8rem',
          borderRadius: '0px',
          background: 'rgba(5, 7, 13, 0.85)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(212, 175, 55, 0.4)',
          color: '#F8F7F2',
          letterSpacing: '0.14em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>SKIP INTRO</span>
        <FastForward size={14} style={{ color: '#D4AF37' }} />
        <span
          style={{
            fontSize: '0.66rem',
            color: 'rgba(255, 255, 255, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '1px 5px'
          }}
        >
          ESC
        </span>
      </button>

      {/* Top Status Readout Bar */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          zIndex: 40,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          letterSpacing: '0.16em',
          color: 'rgba(212, 175, 55, 0.85)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: elapsed >= 8 ? '#10B981' : '#00D2FF',
            boxShadow: `0 0 10px ${elapsed >= 8 ? '#10B981' : '#00D2FF'}`,
            animation: 'pulseGlow 1.5s infinite'
          }}
        />
        <span>
          {elapsed < 1 && 'INITIALIZING SYSTEM SCAN...'}
          {elapsed >= 1 && elapsed < 2 && 'MONOGRAM IDENTIFIER [RK]'}
          {elapsed >= 2 && elapsed < 4 && 'DEDICATED PORTFOLIO ENVIRONMENT'}
          {elapsed >= 4 && elapsed < 6 && 'DEVELOPER IDENTITY: RAVIKUMAR'}
          {elapsed >= 6 && elapsed < 8 && 'SUPPORTED CORE ECOSYSTEM ARCHITECTURE'}
          {elapsed >= 8 && 'REVEALING CINEMATIC HERO IDENTITY...'}
        </span>
      </div>

      {/* ============================================================ */}
      {/* 0-1 SECONDS: PURE BLACK SCREEN WITH BLUE BLINK & LIGHT SWEEP */}
      {/* ============================================================ */}
      {elapsed < 1.2 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            pointerEvents: 'none',
            opacity: elapsed < 1 ? 1 : Math.max(0, 1 - (elapsed - 1) * 5)
          }}
        >
          {/* Thin blue pulsing quantum beacon (0 to 0.7s) */}
          {elapsed < 0.8 && (
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00D2FF',
                animation: 'blueLaserBlink 0.4s ease-in-out infinite',
                boxShadow: '0 0 20px #00D2FF, 0 0 45px #2F80FF'
              }}
            />
          )}

          {/* Anamorphic Gold-Blue Light Sweep (0.5s to 1.1s) */}
          {elapsed >= 0.45 && (
            <div
              style={{
                position: 'absolute',
                width: '100vw',
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #00D2FF 30%, #FFFFFF 50%, #D4AF37 70%, transparent 100%)',
                boxShadow: '0 0 25px #00D2FF, 0 0 50px #D4AF37',
                animation: 'anamorphicPulse 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            />
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* MAIN CINEMATIC PRESENTATION CARD                             */}
      {/* ============================================================ */}
      <div
        style={{
          position: 'relative',
          width: '92%',
          maxWidth: '920px',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 20,
          padding: '40px 24px'
        }}
      >
        {/* ========================================================== */}
        {/* 1-2 SECONDS: REVEAL RK MONOGRAM WITH METALLIC GOLD 3D DEPTH */}
        {/* ========================================================== */}
        <div
          style={{
            transform: elapsed >= 1
              ? `scale(${elapsed >= 8 ? 0.75 : 1}) translateY(${elapsed >= 4 ? (elapsed >= 8 ? -24 : -12) : 0}px)`
              : 'scale(0.5) translateY(20px)',
            opacity: elapsed >= 1 ? (elapsed >= 8 ? 0.85 : 1) : 0,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
            marginBottom: elapsed >= 4 ? '14px' : '20px'
          }}
        >
          <RKLogoMonogram
            size={elapsed >= 8 ? 88 : 110}
            animated={true}
            glow={true}
          />
        </div>

        {/* ========================================================== */}
        {/* 2-4 SECONDS: WELCOME TO MY PORTFOLIO (GOLDEN TYPOGRAPHY)   */}
        {/* ========================================================== */}
        <div
          style={{
            opacity: elapsed >= 2 ? 1 : 0,
            transform: elapsed >= 2 ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.96)',
            filter: elapsed >= 2 ? 'blur(0px)' : 'blur(8px)',
            transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease',
            marginBottom: '16px'
          }}
        >
          {/* Cursive Handwriting-style "Welcome" with Gold Shimmer */}
          <div
            style={{
              fontFamily: "'Playfair Display', 'Brush Script MT', Georgia, cursive, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              fontWeight: 600,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FEDB6A 35%, #D4AF37 70%, #FFF3B3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 35px rgba(212, 175, 55, 0.55)',
              letterSpacing: '0.04em',
              marginBottom: '4px'
            }}
          >
            Welcome
          </div>

          {/* Subtitle "TO MY PORTFOLIO" in refined spaced gold capitals */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.95rem)',
              fontWeight: 700,
              letterSpacing: '0.36em',
              color: 'rgba(255, 255, 255, 0.85)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span>TO MY PORTFOLIO</span>
            <span style={{ width: '24px', height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </div>

        {/* ========================================================== */}
        {/* 4-6 SECONDS: REVEAL RAVIKUMAR (3D METALLIC) & PROFESSION  */}
        {/* ========================================================== */}
        <div
          style={{
            opacity: elapsed >= 4 ? 1 : 0,
            transform: elapsed >= 4 ? 'translateY(0) scale(1)' : 'translateY(22px) scale(0.95)',
            filter: elapsed >= 4 ? 'blur(0px)' : 'blur(10px)',
            transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s ease',
            marginBottom: '20px'
          }}
        >
          {/* Monumental 3D Metallic "RAVIKUMAR" */}
          <h1
            style={{
              fontFamily: "'Cinzel', var(--font-heading)",
              fontSize: 'clamp(2.8rem, 7.5vw, 5.2rem)',
              fontWeight: 900,
              letterSpacing: '0.06em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              background: 'linear-gradient(180deg, #FFF8DC 0%, #FEDB6A 30%, #D4AF37 60%, #9A781D 90%, #E2C158 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 45px rgba(212, 175, 55, 0.45)',
              marginBottom: '8px'
            }}
          >
            RAVIKUMAR
          </h1>

          {/* "Python Full Stack Developer" with Cyan / Blue Glow Accent */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.95rem, 2.4vw, 1.35rem)',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#00D2FF',
              textShadow: '0 0 18px rgba(0, 210, 255, 0.65), 0 0 35px rgba(47, 128, 255, 0.4)',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Sparkles size={16} style={{ color: '#FEDB6A' }} />
            <span>Python Full Stack Developer</span>
            <Sparkles size={16} style={{ color: '#FEDB6A' }} />
          </div>
        </div>

        {/* ========================================================== */}
        {/* 6-8 SECONDS: REVEAL SUPPORTED TECHNOLOGY ICONS             */}
        {/* ========================================================== */}
        <div
          style={{
            opacity: elapsed >= 6 ? 1 : 0,
            transform: elapsed >= 6 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s ease',
            marginBottom: '24px',
            width: '100%',
            maxWidth: '680px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}
          >
            {INTRO_TECH_STACK.map((tech, index) => {
              // Stagger reveal between 6.0s and 7.6s
              const techDelay = 6.0 + index * 0.22;
              const isVisible = elapsed >= techDelay;
              const IconComp = tech.icon;

              return (
                <div
                  key={tech.id}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'scale(1) translateY(0)'
                      : 'scale(0.65) translateY(16px)',
                    transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    background: 'rgba(11, 16, 32, 0.85)',
                    border: `1px solid ${isVisible ? tech.color : 'rgba(255, 255, 255, 0.1)'}`,
                    boxShadow: isVisible
                      ? `0 0 18px ${tech.glow}, 0 4px 16px rgba(0, 0, 0, 0.6)`
                      : 'none'
                  }}
                >
                  <IconComp size={24} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#F8F7F2'
                    }}
                  >
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 8-10 SECONDS: REVEAL REAL PORTRAIT WITH CINEMATIC RIM LIGHT */}
        {/* ========================================================== */}
        {elapsed >= 8 && (
          <div
            style={{
              position: 'relative',
              opacity: Math.min(1, (elapsed - 8) * 1.8),
              transform: `scale(${Math.min(1, 0.88 + (elapsed - 8) * 0.12)}) translateY(0)`,
              transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '4px'
            }}
          >
            {/* Glowing Dual Gold & Blue Rim Light Halo */}
            <div
              style={{
                position: 'relative',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Outer Cyan Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 210, 255, 0.75)',
                  boxShadow: '0 0 35px rgba(0, 210, 255, 0.6), inset 0 0 20px rgba(0, 210, 255, 0.4)',
                  animation: 'rotateOrbit 16s linear infinite'
                }}
              />

              {/* Inner Gold Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  border: '2px solid rgba(212, 175, 55, 0.85)',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.7)',
                  animation: 'counterRotate 22s linear infinite'
                }}
              />

              {/* User Real Portrait */}
              <div
                style={{
                  width: '168px',
                  height: '168px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#0B1020',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.85)'
                }}
              >
                <img
                  src={portraitSrc}
                  alt="Ravikumar - Python Full Stack Developer"
                  onError={() => {
                    // Graceful fallback to raw portrait if high-res fails
                    if (portraitSrc !== '/assets/ravi_kumar.jpg') {
                      setPortraitSrc('/assets/ravi_kumar.jpg');
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%'
                  }}
                />
              </div>

              {/* Identity Verified Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  background: 'rgba(5, 7, 13, 0.92)',
                  border: '1px solid #10B981',
                  boxShadow: '0 0 14px rgba(16, 185, 129, 0.5)',
                  padding: '3px 10px',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.12em',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <CheckCircle2 size={12} />
                <span>VERIFIED IDENTITY</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 9-10 SECONDS: TRANSITION LIGHT SWEEP INTO HERO THEME        */}
      {/* ============================================================ */}
      {elapsed >= 9.0 && (
        <div
          className="cinematic-light-sweep-bar"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '75vw',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 210, 255, 0.25) 25%, #FFFFFF 50%, rgba(212, 175, 55, 0.5) 75%, transparent 100%)',
            filter: 'blur(22px)',
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'lightSweepHorizontal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        />
      )}

      {/* ============================================================ */}
      {/* BOTTOM LOADING & TIMELINE PROGRESS BAR                       */}
      {/* ============================================================ */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '36px',
          right: '36px',
          zIndex: 40
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#FEDB6A', fontWeight: 700 }}>
              {elapsed < 1 && '01 // LASER SWEEP'}
              {elapsed >= 1 && elapsed < 2 && '02 // RK MONOGRAM'}
              {elapsed >= 2 && elapsed < 4 && '03 // WELCOME PORTAL'}
              {elapsed >= 4 && elapsed < 6 && '04 // RAVIKUMAR IDENTITY'}
              {elapsed >= 6 && elapsed < 8 && '05 // FULL STACK CORE'}
              {elapsed >= 8 && '06 // CINEMATIC HERO REVEAL'}
            </span>
          </div>
          <span style={{ color: '#00D2FF', fontWeight: 700 }}>
            {elapsed.toFixed(1)}s / 10.0s ({progressPercent}%)
          </span>
        </div>

        {/* Progress track */}
        <div
          style={{
            height: '4px',
            background: 'rgba(255, 255, 255, 0.08)',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, #2F80FF 0%, #00D2FF 40%, #FEDB6A 75%, #D4AF37 100%)',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.75)',
              transition: 'width 0.08s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
}
