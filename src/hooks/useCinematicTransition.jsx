import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { useTheme } from './useTheme';
import { TRANSITION_ROUTES } from '../data/themes';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const { activeTheme, setTheme, stagedTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'prepare' | 'light_sweep' | 'color_morph' | 'environment_transform' | 'finish'
  const [progress, setProgress] = useState(0);
  const [transitionStory, setTransitionStory] = useState(null);
  const [fromTheme, setFromTheme] = useState(activeTheme);
  const [targetTheme, setTargetTheme] = useState(activeTheme);
  
  const timerRef = useRef(null);
  const animFrameRef = useRef(null);

  const startCinematicTransition = useCallback((toThemeOverride) => {
    const nextTheme = toThemeOverride || stagedTheme || (
      activeTheme === 'dark' ? 'light' :
      activeTheme === 'light' ? 'winter' :
      activeTheme === 'winter' ? 'sunset' : 'dark'
    );

    if (isTransitioning) return;
    if (nextTheme === activeTheme) {
      // If user clicks while already on that theme, pick next in circular cycle
      const cycle = ['dark', 'light', 'winter', 'sunset'];
      const curIndex = cycle.indexOf(activeTheme);
      const nextCycleTheme = cycle[(curIndex + 1) % cycle.length];
      startCinematicTransition(nextCycleTheme);
      return;
    }

    const routeKey = `${activeTheme}_to_${nextTheme}`;
    const routeInfo = TRANSITION_ROUTES[routeKey] || {
      story: `Transforming from ${activeTheme.toUpperCase()} to ${nextTheme.toUpperCase()}`,
      effects: ['Harmonizing environment', 'Morphing atmosphere', 'Stabilizing world']
    };

    setFromTheme(activeTheme);
    setTargetTheme(nextTheme);
    setTransitionStory(routeInfo);
    setIsTransitioning(true);
    setProgress(0);

    const totalDuration = 1800; // 1.8s
    const startTime = performance.now();

    // Progress updater loop
    const updateProgress = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
      setProgress(pct);
      if (elapsed < totalDuration) {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };
    animFrameRef.current = requestAnimationFrame(updateProgress);

    // Phase 1: prepare (0 - 200ms)
    setPhase('prepare');

    // Phase 2: light_sweep (200 - 550ms)
    setTimeout(() => {
      setPhase('light_sweep');
    }, 200);

    // Phase 3: color_morph (550 - 1200ms) - At 650ms we trigger actual theme switch
    setTimeout(() => {
      setPhase('color_morph');
      setTheme(nextTheme);
    }, 550);

    // Phase 4: environment_transform (1200 - 1650ms)
    setTimeout(() => {
      setPhase('environment_transform');
    }, 1200);

    // Phase 5: finish (1650 - 1800ms)
    setTimeout(() => {
      setPhase('finish');
    }, 1650);

    // Reset to idle
    setTimeout(() => {
      setPhase('idle');
      setIsTransitioning(false);
      setProgress(100);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }, totalDuration);

  }, [activeTheme, stagedTheme, isTransitioning, setTheme]);

  // Replay transition
  const replayTransition = useCallback(() => {
    if (isTransitioning) return;
    const cycle = ['dark', 'light', 'winter', 'sunset'];
    const curIndex = cycle.indexOf(activeTheme);
    const prevIndex = (curIndex - 1 + cycle.length) % cycle.length;
    // Switch briefly then transition forward
    startCinematicTransition(activeTheme);
  }, [activeTheme, isTransitioning, startCinematicTransition]);

  const value = {
    isTransitioning,
    phase,
    progress,
    transitionStory,
    fromTheme,
    targetTheme,
    startCinematicTransition,
    replayTransition
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useCinematicTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useCinematicTransition must be used within a TransitionProvider');
  }
  return context;
}
