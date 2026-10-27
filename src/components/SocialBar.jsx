import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { useTheme } from '../hooks/useTheme';

export default function SocialBar() {
  const { theme } = useTheme();

  const socialItems = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/ravi-kumar-04-00z/',
      title: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/Ravi-04-00',
      title: 'GitHub Repositories'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:rk8026569@gmail.com',
      title: 'Email: rk8026569@gmail.com'
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+917339416522',
      title: 'Call: +91 7339416522'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/917339416522',
      title: 'Chat on WhatsApp'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/enjoy_peson_04/',
      title: 'Instagram Profile'
    }
  ];

  return (
    <aside
      className="social-floating-bar"
      aria-label="Social connections"
      style={{
        position: 'fixed',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9980,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '12px 8px',
        background: 'var(--theme-surface)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--theme-border)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)'
      }}
    >
      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            className="interactive-target social-item-link"
            style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--theme-text)',
              textDecoration: 'none',
              background: 'transparent',
              border: '1px solid transparent',
              transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--theme-accent)';
              e.currentTarget.style.color = 'var(--theme-accent)';
              e.currentTarget.style.transform = 'scale(1.1) translateX(-3px)';
              e.currentTarget.style.boxShadow = `0 0 16px var(--theme-gold-glow)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = 'var(--theme-text)';
              e.currentTarget.style.transform = 'scale(1) translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Icon size={19} />
          </a>
        );
      })}
    </aside>
  );
}
