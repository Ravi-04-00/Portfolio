import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'ravi-developer-mode';
const DeveloperModeContext = createContext();

export const DEVELOPER_MODES = {
  python_full_stack: {
    id: 'python_full_stack',
    label: 'PYTHON FULL STACK',
    displayTitle: 'Python Full Stack Developer',
    shortLabel: 'Full Stack',
    identity: 'Python Full Stack Developer',
    description: 'Complete frontend, backend and database development mode',
    heroTag: 'FULL STACK ARCHITECTURE • 2026',
    heroRoleBadge: 'Python • Django • React • PostgreSQL',
    heroDescription: 'A futuristic premium developer portfolio focused on Python, Django, React, PostgreSQL and modern web experiences.',
    expertiseChips: ['Python', 'Django', 'React', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Bootstrap'],
    stats: [
      { number: '10+', label: '10+ Projects', sub: 'Completed & Tested', color: 'accent' },
      { number: '8+', label: '8+ Technologies', sub: 'Full Stack Mastery', color: 'primary' },
      { number: '100%', label: '100% Passion', sub: 'Dedication & Precision', color: 'accent' }
    ],
    skillsSubtitle: 'Complete technology ecosystem spanning Python backend logic, Django REST APIs, PostgreSQL databases, and dynamic React single-page architectures.',
    coreLabel: 'FULL STACK CORE',
    defaultCategory: 'All',
    aboutTag: 'RAVI KUMAR • FULL STACK',
    aboutEditorialLabel: 'PYTHON FULL STACK DEVELOPER',
    aboutHeading: 'Architecting Scalable Backends & Fluid User Experiences',
    aboutBio1: 'I build modern, scalable and interactive real-world web applications using Python, Django, React and PostgreSQL. From designing clean relational schemas and robust RESTful APIs to crafting intuitive frontend single-page interfaces, I bridge data logic and user experience seamlessly.',
    aboutBio2: 'My engineering philosophy focuses on clean modular code, relational data integrity, responsive design standards, and high-performance execution across desktop, tablet, and mobile devices.',
    welcomeSubtitle: 'PYTHON FULL STACK DEVELOPER',
    welcomeHint: 'Full stack ecosystem • Frontend, backend and database nodes connected in 3D space',
    projectsSubtitle: 'Massive cinematic project gallery featuring full-stack Django, React, PostgreSQL architectures, and generative Python AI systems.'
  },

  frontend: {
    id: 'frontend',
    label: 'FRONTEND',
    displayTitle: 'Frontend Developer',
    shortLabel: 'Frontend',
    identity: 'Frontend Developer',
    description: 'Frontend development mode',
    heroTag: 'INTERACTIVE FRONTEND UNIVERSE • 2026',
    heroRoleBadge: 'React.js • Modern JavaScript • Responsive UI • CSS',
    heroDescription: 'Specialized in building modern, responsive, accessible, and high-performance user interfaces with React, JavaScript, and fluid CSS architectures.',
    expertiseChips: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'UI/UX Design', 'REST API Client', 'Tailwind'],
    stats: [
      { number: '8+', label: '8+ UI Apps', sub: 'Responsive & Interactive', color: 'primary' },
      { number: '60fps', label: 'Fluid Motion', sub: 'GPU Accelerated', color: 'accent' },
      { number: '98%', label: 'Lighthouse Score', sub: 'WCAG Accessibility', color: 'primary' }
    ],
    skillsSubtitle: 'Modern frontend ecosystem specializing in component hierarchies, custom React hooks, fluid responsive layouts, and interactive state systems.',
    coreLabel: 'FRONTEND CORE',
    defaultCategory: 'Frontend & UI',
    aboutTag: 'RAVI KUMAR • FRONTEND',
    aboutEditorialLabel: 'REACT.JS & FRONTEND SPECIALIST',
    aboutHeading: 'Crafting Thoughtful, Accessible & Performant Interfaces',
    aboutBio1: 'I specialize in crafting high-impact frontend web applications with React.js, modern JavaScript, HTML5, and responsive CSS systems. I believe great software combines aesthetic elegance with rock-solid accessibility and performance.',
    aboutBio2: 'From fluid mobile navigation drawers to complex data filtering states and GPU-accelerated micro-interactions, I ensure every pixel serves a purposeful user experience.',
    welcomeSubtitle: 'FRONTEND DEVELOPER • REACT.JS',
    welcomeHint: 'Frontend universe • 3D browser viewports, interactive React nodes and code streams',
    projectsSubtitle: 'Showcase of interactive single-page applications, responsive e-commerce checkout flows, and dynamic UI portals.'
  },

  backend: {
    id: 'backend',
    label: 'BACKEND',
    displayTitle: 'Backend Developer',
    shortLabel: 'Backend',
    identity: 'Backend Developer',
    description: 'Backend development mode',
    heroTag: 'SCALABLE BACKEND SYSTEMS • 2026',
    heroRoleBadge: 'Python • Django REST Framework • PostgreSQL • APIs',
    heroDescription: 'Specialized in architecting high-throughput backend APIs, relational database schemas, secure authentication, and resilient server-side services.',
    expertiseChips: ['Python 3', 'Django', 'Django REST Framework', 'PostgreSQL', 'SQL Indexing', 'JWT Auth', 'CRUD Architecture', 'API Design'],
    stats: [
      { number: '15+', label: '15+ Endpoints', sub: 'RESTful Microservices', color: 'accent' },
      { number: '<40ms', label: 'API Latency', sub: 'Optimized ORM Queries', color: 'primary' },
      { number: '99.9%', label: 'Uptime Reliability', sub: 'ACID Compliant DB', color: 'accent' }
    ],
    skillsSubtitle: 'Enterprise backend infrastructure focused on Django REST Framework, relational PostgreSQL database design, secure token authentication, and data pipelines.',
    coreLabel: 'BACKEND CORE',
    defaultCategory: 'Backend & Core',
    aboutTag: 'RAVI KUMAR • BACKEND',
    aboutEditorialLabel: 'PYTHON & BACKEND ARCHITECT',
    aboutHeading: 'Engineering Secure, Scalable APIs & Relational Databases',
    aboutBio1: 'I build robust server-side infrastructures using Python and the Django framework, backed by enterprise PostgreSQL databases. My work centers on schema design, query optimization, API security, and high-concurrency data transactions.',
    aboutBio2: 'Whether architecting multi-tenant authentication systems, optimizing database indexing, or designing RESTful microservice contracts, I prioritize reliability, speed, and data integrity.',
    welcomeSubtitle: 'BACKEND DEVELOPER • DJANGO & POSTGRESQL',
    welcomeHint: 'Backend server universe • Request-response streams, API nodes and PostgreSQL database cylinders',
    projectsSubtitle: 'Engineered backend systems, RESTful API microservices, enterprise databases, and asynchronous AI data pipelines.'
  }
};

