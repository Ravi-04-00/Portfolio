import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function Navbar() {
  const { modeInfo } = useDeveloperMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'resume', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Ravi_Kumar_Full_Stack_Developer_Resume.pdf';
    link.download = 'Ravi_Kumar_Full_Stack_Developer_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9990,
          padding: isScrolled ? '14px 0' : '20px 0',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          background: isScrolled
            ? 'var(--theme-card)'
            : 'linear-gradient(180deg, var(--theme-background) 0%, transparent 100%)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--theme-border)' : '1px solid transparent'
        }}
      >
        <div className="content-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Monogram & Developer Title */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {/* Real Photo Avatar in Editorial Square Frame */}
            <div
              style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                padding: '2px',
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-accent)',
                boxShadow: `0 0 16px var(--theme-gold-glow)`
              }}
            >
              <img
                src="/assets/ravi_kumar_portrait.jpg"
                alt="Ravikumar"
                onError={(e) => {
                  e.currentTarget.src = '/assets/ravi_kumar.jpg';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '6px'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '9px',
                  height: '9px',
                  background: '#10B981',
                  border: '1.5px solid var(--theme-background)'
                }}
              />
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.22rem',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>Ravikumar</span>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', border: '1px solid var(--theme-border)', color: 'var(--theme-accent)' }}>
                  RK
                </span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: 'var(--theme-text-secondary)',
                textTransform: 'uppercase'
              }}>
                {modeInfo.displayTitle}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    textDecoration: 'none',
                    padding: '8px 14px',
                    borderRadius: '0px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                    background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                    borderBottom: isActive ? '2px solid var(--theme-accent)' : '2px solid transparent',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--theme-text)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--theme-text-secondary)';
                    }
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Top Right Action: DOWNLOAD RESUME */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handleDownloadResume}
              className="futuristic-btn futuristic-btn-primary interactive-target"
              style={{
                padding: '9px 18px',
                fontSize: '0.8rem',
                minHeight: 'auto'
              }}
            >
              <Download size={15} />
              <span className="btn-label-desktop">Download Resume</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-mobile-toggle"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--theme-surface)',
                border: '1px solid var(--theme-border)',
                padding: '10px',
                color: 'var(--theme-text)',
                cursor: 'pointer'
              }}
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--theme-surface)',
            zIndex: 9989,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '36px',
            gap: '14px',
            overflowY: 'auto'
          }}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              background: 'none',
              border: '1px solid var(--theme-border)',
              padding: '10px',
              color: 'var(--theme-text)',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--theme-accent)', letterSpacing: '0.2em' }}>
              NAVIGATION MENU
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem' }}>Ravi Kumar</h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--theme-text-secondary)', marginTop: '2px' }}>
              {modeInfo.displayTitle}
            </div>
          </div>


          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--theme-text)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                padding: '8px 0',
                borderBottom: '1px solid var(--theme-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} style={{ color: 'var(--theme-accent)' }} />
            </a>
          ))}

          <div style={{ marginTop: '16px' }}>
            <button
              onClick={handleDownloadResume}
              className="futuristic-btn futuristic-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={18} />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
