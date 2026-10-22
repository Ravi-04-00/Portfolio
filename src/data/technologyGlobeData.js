// 12 Technology Nodes Across 3 Architectural Orbital Layers for the 360-Degree Globe
// Aligned with the Master Specification:
// - Frontend layer (HTML, CSS, JavaScript, Bootstrap, React)
// - Backend layer (Python, Django, Django REST Framework, REST API)
// - Database layer (PostgreSQL, SQL, Database Architecture)

export const TECHNOLOGY_GLOBE_NODES = [
  // =========================================================================
  // LAYER 1: FRONTEND LAYER (5 Nodes)
  // =========================================================================
  {
    id: 'html',
    name: 'HTML5',
    layer: 'frontend',
    layerTitle: 'Frontend & UI Layer',
    color: '#E34F26',
    glow: 'rgba(227, 79, 38, 0.65)',
    icon: '5',
    mastery: 95,
    tag: 'Semantic UI Structure',
    coreUsage: 'Semantic DOM hierarchies, accessible markup (WCAG 2.1), SEO optimization, canvas integration, and structured component trees.',
    projectUsage: 'Implemented across all production applications including Food Delivery Ecosystem and Student Registration App.',
    relatedSkills: ['CSS3', 'JavaScript', 'React.js', 'Bootstrap'],
    angle: 0,
    orbitRadius: 150,
    orbitAxis: 'ring-frontend',
    visualObject: '3D Semantic DOM Hierarchy',
    materials: ['Glass', 'Brushed Metal', 'Acrylic Grid'],
    flow: ['Document Tree', 'Semantic Landmarks', 'Accessibility Tree', 'DOM Render'],
    aiGuide: {
      headline: 'The Foundational Structural Backbone of Modern Web Experiences',
      summary: 'HTML5 is leveraged not just as markup, but as an accessible semantic foundation ensuring strict WCAG 2.1 conformance, optimal SEO spider parsing, and crystal-clear component tree structures that feed into modern virtual DOM renderers.',
      keyStrength: 'Strict adherence to semantic tags (<main>, <article>, <section>, <nav>) paired with ARIA attributes guarantees inclusive access across screen readers and assistive devices.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Ecosystem', role: 'Accessible Component Layout' },
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Accessible Form Architecture' }
    ],
    codeDNA: '<main className="app-viewport">\n  <section id="hero" aria-label="Developer Experience">\n    <div className="canvas-container" />\n  </section>\n</main>'
  },
  {
    id: 'css',
    name: 'CSS3',
    layer: 'frontend',
    layerTitle: 'Frontend & UI Layer',
    color: '#1572B6',
    glow: 'rgba(21, 114, 182, 0.65)',
    icon: '🎨',
    mastery: 90,
    tag: 'Visual Architecture & Styling',
    coreUsage: 'CSS Grid, Flexbox, custom design token architectures, fluid clamp typography, keyframe animations, and multi-world glassmorphism.',
    projectUsage: 'Engineered the 4 Royal Color Worlds design token architecture and responsive portfolio interfaces.',
    relatedSkills: ['HTML5', 'Bootstrap', 'UI/UX Design', 'React.js'],
    angle: 72,
    orbitRadius: 150,
    orbitAxis: 'ring-frontend',
    visualObject: '3D CSS Glassmorphic Layers',
    materials: ['Frosted Acrylic', 'Soft Chrome', 'Reflective Glass'],
    flow: ['Design Tokens', 'CSS Variables', 'Fluid Layouts', 'GPU Acceleration'],
    aiGuide: {
      headline: 'Architectural Style Systems with Design Token Systems',
      summary: 'CSS3 is mastered to eliminate brittle stylesheets in favor of scalable custom-property token systems. Implements hardware-accelerated transforms, sub-pixel rendering, and responsive clamp math without layout shift.',
      keyStrength: 'Dynamic CSS variables enable instant, zero-flicker switching between 4 distinct Color Worlds while maintaining full aesthetic elegance.'
    },
    projects: [
      { id: 'ravi-portfolio', title: 'Ravi Kumar Portfolio', role: 'Design Tokens & Glassmorphism' },
      { id: 'food-delivery', title: 'Food Delivery Ecosystem', role: 'Interactive Cart Micro-interactions' }
    ],
    codeDNA: ':root {\n  --theme-accent: #FF6B57;\n  --theme-glass: blur(24px);\n  --motion-cinematic: all 0.65s cubic-bezier(0.16, 1, 0.3, 1);\n}'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    layer: 'frontend',
    layerTitle: 'Frontend & UI Layer',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.65)',
    icon: 'JS',
    mastery: 92,
    tag: 'Modern ES6+ Logic & Async',
    coreUsage: 'ES6+ specifications, asynchronous event loop, promises, closures, dynamic DOM manipulation, and modular architecture.',
    projectUsage: 'Drives interactive state synchronization, custom hooks, and REST API communication across all client portals.',
    relatedSkills: ['React.js', 'HTML5', 'REST API', 'Django REST'],
    angle: 144,
    orbitRadius: 150,
    orbitAxis: 'ring-frontend',
    visualObject: '3D Async Event Loop Stream',
    materials: ['Luminous Neon Core', 'Gold Chrome', 'Floating Particles'],
    flow: ['Event Listeners', 'Async Promise Queue', 'State Synchronization', 'DOM Patch'],
    aiGuide: {
      headline: 'High-Concurrency Asynchronous Client Scripting',
      summary: 'Deep expertise in ES6+ constructs, closures, prototypes, and asynchronous execution patterns (async/await, Promise.allSettled) that eliminate blocking cycles and guarantee 60fps responsiveness.',
      keyStrength: 'Efficient event delegation and debounced listeners prevent re-render thrashing even during high-frequency pointer interaction.'
    },
    projects: [
      { id: 'ai-video', title: 'AI Video Generator', role: 'Real-time WebSocket & Async Polling' },
      { id: 'food-delivery', title: 'Food Delivery Ecosystem', role: 'Cart Calculation & Validation Engine' }
    ],
    codeDNA: 'const fetchPayload = async (endpoint, options = {}) => {\n  const res = await fetch(`/api/v1/${endpoint}`, options);\n  if (!res.ok) throw new Error("API Failure");\n  return res.json();\n};'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    layer: 'frontend',
    layerTitle: 'Frontend & UI Layer',
    color: '#7952B3',
    glow: 'rgba(121, 82, 179, 0.65)',
    icon: 'B',
    mastery: 88,
    tag: 'Responsive Grid & Rapid UI',
    coreUsage: 'Mobile-first grid systems, responsive breakpoints, accessible utility classes, and custom component theming.',
    projectUsage: 'Employed for rapid dashboard scaffolding and responsive multi-column administrative layouts.',
    relatedSkills: ['CSS3', 'HTML5', 'Responsive Design'],
    angle: 216,
    orbitRadius: 150,
    orbitAxis: 'ring-frontend',
    visualObject: '3D Responsive Device Framework',
    materials: ['Brushed Metal Bezel', 'OLED Glass Display', 'Metallic Edges'],
    flow: ['Breakpoint Matrix', 'Mobile First Container', 'Flex Alignment', 'Responsive Flow'],
    aiGuide: {
      headline: 'Rapid Prototyping & Reliable Multi-Device Grid Geometry',
      summary: 'Bootstrap provides the rapid scaffolding discipline for enterprise administration consoles and multi-column dashboards that need to adapt from 320px mobile displays to 4K ultra-wide monitors without breakpoint regressions.',
      keyStrength: 'Custom SASS variable overrides align Bootstrap utilities directly with the custom portfolio royal theme token system.'
    },
    projects: [
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Admin Dashboard Grid Layout' },
      { id: 'food-delivery', title: 'Food Delivery Ecosystem', role: 'Kitchen Order Management Grid' }
    ],
    codeDNA: '<div className="container-fluid row g-4 align-items-center">\n  <div className="col-12 col-lg-8 main-content" />\n  <div className="col-12 col-lg-4 sidebar-panel" />\n</div>'
  },
  {
    id: 'react',
    name: 'React.js',
    layer: 'frontend',
    layerTitle: 'Frontend & UI Layer',
    color: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.65)',
    icon: '⚛️',
    mastery: 90,
    tag: 'Component & State Architecture',
    coreUsage: 'Single-page applications, custom React hooks, Context API state management, virtual DOM reconciliation, and fluid UI micro-interactions.',
    projectUsage: 'Architected responsive frontends for Food Delivery Ecosystem and dynamic prompt studio in AI Video Generator.',
    relatedSkills: ['JavaScript', 'HTML5', 'REST API', 'Django'],
    angle: 288,
    orbitRadius: 150,
    orbitAxis: 'ring-frontend',
    visualObject: '3D React Virtual DOM Node',
    materials: ['Cyan Plasma Orb', 'Frosted Crystal Rings', 'Brushed Titanium Base'],
    flow: ['Component', 'State', 'API', 'UI Update'],
    aiGuide: {
      headline: 'Component-Driven Declarative User Experience Engineering',
      summary: 'React is Ravi Kumar’s weapon of choice for crafting responsive, state-synchronized single-page applications. Employs clean custom hooks, functional decomposition, memoization, and Context providers to achieve high developer velocity and silky 60fps animations.',
      keyStrength: 'Clean unidirectional data flow paired with optimistic UI updates ensures instantaneous user feedback while background API requests resolve.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Full Interactive SPA Architecture' },
      { id: 'ai-video', title: 'AI Video Generator', role: 'Interactive Studio & Prompt Workbench' }
    ],
    codeDNA: 'export function useTechnologyHub(activeNode) {\n  const [state, setState] = useState(activeNode);\n  useEffect(() => {\n    api.syncTechnology(activeNode);\n  }, [activeNode]);\n  return { state, selectNode: setState };\n}'
  },

  // =========================================================================
  // LAYER 2: BACKEND LAYER (4 Nodes)
  // =========================================================================
  {
    id: 'python',
    name: 'Python 3',
    layer: 'backend',
    layerTitle: 'Backend Architecture Layer',
    color: '#387EB8',
    glow: 'rgba(56, 126, 184, 0.65)',
    icon: '🐍',
    mastery: 92,
    tag: 'Core Backend Engine & OOP',
    coreUsage: 'Object-oriented programming, data structures, asynchronous execution, task queues, scripting, and backend API logic.',
    projectUsage: 'Powers backend services, data transformations, and asynchronous video synthesis in AI Video Generator.',
    relatedSkills: ['Django', 'Django REST', 'PostgreSQL', 'REST API'],
    angle: 30,
    orbitRadius: 195,
    orbitAxis: 'ring-backend',
    visualObject: '3D Python Logic Core',
    materials: ['Sapphire Glass', 'Dual-Tone Chrome', 'Encrypted Security Matrix'],
    flow: ['Business Logic', 'Django', 'REST API', 'Database Integration'],
    aiGuide: {
      headline: 'The Robust Engineering Engine Behind Scalable Web Logic',
      summary: 'Python represents the architectural bedrock of Ravi Kumar’s full-stack applications. Used to write clean, type-hinted, maintainable business rules, domain entities, background asynchronous task workers, and security policies.',
      keyStrength: 'Mastery of Python data structures, decorators, generator pipelines, and memory optimization enables high-concurrency request handling without memory bloat.'
    },
    projects: [
      { id: 'ai-video', title: 'AI Video Generator', role: 'Asynchronous Python Task Workers & Model Dispatch' },
      { id: 'food-delivery', title: 'Food Delivery Backend', role: 'Domain Logic, Order Validation, Pricing Engine' }
    ],
    codeDNA: 'class OrderProcessingService:\n    def __init__(self, repository: OrderRepository):\n        self.repo = repository\n\n    def process_order(self, order_data: dict) -> Order:\n        order = self.repo.create(order_data)\n        return order'
  },
  {
    id: 'django',
    name: 'Django',
    layer: 'backend',
    layerTitle: 'Backend Architecture Layer',
    color: '#44B78B',
    glow: 'rgba(68, 183, 139, 0.65)',
    icon: 'dj',
    mastery: 88,
    tag: 'High-Level Python Web Framework',
    coreUsage: 'MVT architecture, Django ORM relational queries, secure user authentication, middleware chains, and administrative portals.',
    projectUsage: 'Server-side engine driving the Food Delivery platform and Student Registration portal.',
    relatedSkills: ['Python 3', 'Django REST', 'PostgreSQL', 'REST API'],
    angle: 120,
    orbitRadius: 195,
    orbitAxis: 'ring-backend',
    visualObject: '3D Django Enterprise Server',
    materials: ['Dark Obsidian Server Blade', 'Emerald Status LED', 'Polished Chrome Rack'],
    flow: ['Request', 'Django', 'Authentication', 'Business Logic', 'Database', 'Response'],
    aiGuide: {
      headline: 'Enterprise Batteries-Included Web Architecture',
      summary: 'Django provides the industrial-grade framework for building rapid, battle-tested production applications with built-in protection against CSRF, SQL injection, XSS, and session hijacking.',
      keyStrength: 'Deep understanding of Django middleware lifecycle, signals, custom model managers, and query optimization patterns ensures fast, maintainable backends.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Core Server, User Sessions, Auth Guard' },
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Multi-Role Permissions, Data Schema' }
    ],
    codeDNA: 'class CustomerProfile(models.Model):\n    user = models.OneToOneField(User, on_delete=models.CASCADE)\n    delivery_address = models.TextField()\n    is_verified = models.BooleanField(default=False)\n    created_at = models.DateTimeField(auto_now_add=True)'
  },
  {
    id: 'drf',
    name: 'Django REST Framework',
    layer: 'backend',
    layerTitle: 'Backend Architecture Layer',
    color: '#B83838',
    glow: 'rgba(184, 56, 56, 0.65)',
    icon: '{ }',
    mastery: 90,
    tag: 'RESTful API Architecture & DRF',
    coreUsage: 'ModelSerializers, ViewSets, JWT token authentication, permission validation, pagination, and throttled endpoints.',
    projectUsage: 'Engineered high-throughput REST APIs connecting Django backends to React single-page frontends.',
    relatedSkills: ['Django', 'Python 3', 'React.js', 'REST API'],
    angle: 210,
    orbitRadius: 195,
    orbitAxis: 'ring-backend',
    visualObject: '3D API Microservice Gateway',
    materials: ['Transparent Acrylic Prism', 'Ruby Glow Accents', 'Brushed Aluminum Edge'],
    flow: ['HTTP Request', 'JWT Validator', 'Serializer Parsing', 'ViewSet Handler', 'JSON Response'],
    aiGuide: {
      headline: 'Robust Contract-Driven API Engineering',
      summary: 'Django REST Framework (DRF) bridges the relational database and the dynamic React frontend with high-efficiency serializing pipelines, automated API schema documentation, and granular permission classes.',
      keyStrength: 'Custom ModelSerializers with depth tuning and optimized select_related integrations achieve sub-40ms response latency on high-volume endpoints.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'RESTful API Endpoints & Cart API' },
      { id: 'ai-video', title: 'AI Video Generator', role: 'Task Scheduling & Status Polling APIs' }
    ],
    codeDNA: 'class OrderViewSet(viewsets.ModelViewSet):\n    queryset = Order.objects.select_related("customer").prefetch_related("items")\n    serializer_class = OrderSerializer\n    permission_classes = [permissions.IsAuthenticated]'
  },
  {
    id: 'rest_api',
    name: 'REST API',
    layer: 'backend',
    layerTitle: 'Backend Architecture Layer',
    color: '#00B4D8',
    glow: 'rgba(0, 180, 216, 0.65)',
    icon: '⇄',
    mastery: 94,
    tag: 'HTTP Protocols & Microservices',
    coreUsage: 'Stateless HTTP protocol handling, standard JSON contracts, status code specifications, and CORS configurations.',
    projectUsage: 'Designed scalable API contracts delivering sub-40ms latency across production endpoints.',
    relatedSkills: ['Django REST', 'Django', 'React.js', 'PostgreSQL'],
    angle: 300,
    orbitRadius: 195,
    orbitAxis: 'ring-backend',
    visualObject: '3D Request-Response Data Stream',
    materials: ['Luminous Fiberoptic Cables', 'Prismatic Data Nodes', 'Chrome Stream Rail'],
    flow: ['Client Request', 'REST Gateway', 'Route Handling', 'JSON Serialization', 'Client Delivery'],
    aiGuide: {
      headline: 'Stateless Standardized System-to-System Protocol Communication',
      summary: 'Architects predictable RESTful endpoints following standard HTTP verbs (GET, POST, PUT, PATCH, DELETE) and HTTP status semantics (200, 201, 400, 401, 403, 404, 500) that integrate cleanly with modern client frameworks.',
      keyStrength: 'Strict JSON contract validation prevents client runtime exceptions and guarantees backward-compatible API evolution.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Standard REST Microservice Specs' },
      { id: 'ai-video', title: 'AI Video Generator', role: 'Cloud Synthesis Webhook Integration' }
    ],
    codeDNA: '// Standardized API Response Contract\n{\n  "status": "success",\n  "code": 200,\n  "data": { "order_id": "ORD-9482", "state": "CONFIRMED" },\n  "timestamp": "2026-10-08T10:00:00Z"\n}'
  },

  // =========================================================================
  // LAYER 3: DATABASE LAYER (3 Nodes)
  // =========================================================================
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    layer: 'database',
    layerTitle: 'Database & Storage Layer',
    color: '#336791',
    glow: 'rgba(51, 103, 145, 0.65)',
    icon: '🐘',
    mastery: 86,
    tag: 'Enterprise Relational Database',
    coreUsage: 'ACID-compliant relational modeling, complex SQL joins, foreign key constraints, index tuning, and connection pooling.',
    projectUsage: 'Primary production database powering student enrollments, order transactions, and user authentication.',
    relatedSkills: ['SQL', 'Database Architecture', 'Django', 'Python 3'],
    angle: 45,
    orbitRadius: 235,
    orbitAxis: 'ring-database',
    visualObject: '3D PostgreSQL Database Cylinder',
    materials: ['Heavy Cobalt Chrome Cylinder', 'Luminous Magnetic Disks', 'Blue Glass Windows'],
    flow: ['SQL Query', 'PostgreSQL', 'Data Processing', 'Response'],
    aiGuide: {
      headline: 'Enterprise ACID-Compliant Relational Data Storage',
      summary: 'PostgreSQL is the trusted persistent storage engine for all transactional state. Configured with strict relational integrity, cascade constraints, transactions, and automated migration versioning via Django.',
      keyStrength: 'Expertise with connection pooling, index strategies (B-Tree, GIN, Hash), and query planning to sustain high transaction throughput under heavy load.'
    },
    projects: [
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Relational Student & Course Records' },
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Transactional Order & Payment Ledger' }
    ],
    codeDNA: 'CREATE TABLE orders (\n    id BIGSERIAL PRIMARY KEY,\n    customer_id UUID REFERENCES users(id) ON DELETE RESTRICT,\n    total_cents INTEGER NOT NULL CHECK (total_cents >= 0),\n    created_at TIMESTAMPTZ DEFAULT NOW()\n);'
  },
  {
    id: 'sql',
    name: 'SQL',
    layer: 'database',
    layerTitle: 'Database & Storage Layer',
    color: '#E48E00',
    glow: 'rgba(228, 142, 0, 0.65)',
    icon: '🗄️',
    mastery: 88,
    tag: 'Query Optimization & Indexing',
    coreUsage: 'Advanced queries, multi-table JOINs, subqueries, indexing strategies, transaction isolation, and execution plan optimization.',
    projectUsage: 'Optimized ORM queries using select_related and prefetch_related to eliminate N+1 query bottlenecks.',
    relatedSkills: ['PostgreSQL', 'Django', 'Database Architecture'],
    angle: 165,
    orbitRadius: 235,
    orbitAxis: 'ring-database',
    visualObject: '3D SQL Query Relational Node',
    materials: ['Gold Alloy Circuit Node', 'Amber Holographic Data Beams', 'Graph Connectors'],
    flow: ['Query Parser', 'Execution Plan', 'Index Seek', 'Record Set Fetch'],
    aiGuide: {
      headline: 'Deep Relational Query Tuning & Relational Algebra',
      summary: 'Proficiency with pure SQL queries, execution plan analysis via EXPLAIN ANALYZE, multi-table joins, CTE expressions, and aggregate rollups that extract high-speed analytical reports.',
      keyStrength: 'Elimination of the notorious N+1 query problem through optimized Django select_related and prefetch_related join strategies.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Real-time Aggregation of Restaurant Metrics' },
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Multi-table Enrollment Join Queries' }
    ],
    codeDNA: 'SELECT u.full_name, COUNT(o.id) AS total_orders, SUM(o.total_cents) / 100.0 AS lifetime_spend\nFROM users u\nINNER JOIN orders o ON o.customer_id = u.id\nWHERE o.status = "COMPLETED"\nGROUP BY u.id, u.full_name\nORDER BY lifetime_spend DESC;'
  },
  {
    id: 'db_arch',
    name: 'Database Architecture',
    layer: 'database',
    layerTitle: 'Database & Storage Layer',
    color: '#9D4EDD',
    glow: 'rgba(157, 78, 221, 0.65)',
    icon: '🏛️',
    mastery: 88,
    tag: 'Relational Schemas & Integrity',
    coreUsage: 'Entity-relationship modeling, database normalization (3NF), relational constraints, migration pipelines, and backup strategies.',
    projectUsage: 'Designed scalable schemas handling 10,000+ orders and multi-table academic records.',
    relatedSkills: ['PostgreSQL', 'SQL', 'Django', 'Python 3'],
    angle: 285,
    orbitRadius: 235,
    orbitAxis: 'ring-database',
    visualObject: '3D Relational Schema Matrix',
    materials: ['Purple Obsidian Monolith', 'Laser Relational Vectors', 'Encrypted Security Matrix'],
    flow: ['ERD Mapping', '3NF Normalization', 'Relational Constraints', 'Migration Pipelines'],
    aiGuide: {
      headline: 'Architecting Long-Term Relational Data Integrity',
      summary: 'Database design begins long before writing code. Enforces 3rd normal form (3NF) relational design, clean surrogate and natural keys, foreign key referential integrity, and automated schema migration management.',
      keyStrength: 'Designs resilient schemas that handle rapid business logic changes without requiring costly multi-table migrations or data loss.'
    },
    projects: [
      { id: 'food-delivery', title: 'Food Delivery Platform', role: 'Multi-Tenant Relational Schema Design' },
      { id: 'student-portal', title: 'Student Registration Portal', role: 'Academic Transcript & Course Matrix' }
    ],
    codeDNA: 'ERD ENTITY ARCHITECTURE:\nUser (1) ────< Orders (N) ────< OrderItems (N) >──── (1) MenuItem\n                │\n                └───< PaymentTransaction (1..N)'
  }
];

