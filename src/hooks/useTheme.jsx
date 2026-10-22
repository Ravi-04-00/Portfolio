import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { THEMES } from '../data/themes';

const STORAGE_KEY = 'ravi-portfolio-theme';
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES[saved]) return saved;
      if (saved === 'dark') return 'dark_royal';
      if (saved === 'sunset' || saved === 'light') return 'sunset_royal';
      if (saved === 'winter') return 'winter_royal';
    } catch {
      // fallback
    }
    return 'dark_royal';
  });

  const [previousTheme, setPreviousTheme] = useState('dark_royal');
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [isMorphing, setIsMorphing] = useState(false);
  const [morphMessage, setMorphMessage] = useState('');

  // Apply CSS custom variables whenever activeTheme changes
  const applyThemeVariables = useCallback((themeKey) => {
    const theme = THEMES[themeKey] || THEMES.dark_royal;
    const root = document.documentElement;

    root.setAttribute('data-theme', themeKey);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--background-secondary', theme.backgroundSecondary);
    root.style.setProperty('--surface', theme.surface);
    root.style.setProperty('--surface-light', theme.surfaceSecondary);
    root.style.setProperty('--foreground', theme.foreground);
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-bright', theme.accentBright);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--glow', theme.glow);
    root.style.setProperty('--rim-light', theme.rimLight || theme.accent);
    root.style.setProperty('--particle-color', theme.particleColors[0]);

    // Backward-compatible theme aliases
    root.style.setProperty('--theme-background', theme.background);
    root.style.setProperty('--theme-surface', theme.surface);
    root.style.setProperty('--theme-surface-secondary', theme.surfaceSecondary);
    root.style.setProperty('--theme-card', theme.surfaceCard);
    root.style.setProperty('--theme-border', theme.border);
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-accent-soft', theme.accentBright);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-text-secondary', theme.textSecondary);
    root.style.setProperty('--theme-glow', theme.glowColor);
    root.style.setProperty('--theme-gold-glow', theme.goldGlow);
    root.style.setProperty('--theme-orb-gradient', theme.orbGradient);
    root.style.setProperty('--theme-bg-gradient', theme.bgGradient);
  }, []);

  useEffect(() => {
    applyThemeVariables(activeTheme);
    try {
      localStorage.setItem(STORAGE_KEY, activeTheme);
    } catch {
      // ignore
    }
  }, [activeTheme, applyThemeVariables]);

  const switchTheme = useCallback((themeKey) => {
    if (!THEMES[themeKey] || themeKey === activeTheme || isMorphing) return;
    
    setPreviousTheme(activeTheme);
    setIsMorphing(true);
    setMorphMessage(`ENTERING ${THEMES[themeKey].name.toUpperCase()}...`);

    // Smooth cinematic color morph with 1800ms duration
    setTimeout(() => {
      setActiveThemeState(themeKey);
    }, 450);

    setTimeout(() => {
      setIsMorphing(false);
      setMorphMessage('');
    }, 1800);
  }, [activeTheme, isMorphing]);

  const toggleTheme = useCallback(() => {
    const keys = Object.keys(THEMES);
    const currentIndex = keys.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % keys.length;
    switchTheme(keys[nextIndex]);
  }, [activeTheme, switchTheme]);

  const toggleThemePanel = useCallback(() => {
    setIsThemePanelOpen(prev => !prev);
  }, []);

  const closeThemePanel = useCallback(() => {
    setIsThemePanelOpen(false);
  }, []);

  const value = {
    theme: THEMES[activeTheme] || THEMES.dark_royal,
    activeTheme,
    previousTheme,
    switchTheme,
    toggleTheme,
    isMorphing,
    morphMessage,
    isThemePanelOpen,
    toggleThemePanel,
    closeThemePanel,
    allThemes: THEMES
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
