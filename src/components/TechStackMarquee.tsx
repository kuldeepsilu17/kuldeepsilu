"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  color?: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const techStack: TechItem[] = [
  {
    name: "React",
    category: "Frontend Library",
    color: "#61DAFB",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "React Framework",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.5 14.5l-6.225-8.085v-.015h-1.575V16.6h1.575v-5.46L15.69 17.5c-.38.16-.78.29-1.19.38L16.5 16.5zm.3-2.1l-1.575-2.055V8.4h1.575v6z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    color: "#F7DF1E",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.9v-6.9h-2.1v6.8c0 .6-.3.9-.8.9-.4 0-.8-.1-1.1-.3l-.8 1.6zm8.2.1c1.2 0 2.2-.5 2.8-1.4l-1.6-1c-.4.5-.8.8-1.3.8-.6 0-1-.3-1-.8 0-.6.4-.9 1.4-1.3 1.6-.7 2.4-1.5 2.4-2.8 0-1.5-1.1-2.5-2.8-2.5-1.2 0-2.1.4-2.8 1.2l1.5 1.1c.4-.4.7-.6 1.2-.6.5 0 .8.3.8.7 0 .5-.4.7-1.3 1.1-1.7.7-2.5 1.6-2.5 2.9 0 1.6 1.2 2.6 3.2 2.6z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Typed JavaScript",
    color: "#3178C6",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5.5 10.2h5.5v1.8H9.3v6.5H7.2v-6.5H5.5v-1.8zm11 8.3c-1.3 0-2.4-.6-3-1.6l1.6-1.1c.4.6.8.9 1.4.9.7 0 1.1-.3 1.1-.9 0-.5-.4-.8-1.4-1.2-1.7-.7-2.6-1.5-2.6-2.8 0-1.6 1.2-2.7 3-2.7 1.3 0 2.2.4 2.9 1.3l-1.5 1.1c-.4-.5-.8-.7-1.3-.7-.6 0-1 .3-1 .8 0 .5.3.7 1.2 1.1 1.8.8 2.7 1.6 2.7 2.9 0 1.8-1.3 2.9-3.1 2.9z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    color: "#38BDF8",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    category: "Markup Standard",
    color: "#E34F26",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#E34F26" />
        <path d="M12 4.5v15.8l5.2-2L18.6 4.5H12z" fill="#EF652A" />
        <path d="M12 8.2H8.3l.2 2.5h3.5V8.2zm0 5h-1.9l-.1-1.3H8.1l.3 3.6h3.6V13.2zm0 4.1l-.1.02-2.3-.6-.1-1.5H7.7l.3 2.7 4 1.1V17.3z" fill="#EBEBEB" />
        <path d="M12 8.2h3.7l-.4 3.8H12v-1.3h2l.2-1.2H12V8.2zm0 5v1.3h1.8l-.2 1.9-1.6.4v1.3l2.8-.8.4-3.8H12v-.3z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    category: "Styling Language",
    color: "#1572B6",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#1572B6" />
        <path d="M12 4.5v15.8l5.2-2L18.6 4.5H12z" fill="#33A9DC" />
        <path d="M12 8.2H8.3l.4 4.5h3.3v-1.3H10.1l-.2-1.9H12V8.2zm0 5.8H9.7l.1 1.2 2.2.6v1.3l-3.5-1-.3-3.4H12V14z" fill="#EBEBEB" />
        <path d="M12 8.2h3.7l-.3 3.2H12v1.3h2l-.2 2.2-1.8.5v1.3l2.9-.8.5-6.4H12V8.2z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime",
    color: "#5FA04E",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#5FA04E" />
        <path d="M12 4.5L5.5 8.25v7.5L12 19.5l6.5-3.75v-7.5L12 4.5z" fill="#333333" />
        <path d="M12 7l4 2.3v4.7L12 16.3 8 14V9.3L12 7z" fill="#5FA04E" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "Backend Framework",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8 11.5c-.3-1.6-1.5-2.7-3.2-2.7-2.1 0-3.5 1.5-3.5 3.7 0 2.2 1.4 3.7 3.5 3.7 1.6 0 2.8-1 3.2-2.4h-1.8c-.3.6-.8.9-1.4.9-1 0-1.7-.8-1.7-2.2h4.9v-1zm-3.2-1.3c.9 0 1.5.6 1.6 1.4h-3.2c.1-.8.7-1.4 1.6-1.4zM4.2 8.9L7.4 13l-3.3 4.2h2.2l2.2-2.9 2.2 2.9h2.2L9.6 13l3.2-4.1h-2.2L8.5 11.7 6.4 8.9H4.2z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "Relational Database",
    color: "#00758F",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 7.8c-.8-.9-1.8-1.4-2.8-1.4-2.3 0-4.1 1.9-4.1 4.3 0 2.4 1.8 4.3 4.1 4.3 1.1 0 2.1-.5 2.8-1.4v1.2h2V6.5h-2v1.3zm-2.7 5.7c-1.3 0-2.3-1-2.3-2.4 0-1.4 1-2.4 2.3-2.4 1.3 0 2.3 1 2.3 2.4 0 1.4-1 2.4-2.3 2.4z" fill="#00758F" />
        <path d="M6.5 14.8V9.2h1.8l1.7 3.6 1.7-3.6h1.8v5.6h-1.7v-3.2L10 14.8H9.9L8.2 11.6v3.2H6.5z" fill="#F29111" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Backend & Logic",
    color: "#3776AB",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.87 2c-4.1 0-3.85 1.78-3.85 1.78l.01 1.84h3.91v.55H6.38S4 5.89 4 10.02c0 4.13 2.08 3.98 2.08 3.98h1.24v-1.75s-.07-2.08 2.04-2.08h3.48s1.97.03 1.97-1.92V4.32S15.17 2 11.87 2zm-1.1 1.18a.65.65 0 110 1.3.65.65 0 010-1.3z" fill="#3776AB" />
        <path d="M12.13 22c4.1 0 3.85-1.78 3.85-1.78l-.01-1.84h-3.91v-.55h5.56s2.38.28 2.38-3.85c0-4.13-2.08-3.98-2.08-3.98h-1.24v1.75s.07 2.08-2.04 2.08h-3.48s-1.97-.03-1.97 1.92v3.93s-.36 2.32 2.94 2.32zm1.1-1.18a.65.65 0 110-1.3.65.65 0 010 1.3z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "Version Control",
    color: "#F05032",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.4 1.9l2.6 2.6c.7-.3 1.4-.1 1.9.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.3.2.5.5.6.9.4.9-.1 2-1 2.4-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.4-.2.8-.2 1.2-.1V8.6c-.4-.1-.8-.3-1.2-.7-.6-.6-.7-1.4-.4-2.1L8.3 3.6 2.4 9.5c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Code Hosting",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    category: "Architecture",
    color: "#06B6D4",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    category: "Code Editor",
    color: "#007ACC",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 2.5L7.2 10.7 3.5 7.8 2 8.7l3.6 3.3L2 15.3l1.5.9 3.7-2.9 10.3 8.2 4.5-2.2V4.7L17.5 2.5zm1.5 14.7l-7.3-5.2 7.3-5.2v10.4z" fill="#007ACC" />
      </svg>
    ),
  },
  {
    name: "Antigravity",
    category: "AI Agent & Pair Programmer",
    color: "#8B5CF6",
    icon: ({ className = "w-7 h-7" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="antigravityGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z" stroke="url(#antigravityGradient)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 6.5L16.5 9.5V14.5L12 17.5L7.5 14.5V9.5L12 6.5Z" fill="url(#antigravityGradient)" fillOpacity="0.25" />
        <circle cx="12" cy="12" r="2.2" fill="url(#antigravityGradient)" />
      </svg>
    ),
  },
];

