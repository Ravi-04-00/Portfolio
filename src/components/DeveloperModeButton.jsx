import React from 'react';
import { Terminal, ChevronDown, Layers, Server, Code2 } from 'lucide-react';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function DeveloperModeButton({ onToggle, isOpen, mode }) {
  const { modeInfo, isModeTransitioning } = useDeveloperMode();

  const getModeIcon = () => {
    switch (mode) {
      case 'frontend':
        return <Layers size={15} style={{ color: 'var(--theme-accent)' }} />;
      case 'backend':
        return <Server size={15} style={{ color: 'var(--theme-accent)' }} />;
      case 'python_full_stack':
      default:
        return <Code2 size={15} style={{ color: 'var(--theme-accent)' }} />;
    }
  };

  return (
    <button
      onClick={onToggle}
      className="interactive-target"
      aria-label="Developer Mode Selector"
      aria-expanded={isOpen}
      aria-haspopup="true"
      title={`Developer Mode: ${modeInfo.label}. Click to switch between Frontend, Backend, and Full Stack.`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        padding: '9px 16px',
        minHeight: '44px',
        background: isOpen ? 'var(--theme-surface-secondary)' : 'var(--theme-surface)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${isOpen ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
        boxShadow: isOpen
          ? '0 0 20px var(--theme-gold-glow), 0 4px 14px rgba(0,0,0,0.2)'
          : '0 2px 10px rgba(0,0,0,0.1)',
        color: 'var(--theme-text)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        cursor: isModeTransitioning ? 'progress' : 'pointer',
        borderRadius: '0px',
        transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        if (!isOpen) {
          e.currentTarget.style.borderColor = 'var(--theme-accent)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15), 0 0 14px var(--theme-gold-glow)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isOpen) {
          e.currentTarget.style.borderColor = 'var(--theme-border)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
      }}
    >
      {getModeIcon()}
      <span className="developer-mode-btn-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: 'var(--theme-text-secondary)', fontSize: '0.68rem', letterSpacing: '0.08em' }}>MODE:</span>
        <span style={{ color: 'var(--theme-accent)' }}>{modeInfo.shortLabel}</span>
      </span>
      <ChevronDown
        size={14}
        style={{
          color: 'var(--theme-text-secondary)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease'
        }}
      />
    </button>
  );
}
