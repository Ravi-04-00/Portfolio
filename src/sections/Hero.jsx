import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  Shield,
  User,
  ExternalLink,
  Download,
  Phone
} from 'lucide-react';
import RKLogoMonogram from '../components/RKLogoMonogram';
import MessageManagementModal from '../components/MessageManagementModal';
import {
  PythonIcon,
  DjangoIcon,
  ReactIcon,
  PostgreSQLIcon,
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon
} from '../components/TechIcons';

// Core 7 skills from developer profile
const HERO_SKILLS = [
  { id: 'python', name: 'Python', icon: PythonIcon, color: '#387EB8', glow: 'rgba(56, 126, 184, 0.7)' },
  { id: 'django', name: 'Django', icon: DjangoIcon, color: '#092E20', glow: 'rgba(68, 183, 139, 0.7)' },
  { id: 'react', name: 'React', icon: ReactIcon, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.7)' },
  { id: 'postgresql', name: 'PostgreSQL', icon: PostgreSQLIcon, color: '#336791', glow: 'rgba(51, 103, 145, 0.7)' },
  { id: 'html', name: 'HTML5', icon: HTML5Icon, color: '#E44D26', glow: 'rgba(228, 77, 38, 0.7)' },
  { id: 'css', name: 'CSS3', icon: CSS3Icon, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.7)' },
  { id: 'javascript', name: 'JavaScript', icon: JavaScriptIcon, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.7)' }
];

