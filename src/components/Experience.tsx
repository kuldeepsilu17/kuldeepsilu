"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Sparkles,
  FileText,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Terminal,
  Laptop,
  Rocket,
} from "lucide-react";
import Image from "next/image";

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "current" | "training" | "academic" | "self-directed";
  typeLabel: string;
  badge?: string;
  summary: string;
  focusChips?: string[];
  responsibilities?: Array<{ num: string; title: string; desc: string }>;
  techStack: string[];
  link?: { label: string; url: string };
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    id: "zenviq",
    period: "2026 — Present",
    role: "Full Stack Web Developer",
    organization: "ZENVIQ Digital",
    location: "Hanumangarh, Rajasthan / India",
    type: "current",
    typeLabel: "Current Experience",
    badge: "● CURRENTLY WORKING",
    summary:
      "Contributing to production websites, responsive React & Next.js user interfaces, client business platforms, and SEO-optimized web solutions at ZENVIQ Digital.",
    focusChips: [
      "Web Development",
      "Responsive UI",
      "SEO-focused Websites",
      "Real-world Digital Projects",
      "AI-powered Solutions",
    ],
    responsibilities: [
      {
        num: "01",
        title: "Responsive Web Experiences",
        desc: "Engineering mobile-first layouts with smooth cross-device adaptability.",
      },
      {
        num: "02",
        title: "Component-Based Architecture",
        desc: "Building modular, reusable Next.js & React UI components with Tailwind CSS.",
      },
      {
        num: "03",
        title: "SEO-Focused Development",
        desc: "Implementing structured meta tags, semantic markup, and crawlable architecture.",
      },
      {
        num: "04",
        title: "Production Websites",
        desc: "Maintaining, upgrading, and delivering client web platforms and business portals.",
      },
      {
        num: "05",
        title: "Performance Optimization",
        desc: "Enhancing page loading speed, asset compression, and core web vitals.",
      },
      {
        num: "06",
        title: "Real-World Business Solutions",
        desc: "Translating real business requirements into clean, functional digital products.",
      },
    ],
    techStack: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Git/GitHub", "SEO"],
    link: {
      label: "Visit ZENVIQ Digital",
      url: "https://www.zenviqdigital.in/",
    },
    icon: <Briefcase size={16} />,
  },
  {
    id: "ducat",
    period: "2025 — 2026",
    role: "Full Stack Web Development Trainee",
    organization: "Ducat – Gurgaon",
    location: "Gurgaon, Haryana / India",
    type: "training",
    typeLabel: "Professional Training",
    summary:
      "Underwent intensive hands-on training covering full-stack software development, core JavaScript, React frontend workflows, Node.js and Express API architectures, database fundamentals, and Python basics.",
    responsibilities: [
      {
        num: "01",
        title: "Full-Stack Foundations",
        desc: "Hands-on projects covering HTML, CSS, modern JavaScript, and React component state.",
      },
      {
        num: "02",
        title: "Backend & API Routing",
        desc: "Built custom RESTful endpoints with Node.js and Express with request validation.",
      },
      {
        num: "03",
        title: "Database Integration",
        desc: "Practiced relational schema designs and SQL query operations.",
      },
    ],
    techStack: ["JavaScript", "React", "Node.js", "Express.js", "MySQL", "Python"],
    icon: <Laptop size={16} />,
  },
  {
    id: "bca",
    period: "2024 — Present",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Government Nehru Memorial College",
    location: "MGSU Affiliated / Rajasthan",
    type: "academic",
    typeLabel: "Academic",
    badge: "BCA DEGREE",
    summary:
      "Pursuing university computer applications degree. Reinforcing algorithms, data structures, object-oriented concepts, relational database systems, and fundamental software logic.",
    responsibilities: [
      {
        num: "01",
        title: "Core Computer Science",
        desc: "Studying algorithms, object-oriented programming, and discrete logic.",
      },
      {
        num: "02",
        title: "Database Systems",
        desc: "Relational database modeling, SQL syntax, and normalization principles.",
      },
    ],
    techStack: ["C/C++", "Data Structures", "Database Management", "Web Fundamentals"],
    icon: <GraduationCap size={16} />,
  },
  {
    id: "prototyping",
    period: "2024 — Present",
    role: "Web Development Prototyping",
    organization: "Academic & Personal Projects",
    location: "Self-Directed Work",
    type: "self-directed",
    typeLabel: "Self-Directed Work",
    summary:
      "Designed, developed, and deployed self-initiated web applications and prototypes. Focused on grid modularity, custom light/dark design tokens, API integrations, and modern frontend styling.",
    responsibilities: [
      {
        num: "01",
        title: "Idea to Prototype Flow",
        desc: "Transforming concepts into interactive functional prototypes rapidly.",
      },
      {
        num: "02",
        title: "UI Experimentation",
        desc: "Exploring glassmorphism, micro-animations, and custom interaction patterns.",
      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Next.js", "Git"],
    icon: <Rocket size={16} />,
  },
];

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    zenviq: true,
    ducat: false,
    bca: false,
    prototyping: false,
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Ambient Atmosphere & Faint Career Growth Ascent Graphic */}
      <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[90px] pointer-events-none" />

      {/* Faint Career Growth Line Graphic in Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 800 Q 400 600 800 350 T 1500 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 md:mb-18 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
              02 / WORK EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-tight">
            Experience that shaped how I build.
          </h2>

          <p className="text-text-secondary mt-3.5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            A timeline of real-world development, learning, and projects that continue to shape my approach to building digital products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-primary text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently building at ZENVIQ Digital</span>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full border border-border-primary bg-bg-card hover:bg-bg-secondary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 text-xs font-semibold shadow-2xs hover:shadow-xs hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <FileText size={12} className="group-hover:scale-110 transition-transform duration-200 text-brand-accent" />
              <span>View Resume ↗</span>
            </a>
          </div>
        </motion.div>

        {/* Career Journey Stepper Header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl glass-panel border-border-primary/60 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Terminal size={15} className="text-brand-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-text-primary font-mono">
              Career Journey
            </span>
          </div>

          {/* Stepper nodes */}
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-text-muted flex-wrap justify-center">
            <span className="text-text-secondary">Learning</span>
            <span className="text-border-primary">──</span>
            <span className="text-text-secondary">Building</span>
            <span className="text-border-primary">──</span>
            <span className="text-text-secondary">Shipping</span>
            <span className="text-border-primary">──</span>
            <span className="text-brand-accent font-bold flex items-center gap-1.5 bg-brand-accent/10 px-2.5 py-0.5 rounded-full border border-brand-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Growing
            </span>
          </div>
        </motion.div>

        {/* Timeline Structure */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Timeline Stem Line */}
          <div className="absolute left-4 sm:left-6 top-8 bottom-12 w-0.5 bg-gradient-to-b from-brand-accent via-border-primary to-transparent" />

          {/* Experience Nodes List */}
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp) => {
              const isExpanded = expandedItems[exp.id];
              const isHovered = hoveredId === exp.id;
              const isCurrent = exp.type === "current";

              return (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative pl-12 sm:pl-16 group/timeline-item"
                >
                  {/* Timeline Dot Node Marker */}
                  <div
                    className={`absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-20 ${
                      isCurrent
                        ? "bg-brand-accent border-white dark:border-[#0f111a] shadow-[0_0_15px_rgba(99,102,241,0.6)] scale-110"
                        : isHovered
                        ? "bg-brand-accent border-white dark:border-[#0f111a] scale-110 shadow-md"
                        : "bg-bg-card border-border-primary text-text-muted"
                    }`}
                  >
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`glass-panel rounded-3xl transition-all duration-300 relative overflow-hidden border ${
                      isCurrent
                        ? "p-6 sm:p-8 md:p-9 border-brand-accent/40 shadow-xl hover:shadow-2xl hover:border-brand-accent/60"
                        : "p-5 sm:p-7 border-border-primary/70 hover:border-border-hover hover:shadow-lg"
                    } ${isHovered ? "ring-1 ring-brand-accent/20" : ""}`}
                  >
                    {/* Header Row: Meta, Company, Status, and Period */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-primary/40">
                        {/* Company / Institution & Icon */}
                        <div className="flex items-center gap-3">
                          {isCurrent ? (
                            /* Official ZENVIQ Logo Container */
                            <a
                              href="https://www.zenviqdigital.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/logo relative inline-flex items-center justify-center bg-white px-3.5 py-2 rounded-2xl border border-border-primary/80 dark:border-white/20 shadow-xs transition-all duration-300 ease-out hover:scale-[1.03] hover:border-brand-accent/50 active:scale-[0.98] shrink-0 cursor-pointer"
                              title="Visit ZENVIQ Digital Official Website"
                              aria-label="Visit ZENVIQ Digital Official Website (opens in new tab)"
                            >
                              <Image
                                src="/image/zenviq-logo.svg"
                                alt="ZENVIQ Digital Official Logo"
                                width={120}
                                height={37}
                                className="h-6 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-[1.02]"
                                priority
                              />
                            </a>
                          ) : (
                            <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-brand-accent shrink-0">
                              {exp.icon}
                            </div>
                          )}

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base sm:text-lg font-bold text-text-primary tracking-tight">
                                {exp.organization}
                              </h3>

                              {exp.badge && (
                                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
                                  {exp.type === "current" && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  )}
                                  <span>{exp.badge}</span>
                                </span>
                              )}
                            </div>

                            <span className="text-xs text-text-muted font-medium">
                              {exp.typeLabel}
                            </span>
                          </div>
                        </div>

                        {/* Period & Location */}
                        <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs font-mono text-text-muted">
                          <span className="inline-flex items-center space-x-1.5 font-semibold text-text-primary">
                            <Calendar size={13} className="text-brand-accent shrink-0" />
                            <span>{exp.period}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 text-[11px]">
                            <MapPin size={12} className="text-text-muted shrink-0" />
                            <span className="truncate">{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <div>
                        <h4
                          className={`font-extrabold text-text-primary tracking-tight ${
                            isCurrent ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                          }`}
                        >
                          {exp.role}
                        </h4>
                      </div>

                      {/* Summary */}
                      <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Current Focus Chips (Featured ZENVIQ only) */}
                      {exp.focusChips && (
                        <div className="p-3.5 rounded-2xl bg-bg-secondary/60 border border-border-primary/50 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                            Current Focus
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.focusChips.map((chip) => (
                              <span
                                key={chip}
                                className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-bg-card text-text-secondary border border-border-primary/70 hover:border-brand-accent/40 hover:text-brand-accent transition-colors duration-200 select-none shadow-2xs"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expandable Section: Contribution Highlights & Detailed Deliverables */}
                      <AnimatePresence>
                        {isExpanded && exp.responsibilities && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden space-y-4 pt-2"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                              Key Contributions & Responsibilities
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {exp.responsibilities.map((item) => (
                                <div
                                  key={item.num}
                                  className="group/resp p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50 hover:border-brand-accent/40 hover:bg-bg-secondary/80 transition-all duration-200 flex items-start gap-2.5"
                                >
                                  <span className="font-mono font-bold text-[11px] text-brand-accent group-hover/resp:scale-110 transition-transform duration-200 shrink-0 mt-0.5">
                                    {item.num}
                                  </span>
                                  <div className="min-w-0">
                                    <h5 className="text-xs font-bold text-text-primary tracking-tight">
                                      {item.title}
                                    </h5>
                                    <p className="text-[11px] text-text-muted leading-relaxed mt-0.5">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Technology Flow Bar */}
                      <div className="pt-4 border-t border-border-primary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {exp.techStack.map((tech, i) => (
                            <div key={tech} className="flex items-center gap-1.5">
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-bg-secondary text-text-secondary border border-border-primary/60">
                                {tech}
                              </span>
                              {i < exp.techStack.length - 1 && isCurrent && (
                                <span className="text-text-muted/40 text-[10px] hidden sm:inline">
                                  →
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Expand / Collapse Button & External Link */}
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          {exp.responsibilities && (
                            <button
                              type="button"
                              onClick={() => toggleExpand(exp.id)}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-border-primary bg-bg-secondary hover:bg-bg-card text-text-secondary hover:text-brand-accent text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95"
                            >
                              <span>{isExpanded ? "Show Less" : "View Details"}</span>
                              {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                            </button>
                          )}

                          {exp.link && (
                            <a
                              href={exp.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                            >
                              <span>{exp.link.label}</span>
                              <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Qualitative Impact Areas Summary */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { label: "WEB", sub: "Development" },
            { label: "UI / UX", sub: "Responsive Experience" },
            { label: "SEO", sub: "Search Optimization" },
            { label: "AI", sub: "Assisted Workflows" },
          ].map((area) => (
            <div
              key={area.label}
              className="p-3.5 rounded-2xl glass-panel border-border-primary/50 text-center hover:border-brand-accent/40 transition-colors duration-200"
            >
              <span className="font-extrabold text-sm text-brand-accent font-mono block">
                {area.label}
              </span>
              <span className="text-[11px] text-text-muted font-medium block mt-0.5">
                {area.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
