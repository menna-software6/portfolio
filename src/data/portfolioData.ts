import azureaImg from '../assets/images/project_azurea_resort_1790596446222.jpg';
import saasImg from '../assets/images/project_saas_dashboard_1790596461466.jpg';
import jobPlatformImg from '../assets/images/project_job_platform_1790596474092.jpg';
import realEstateImg from '../assets/images/project_real_estate_1790596486259.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: 'Live' | 'In Development';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  features?: string[];
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  category?: string;
}

export interface Strength {
  title: string;
  description: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: 'Menna Abed',
  role: 'Software Engineering Student',
  subRole: 'Junior Software Developer | Web Developer',
  university: 'University of Petra',
  field: 'Software Engineering',
  expectedGraduation: '2028',
  email: 'abedmena767@gmail.com',
  github: 'https://github.com/menna-software6',
  linkedin: 'https://www.linkedin.com/in/menna-abed-30b467415/',
  location: 'Amman, Jordan',
  shortBio:
    'I build modern web experiences and develop software with a rigorous focus on clean structure, problem solving, usability, and continuous learning.',
  aboutText: [
    'I am a Software Engineering student at the University of Petra with expected graduation in 2028. My focus is on software engineering fundamentals and modern web development.',
    'I am deeply invested in building practical, reliable projects, sharpening my core programming logic, tackling complex problem-solving challenges, and translating requirements into responsive, user-friendly digital experiences.',
    'Constantly curious and disciplined, I actively study system architecture, clean code principles, and modern development workflows to prepare for impactful junior developer opportunities.'
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    number: '01',
    title: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        description: 'Object-oriented application logic, class hierarchies, and robust data structures.',
      },
      {
        name: 'C++',
        description: 'Systems-level logic, memory concepts, algorithm design, and computational efficiency.',
      },
      {
        name: 'JavaScript',
        description: 'Dynamic browser interactivity, DOM manipulation, asynchronous patterns, and client-side logic.',
      },
    ],
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Web Development',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic markup, accessible DOM structures, and standards-compliant document outlines.',
      },
      {
        name: 'CSS',
        description: 'Custom styling, modern CSS layout engines (Flexbox, Grid), transitions, and modular cascades.',
      },
      {
        name: 'Responsive Web Design',
        description: 'Fluid viewports, media queries, mobile-first design, and cross-device consistency.',
      },
      {
        name: 'Web Development',
        description: 'End-to-end frontend interfaces, component structuring, and performant web assets.',
      },
    ],
  },
  {
    id: 'software-eng',
    number: '03',
    title: 'Programming & Software Engineering',
    skills: [
      {
        name: 'Object-Oriented Programming (OOP)',
        description: 'Encapsulation, inheritance, polymorphism, abstraction, and reusable design patterns.',
      },
      {
        name: 'Programming Logic',
        description: 'Algorithmic thinking, flowcharting, condition evaluation, and structured execution flows.',
      },
      {
        name: 'Problem Solving',
        description: 'Deconstructing complex engineering problems into modular, testable components.',
      },
      {
        name: 'Debugging & Troubleshooting',
        description: 'Isolating edge cases, runtime tracing, syntax diagnostics, and regression resolution.',
      },
    ],
  },
  {
    id: 'tools',
    number: '04',
    title: 'Tools & Workflow',
    skills: [
      {
        name: 'Git',
        description: 'Version control, atomic commits, branching strategies, and change tracking.',
      },
      {
        name: 'GitHub',
        description: 'Remote repository hosting, project collaboration, code reviews, and GitHub Pages deployments.',
      },
    ],
  },
  {
    id: 'additional',
    number: '05',
    title: 'Additional Skills',
    skills: [
      {
        name: 'Networking Fundamentals',
        description: 'Foundational understanding of network models, protocols, IP addressing, and client-server communication.',
      },
      {
        name: 'Microsoft Office',
        description: 'Structured documentation, technical writeups, spreadsheet analysis, and presentations.',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'azurea-resort',
    title: 'AZUREA Resort',
    subtitle: 'Modern Private Coastal Resort Experience',
    description:
      'A refined, modern website designed for a private Mediterranean coastal resort. Built to showcase luxury accommodations, curated seaside experiences, dining options, and a seamless reservation inquiry flow with clean responsive styling.',
    image: azureaImg,
    status: 'Live',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'Git', 'GitHub Pages'],
    liveUrl: 'https://menna-software6.github.io/azurea-resort/',
    githubUrl: 'https://github.com/menna-software6/azurea-resort',
    highlights: [
      'Engineered an immersive, editorial visual presentation tailored for a luxury hospitality brand',
      'Developed fully responsive layouts adapting flawlessly across mobile, tablet, and widescreen desktop monitors',
      'Crafted interactive booking inquiry controls with real-time DOM validation and smooth feedback transitions',
      'Deployed directly to GitHub Pages with structured asset optimization and clean Git versioning',
    ],
    features: [
      'Interactive room and villa showcase with high-definition media frames',
      'Direct customer reservation inquiry form with client-side field validation',
      'Cross-browser responsive navigation with mobile drawer support',
      'Clean typography hierarchy and subtle atmospheric motion',
    ],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    subtitle: 'Cloud Operations & Analytics Interface',
    description:
      'An enterprise SaaS dashboard application currently in active development, engineered for clear metric monitoring, modular telemetry cards, and intuitive administration workflows.',
    image: saasImg,
    status: 'In Development',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Object-Oriented Programming (OOP)', 'Git'],
    highlights: [
      'Designing structured data models for dynamic metrics, activity logs, and status dashboards',
      'Refining dark-mode visual hierarchy with high-contrast tabular numeric alignment',
      'Building reusable component patterns designed for clean maintenance and future backend integration',
    ],
    features: [
      'Real-time inspired KPI tracking cards with comparative metrics',
      'Modular layout adaptable for different administrative team roles',
      'Keyboard-accessible controls and data filter bars',
    ],
  },
  {
    id: 'job-platform',
    title: 'Job Platform',
    subtitle: 'Developer Career & Opportunity Portal',
    description:
      'A streamlined career matching platform designed to connect aspiring software developers with tailored technical roles, featuring multi-criteria search, role requirements, and structured candidate profiles.',
    image: jobPlatformImg,
    status: 'In Development',
    technologies: ['Web Development', 'JavaScript', 'HTML', 'CSS', 'Responsive Web Design'],
    highlights: [
      'Implementing client-side dynamic search and multi-tag filtering logic without page reloads',
      'Structuring clean job listing cards with salary indicators, requirements, and application triggers',
      'Optimizing responsive card grid behavior for quick evaluation by job seekers on mobile',
    ],
    features: [
      'Interactive filter bars by role type, programming languages, and location',
      'Detailed job requirements modal with application instructions',
      'Saved opportunities interface with local session persistence',
    ],
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    subtitle: 'Architectural Property Showcase',
    description:
      'A modern architectural real estate platform built for discovering luxury residences and commercial spaces, highlighting floor plans, neighborhood amenities, and direct consultant inquiries.',
    image: realEstateImg,
    status: 'In Development',
    technologies: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Problem Solving'],
    highlights: [
      'Crafting an architectural layout with generous whitespace and editorial photographic presentation',
      'Developing structured property specification sheets with tabular details and key amenities',
      'Implementing smooth inquiry modal dialogues and responsive image galleries',
    ],
    features: [
      'Comprehensive property specification breakdown and amenity checklists',
      'High-contrast photo galleries with zero-layout-shift image containers',
      'Direct contact schedule form for prospective buyers and tenants',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  // Oracle
  {
    id: 'oracle-java',
    title: 'Oracle Java Course',
    organization: 'ORACLE',
    year: '2026',
    category: 'Software Engineering',
  },
  // Cisco Networking Academy
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    organization: 'Cisco Networking Academy',
    year: '2026',
    category: 'Computer Systems',
  },
  // Anthropic Claude Academy
  {
    id: 'claude-1',
    title: 'Claude Code 101',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-2',
    title: 'AI Capabilities and Limitations',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-3',
    title: 'AI Fluency: Framework and Foundations',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-4',
    title: 'Claude Code in Action',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-5',
    title: 'Claude Platform 101',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-6',
    title: 'Introduction to Model Context Protocol',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-7',
    title: 'Model Context Protocol: Advanced Topics',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-8',
    title: 'Introduction to Claude Cowork',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
  {
    id: 'claude-9',
    title: 'Building with the Claude API',
    organization: 'ANTHROPIC — CLAUDE ACADEMY',
    year: '2026',
    category: 'AI & Developer Workflows',
  },
];

export const WHAT_I_BRING: Strength[] = [
  {
    title: 'Problem Solving',
    category: 'Core Competency',
    description:
      'Approaching development challenges methodically by breaking requirements into logical steps, analyzing edge cases, and building sustainable solutions.',
  },
  {
    title: 'Clean & Structured Development',
    category: 'Architecture',
    description:
      'Writing readable, maintainable, and self-documenting code with disciplined naming conventions and modular separation of concerns.',
  },
  {
    title: 'Continuous Learning',
    category: 'Growth Mindset',
    description:
      'Proactively expanding technical capabilities through university coursework, certified industry programs, and hands-on project builds.',
  },
  {
    title: 'Attention to Detail',
    category: 'Quality Assurance',
    description:
      'Ensuring precise visual alignment, thorough input validation, responsive behavior across devices, and clean user experience flows.',
  },
  {
    title: 'Responsive Web Development',
    category: 'Frontend Engineering',
    description:
      'Designing fluid web layouts that feel natural and operate reliably on mobile screens, tablets, and high-resolution desktop viewports.',
  },
  {
    title: 'Programming Fundamentals',
    category: 'Foundations',
    description:
      'Solid grounding in Object-Oriented Programming (OOP), algorithmic logic, computational structure, and systems-level concepts in Java and C++.',
  },
  {
    title: 'Adaptability',
    category: 'Working Quality',
    description:
      'Quick to assimilate new technical concepts, tools, and project requirements while staying focused on core engineering deliverables.',
  },
  {
    title: 'Collaboration',
    category: 'Teamwork',
    description:
      'Communicating technical ideas clearly, accepting constructive feedback with enthusiasm, and contributing reliably within collaborative settings.',
  },
];
