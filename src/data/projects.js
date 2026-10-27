// Selected Work dataset matching Python Full Stack Developer profile

export const PROJECTS_DATA = [
  {
    id: 'food-delivery-ecosystem',
    name: 'Food Ecosystem – Multi-Role Platform',
    title: 'Food Ecosystem Platform',
    category: 'Full Stack',
    tag: 'Multi-Role Ordering Platform',
    technologies: ['Django', 'DRF', 'React', 'PostgreSQL', 'Bootstrap'],
    features: [
      'Multi-role web platform providing distinct operational interfaces for customers, restaurants, delivery partners, and administrators',
      'Relational PostgreSQL database models with foreign key constraints to manage restaurant menus, customer orders, and delivery statuses',
      'RESTful API endpoints using Django REST Framework to format, validate, and serialize structured JSON data between backend services and frontend views',
      'Responsive React.js frontend dashboards with real-time state management and consistent functionality across desktop and mobile devices',
      'Secure token authentication and role-based permissions across distinct user portals'
    ],
    summary: 'An end-to-end multi-role web platform providing distinct operational interfaces for customers, restaurants, delivery partners, and administrators.',
    description: 'An end-to-end multi-role food ordering platform built with Django REST Framework, PostgreSQL, and React.js. It organizes restaurant menus, customer orders, delivery tracking, and administrative controls with relational database constraints and responsive dashboards.',
    stats: {
      architecture: 'Django REST + React',
      database: 'PostgreSQL Relational',
      access: 'Multi-Role Portals'
    },
    demoUrl: 'https://github.com/Ravi-04-00',
    githubUrl: 'https://github.com/Ravi-04-00',
    badge: 'Full Stack Platform',
    accentColor: '#44B78B'
  },
  {
    id: 'smart-school-connect',
    name: 'Smart School Connect',
    title: 'Smart School Connect Portal',
    category: 'Full Stack',
    tag: 'School Communication Portal',
    technologies: ['Django', 'DRF', 'React', 'PostgreSQL', 'Bootstrap'],
    features: [
      'Centralized communication web portal streamlining distribution of official announcements, administrative notices, and circulars between schools and parents',
      'Relational PostgreSQL database models systematically organizing circulars, academic departments, and publishing dates with strict data integrity',
      'Configured RESTful API endpoints in Django REST Framework to handle notice filtering by academic department and serve structured JSON responses',
      'Responsive React.js client interface with asynchronous HTTP requests to retrieve and render notices without full-page reloads',
      'Clean administrative interface for department-level notice publication and audit management'
    ],
    summary: 'A centralized communication web portal to streamline the distribution of official announcements and notices between schools and parents.',
    description: 'A centralized school communication portal built with Django REST Framework, PostgreSQL, and React.js. It enables academic departments to organize and publish circulars, with category-based filtering and asynchronous client-side updates.',
    stats: {
      backend: 'Django REST Framework',
      frontend: 'React.js Client',
      database: 'PostgreSQL Models'
    },
    demoUrl: 'https://github.com/Ravi-04-00',
    githubUrl: 'https://github.com/Ravi-04-00',
    badge: 'Communication Portal',
    accentColor: '#387EB8'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Synthesis Tool',
    title: 'AI Video Synthesis Tool',
    category: 'AI & Python',
    tag: 'Python Processing Pipeline',
    technologies: ['Python', 'React', 'REST APIs'],
    features: [
      'Python-powered media synthesis pipeline transforming structured text prompts into dynamic video sequences',
      'Responsive React frontend with intuitive prompt studio, parameter selectors, and video playback preview',
      'Asynchronous task queuing with Python workers for background video processing and status polling',
      'Structured JSON API endpoints connecting client interface to Python processing services',
      'Export and download handling for generated media clips'
    ],
    summary: 'A Python-driven media processing application with an interactive React studio UI for prompt-based video generation.',
    description: 'A Python-powered video generation tool combining backend processing pipelines with an interactive React studio interface. Handles asynchronous task queuing, parameter tuning, and media rendering with responsive controls.',
    stats: {
      pipeline: 'Python Processing',
      frontend: 'React.js Studio',
      workflow: 'Async Task Queue'
    },
    demoUrl: 'https://github.com/Ravi-04-00',
    githubUrl: 'https://github.com/Ravi-04-00',
    badge: 'Python Project',
    accentColor: '#6D5DFB'
  }
];

export const PROJECT_FILTERS = ['All', 'Full Stack', 'AI & Python'];
