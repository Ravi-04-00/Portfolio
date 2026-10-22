import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Sparkles, Crown, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { useTheme } from '../hooks/useTheme';

export default function Contact() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a project message';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent repeated submissions while in progress

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setApiError('');
    setIsLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Portfolio Inquiry',
        message: formData.message.trim()
      };

      let response;
      try {
        response = await fetch('/api/contact/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch {
        response = await fetch('http://127.0.0.1:8000/api/contact/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (response && (response.status === 201 || response.ok)) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        try {
          confetti({
            particleCount: 85,
            spread: 75,
            origin: { y: 0.6 },
            colors: theme.particleColors || ['#4169E1', '#D4AF37', '#6557D9']
          });
        } catch {
          // ignore
        }
        setTimeout(() => setIsSuccess(false), 7000);
      } else {
        const data = await response.json().catch(() => ({}));
        setApiError(data.message || 'Unable to send your message. Please try again.');
      }
    } catch {
      setApiError('Unable to send your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/ravi-kumar-04-00z/' },
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Ravi-04-00' },
    { name: 'Gmail', icon: Mail, url: 'mailto:ravikumars.dev@gmail.com' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/917339416522' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/enjoy_peson_04/' },
   // { name: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com/@ravikumar_dev' }
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="content-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">07 • TRANSMISSION PROTOCOL</span>
          <h2 className="section-title">LET'S BUILD SOMETHING AMAZING</h2>
          <p className="section-subtitle">
            Have a project in mind, a scalable Python & React architecture to engineer, or an exciting opportunity? Send a direct dispatch below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          className="contact-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Contemplative Editorial Frame with Ravi Kumar Photo */}
          <div
            className="glass-panel"
            style={{
              height: '520px',
              borderRadius: '0px',
              border: '1px solid var(--theme-border)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px'
            }}
          >
            {/* Thematic Ambient Tint */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 50% 25%, rgba(212, 175, 55, 0.12) 0%, var(--theme-surface) 80%)`,
                pointerEvents: 'none'
              }}
            />

            {/* Top Badge */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="hud-badge" style={{ borderColor: 'var(--theme-accent)', color: 'var(--theme-accent)' }}>
                <Crown size={14} />
                <span>DIRECT ENGAGEMENT PORTAL</span>
              </div>
            </div>

            {/* Center: Ravi Kumar Real Photo with 1600ms hover reveal */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <div
                className="editorial-image-frame"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '0px',
                  padding: '2px',
                  background: 'var(--theme-surface)',
                  border: '1px solid var(--theme-accent)',
                  boxShadow: '0 0 25px var(--theme-gold-glow)',
                  marginBottom: '14px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/assets/ravi_kumar.jpg"
                  alt="Ravi Kumar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '0px',
                    background: '#10B981',
                    boxShadow: '0 0 10px #10B981'
                  }}
                />
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text)', fontWeight: 600, letterSpacing: '0.1em' }}>
                  AVAILABLE FOR FRONTEND ROLES
                </span>
              </div>
            </div>

            {/* Bottom Direct Connect Info */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                background: 'var(--theme-surface-secondary)',
                border: '1px solid var(--theme-border)',
                padding: '20px'
              }}
            >
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--theme-text)',
                marginBottom: '6px'
              }}>
                Ravi Kumar S
              </h4>

              <p style={{ fontSize: '0.85rem', color: 'var(--theme-text-secondary)', marginBottom: '14px', lineHeight: 1.5 }}>
                Frontend Developer specializing in React.js, responsive web engineering, and modern component systems.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={15} style={{ color: 'var(--theme-accent)' }} />
                  <a href="mailto:ravikumars.dev@gmail.com" style={{ color: 'var(--theme-text)', textDecoration: 'none' }}>
                    rk8026569@gmail.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-text-secondary)' }}>
                  <MapPin size={15} />
                  <span>India • Available Worldwide via Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Send Me a Message" Form Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '0px',
              border: `1px solid var(--theme-border)`,
              position: 'relative'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '6px',
                color: 'var(--theme-text)'
              }}
            >
              Initiate Transmission
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--theme-text-secondary)', marginBottom: '24px' }}>
              Fill in your communication below and your transmission will be dispatched immediately.
            </p>

            {/* Success Banner */}
            {isSuccess && (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid #10B981',
                  borderRadius: '0px',
                  padding: '14px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--theme-text)',
                  animation: 'pulseGlow 2s ease infinite'
                }}
              >
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                  Thank you! Your message has been received.
                </span>
              </div>
            )}

            {/* API Error Banner */}
            {apiError && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid #EF4444',
                  borderRadius: '0px',
                  padding: '14px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--theme-text)'
                }}
              >
                <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                  {apiError}
                </span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Field: Name */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  marginBottom: '6px',
                  color: 'var(--theme-text)'
                }}>
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '0px',
                    background: 'var(--theme-surface-secondary)',
                    border: `1px solid ${errors.name ? '#EF4444' : 'var(--theme-border)'}`,
                    color: 'var(--theme-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--theme-accent)'}
                  onBlur={(e) => e.target.style.borderColor = errors.name ? '#EF4444' : 'var(--theme-border)'}
                />
                {errors.name && (
                  <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Field: Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  marginBottom: '6px',
                  color: 'var(--theme-text)'
                }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="e.g. john@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '0px',
                    background: 'var(--theme-surface-secondary)',
                    border: `1px solid ${errors.email ? '#EF4444' : 'var(--theme-border)'}`,
                    color: 'var(--theme-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--theme-accent)'}
                  onBlur={(e) => e.target.style.borderColor = errors.email ? '#EF4444' : 'var(--theme-border)'}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Field: Subject */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  marginBottom: '6px',
                  color: 'var(--theme-text)'
                }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Stack Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '0px',
                    background: 'var(--theme-surface-secondary)',
                    border: '1px solid var(--theme-border)',
                    color: 'var(--theme-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--theme-accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--theme-border)'}
                />
              </div>

              {/* Field: Message */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  marginBottom: '6px',
                  color: 'var(--theme-text)'
                }}>
                  PROJECT INQUIRY / MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your requirements, project scope, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '0px',
                    background: 'var(--theme-surface-secondary)',
                    border: `1px solid ${errors.message ? '#EF4444' : 'var(--theme-border)'}`,
                    color: 'var(--theme-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--theme-accent)'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#EF4444' : 'var(--theme-border)'}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="futuristic-btn futuristic-btn-primary interactive-target"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px',
                  fontSize: '0.95rem',
                  marginTop: '6px'
                }}
              >
                {isLoading ? (
                  <span>DISPATCHING TRANSMISSION...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>TRANSMIT DISPATCH</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct Connect Links Strip */}
            <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--theme-border)' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'var(--theme-text-secondary)',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                DIRECT CONNECT CHANNELS
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-target"
                      title={s.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '0px',
                        background: 'var(--theme-surface)',
                        border: '1px solid var(--theme-border)',
                        color: 'var(--theme-text)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--theme-accent)';
                        e.currentTarget.style.color = 'var(--theme-accent)';
                        e.currentTarget.style.boxShadow = `0 0 12px var(--theme-gold-glow)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--theme-border)';
                        e.currentTarget.style.color = 'var(--theme-text)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={15} />
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