export function DeveloperModeProvider({ children }) {
  const [developerMode, setDeveloperModeState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && DEVELOPER_MODES[saved]) return saved;
    } catch {
      // fallback
    }
    return 'python_full_stack';
  });

  const [isModePanelOpen, setIsModePanelOpen] = useState(false);
  const [isModeTransitioning, setIsModeTransitioning] = useState(false);
  const [transitionMessage, setTransitionMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, developerMode);
      document.documentElement.setAttribute('data-developer-mode', developerMode);
    } catch {
      // ignore
    }
  }, [developerMode]);

  const switchDeveloperMode = useCallback((newMode) => {
    if (!DEVELOPER_MODES[newMode] || newMode === developerMode || isModeTransitioning) return;

    setIsModeTransitioning(true);
    setTransitionMessage(`ACTIVATING ${DEVELOPER_MODES[newMode].label} MODE...`);

    // 1400ms smooth cinematic mode transition
    setTimeout(() => {
      setDeveloperModeState(newMode);
    }, 400);

    setTimeout(() => {
      setIsModeTransitioning(false);
      setTransitionMessage('');
    }, 1400);
  }, [developerMode, isModeTransitioning]);

  const toggleModePanel = useCallback(() => {
    setIsModePanelOpen(prev => !prev);
  }, []);

  const closeModePanel = useCallback(() => {
    setIsModePanelOpen(false);
  }, []);

  const value = {
    developerMode,
    modeInfo: DEVELOPER_MODES[developerMode] || DEVELOPER_MODES.python_full_stack,
    allModes: DEVELOPER_MODES,
    switchDeveloperMode,
    isModePanelOpen,
    toggleModePanel,
    closeModePanel,
    isModeTransitioning,
    transitionMessage
  };

  return (
    <DeveloperModeContext.Provider value={value}>
      {children}
    </DeveloperModeContext.Provider>
  );
}

export function useDeveloperMode() {
  const context = useContext(DeveloperModeContext);
  if (!context) {
    throw new Error('useDeveloperMode must be used within a DeveloperModeProvider');
  }
  return context;
}
