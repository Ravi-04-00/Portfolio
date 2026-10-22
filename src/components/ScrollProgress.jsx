import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      zIndex: 9999,
      background: 'rgba(255, 255, 255, 0.05)',
      pointerEvents: 'none'
    }}>
      <div style={{
        height: '100%',
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, var(--theme-secondary), var(--theme-primary), #FFFFFF)',
        boxShadow: '0 0 10px var(--theme-primary), 0 0 20px var(--theme-glow)',
        transition: 'width 0.1s ease-out'
      }} />
    </div>
  );
}
