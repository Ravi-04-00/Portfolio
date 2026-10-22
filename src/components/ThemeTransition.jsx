import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function ThemeTransition() {
  const { isMorphing, morphMessage, theme } = useTheme();
  const { isModeTransitioning, transitionMessage } = useDeveloperMode();

  const isTransitioning = isMorphing || isModeTransitioning;
  const activeMessage = isMorphing
    ? (morphMessage || 'ENTERING ROYAL CINEMATIC WORLD...')
    : (transitionMessage || 'ACTIVATING DEVELOPER MODE...');

  if (!isTransitioning) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99990,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Soft Cinematic Light Sweep Beam across the screen */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `linear-gradient(115deg, transparent 35%, ${theme.glowColor} 48%, rgba(255, 255, 255, 0.3) 50%, ${theme.glowColor} 52%, transparent 65%)`,
          animation: 'cinematicSweep 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          opacity: 0.65,
          mixBlendMode: 'screen'
        }}
      />

      {/* Atmospheric Volumetric Center Bloom */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vh',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          animation: 'cinematicBloom 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
        }}
      />

      {/* Top Notification Badge */}
      <div
        style={{
          position: 'fixed',
          top: '84px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 99995,
          background: 'var(--theme-surface)',
          backdropFilter: 'blur(20px)',
          border: `1px solid var(--theme-accent)`,
          boxShadow: `0 0 35px var(--theme-gold-glow)`,
          borderRadius: '0px',
          padding: '8px 24px',
          color: 'var(--theme-text)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          letterSpacing: '0.14em',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'pulseGlow 1.8s ease-in-out infinite'
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '0px',
            background: 'var(--theme-accent)',
            boxShadow: `0 0 10px var(--theme-accent)`
          }}
        />
        <span>{activeMessage}</span>
      </div>
    </div>
  );
}
