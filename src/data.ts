// All page content lives here — edit this file to update the site.

export const profile = {
  name: 'Halyna Pryn',
  firstName: 'Halyna',
  role: 'Frontend Developer',
  location: 'Szczecin, Poland',
  email: 'prynhalyna@gmail.com',
  phone: '+48 600 777 971',
  cv: '/Halyna-Pryn-CV.pdf',
  roles: ['Frontend Developer', 'React & TypeScript', 'Accessibility advocate', 'SSR / CSR architect'],
  tagline:
    'I build fast, accessible interfaces for high-traffic products — five years shipping search experiences used by millions of travellers across Europe.',
}

export const about = [
  'Resourceful Frontend Developer with 5 years of experience building high-performance, accessible user interfaces for high-traffic platforms. I work daily with React, TypeScript and Material UI, and I am comfortable across hybrid SSR/CSR architectures and REST APIs.',
  'I care about code that lasts: I set up E2E and unit testing pipelines with Playwright and Jest, and I design UIs to meet the European Accessibility Act. I also use AI tools like GitHub Copilot and Claude to speed up prototyping, debugging and everyday development.',
  'Before tech I worked in finance and tendering — which taught me precision, deadlines and how to talk to the business side of a product.',
]

export const stats = [
  { value: '5', suffix: 'yrs', label: 'Frontend experience' },
  { value: '4', suffix: '', label: 'High-traffic travel brands' },
  { value: 'EAA', suffix: '', label: 'Accessibility compliant UIs' },
  { value: 'E2E', suffix: '', label: 'Playwright + Jest pipelines' },
]

export const languages = [
  { name: 'Ukrainian', level: 'Native', pct: 100 },
  { name: 'Polish', level: 'C1', pct: 88 },
  { name: 'Russian', level: 'C1', pct: 88 },
  { name: 'English', level: 'B1/B2', pct: 65 },
]

export type Job = {
  period: string
  title: string
  company: string
  place: string
  points?: string[]
  tags?: string[]
}

export const jobs: Job[] = [
  {
    period: '10.2021 — 09.2026',
    title: 'Frontend Developer',
    company: 'lastminute.com',
    place: 'Szczecin, Poland',
    points: [
      'Engineered a high-performance search ecosystem and widget for lastminute.com, weg.de, bravofly.com and rumbo.com.',
      'Developed reusable React components and hybrid (SSR/CSR) architectures integrated with REST APIs.',
      'Architected accessible UIs with Material UI, ensuring compliance with the European Accessibility Act (EAA).',
      'Established E2E and unit testing pipelines (Playwright, Jest) to keep quality and stability high.',
      'Improved daily development, debugging and prototyping with AI tools such as GitHub Copilot and Claude.',
    ],
    tags: ['React', 'TypeScript', 'SSR/CSR', 'Material UI', 'Playwright', 'Jest', 'Nx'],
  },
  {
    period: '01.2018 — 01.2019',
    title: 'Manager of the Tendering Department',
    company: 'Hydro United',
    place: 'Szczecin, Poland',
  },
  {
    period: '10.2013 — 10.2014',
    title: 'Accountant',
    company: 'Modern Welding',
    place: 'Ivano-Frankivsk, Ukraine',
  },
]

export const education = [
  {
    period: '05.2020 — 05.2021',
    title: 'Junior Full Stack Developer',
    school: 'GoIT School (online)',
    note: '15+ hours of study per week.',
  },
  {
    period: '09.2009 — 06.2014',
    title: 'Specialist, Finance and Credit',
    school: 'Vasyl Stefanyk Precarpathian National University',
    note: 'Ivano-Frankivsk, Ukraine',
  },
]

export const work = [
  {
    kicker: '01 · Search',
    title: 'Search ecosystem & widget',
    text: 'The search experience and embeddable widget behind four European travel brands — built for speed under heavy traffic, with server-side rendering where it matters.',
    brands: ['lastminute.com', 'weg.de', 'bravofly.com', 'rumbo.com'],
    tags: ['React', 'TypeScript', 'SSR/CSR', 'REST API'],
  },
  {
    kicker: '02 · Accessibility',
    title: 'EAA-compliant UI',
    text: 'Accessible interfaces on top of Material UI and Emotion: keyboard flows, semantic markup and contrast that meet the European Accessibility Act.',
    tags: ['Material UI', 'Emotion', 'a11y', 'Storybook'],
  },
  {
    kicker: '03 · Quality',
    title: 'Testing pipelines',
    text: 'End-to-end and unit test pipelines wired into CI so every change ships with confidence — from component tests to full user journeys.',
    tags: ['Playwright', 'Jest', 'React Testing Library', 'CI/CD'],
  },
  {
    kicker: '04 · Workflow',
    title: 'AI-assisted development',
    text: 'Using GitHub Copilot and Claude to prototype faster, debug smarter and spend more time on the problems that need a human.',
    tags: ['GitHub Copilot', 'Claude', 'Nx monorepo'],
  },
]

export const skills = [
  { group: 'Core', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'] },
  { group: 'UI & Styling', items: ['Material UI', 'Emotion', 'UI/UX', 'Figma', 'Storybook'] },
  { group: 'State & Data', items: ['Redux', 'Zustand', 'REST API', 'SSR', 'CSR'] },
  { group: 'Testing', items: ['Jest', 'Playwright', 'React Testing Library', 'E2E testing'] },
  { group: 'Tooling', items: ['Vite', 'Webpack', 'Turbopack', 'Nx', 'CI/CD', 'Git & monorepos', 'Custom CMS'] },
  { group: 'AI-assisted dev', items: ['GitHub Copilot', 'Claude'] },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
