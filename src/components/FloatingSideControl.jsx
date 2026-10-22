import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Crown, Layers, Server, Code2, Compass } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';
import ColorWorldPanel from './ColorWorldPanel';
import DeveloperModePanel from './DeveloperModePanel';

export default function FloatingSideControl() {
  const { theme, activeTheme, isThemePanelOpen, toggleThemePanel, closeThemePanel } = useTheme();
  const { developerMode, modeInfo, isModePanelOpen, toggleModePanel, closeModePanel } = useDeveloperMode();

  const themeIconMap = {
    sunset_royal: Sun,
    dark_royal: Moon,
    light_royal: Sparkles,
    winter_royal: Crown
  };

  const modeIconMap = {
    frontend: Layers,
    backend: Server,
    python_full_stack: Code2
  };

  const ActiveThemeIcon = themeIconMap[activeTheme] || Sparkles;
  const ActiveModeIcon = modeIconMap[developerMode] || Code2;

  // Mutual exclusion: when opening one, close the other
  const handleToggleWorld = () => {
    if (isModePanelOpen) closeModePanel();
    toggleThemePanel();
  };

  const handleToggleMode = () => {
    if (isThemePanelOpen) closeThemePanel();
    toggleModePanel();
  };

  return (
    <aside
      className="floating-side-dock"
      aria-label="Theme World and Developer Mode Controls"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9980,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* 3D Glass Capsule */}
      <div
        className="floating-dock-capsule"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 7px',
          background: 'var(--theme-surface)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--theme-accent)',
          borderRadius: '40px',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px var(--theme-gold-glow)',
          transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* 1. COLOR WORLD BUTTON */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={handleToggleWorld}
            className="interactive-target floating-capsule-btn"
            aria-label="Color World Selector"
            aria-expanded={isThemePanelOpen}
            aria-haspopup="true"
            title={`Active World: ${theme.name}. Click to switch between 4 Royal Worlds.`}
            style={{
              width: '46px',
              minHeight: '52px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              background: isThemePanelOpen ? 'var(--theme-surface-secondary)' : 'transparent',
              border: isThemePanelOpen ? '1px solid var(--theme-accent)' : '1px solid transparent',
              borderRadius: '26px',
              color: 'var(--theme-accent)',
              cursor: 'pointer',
              padding: '6px 4px',
              transition: 'all 0.25s ease'
            }}
          >
            <ActiveThemeIcon size={17} style={{ color: 'var(--theme-accent)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--theme-text)',
                lineHeight: 1
              }}
            >
              WORLD
            </span>
          </button>

          {/* Color World Dropdown Panel */}
          <ColorWorldPanel isOpen={isThemePanelOpen} onClose={closeThemePanel} placement="dock" />
        </div>

        {/* Luminous Capsule Divider */}
        <div
          style={{
            width: '26px',
            height: '1px',
            background: 'var(--theme-border)',
            boxShadow: '0 0 8px var(--theme-gold-glow)',
            opacity: 0.8,
            margin: '2px 0'
          }}
        />

        {/* 2. DEVELOPER MODE BUTTON */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={handleToggleMode}
            className="interactive-target floating-capsule-btn"
            aria-label="Developer Mode Selector"
            aria-expanded={isModePanelOpen}
            aria-haspopup="true"
            title={`Active Mode: ${modeInfo.label}. Click to switch between Frontend, Backend, and Full Stack.`}
            style={{
              width: '46px',
              minHeight: '52px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              background: isModePanelOpen ? 'var(--theme-surface-secondary)' : 'transparent',
              border: isModePanelOpen ? '1px solid var(--theme-accent)' : '1px solid transparent',
              borderRadius: '26px',
              color: 'var(--theme-accent)',
              cursor: 'pointer',
              padding: '6px 4px',
              transition: 'all 0.25s ease'
            }}
          >
            <ActiveModeIcon size={17} style={{ color: 'var(--theme-accent)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--theme-accent)',
                lineHeight: 1
              }}
            >
              MODE
            </span>
          </button>

          {/* Developer Mode Dropdown Panel */}
          <DeveloperModePanel isOpen={isModePanelOpen} onClose={closeModePanel} placement="dock" />
        </div>
      </div>
    </aside>
  );
}