// Full Stack Data Request-Response Step Sequence (Full-Stack Visual Flow)
export const FULL_STACK_FLOW_STEPS = [
  { step: 1, name: 'User Interaction', node: 'react', layer: 'frontend', action: 'User triggers action on UI' },
  { step: 2, name: 'React State', node: 'javascript', layer: 'frontend', action: 'Component packages state and validates' },
  { step: 3, name: 'REST API Gateway', node: 'rest_api', layer: 'backend', action: 'HTTPS JSON request dispatched' },
  { step: 4, name: 'Django REST Router', node: 'drf', layer: 'backend', action: 'DRF validates JWT & serializes payload' },
  { step: 5, name: 'Python Business Core', node: 'python', layer: 'backend', action: 'Python executes business logic rules' },
  { step: 6, name: 'Django ORM Query', node: 'django', layer: 'backend', action: 'Django ORM prepares SQL transaction' },
  { step: 7, name: 'PostgreSQL Commit', node: 'postgresql', layer: 'database', action: 'ACID transaction committed to disk' },
  { step: 8, name: 'Database Result', node: 'sql', layer: 'database', action: 'Relational records returned to Django' },
  { step: 9, name: 'API JSON Response', node: 'rest_api', layer: 'backend', action: 'HTTP 200 OK serialized response returned' },
  { step: 10, name: 'React UI Render', node: 'react', layer: 'frontend', action: 'Virtual DOM updates with 60fps smoothness' }
];
