import React from 'react';
import { ArrowUp, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid var(--theme-border)',
        background: 'var(--theme-surface)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="content-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              className="editorial-image-frame"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '0px',
                padding: '2px',
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-accent)',
                boxShadow: '0 0 14px var(--theme-gold-glow)'
              }}
            >
              <img
                src="/assets/ravi_kumar.jpg"
                alt="Ravi Kumar S"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--theme-text)' }}>
                Ravikumar
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--theme-accent)', letterSpacing: '0.12em' }}>
                PYTHON FULL STACK DEVELOPER
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <a href="mailto:rk8026569@gmail.com" style={{ color: 'var(--theme-text-secondary)', textDecoration: 'none' }}>
                  rk8026569@gmail.com
                </a>
                <span style={{ color: 'var(--theme-border)' }}>•</span>
                <a href="tel:+917339416522" style={{ color: 'var(--theme-text-secondary)', textDecoration: 'none' }}>
                  +91 7339416522
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: 'var(--theme-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-text-secondary)'}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="futuristic-btn interactive-target"
            style={{ padding: '10px 18px', fontSize: '0.82rem' }}
            title="Scroll back to top"
          >
            <ArrowUp size={15} />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid var(--theme-border)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.78rem',
            color: 'var(--theme-text-secondary)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Ravikumar. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>ACTIVE UNIVERSE:</span>
            <span style={{ color: 'var(--theme-accent)', fontWeight: 700 }}>{theme.name}</span>
            <span>•</span>
            <span>{theme.environment}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
