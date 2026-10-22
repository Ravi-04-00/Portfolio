import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  Shield,
  User,
  ExternalLink
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

  // Portrait fallback
  const [portraitSrc, setPortraitSrc] = useState('/assets/ravi_kumar_clean_portrait.png');

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
            
            {/* Eyebrow: WELCOME TO MY PORTFOLIO */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '18px'
              }}
            >
              <span
                style={{
                  width: '28px',
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
                WELCOME TO MY PORTFOLIO
              </span>
              <span
                style={{
                  width: '28px',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, #D4AF37, transparent)'
                }}
              />
            </div>

            {/* Heading: I'm Ravikumar (White + Warm Gold with Curved Underline) */}
            <div style={{ position: 'relative', marginBottom: '14px' }}>
              <h1
                className="hero-main-title"
                style={{
                  fontSize: 'clamp(3.1rem, 5.8vw, 5.2rem)',
                  fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.08,
                  margin: 0,
                  color: '#FFFFFF'
                }}
              >
                I'm{' '}
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

            {/* Profession: Python Full Stack Developer */}
            <div
              style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
                fontFamily: 'var(--font-royal, Cinzel)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#00D2FF',
                textShadow: '0 0 25px rgba(0, 210, 255, 0.6)',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span>Python Full Stack Developer</span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--theme-text-secondary, #C5CBD3)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '28px',
                letterSpacing: '0.01em'
              }}
            >
              Building modern, responsive and meaningful digital experiences.
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

            {/* Primary & Secondary Action Buttons */}
            <div
              className="hero-buttons-row"
              style={{
                display: 'flex',
                gap: '18px',
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
                  letterSpacing: '0.1em',
                  padding: '14px 28px',
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

              {/* Secondary Button: Contact Me (Glass Pill with ✉ icon) */}
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
                  letterSpacing: '0.1em',
                  padding: '14px 28px',
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

            {/* Sub-script Tag: Code • Build • Create • Grow */}
            <div
              style={{
                fontFamily: "'Playfair Display', 'Brush Script MT', Georgia, cursive, serif",
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'rgba(212, 175, 55, 0.85)',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span>Code</span>
              <span style={{ fontSize: '0.6rem', color: '#00D2FF' }}>•</span>
              <span>Build</span>
              <span style={{ fontSize: '0.6rem', color: '#00D2FF' }}>•</span>
              <span>Create</span>
              <span style={{ fontSize: '0.6rem', color: '#00D2FF' }}>•</span>
              <span>Grow</span>
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
                  top: '20px',
                  right: '20px',
                  width: '320px',
                  height: '320px',
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
                    border: '1.5px dashed rgba(212, 175, 55, 0.65)',
                    boxShadow: '0 0 25px rgba(212, 175, 55, 0.35)',
                    animation: 'rotateOrbit 28s linear infinite'
                  }}
                />

                {/* Inner Counter-Rotating Cyan Track */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '18px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(0, 210, 255, 0.55)',
                    boxShadow: '0 0 20px rgba(0, 210, 255, 0.3)',
                    animation: 'counterRotate 34s linear infinite'
                  }}
                />

                {/* 7 Orbiting Skill Badges */}
                {HERO_SKILLS.map((skill, index) => {
                  const angle = (index * (360 / HERO_SKILLS.length)) * (Math.PI / 180);
                  const radius = 145;
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
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        background: 'rgba(11, 16, 32, 0.92)',
                        border: `1.5px solid ${skill.color}`,
                        boxShadow: `0 0 16px ${skill.glow}, 0 4px 12px rgba(0,0,0,0.5)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                        animation: 'counterRotate 28s linear infinite'
                      }}
                      title={`${skill.name} - Core Full Stack Skill`}
                    >
                      <IconComp size={22} />
                    </div>
                  );
                })}
              </div>

              {/* ======================================================== */}
              {/* REAL PORTRAIT OF RAVIKUMAR                               */}
              {/* ======================================================== */}
              <div
                style={{
                  position: 'relative',
                  width: '380px',
                  height: '460px',
                  maxWidth: '85vw',
                  margin: '0 auto',
                  zIndex: 4,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'visible'
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
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'contrast(1.05) brightness(1.02) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.75))',
                    transform: 'translateZ(20px)'
                  }}
                />
              </div>

              {/* ======================================================== */}
              {/* FLOATING GLASSMORPHIC HUD CARD (From Reference Image)    */}
              {/* ======================================================== */}
              <div
                className="interactive-target"
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
