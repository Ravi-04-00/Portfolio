import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reqRef = useRef();

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-target') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', checkHoverable);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', checkHoverable);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trail animation
  useEffect(() => {
    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      reqRef.current = requestAnimationFrame(follow);
    };
    reqRef.current = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(reqRef.current);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999 }}>
      {/* Outer reticle ring */}
      <div
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.6 : 1})`,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: `1.5px solid ${theme.primary}`,
          boxShadow: `0 0 12px ${theme.glowColor}, inset 0 0 8px ${theme.glowColor}`,
          transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
          background: isHovering ? `rgba(${theme.id === 'dark' ? '0,168,255,0.15' : '18,97,255,0.1'})` : 'transparent',
          pointerEvents: 'none'
        }}
      />
      {/* Center sharp dot */}
      <div
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          boxShadow: `0 0 6px #FFFFFF, 0 0 10px ${theme.primary}`,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