export default function TechStackMarquee() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="tech-stack"
      className="py-14 md:py-20 bg-transparent relative overflow-hidden"
      aria-label="Technologies and Tools Marquee"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-8 md:mb-12 text-center">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
              Stack I use • Tools & Arms
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary max-w-3xl mx-auto leading-tight">
            Technologies I work with to build products that solve real problems
          </h2>
        </motion.div>
      </div>

      {/* Full-width Seamless Moving Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Gradient Fade Edges for Premium Look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent" />

        {/* Moving Rows */}
        <div className="marquee-container py-4">
          <div className="marquee-content gap-3 sm:gap-5 px-3">
            {techStack.map((tech, index) => (
              <div
                key={`row1-${tech.name}-${index}`}
                className="group/item relative flex flex-col items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4.5 min-w-[105px] sm:min-w-[135px] rounded-2xl bg-bg-card/80 border border-border-primary/60 hover:border-brand-accent/50 hover:bg-bg-secondary/90 hover:shadow-lg hover:shadow-brand-accent/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs select-none"
                title={`${tech.name} (${tech.category})`}
                role="listitem"
              >
                {/* Subtle hover background highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Tech Icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                  <tech.icon className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                </div>

                {/* Tech Name */}
                <span className="text-xs sm:text-sm font-semibold text-text-secondary group-hover/item:text-text-primary transition-colors duration-200 tracking-tight text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless continuous marquee loop */}
          <div className="marquee-content gap-3 sm:gap-5 px-3" aria-hidden="true">
            {techStack.map((tech, index) => (
              <div
                key={`row2-${tech.name}-${index}`}
                className="group/item relative flex flex-col items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4.5 min-w-[105px] sm:min-w-[135px] rounded-2xl bg-bg-card/80 border border-border-primary/60 hover:border-brand-accent/50 hover:bg-bg-secondary/90 hover:shadow-lg hover:shadow-brand-accent/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs select-none"
                title={`${tech.name} (${tech.category})`}
                tabIndex={-1}
              >
                {/* Subtle hover background highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Tech Icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                  <tech.icon className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                </div>

                {/* Tech Name */}
                <span className="text-xs sm:text-sm font-semibold text-text-secondary group-hover/item:text-text-primary transition-colors duration-200 tracking-tight text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
