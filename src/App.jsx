import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import { DeveloperModeProvider } from './hooks/useDeveloperMode';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import SocialBar from './components/SocialBar';
import ThemeTransition from './components/ThemeTransition';
import FloatingSideControl from './components/FloatingSideControl';
import Footer from './components/Footer';

// Sections
import IntroAnimation from './sections/IntroAnimation';
import Welcome from './sections/Welcome';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function MainPortfolioContent() {
  const { isMorphing, morphMessage, theme } = useTheme();

  const [showIntro, setShowIntro] = useState(() => {
    try {
      return localStorage.getItem('ravi-intro-completed') !== 'true';
    } catch {
      return true;
    }
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Custom Theme Aware Cursor */}
      <CustomCursor />

      {/* Global Scroll Progress */}
      <ScrollProgress />

      {/* Dynamic 2-World Royal Particle Environment */}
      <ParticleBackground />

      {/* Floating Right Dock Social Bar */}
      <SocialBar />

      {/* Ultra-Premium 1800ms Cinematic Theme Transition Light Sweep & Atmosphere Morph */}
      <ThemeTransition />

      {/* Fullscreen Cinematic Anime Intro */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Floating Side Capsule for World and Mode Controls */}
      <FloatingSideControl />

      {/* Sticky Glassmorphic Navbar with Navigation & Floating Color World */}
      <Navbar />

      <main>
        {/* Welcome Section with 3D Glowing Orb & 7 Orbiting Tech Badges */}
        <Welcome />

        {/* Hero Section with Ravi Kumar Real Photo in Royal Frame & Stats */}
        <Hero />

        {/* About Section with Real Photo Showcase & Editorial Grid */}
        <About />

        {/* Skills Section with 3D Interactive Skill Universe & Tech Progress */}
        <Skills />

        {/* Projects Section with 3 Selected Work Cards & Full Screen Detail Modal */}
        <Projects />

        {/* Journey Section with 4-Phase Frontend Timeline Path */}
        <Journey />

        {/* Resume Section with Curriculum Vitae & Download */}
        <Resume />

        {/* Contact Section with Direct Dispatch Portal & Follow Strip */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <DeveloperModeProvider>
        <MainPortfolioContent />
      </DeveloperModeProvider>
    </ThemeProvider>
  );
}
