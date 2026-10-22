import React, { useEffect, useRef } from 'react';
import { Moon, Sun, Sparkles, Compass, Check, X, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ColorWorldPanel({ isOpen, onClose, placement = 'dropdown' }) {
  const { allThemes, activeTheme, switchTheme, isMorphing } = useTheme();
  const panelRef = useRef(null);

  // Close on Escape key and outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        const btn = e.target.closest('[aria-label="Color World Selector"]');
        if (!btn) onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const iconMap = {
    Moon: Moon,
    Sun: Sun,
    Sparkles: Sparkles,
    Compass: Compass,
    Crown: Crown
  };

  const handleSelect = (themeKey) => {
    switchTheme(themeKey);
    onClose();
  };

  const isDock = placement === 'dock';

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Color World Selector Options"
      style={{
        position: 'absolute',
        top: isDock ? '50%' : '115%',
        transform: isDock ? 'translateY(-50%)' : 'none',
        right: isDock ? 'calc(100% + 16px)' : 0,
        width: '410px',
        maxWidth: '92vw',
        background: 'var(--theme-surface)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid var(--theme-border)',
        borderRadius: '0px',
        padding: '24px',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.45), 0 0 30px var(--theme-gold-glow)',
        zIndex: 9995,
        animation: 'modePanelExpand 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid var(--theme-border)', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Crown size={18} style={{ color: 'var(--theme-accent)' }} />
          <h4 style={{ fontSize: '0.92rem', fontFamily: 'var(--font-royal)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            COLOR WORLD SELECTOR
          </h4>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--theme-text-secondary)',
            cursor: 'pointer',
            padding: '4px'
          }}
          title="Close panel"
        >
          <X size={18} />
        </button>
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--theme-text-secondary)', marginBottom: '18px', lineHeight: 1.5 }}>
        Choose from four royal cinematic worlds. Smooth 1800ms volumetric light sweep and atmospheric transformation without layout shift.
      </p>

      {/* Theme Cards List: EXACTLY 4 WORLDS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Object.values(allThemes).map((t) => {
          const IconComponent = iconMap[t.iconName] || Sparkles;
          const isActive = activeTheme === t.id;

          return (
            <div
              key={t.id}
              onClick={() => handleSelect(t.id)}
              className="interactive-target"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(t.id);
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                borderRadius: '0px',
                background: isActive
                  ? 'var(--theme-surface-secondary)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                boxShadow: isActive ? '0 0 20px var(--theme-gold-glow)' : 'none',
                cursor: isMorphing ? 'progress' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--theme-accent)';
                  e.currentTarget.style.transform = 'translateX(-3px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--theme-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Miniature Visual Preview Orb */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '0px',
                    background: t.orbGradient,
                    border: '1px solid var(--theme-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={18} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700 }}>
                      {t.name}
                    </span>
                    {isActive && (
                      <span style={{
                        fontSize: '0.6rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '1px 5px',
                        background: 'var(--theme-accent)',
                        color: '#05070D',
                        fontWeight: 800,
                        letterSpacing: '0.1em'
                      }}>
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-secondary)', marginTop: '2px' }}>
                    {t.badge}
                  </div>
                </div>
              </div>

              {/* Swatch color dots */}
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {t.particleColors.slice(0, 4).map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '0px',
                      backgroundColor: c,
                      display: 'inline-block',
                      border: '1px solid rgba(0,0,0,0.2)'
                    }}
                  />
                ))}
                {isActive && <Check size={16} style={{ color: 'var(--theme-accent)', marginLeft: '6px' }} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Atmosphere readout */}
      <div style={{
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: '1px solid var(--theme-border)',
        fontSize: '0.74rem',
        color: 'var(--theme-text-secondary)',
        fontFamily: 'var(--font-mono)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span>MOOD:</span>
          <span style={{ color: 'var(--theme-text)', fontWeight: 600 }}>{allThemes[activeTheme]?.mood}</span>
        </div>
      </div>
    </div>
  );
}
