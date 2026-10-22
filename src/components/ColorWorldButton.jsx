import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ColorWorldButton({ onToggle, isOpen }) {
  const { theme, isMorphing, activeTheme } = useTheme();

  return (
    <button
      onClick={onToggle}
      className="interactive-target"
      title="Open COLOR WORLD theme selector"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 20px',
        borderRadius: '0px',
        background: isOpen
          ? varColor(activeTheme === 'dark_royal' ? '#2F80FF' : '#2F6F57')
          : 'var(--theme-surface)',
        border: `1px solid ${isOpen ? '#FFFFFF' : 'var(--theme-border)'}`,
        boxShadow: isOpen
          ? `0 0 25px ${theme.glowColor}`
          : '0 4px 18px rgba(0, 0, 0, 0.15)',
        color: isOpen ? '#FFFFFF' : 'var(--theme-text)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '0.82rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        cursor: isMorphing ? 'progress' : 'pointer',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--theme-accent)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isOpen ? '#FFFFFF' : 'var(--theme-border)';
        e.currentTarget.style.transform = 'translateY(0px)';
      }}
    >
      <Palette size={16} style={{ color: isOpen ? '#FFFFFF' : 'var(--theme-accent)' }} />
      <span className="btn-label-desktop">COLOR WORLD</span>
      <span
        style={{
          fontSize: '0.68rem',
          padding: '2px 6px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'var(--theme-accent)',
          border: '1px solid var(--theme-border)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        2
      </span>
    </button>
  );
}

function varColor(col) {
  return col;
}
