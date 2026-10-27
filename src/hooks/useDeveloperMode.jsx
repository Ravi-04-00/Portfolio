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
    heroDescription: 'Python Full Stack Developer focused on building responsive, database-driven web applications with Django and React.',
    expertiseChips: ['Python', 'Django', 'Django REST Framework', 'React', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    stats: [
      { number: 'Full Stack', label: 'Architecture', sub: 'Django, React & PostgreSQL', color: 'accent' },
      { number: 'REST APIs', label: 'Backend Services', sub: 'Django REST Framework', color: 'primary' },
      { number: 'Relational DB', label: 'PostgreSQL Models', sub: 'Data Modeling & Integrity', color: 'accent' }
    ],
    skillsSubtitle: 'Full-stack technology stack covering Python and Django REST backend APIs, PostgreSQL relational databases, and responsive React.js interfaces.',
    coreLabel: 'FULL STACK CORE',
    defaultCategory: 'All',
    aboutTag: 'RAVIKUMAR • FULL STACK',
    aboutEditorialLabel: 'PYTHON FULL STACK DEVELOPER',
    aboutHeading: 'Developing Reliable Backends & Responsive User Interfaces',
    aboutBio1: 'I develop database-driven web applications using Python, Django, Django REST Framework, React.js, and PostgreSQL. I have practical experience building RESTful API endpoints, designing relational database schemas with foreign key integrity, and creating responsive user interfaces.',
    aboutBio2: 'With a background in scientific discipline and disciplined self-study, I approach software engineering systematically—prioritizing clean architecture, clear documentation, and consistent cross-device performance.',
    welcomeSubtitle: 'PYTHON FULL STACK DEVELOPER',
    welcomeHint: 'Full stack ecosystem • Frontend, backend and database nodes connected in 3D space',
    projectsSubtitle: 'Selected full-stack web applications built with Python, Django, React, and PostgreSQL.'
  },

  frontend: {
    id: 'frontend',
    label: 'FRONTEND',
    displayTitle: 'Frontend Developer',
    shortLabel: 'Frontend',
    identity: 'Frontend Developer',
    description: 'Frontend development mode',
    heroTag: 'INTERACTIVE FRONTEND • 2026',
    heroRoleBadge: 'React.js • Modern JavaScript • Responsive UI • CSS',
    heroDescription: 'Specialized in building modern, responsive, accessible, and high-performance user interfaces with React, JavaScript, and fluid CSS architectures.',
    expertiseChips: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'UI Design', 'REST API Client'],
    stats: [
      { number: 'React.js', label: 'Component UI', sub: 'Hooks & State Architecture', color: 'primary' },
      { number: 'Responsive', label: 'Cross-Device', sub: 'Fluid CSS & Bootstrap', color: 'accent' },
      { number: 'Accessible', label: 'Clean Standards', sub: 'Semantic HTML5', color: 'primary' }
    ],
    skillsSubtitle: 'Modern frontend ecosystem specializing in component hierarchies, custom React hooks, fluid responsive layouts, and interactive state systems.',
    coreLabel: 'FRONTEND CORE',
    defaultCategory: 'Frontend & UI',
    aboutTag: 'RAVIKUMAR • FRONTEND',
    aboutEditorialLabel: 'REACT.JS & FRONTEND SPECIALIST',
    aboutHeading: 'Crafting Thoughtful, Accessible & Performant Interfaces',
    aboutBio1: 'I specialize in crafting frontend web applications with React.js, modern JavaScript, HTML5, and responsive CSS systems.',
    aboutBio2: 'From fluid mobile navigation to asynchronous data filtering states, I ensure interfaces are clean, fast, and accessible across devices.',
    welcomeSubtitle: 'FRONTEND DEVELOPER • REACT.JS',
    welcomeHint: 'Frontend universe • Responsive React components and interactive UI state',
    projectsSubtitle: 'Showcase of interactive single-page applications and responsive client interfaces.'
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
    heroDescription: 'Specialized in architecting reliable backend APIs, relational database schemas, secure authentication, and resilient server-side services.',
    expertiseChips: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'SQL', 'CRUD Architecture', 'API Design'],
    stats: [
      { number: 'Django DRF', label: 'RESTful APIs', sub: 'Serialization & Routing', color: 'accent' },
      { number: 'PostgreSQL', label: 'Relational Schema', sub: 'Foreign Keys & Constraints', color: 'primary' },
      { number: 'Security', label: 'Data Integrity', sub: 'Authentication & Permissions', color: 'accent' }
    ],
    skillsSubtitle: 'Backend infrastructure focused on Django REST Framework, relational PostgreSQL database design, and secure API endpoints.',
    coreLabel: 'BACKEND CORE',
    defaultCategory: 'Backend & Core',
    aboutTag: 'RAVIKUMAR • BACKEND',
    aboutEditorialLabel: 'PYTHON & BACKEND DEVELOPER',
    aboutHeading: 'Engineering Secure, Scalable APIs & Relational Databases',
    aboutBio1: 'I build server-side web applications using Python and the Django framework, backed by PostgreSQL databases. My work centers on schema design, query structure, API serialization, and reliable data transactions.',
    aboutBio2: 'I design clear RESTful API contracts with Django REST Framework, enforce relational foreign key constraints, and maintain data integrity.',
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
