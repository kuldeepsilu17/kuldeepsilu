"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sparkles,
  Layers,
  Server,
  Database,
  Settings,
  X,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Compass,
  Zap,
} from "lucide-react";

export type SkillLevel = "Proficient" | "Familiar" | "Working Knowledge" | "Learning";

export interface SkillDetail {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  level: SkillLevel;
  tagline: string;
  description: string;
  highlights: string[];
  projectsUsed?: string[];
  color: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const allSkills: SkillDetail[] = [
  // FRONTEND
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    level: "Proficient",
    tagline: "Component-driven UI & State Management",
    description:
      "Core library for developing fast, modular, and reactive web applications with clean hook-based logic.",
    highlights: [
      "Custom hooks & declarative state management",
      "Reusable component design systems",
      "Virtual DOM optimization & micro-interactions",
    ],
    projectsUsed: ["Ganpati Lifecare", "Portfolio v2"],
    color: "#61DAFB",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Proficient",
    tagline: "Full-Stack React Framework & SSR/SSG",
    description:
      "Modern React framework utilized for server-side rendering, static site generation, SEO metadata, and API routes.",
    highlights: [
      "App Router & Server Component architecture",
      "Automated SEO optimization & OpenGraph generators",
      "Optimized images, fonts, and fast hydration",
    ],
    projectsUsed: ["Ganpati Lifecare", "Portfolio v2"],
    color: "#000000",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.5 14.5l-6.225-8.085v-.015h-1.575V16.6h1.575v-5.46L15.69 17.5c-.38.16-.78.29-1.19.38L16.5 16.5zm.3-2.1l-1.575-2.055V8.4h1.575v6z" />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Proficient",
    tagline: "Dynamic Logic & Asynchronous Programming",
    description:
      "Deep understanding of modern JavaScript, asynchronous operations, event loops, DOM manipulation, and modern syntaxes.",
    highlights: [
      "Promises, Async/Await, and Fetch APIs",
      "Array methods & functional programming patterns",
      "Object-oriented principles & closure scoping",
    ],
    projectsUsed: ["Ganpati Lifecare", "Interactive Prototypes"],
    color: "#F7DF1E",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.9v-6.9h-2.1v6.8c0 .6-.3.9-.8.9-.4 0-.8-.1-1.1-.3l-.8 1.6zm8.2.1c1.2 0 2.2-.5 2.8-1.4l-1.6-1c-.4.5-.8.8-1.3.8-.6 0-1-.3-1-.8 0-.6.4-.9 1.4-1.3 1.6-.7 2.4-1.5 2.4-2.8 0-1.5-1.1-2.5-2.8-2.5-1.2 0-2.1.4-2.8 1.2l1.5 1.1c.4-.4.7-.6 1.2-.6.5 0 .8.3.8.7 0 .5-.4.7-1.3 1.1-1.7.7-2.5 1.6-2.5 2.9 0 1.6 1.2 2.6 3.2 2.6z" fill="#000000" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Proficient",
    tagline: "Utility-First CSS & Semantic Design Tokens",
    description:
      "Rapidly developing bespoke responsive interfaces, micro-animations, design tokens, and fluid dark/light themes.",
    highlights: [
      "Custom theme variables & design systems",
      "Adaptive dark mode & glassmorphic aesthetics",
      "Fluid responsive layout grids & flexboxes",
    ],
    projectsUsed: ["Ganpati Lifecare", "Portfolio v2"],
    color: "#38BDF8",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: "Proficient",
    tagline: "Semantic Markup & Modern CSS Architecture",
    description:
      "Crafting accessible semantic structures, SEO-compliant tags, CSS animations, and cross-browser standard layouts.",
    highlights: [
      "Semantic HTML5 & screen-reader accessibility",
      "CSS Grid, Flexbox, & Keyframe Animations",
      "Cross-device mobile-first responsiveness",
    ],
    projectsUsed: ["Ganpati Lifecare", "Production Sites"],
    color: "#E34F26",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#E34F26" />
        <path d="M12 4.5v15.8l5.2-2L18.6 4.5H12z" fill="#EF652A" />
        <path d="M12 8.2H8.3l.2 2.5h3.5V8.2zm0 5h-1.9l-.1-1.3H8.1l.3 3.6h3.6V13.2zm0 4.1l-.1.02-2.3-.6-.1-1.5H7.7l.3 2.7 4 1.1V17.3z" fill="#EBEBEB" />
        <path d="M12 8.2h3.7l-.4 3.8H12v-1.3h2l.2-1.2H12V8.2zm0 5v1.3h1.8l-.2 1.9-1.6.4v1.3l2.8-.8.4-3.8H12v-.3z" fill="#FFFFFF" />
      </svg>
    ),
  },

  // BACKEND
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Familiar",
    tagline: "Server-side JavaScript Runtime",
    description:
      "Building backend services, file systems, route controllers, and asynchronous server applications.",
    highlights: [
      "NPM ecosystem & package management",
      "Event-driven non-blocking I/O model",
      "Integration with databases and frontend clients",
    ],
    projectsUsed: ["API Backend Prototypes"],
    color: "#5FA04E",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#5FA04E" />
        <path d="M12 4.5L5.5 8.25v7.5L12 19.5l6.5-3.75v-7.5L12 4.5z" fill="#222222" />
        <path d="M12 7l4 2.3v4.7L12 16.3 8 14V9.3L12 7z" fill="#5FA04E" />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    level: "Familiar",
    tagline: "Minimalist Web Application Framework",
    description:
      "Structuring modular routing, custom middleware pipelines, and secure HTTP endpoints.",
    highlights: [
      "RESTful routing & JSON request handling",
      "CORS configuration and error middleware",
      "Authentication handling & query parsing",
    ],
    projectsUsed: ["Backend Microservices"],
    color: "#000000",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 11.5c-.3-1.6-1.5-2.7-3.2-2.7-2.1 0-3.5 1.5-3.5 3.7 0 2.2 1.4 3.7 3.5 3.7 1.6 0 2.8-1 3.2-2.4h-1.8c-.3.6-.8.9-1.4.9-1 0-1.7-.8-1.7-2.2h4.9v-1zm-3.2-1.3c.9 0 1.5.6 1.6 1.4h-3.2c.1-.8.7-1.4 1.6-1.4zM4.2 8.9L7.4 13l-3.3 4.2h2.2l2.2-2.9 2.2 2.9h2.2L9.6 13l3.2-4.1h-2.2L8.5 11.7 6.4 8.9H4.2z" />
      </svg>
    ),
  },
  {
    id: "rest-apis",
    name: "RESTful APIs",
    category: "Backend",
    level: "Proficient",
    tagline: "HTTP Methods, Status Codes & Payloads",
    description:
      "Designing and consuming structured RESTful endpoints with consistent JSON payloads and error handling.",
    highlights: [
      "Standard HTTP verbs (GET, POST, PUT, DELETE)",
      "Structured payload schemas & validation",
      "Integration with external third-party services",
    ],
    projectsUsed: ["Ganpati Lifecare (WhatsApp/Inquiry)", "Portfolio"],
    color: "#06B6D4",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
  },

  // DATABASE
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    level: "Familiar",
    tagline: "Relational Database Management & Queries",
    description:
      "Modeling structured relational schemas, defining primary/foreign keys, and executing performant SQL queries.",
    highlights: [
      "Relational table design & indexing",
      "CRUD query operations & joins",
      "Data consistency and integrity rules",
    ],
    projectsUsed: ["Academic Systems & Data Projects"],
    color: "#00758F",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 7.8c-.8-.9-1.8-1.4-2.8-1.4-2.3 0-4.1 1.9-4.1 4.3 0 2.4 1.8 4.3 4.1 4.3 1.1 0 2.1-.5 2.8-1.4v1.2h2V6.5h-2v1.3zm-2.7 5.7c-1.3 0-2.3-1-2.3-2.4 0-1.4 1-2.4 2.3-2.4 1.3 0 2.3 1 2.3 2.4 0 1.4-1 2.4-2.3 2.4z" fill="#00758F" />
        <path d="M6.5 14.8V9.2h1.8l1.7 3.6 1.7-3.6h1.8v5.6h-1.7v-3.2L10 14.8H9.9L8.2 11.6v3.2H6.5z" fill="#F29111" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    level: "Working Knowledge",
    tagline: "NoSQL Document Database",
    description:
      "Document-based data storage utilizing JSON/BSON structures for flexible schema architecture.",
    highlights: [
      "Document schemas & collection models",
      "Flexible NoSQL data storage",
      "Mongoose modeling fundamentals",
    ],
    projectsUsed: ["Full-Stack Experimentation"],
    color: "#47A248",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 7 7.5 7 13.5C7 16.5 9 19.5 12 22C15 19.5 17 16.5 17 13.5C17 7.5 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2v20c-.5-1.5-1.5-3-1.5-5.5s1-7.5 1.5-14.5z" fill="#3FA037" />
      </svg>
    ),
  },

  // TOOLS & WORKFLOW
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    level: "Proficient",
    tagline: "Version Control & Collaborative CI/CD",
    description:
      "Tracking code history, branching strategies, pull requests, semantic commits, and remote repository syncing.",
    highlights: [
      "Branching, merging, and conflict resolution",
      "GitHub pull requests and code review flow",
      "Automated Vercel deployment hooks",
    ],
    projectsUsed: ["All Projects & Portfolio"],
    color: "#F05032",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.4 1.9l2.6 2.6c.7-.3 1.4-.1 1.9.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.3.2.5.5.6.9.4.9-.1 2-1 2.4-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.4-.2.8-.2 1.2-.1V8.6c-.4-.1-.8-.3-1.2-.7-.6-.6-.7-1.4-.4-2.1L8.3 3.6 2.4 9.5c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#F05032" />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    level: "Proficient",
    tagline: "Primary Development Environment",
    description:
      "Configured development workflow with ESLint, Prettier, Tailwind IntelliSense, and integrated Git terminals.",
    highlights: [
      "Code linting, formatting & syntax extensions",
      "Integrated debugger and live preview server",
      "Custom snippet shortcuts & keybindings",
    ],
    projectsUsed: ["Daily Development"],
    color: "#007ACC",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 2.5L7.2 10.7 3.5 7.8 2 8.7l3.6 3.3L2 15.3l1.5.9 3.7-2.9 10.3 8.2 4.5-2.2V4.7L17.5 2.5zm1.5 14.7l-7.3-5.2 7.3-5.2v10.4z" fill="#007ACC" />
      </svg>
    ),
  },
  {
    id: "antigravity",
    name: "Antigravity AI",
    category: "Tools",
    level: "Proficient",
    tagline: "Agentic AI Pair Programming Environment",
    description:
      "Leveraging AI-assisted workflows for rapid prototyping, intelligent debugging, and automated testing.",
    highlights: [
      "Accelerated component scaffolding",
      "Agentic problem-solving & architecture review",
      "Automated verification & linting checks",
    ],
    projectsUsed: ["Full Stack Development"],
    color: "#8B5CF6",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skillsAgGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z" stroke="url(#skillsAgGrad)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 6.5L16.5 9.5V14.5L12 17.5L7.5 14.5V9.5L12 6.5Z" fill="url(#skillsAgGrad)" fillOpacity="0.25" />
        <circle cx="12" cy="12" r="2.2" fill="url(#skillsAgGrad)" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    category: "Tools",
    level: "Working Knowledge",
    tagline: "Containerization & Environment Consistency",
    description:
      "Basic containerization workflows ensuring consistent runtime environments across machines.",
    highlights: [
      "Container builds & Dockerfile syntax",
      "Port mapping & container execution",
      "Isolation of service dependencies",
    ],
    projectsUsed: ["Local Testing & Labs"],
    color: "#2496ED",
    icon: ({ className = "w-6 h-6" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3h2v2h-2V3zm-3 0h2v2h-2V3zM7 3h2v2H7V3zm6 3h2v2h-2V6zm-3 0h2v2h-2V6zm-3 0h2v2H7V6zM4 6h2v2H4V6zm12 3h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H7V9zm-3 0h2v2H4V9zm-3 0h2v2H1V9zm20.8 1.4c-.4-.3-1.3-.4-2.1-.2-.2-.6-.6-1.1-1.2-1.4l-.5-.3-.3.5c-.3.6-.3 1.2-.1 1.8-.7.4-1.6.8-2.7.9H1c-.3 1.4.1 2.8.9 3.9 1.4 1.8 3.6 2.4 6.1 2.4 5.3 0 9.7-2.6 11.6-7.5.8.1 1.6-.1 2.1-.6l.3-.4-.2-.5c-.3-.4-.7-.6-1-.6z" fill="#2496ED" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case "Proficient":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "Familiar":
        return "bg-brand-accent/10 text-brand-accent border-brand-accent/20";
      case "Working Knowledge":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "Learning":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
    }
  };

  const frontendList = allSkills.filter((s) => s.category === "Frontend");
  const backendList = allSkills.filter((s) => s.category === "Backend");
  const databaseList = allSkills.filter((s) => s.category === "Database");
  const toolsList = allSkills.filter((s) => s.category === "Tools");

  // Interactive Ecosystem nodes
  const ecosystemNodes = [
    { id: "react", label: "React.js", sub: "Frontend", x: "20%", y: "18%" },
    { id: "nextjs", label: "Next.js", sub: "App Router", x: "50%", y: "10%" },
    { id: "javascript", label: "JavaScript", sub: "ES6+ Logic", x: "80%", y: "18%" },
    { id: "tailwind", label: "Tailwind CSS", sub: "Design Tokens", x: "14%", y: "55%" },
    { id: "nodejs", label: "Node.js", sub: "Backend", x: "28%", y: "85%" },
    { id: "mysql", label: "MySQL", sub: "Relational DB", x: "72%", y: "85%" },
    { id: "git", label: "Git / GitHub", sub: "Version Control", x: "86%", y: "55%" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-transparent relative overflow-hidden border-t border-border-primary/50">
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 md:mb-16 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
              04 / EXPERTISE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-tight">
            Skills & Technologies
          </h2>
          
          <p className="text-text-secondary mt-3.5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            A practical toolkit for building fast, scalable, responsive and user-focused digital experiences.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-primary text-xs font-semibold text-text-secondary shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Currently building with modern web technologies</span>
          </div>
        </motion.div>

        {/* 1. Interactive Central Tech Universe (Connected Ecosystem) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 max-w-5xl mx-auto"
        >
          <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden border-border-primary/80 shadow-xl">
            {/* Header Title inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-10">
              <div>
                <span className="text-[11px] font-mono text-brand-accent uppercase font-bold tracking-wider">
                  Interactive Ecosystem
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  Connected Full-Stack Architecture
                </h3>
              </div>
              <span className="text-xs text-text-muted bg-bg-secondary/70 px-3 py-1 rounded-full border border-border-primary/50 self-start sm:self-auto">
                Hover or click nodes to inspect
              </span>
            </div>

            {/* Visual Canvas Area */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-bg-secondary/40 border border-border-primary/50 overflow-hidden flex items-center justify-center select-none">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Central Core Hub */}
              <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 rounded-full bg-white dark:bg-[#12131d] border-2 border-brand-accent shadow-[0_0_30px_rgba(99,102,241,0.25)] text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full border border-brand-accent/40 animate-ping opacity-25 pointer-events-none" />
                <Cpu size={24} className="text-brand-accent mb-1 animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold text-text-primary tracking-tight">
                  FULL STACK
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-brand-accent uppercase tracking-wider">
                  Web Development
                </span>
              </div>

              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {ecosystemNodes.map((node) => (
                  <line
                    key={`line-${node.id}`}
                    x1="50%"
                    y1="50%"
                    x2={node.x}
                    y2={node.y}
                    stroke={hoveredNode === node.id ? "#6366F1" : "var(--border-primary)"}
                    strokeWidth={hoveredNode === node.id ? "2" : "1.2"}
                    strokeDasharray={hoveredNode === node.id ? "none" : "4 4"}
                    className="transition-all duration-300"
                  />
                ))}
              </svg>

              {/* Surrounding Connected Technology Nodes */}
              {ecosystemNodes.map((node) => {
                const skillObj = allSkills.find((s) => s.id === node.id);
                if (!skillObj) return null;

                const isHovered = hoveredNode === node.id;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedSkill(skillObj)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                    className={`absolute z-20 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 dark:bg-[#151722]/95 border transition-all duration-300 ease-out cursor-pointer shadow-sm hover:shadow-xl active:scale-95 ${
                      isHovered
                        ? "border-brand-accent scale-110 shadow-brand-accent/20 ring-2 ring-brand-accent/20 z-30"
                        : "border-border-primary/80 hover:border-brand-accent/60"
                    }`}
                    title={`Click to view ${skillObj.name} details`}
                    aria-label={`View ${skillObj.name} details`}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
                      <skillObj.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain" />
                    </div>
                    <div className="text-left hidden sm:block">
                      <span className="text-xs font-bold text-text-primary block leading-tight whitespace-nowrap">
                        {skillObj.name}
                      </span>
                      <span className="text-[10px] text-text-muted block leading-none">
                        {node.sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 2. Bento Grid of Categorized Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          
          {/* Box 1: FRONTEND */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Layers size={16} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Frontend
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent">
                  05 Technologies
                </span>
              </div>

              <div className="space-y-2">
                {frontendList.map((skill) => (
                  <div
                    key={skill.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedSkill(skill);
                      }
                    }}
                    className="group/item flex items-center justify-between p-2.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/90 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                        <skill.icon className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-text-primary group-hover/item:text-brand-accent transition-colors duration-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 2: BACKEND */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Server size={16} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Backend
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent">
                  03 Technologies
                </span>
              </div>

              <div className="space-y-2">
                {backendList.map((skill) => (
                  <div
                    key={skill.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedSkill(skill);
                      }
                    }}
                    className="group/item flex items-center justify-between p-2.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/90 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                        <skill.icon className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-text-primary group-hover/item:text-brand-accent transition-colors duration-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 3: DATABASE */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Database size={16} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Database
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent">
                  02 Technologies
                </span>
              </div>

              <div className="space-y-2">
                {databaseList.map((skill) => (
                  <div
                    key={skill.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedSkill(skill);
                      }
                    }}
                    className="group/item flex items-center justify-between p-2.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/90 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                        <skill.icon className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-text-primary group-hover/item:text-brand-accent transition-colors duration-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 4: TOOLS & WORKFLOW */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Settings size={16} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Tools & Flow
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent">
                  04 Technologies
                </span>
              </div>

              <div className="space-y-2">
                {toolsList.map((skill) => (
                  <div
                    key={skill.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedSkill(skill)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedSkill(skill);
                      }
                    }}
                    className="group/item flex items-center justify-between p-2.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/90 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                        <skill.icon className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-text-primary group-hover/item:text-brand-accent transition-colors duration-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. "Currently Exploring" & "Tech Stack Distribution" Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-14">
          
          {/* Currently Exploring Card (col-span-7) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 glass-panel p-6 sm:p-7 rounded-3xl border-border-primary/70 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Compass size={16} className="text-brand-accent" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  Currently Exploring
                </h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Active learning disciplines and expanding areas of interest in software engineering:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-xs font-semibold text-text-primary">Python Scripting</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                    Learning
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-semibold text-text-primary">AI & Agentic Workflows</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    Exploring
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-text-primary">Advanced Backend APIs</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Learning
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-xs font-semibold text-text-primary">Docker & Containerization</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    Exploring
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Distribution Summary (col-span-5) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl border-border-primary/70 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-brand-accent" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  Technology Focus Areas
                </h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Primary concentration across daily development cycles:
              </p>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-text-primary">Frontend & UI Architecture</span>
                    <span className="text-brand-accent font-mono">Primary Focus</span>
                  </div>
                  <div className="h-2 rounded-full bg-bg-secondary border border-border-primary/40 overflow-hidden">
                    <div className="h-full rounded-full bg-brand-accent w-[90%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-text-primary">Backend & REST APIs</span>
                    <span className="text-text-muted font-mono">Core Support</span>
                  </div>
                  <div className="h-2 rounded-full bg-bg-secondary border border-border-primary/40 overflow-hidden">
                    <div className="h-full rounded-full bg-indigo-500 w-[75%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-text-primary">Workflow & CI Tools</span>
                    <span className="text-emerald-500 font-mono">Proficient</span>
                  </div>
                  <div className="h-2 rounded-full bg-bg-secondary border border-border-primary/40 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500 w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4. "How I Build" Workflow Timeline */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 max-w-6xl mx-auto"
        >
          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border-border-primary/70">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[11px] font-mono text-brand-accent uppercase font-bold tracking-wider">
                Engineering Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mt-1">
                How I Build
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-2">
                From idea to a responsive, production-ready experience.
              </p>
            </div>

            {/* 5-Step Process Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {[
                { step: "01", title: "PLAN", desc: "Scope, user flows, architecture & requirements" },
                { step: "02", title: "DESIGN", desc: "UI wireframes, typography, layout & tokens" },
                { step: "03", title: "BUILD", desc: "Clean React / Next.js code with TypeScript" },
                { step: "04", title: "TEST", desc: "Cross-device audits, responsiveness & SEO" },
                { step: "05", title: "DEPLOY", desc: "Vercel edge builds, hosting & optimization" },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="group/step relative p-4 sm:p-5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 hover:border-brand-accent/50 hover:bg-bg-secondary/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-extrabold text-xs text-brand-accent">
                        {item.step}
                      </span>
                      {idx < 4 && (
                        <ArrowRight size={14} className="text-text-muted/40 hidden lg:block group-hover/step:translate-x-1 group-hover/step:text-brand-accent transition-all duration-200" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-text-primary tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5. Live Tech Marquee Footer */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative w-full overflow-hidden group/marquee"
        >
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-bg-primary to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-bg-primary to-transparent" />

          <div className="marquee-container py-3">
            <div className="marquee-content gap-3 sm:gap-4 px-2">
              {allSkills.map((skill, i) => (
                <div
                  key={`skill-marquee-1-${skill.id}-${i}`}
                  onClick={() => setSelectedSkill(skill)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-bg-card/70 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/80 cursor-pointer transition-all duration-200 select-none shrink-0"
                >
                  <div className="w-4 h-4 shrink-0">
                    <skill.icon className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-text-secondary whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="marquee-content gap-3 sm:gap-4 px-2" aria-hidden="true">
              {allSkills.map((skill, i) => (
                <div
                  key={`skill-marquee-2-${skill.id}-${i}`}
                  onClick={() => setSelectedSkill(skill)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-bg-card/70 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/80 cursor-pointer transition-all duration-200 select-none shrink-0"
                  tabIndex={-1}
                >
                  <div className="w-4 h-4 shrink-0">
                    <skill.icon className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-text-secondary whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative z-10 w-full max-w-md rounded-3xl bg-white dark:bg-[#12131a] border border-border-primary shadow-2xl p-6 sm:p-7 text-left overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-bg-secondary transition-all duration-200 cursor-pointer"
                aria-label="Close skill modal"
              >
                <X size={18} />
              </button>

              {/* Header with Icon & Category */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-2xl bg-bg-secondary border border-border-primary shrink-0 shadow-xs">
                  <selectedSkill.icon className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 id="skill-modal-title" className="text-xl font-bold text-text-primary">
                      {selectedSkill.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getLevelBadgeClass(selectedSkill.level)}`}>
                      {selectedSkill.level}
                    </span>
                  </div>
                  <span className="text-xs text-text-muted font-medium">
                    {selectedSkill.category} Development
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 mb-4">
                <span className="text-xs font-semibold text-brand-accent block mb-1">
                  {selectedSkill.tagline}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                  Key Capabilities
                </span>
                <div className="space-y-1.5">
                  {selectedSkill.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Used In */}
              {selectedSkill.projectsUsed && selectedSkill.projectsUsed.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">
                    Utilized In
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.projectsUsed.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/60"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-border-primary/40">
                <a
                  href="#projects"
                  onClick={() => setSelectedSkill(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
