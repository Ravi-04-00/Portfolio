import React from 'react';
import { useCinematicTransition } from '../hooks/useCinematicTransition';
import { useTheme } from '../hooks/useTheme';
import { Sparkles, Shield, Cpu } from 'lucide-react';

export default function CinematicTransition() {
  const { isTransitioning, phase, progress, transitionStory, fromTheme, targetTheme } = useCinematicTransition();
  const { theme, allThemes } = useTheme();

  if (!isTransitioning) return null;

  const targetThemeData = allThemes[targetTheme] || theme;
  const fromThemeData = allThemes[fromTheme] || theme;

  const getPhaseDescription = () => {
    switch (phase) {
      case 'prepare':
        return 'GATHERING ENERGY FLUX & CHARGING QUANTUM CORES...';
      case 'light_sweep':
        return 'PROJECTING VOLUMETRIC LIGHT SWEEP & HOLOGRAPHIC FLARE...';
      case 'color_morph':
        return 'MORPHING CHROMATIC PALETTE & REFRACTION MATRICES...';
      case 'environment_transform':
        return 'RECONFIGURING ATMOSPHERIC PARTICLES & SKYLINE ILLUMINATION...';
      case 'finish':
        return 'STABILIZING THEMATIC REALM MATRIX...';
      default:
        return 'TRANSFORMATION IN PROGRESS...';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99990,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 20px',
        overflow: 'hidden'
      }}
    >
      {/* Horizontal Light Sweep Beam */}
      {(phase === 'light_sweep' || phase === 'color_morph') && (
        <div className="cinematic-light-sweep-bar" />
      )}

      {/* Atmospheric Flash & Dim Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: phase === 'prepare'
            ? 'rgba(0, 0, 0, 0.45)'
            : phase === 'light_sweep'
            ? `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.3) 70%)`
            : phase === 'color_morph'
            ? `radial-gradient(circle at 50% 50%, ${targetThemeData.glowColor} 0%, transparent 70%)`
            : 'transparent',
          transition: 'background 0.3s ease',
          pointerEvents: 'none'
        }}
      />

      {/* Top HUD Banner */}
      <div
        style={{
          background: 'rgba(5, 10, 25, 0.88)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${targetThemeData.primary}`,
          boxShadow: `0 0 25px ${targetThemeData.glowColor}`,
          borderRadius: '16px',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          transform: 'translateY(0)',
          animation: 'floatSlow 3s ease infinite',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} style={{ color: targetThemeData.primary }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            color: '#FFFFFF'
          }}>
            CINEMATIC TRANSFORMATION
          </span>
        </div>

        <div style={{
          height: '18px',
          width: '1px',
          background: 'rgba(255, 255, 255, 0.2)'
        }} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: targetThemeData.primary
        }}>
          <span>{fromThemeData.name}</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>➔</span>
          <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{targetThemeData.name}</span>
        </div>
      </div>

      {/* Center Cinematic Story Narrative */}
      {transitionStory && (
        <div
          style={{
            textAlign: 'center',
            maxWidth: '650px',
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${targetThemeData.secondary}`,
            borderRadius: '18px',
            padding: '24px 32px',
            boxShadow: `0 15px 40px rgba(0,0,0,0.7), 0 0 35px ${targetThemeData.glowColor}`,
            zIndex: 10
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: targetThemeData.primary,
            letterSpacing: '0.2em',
            marginBottom: '8px'
          }}>
            {getPhaseDescription()}
          </div>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: '#FFFFFF',
            marginBottom: '10px',
            textShadow: `0 0 12px ${targetThemeData.glowColor}`
          }}>
            {transitionStory.story}
          </h3>

          {/* Active phase pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '16px',
            flexWrap: 'wrap'
          }}>
            {['PREPARE', 'LIGHT SWEEP', 'COLOR MORPH', 'ENVIRONMENT', 'FINISH'].map((pName, idx) => {
              const currentPhaseIdx = ['prepare', 'light_sweep', 'color_morph', 'environment_transform', 'finish'].indexOf(phase);
              const isActivePhase = currentPhaseIdx === idx;
              const isPastPhase = currentPhaseIdx > idx;

              return (
                <span
                  key={pName}
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: isActivePhase
                      ? targetThemeData.primary
                      : isPastPhase
                      ? 'rgba(255, 255, 255, 0.15)'
                      : 'rgba(255, 255, 255, 0.05)',
                    color: isActivePhase ? '#000000' : '#FFFFFF',
                    border: `1px solid ${isActivePhase ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)'}`
                  }}
                >
                  {pName}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Progress Bar HUD */}
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'rgba(5, 10, 25, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          padding: '12px 20px',
          zIndex: 10
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          marginBottom: '6px',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          <span>TRANSFORMATION SEQUENCE</span>
          <span style={{ color: targetThemeData.primary, fontWeight: 700 }}>{progress}%</span>
        </div>
        <div style={{
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${targetThemeData.secondary}, ${targetThemeData.primary}, #FFFFFF)`,
            boxShadow: `0 0 12px ${targetThemeData.primary}`,
            transition: 'width 0.05s linear'
          }} />
        </div>
      </div>
    </div>
  );
}