export default function Hero() {
  // Modal for Message Management
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);

  // Portrait fallback to uploaded portrait
  const [portraitSrc, setPortraitSrc] = useState('/assets/ravi_kumar_portrait.jpg');

  // Parallax tilt tracking
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth mouse move parallax for desktop
  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    const { innerWidth, innerHeight } = window;
    const x = ((e.clientX / innerWidth) - 0.5) * 10; // -5 to 5 deg
    const y = ((e.clientY / innerHeight) - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="section-wrapper"
      style={{
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 80px 0'
      }}
    >
      {/* Background Cinematic Radial Highlights */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, rgba(212, 175, 55, 0.14) 40%, transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="content-container" style={{ width: '100%', position: 'relative', zIndex: 5 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* ============================================================ */}
          {/* LEFT COLUMN: HERO HEADLINE, BADGES, AND ACTION BUTTONS       */}
          {/* ============================================================ */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Eyebrow & RK 3D Logo with Subtle Rotation & Specular Sheen */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px'
              }}
            >
              <div
                style={{
                  transform: 'perspective(600px) rotateY(-8deg) rotateX(4deg)',
                  transition: 'transform 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(600px) rotateY(14deg) rotateX(-6deg) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(600px) rotateY(-8deg) rotateX(4deg) scale(1)';
                }}
                title="RK Metallic 3D Logo • Ravikumar"
              >
                <RKLogoMonogram size={46} animated={true} glow={true} withCrown={true} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '24px',
                    height: '1.5px',
                    background: 'linear-gradient(90deg, transparent, #D4AF37)'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    letterSpacing: '0.24em',
                    color: 'var(--theme-accent, #D4AF37)',
                    textTransform: 'uppercase'
                  }}
                >
                  PYTHON FULL STACK DEVELOPER
                </span>
                <span
                  style={{
                    width: '24px',
                    height: '1.5px',
                    background: 'linear-gradient(90deg, #D4AF37, transparent)'
                  }}
                />
              </div>
            </div>

            {/* Heading: Hi, I'm Ravikumar */}
            <div style={{ position: 'relative', marginBottom: '14px' }}>
              <h1
                className="hero-main-title"
                style={{
                  fontSize: 'clamp(2.9rem, 5.5vw, 4.8rem)',
                  fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  margin: 0,
                  color: '#FFFFFF'
                }}
              >
                Hi, I'm{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FEDB6A 35%, #D4AF37 70%, #E2C158 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px rgba(212, 175, 55, 0.45)'
                  }}
                >
                  Ravikumar
                </span>
              </h1>

              {/* Elegant Gold Underline Swoosh */}
              <svg
                width="280"
                height="14"
                viewBox="0 0 280 14"
                fill="none"
                style={{
                  marginTop: '4px',
                  display: 'block'
                }}
              >
                <path
                  d="M2 9 C 80 2, 190 2, 278 10"
                  stroke="url(#heroUnderlineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="heroUnderlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D2FF" />
                    <stop offset="45%" stopColor="#FEDB6A" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Concise Description: Python, Django, React and PostgreSQL */}
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--theme-text-secondary, #C5CBD3)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '28px',
                letterSpacing: '0.01em'
              }}
            >
              I build responsive web applications using Python, Django, React and PostgreSQL.
            </p>

            {/* Horizontal Tech Badges Row (7 Skills from Developer Profile) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '34px'
              }}
            >
              {HERO_SKILLS.map((skill) => {
                const IconComp = skill.icon;
                return (
                  <div
                    key={skill.id}
                    title={skill.name}
                    className="interactive-target"
                    style={{
                      width: '46px',
                      height: '46px',
                      background: 'rgba(11, 16, 32, 0.85)',
                      border: `1px solid ${skill.color}`,
                      borderRadius: '8px',
                      boxShadow: `0 0 14px ${skill.glow}, 0 4px 12px rgba(0,0,0,0.4)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                );
              })}
            </div>

            {/* Primary & Secondary Action Buttons (3 Buttons as Specified) */}
            <div
              className="hero-buttons-row"
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '36px'
              }}
            >
              {/* Primary Button: View Projects (Gold Pill with ↗ icon) */}
              <button
                onClick={() => scrollTo('projects')}
                className="interactive-target"
                style={{
                  background: 'linear-gradient(135deg, #FEDB6A 0%, #D4AF37 100%)',
                  color: '#0A0D14',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  padding: '14px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.45), 0 0 15px rgba(254, 219, 106, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.45)';
                }}
              >
                <ArrowUpRight size={17} style={{ strokeWidth: 2.5 }} />
                <span>View Projects</span>
              </button>

              {/* Secondary Button: Download Resume (Cyan Glow Pill with Download icon) */}
              <a
                href="/assets/Ravi_Kumar_Full_Stack_Developer_Resume.pdf"
                download="Ravi_Kumar_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-target"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.18) 0%, rgba(47, 128, 255, 0.28) 100%)',
                  backdropFilter: 'blur(10px)',
                  color: '#00D2FF',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  padding: '13px 24px',
                  borderRadius: '30px',
                  border: '1.5px solid rgba(0, 210, 255, 0.65)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 210, 255, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                  e.currentTarget.style.borderColor = '#00D2FF';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 210, 255, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.65)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 210, 255, 0.25)';
                }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              {/* Tertiary Button: Contact Me (Glass Pill with ✉ icon) */}
              <button
                onClick={() => scrollTo('contact')}
                className="interactive-target"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  padding: '13px 24px',
                  borderRadius: '30px',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--theme-accent, #D4AF37)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Direct Contact Quick Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                fontSize: '0.86rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <a
                href="mailto:rk8026569@gmail.com"
                style={{
                  color: 'var(--theme-accent, #D4AF37)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                title="Send email to Ravikumar"
              >
                <Mail size={15} />
                <span>rk8026569@gmail.com</span>
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>

              <a
                href="tel:+917339416522"
                style={{
                  color: '#00D2FF',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                title="Call Ravikumar"
              >
                <Phone size={15} />
                <span>+91 7339416522</span>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: PORTRAIT + 3D ORBITAL SKILLS + HUD CARD        */}
          {/* ============================================================ */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '520px'
            }}
          >
            {/* 3D PARALLAX CONTAINER FOR PORTRAIT & ORBIT */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Restrained Gold & Cyan Rim Light Aura Behind Portrait */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, rgba(212, 175, 55, 0.3) 50%, transparent 75%)',
                  filter: 'blur(45px)',
                  zIndex: 1,
                  pointerEvents: 'none',
                  animation: 'pulseGlow 6s ease-in-out infinite'
                }}
              />

              {/* ======================================================== */}
              {/* 3D ROTATING ORBITAL TRACK WITH 7 FLOATING TECH ICONS     */}
              {/* ======================================================== */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '450px',
                  height: '450px',
                  maxWidth: '96vw',
                  maxHeight: '96vw',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                {/* Outer Circular Track */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(212, 175, 55, 0.45)',
                    boxShadow: '0 0 25px rgba(212, 175, 55, 0.25)',
                    animation: 'rotateOrbit 32s linear infinite'
                  }}
                />

                {/* Inner Counter-Rotating Cyan Track */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '24px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(0, 210, 255, 0.35)',
                    boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)',
                    animation: 'counterRotate 38s linear infinite'
                  }}
                />

                {/* 7 Orbiting Skill Badges in 3D Arrangement */}
                {HERO_SKILLS.map((skill, index) => {
                  const angle = (index * (360 / HERO_SKILLS.length)) * (Math.PI / 180);
                  const radius = 205;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const IconComp = skill.icon;

                  return (
                    <div
                      key={skill.id}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: 'rgba(11, 16, 32, 0.94)',
                        border: `1.5px solid ${skill.color}`,
                        boxShadow: `0 0 16px ${skill.glow}, 0 4px 12px rgba(0,0,0,0.5)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                        animation: 'counterRotate 32s linear infinite',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                      }}
                      title={`${skill.name} - Core Skill`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.18)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                  );
                })}
              </div>

              {/* ======================================================== */}
              {/* PREMIUM ROUNDED RECTANGLE HERO PORTRAIT FRAME             */}
              {/* ======================================================== */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px',
                  height: '450px',
                  margin: '0 auto',
                  zIndex: 4,
                  borderRadius: '30px',
                  padding: '5px',
                  background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.75) 0%, rgba(0, 210, 255, 0.45) 50%, rgba(212, 175, 55, 0.85) 100%)',
                  boxShadow: '0 24px 50px rgba(0, 0, 0, 0.75), 0 0 35px rgba(212, 175, 55, 0.3), 0 0 50px rgba(0, 210, 255, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease',
                  transform: 'translateZ(20px)'
                }}
              >
                {/* Inner Bevel & High-Res Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    background: 'linear-gradient(180deg, #121829 0%, #080C16 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={portraitSrc}
                    alt="Ravikumar - Python Full Stack Developer"
                    onError={() => {
                      if (portraitSrc !== '/assets/ravi_kumar.jpg') {
                        setPortraitSrc('/assets/ravi_kumar.jpg');
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      filter: 'contrast(1.04) brightness(1.02)'
                    }}
                  />

                  {/* Subtle Elegant Gold Rim Line at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40px',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(3, 5, 10, 0.75) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>

                {/* Verified Full Stack Developer Seal Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-14px',
                    background: 'rgba(7, 11, 20, 0.95)',
                    border: '1.5px solid #D4AF37',
                    borderRadius: '20px',
                    padding: '4px 14px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#FEDB6A',
                    zIndex: 6,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                  <span>RAVIKUMAR • FULL STACK</span>
                </div>
              </div>

              {/* ======================================================== */}
              {/* FLOATING GLASSMORPHIC HUD CARD (From Reference Image)    */}
              {/* ======================================================== */}
              <div
                className="interactive-target hero-hud-card"
                style={{
                  position: 'absolute',
                  top: '12%',
                  right: '-18px',
                  width: '190px',
                  background: 'rgba(11, 16, 32, 0.88)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 210, 255, 0.45)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 210, 255, 0.25)',
                  borderRadius: '12px',
                  padding: '16px',
                  zIndex: 8,
                  transform: 'translateZ(45px)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FEDB6A';
                  e.currentTarget.style.transform = 'translateZ(55px) translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.45)';
                  e.currentTarget.style.transform = 'translateZ(45px) translateY(0)';
                }}
              >
                {/* 1. Backend Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981'
                    }}
                  >
                    &lt;/&gt;
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.6)' }}>
                      Backend
                    </div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                      Online
                    </div>
                  </div>
                </div>

                {/* 2. Messages: View & Manage */}
                <div
                  onClick={() => setIsMsgModalOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '6px',
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.3)'
                  }}
                  title="Click to view & manage contact messages"
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FEDB6A'
                    }}
                  >
                    <Mail size={13} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.7)' }}>
                      Messages
                    </div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FEDB6A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>View & Manage</span>
                      <ExternalLink size={10} />
                    </div>
                  </div>
                </div>

                {/* 3. Contact: Send Message */}
                <div
                  onClick={() => scrollTo('contact')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(0, 210, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00D2FF'
                    }}
                  >
                    <User size={13} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.6)' }}>
                      Contact
                    </div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#00D2FF' }}>
                      Send Message
                    </div>
                  </div>
                </div>

                {/* 4. Secure: Django + PostgreSQL */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <Shield size={13} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.6)' }}>
                      Secure
                    </div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#F8F7F2' }}>
                      Django + PostgreSQL
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Message Management Modal */}
      <MessageManagementModal
        isOpen={isMsgModalOpen}
        onClose={() => setIsMsgModalOpen(false)}
      />
    </section>
  );
}
