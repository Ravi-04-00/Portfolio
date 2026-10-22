import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useDeveloperMode } from '../hooks/useDeveloperMode';

export default function ParticleBackground() {
  const { theme, activeTheme } = useTheme();
  const { developerMode } = useDeveloperMode();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 85;
    const colors = theme.particleColors || ['#4169E1', '#D4AF37', '#6557D9'];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.6 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.2;

        if (activeTheme === 'winter_royal') {
          // Tiny luxury-white particles with subtle green glow and glass reflections (avoid childish snow)
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 1.8 + 0.8;
        } else if (activeTheme === 'sunset_royal') {
          // Controlled coral-orange highlights and muted green particles drifting gracefully
          this.vx = (Math.random() - 0.5) * 0.6;
          this.vy = -(Math.random() * 0.7 + 0.2);
          this.size = Math.random() * 2.2 + 1.0;
        } else if (activeTheme === 'light_royal') {
          // Floating crystal particles
          this.vx = (Math.random() - 0.5) * 0.6;
          this.vy = (Math.random() - 0.5) * 0.6;
          this.size = Math.random() * 2.4 + 1.0;
        } else {
          // Dark royal: very subtle cream, dusty-rose and leaf-green particles - mature and editorial
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 1.8 + 0.8;
        }

        // Developer Mode subtle atmosphere accents
        if (developerMode === 'frontend' && Math.random() < 0.16) {
          const uiSymbols = ['< >', '{ }', '</>', 'UI', '⚛'];
          this.symbol = uiSymbols[Math.floor(Math.random() * uiSymbols.length)];
        } else if (developerMode === 'backend' && Math.random() < 0.16) {
          const beSymbols = ['API', '01', 'SQL', '{ }', '->'];
          this.symbol = beSymbols[Math.floor(Math.random() * beSymbols.length)];
        } else if (developerMode === 'python_full_stack' && Math.random() < 0.14) {
          const fsSymbols = ['< >', 'PY', 'DB', '{ }', 'API'];
          this.symbol = fsSymbols[Math.floor(Math.random() * fsSymbols.length)];
        } else {
          this.symbol = null;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around bounds
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulse alpha
        this.alpha += (Math.random() - 0.5) * 0.02;
        if (this.alpha < 0.15) this.alpha = 0.2;
        if (this.alpha > 0.85) this.alpha = 0.8;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 3;

        if (this.symbol) {
          ctx.font = `600 ${Math.max(8, Math.round(this.size * 3.4))}px monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.symbol, this.x, this.y);
        } else {
          ctx.beginPath();
          if (activeTheme === 'winter_royal') {
            // Diamond / ice crystal
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.PI / 4);
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
          } else if (activeTheme === 'light_royal') {
            // Hexagonal / circular crystal glow
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          } else {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          }
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Connect line logic for dark and light royal atmospheres
    const drawConnections = () => {
      if (activeTheme === 'winter_royal') return; // no web lines for snow
      const maxDistance = isMobile ? 80 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.save();
            const linkAlpha = (1 - dist / maxDistance) * 0.14;
            ctx.globalAlpha = linkAlpha;
            ctx.strokeStyle = theme.primary;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient vignette matching active royal world
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.3,
        50,
        width / 2,
        height * 0.3,
        width * 0.8
      );

      if (activeTheme === 'sunset_royal') {
        gradient.addColorStop(0, 'rgba(255, 107, 87, 0.08)');
        gradient.addColorStop(0.5, 'rgba(138, 154, 134, 0.04)');
        gradient.addColorStop(1, 'rgba(28, 30, 36, 0)');
      } else if (activeTheme === 'light_royal') {
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.07)');
        gradient.addColorStop(1, 'rgba(250, 247, 242, 0)');
      } else if (activeTheme === 'winter_royal') {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
        gradient.addColorStop(0.4, 'rgba(212, 234, 224, 0.08)');
        gradient.addColorStop(1, 'rgba(232, 243, 237, 0)');
      } else {
        // dark_royal (luxury editorial dusty-rose, cream and leaf-green reflections)
        gradient.addColorStop(0, 'rgba(169, 123, 118, 0.08)');
        gradient.addColorStop(0.5, 'rgba(106, 155, 83, 0.04)');
        gradient.addColorStop(1, 'rgba(240, 236, 231, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, activeTheme, developerMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'opacity 0.6s ease'
      }}
    />
  );
}
