import React, { useEffect, useRef } from 'react';
import { Layers, Server, Code2, Check, X, Terminal } from 'lucide-react';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function DeveloperModePanel({ isOpen, onClose, placement = 'dropdown' }) {
  const { developerMode, allModes, switchDeveloperMode, isModeTransitioning } = useDeveloperMode();
  const panelRef = useRef(null);

  // Close on Escape key and outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        // Only close if click was outside panel and not on toggle button
        const btn = e.target.closest('[aria-label="Developer Mode Selector"]');
        if (!btn) {
          onClose();
        }
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

  const modeIcons = {
    frontend: Layers,
    backend: Server,
    python_full_stack: Code2
  };

  const modePills = {
    frontend: ['React.js', 'JavaScript', 'HTML5/CSS3', 'UI/UX'],
    backend: ['Python', 'Django REST', 'PostgreSQL', 'APIs'],
    python_full_stack: ['Python', 'Django', 'React', 'PostgreSQL']
  };

  const handleSelect = (modeKey) => {
    switchDeveloperMode(modeKey);
    onClose();
  };

  const isDock = placement === 'dock';

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Developer Mode Options"
      style={{
        position: 'absolute',
        top: isDock ? '50%' : '115%',
        transform: isDock ? 'translateY(-50%)' : 'none',
        right: isDock ? 'calc(100% + 16px)' : 0,
        width: '400px',
        maxWidth: '92vw',
        background: 'var(--theme-surface)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid var(--theme-border)',
        borderRadius: '0px',
        padding: '24px',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.45), 0 0 30px var(--theme-gold-glow)',
        zIndex: 9996,
        animation: 'modePanelExpand 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid var(--theme-border)', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Terminal size={17} style={{ color: 'var(--theme-accent)' }} />
          <h4 style={{ fontSize: '0.92rem', fontFamily: 'var(--font-royal)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            DEVELOPER MODE
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
          title="Close selector"
        >
          <X size={18} />
        </button>
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--theme-text-secondary)', marginBottom: '18px', lineHeight: 1.5 }}>
        Select your inspection lens. Dynamically adapts technical skills emphasis, 3D technology core visual, and role focus without altering the locked UI layout.
      </p>

      {/* Three Selectable Mode Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Object.values(allModes).map((m) => {
          const IconComponent = modeIcons[m.id] || Code2;
          const isActive = developerMode === m.id;
          const pills = modePills[m.id] || [];

          return (
            <div
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className="interactive-target"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(m.id);
                }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '14px 16px',
                borderRadius: '0px',
                background: isActive ? 'var(--theme-surface-secondary)' : 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${isActive ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                boxShadow: isActive ? '0 0 20px var(--theme-gold-glow)' : 'none',
                cursor: isModeTransitioning ? 'progress' : 'pointer',
                transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0px',
                      background: isActive ? 'var(--theme-accent)' : 'var(--theme-surface)',
                      color: isActive ? '#05070D' : 'var(--theme-accent)',
                      border: '1px solid var(--theme-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 700 }}>
                        {m.label}
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
                    <div style={{ fontSize: '0.73rem', color: 'var(--theme-text-secondary)', marginTop: '2px' }}>
                      {m.description}
                    </div>
                  </div>
                </div>

                {isActive && <Check size={17} style={{ color: 'var(--theme-accent)', flexShrink: 0 }} />}
              </div>

              {/* Mini tech chips */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', paddingLeft: '48px' }}>
                {pills.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontSize: '0.64rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--theme-border)',
                      color: 'var(--theme-text-secondary)'
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div style={{
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: '1px solid var(--theme-border)',
        fontSize: '0.72rem',
        color: 'var(--theme-text-secondary)',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span>ROLE FOCUS:</span>
        <span style={{ color: 'var(--theme-accent)', fontWeight: 700 }}>{allModes[developerMode]?.identity}</span>
      </div>
    </div>
  );
}
