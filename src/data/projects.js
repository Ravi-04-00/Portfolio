// Selected Work dataset matching Python Full Stack Developer profile

export const PROJECTS_DATA = [
  {
    id: 'food-delivery-ecosystem',
    name: 'Food Delivery Ecosystem',
    title: 'Food Delivery Ecosystem',
    category: 'Full Stack',
    tag: 'E-Commerce & Delivery',
    technologies: ['Django', 'React', 'PostgreSQL'],
    features: [
      'Full-stack architecture with Django REST Framework backend and React single-page frontend',
      'PostgreSQL relational schema modeling menus, orders, customer profiles, and delivery logistics',
      'Real-time order state updates, cart calculation, and payment workflow integration',
      'Responsive food discovery interface with dietary category filters and live search',
      'Secure token authentication (JWT), role-based permissions, and admin dashboard',
      'Optimized database queries with Django ORM select_related and prefetch_related'
    ],
    summary: 'A scalable end-to-end food ordering and delivery ecosystem engineered with Django, React, and PostgreSQL.',
    description: 'A comprehensive full-stack delivery platform featuring customer menu browsing, real-time cart state management, checkout transaction flows, order history tracking, and a robust Django admin panel powered by an ACID-compliant PostgreSQL database.',
    stats: {
      orders: '10,000+',
      apiLatency: '< 45ms',
      uptime: '99.9%'
    },
    demoUrl: 'https://food-ecosystem.ravikumars.dev',
    githubUrl: 'https://github.com/ravikumar-dev/food-delivery-ecosystem',
    badge: 'Flagship Full Stack App',
    accentColor: '#44B78B'
  },
  {
    id: 'student-registration-app',
    name: 'Student Registration App',
    title: 'Student Registration App',
    category: 'Full Stack',
    tag: 'Academic Portal',
    technologies: ['Django', 'React', 'PostgreSQL'],
    features: [
      'Comprehensive student profile management and academic course enrollment system',
      'Django REST Framework backend handling data validation, serialization, and business logic',
      'PostgreSQL relational database with foreign key constraints and automated migrations',
      'React frontend with dynamic registration forms, instant feedback, and modal dialogs',
      'Analytical dashboard displaying enrollment trends, student metrics, and department statistics',
      'Search, filter, and CSV/PDF report export capabilities for administrative users'
    ],
    summary: 'A secure and responsive academic registration platform built using Django, React, and PostgreSQL.',
    description: 'Designed to streamline academic enrollment workflows. Features multi-step student registration, real-time field validation, course capacity management, grade tracking, and administrative analytics powered by a robust Django and PostgreSQL infrastructure.',
    stats: {
      students: '5,000+',
      responseRate: '100%',
      security: 'Enterprise Grade'
    },
    demoUrl: 'https://student-registration.ravikumars.dev',
    githubUrl: 'https://github.com/ravikumar-dev/student-registration-app',
    badge: 'Enterprise Management System',
    accentColor: '#387EB8'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    title: 'AI Video Generator',
    category: 'AI & Python',
    tag: 'Generative AI',
    technologies: ['Python', 'React', 'AI'],
    features: [
      'Python-powered AI pipeline transforming text prompts into dynamic video sequences',
      'React modern frontend with intuitive prompt studio, style selectors, and timeline preview',
      'Asynchronous task queuing with Python workers for intensive video synthesis',
      'Real-time generation progress indicators, video playback controls, and export downloads',
      'Custom prompt optimization algorithms enhancing video narrative and visual coherence',
      'Cloud storage integration with optimized streaming video formats'
    ],
    summary: 'A cutting-edge generative AI video studio driven by Python processing pipelines and a responsive React UI.',
    description: 'An innovative AI media generation tool enabling creators to synthesize video clips from natural language descriptions. The backend harnesses custom Python pipelines and AI model inference, while the frontend delivers a seamless studio experience in React.',
    stats: {
      renderTime: 'Fast AI',
      resolution: '1080p HD',
      satisfaction: '99%'
    },
    demoUrl: 'https://ai-video.ravikumars.dev',
    githubUrl: 'https://github.com/ravikumar-dev/ai-video-generator',
    badge: 'AI Innovation Project',
    accentColor: '#6D5DFB'
  }
];

export const PROJECT_FILTERS = ['All', 'Full Stack', 'AI & Python'];
