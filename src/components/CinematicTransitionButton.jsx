import React, { useState } from 'react';
import { Sparkles, RefreshCw, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useCinematicTransition } from '../hooks/useCinematicTransition';

export default function CinematicTransitionButton() {
  const { theme, activeTheme } = useTheme();
  const { isTransitioning, startCinematicTransition, replayTransition, phase, progress } = useCinematicTransition();
  const [isHovered, setIsHovered] = useState(false);

  const getNextThemeName = () => {
    const cycle = ['dark', 'light', 'winter', 'sunset'];
    const idx = cycle.indexOf(activeTheme);
    const next = cycle[(idx + 1) % cycle.length];
    return next.toUpperCase();
  };

  const getButtonState = () => {
    if (isTransitioning) return `TRANSFORMING (${progress}%)`;
    if (isHovered) return `TO ${getNextThemeName()}`;
    return 'READY';
  };

  const handleClick = () => {
    startCinematicTransition();
  };

  const handleDoubleClick = () => {
    replayTransition();
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="interactive-target"
        title="Click to trigger cinematic world transformation, double-click to replay"
        disabled={isTransitioning}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          borderRadius: '12px',
          background: isTransitioning
            ? `linear-gradient(135deg, ${theme.accent} 0%, ${theme.primary} 100%)`
            : `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%), var(--theme-card)`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1.5px solid ${isTransitioning ? '#FFFFFF' : theme.secondary}`,
          boxShadow: isTransitioning
            ? `0 0 30px ${theme.glowColor}, inset 0 0 15px #FFFFFF`
            : `0 4px 18px rgba(0, 0, 0, 0.3)`,
          color: '#FFFFFF',
          fontFamily: 'var(--font-sub)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          cursor: isTransitioning ? 'progress' : 'pointer',
          transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          overflow: 'hidden'
        }}
      >
        <Sparkles
          size={18}
          style={{
            color: theme.primary,
            animation: isTransitioning ? 'rotateOrbit 2s linear infinite' : 'none'
          }}
        />
        <span className="btn-label-desktop">CINEMATIC TRANSITION</span>
        
        {/* State Pill */}
        <span
          style={{
            fontSize: '0.7rem',
            padding: '2px 7px',
            borderRadius: '6px',
            background: isTransitioning ? '#FFFFFF' : 'rgba(var(--theme-primary), 0.25)',
            color: isTransitioning ? '#0F172A' : theme.primary,
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            border: `1px solid ${isTransitioning ? '#FFFFFF' : theme.primary}`
          }}
        >
          {getButtonState()}
        </span>
      </button>

      {/* Floating tooltip hint on hover */}
      {isHovered && !isTransitioning && (
        <div
          style={{
            position: 'absolute',
            top: '120%',
            right: 0,
            background: 'var(--theme-surface)',
            border: `1px solid ${theme.primary}`,
            borderRadius: '8px',
            padding: '6px 10px',
            fontSize: '0.72rem',
            color: 'var(--theme-text)',
            whiteSpace: 'nowrap',
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4), 0 0 12px ${theme.glowColor}`,
            zIndex: 9996,
            pointerEvents: 'none'
          }}
        >
          Click: Transform to {getNextThemeName()} • 2x Click: Replay
        </div>
      )}
    </div>
  );
}
