"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  Variants,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  FolderGit2,
  Code2,
  CheckCircle2,
  Calendar,
  Sparkles,
  Terminal,
  ExternalLink,
  ArrowRight,
  X,
  Layers,
  Zap,
  Globe,
  GitBranch,
  Database,
  Workflow,
  Cpu,
  ChevronRight,
} from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const milestones = [
    {
      id: 0,
      step: "01",
      label: "Featured Project",
      value: 1,
      suffix: "+",
      caption: "Healthcare & business platform",
      headline: "Ganpati Lifecare Platform",
      detail:
        "Production-ready healthcare and surgical equipment catalog built with Next.js, responsive layouts, fast page indexing, and modern UI architecture.",
      icon: <FolderGit2 className="text-brand-accent" size={20} />,
      badge: "Production Live",
      actionText: "View Project Details",
      link: "https://www.ganpatilifecare.com/",
      techs: ["Next.js", "React", "Tailwind CSS", "SEO Schema"],
    },
    {
      id: 1,
      step: "02",
      label: "Core Technologies",
      value: 6,
      suffix: "+",
      caption: "React, Next.js, Node, MySQL & Tailwind",
      headline: "Full-Stack Technology Stack",
      detail:
        "A focused toolkit covering frontend components, backend APIs, relational database modeling, and version-controlled Git workflows.",
      icon: <Code2 className="text-indigo-500" size={20} />,
      badge: "Core Toolkit",
      actionText: "Explore Tech Stack",
      link: null,
      techs: ["React", "Next.js", "JavaScript", "Node.js", "MySQL", "Tailwind CSS", "Git"],
    },
    {
      id: 2,
      step: "03",
      label: "Developer Portfolio",
      value: 1,
      suffix: "",
      caption: "A personal digital presence",
      headline: "Portfolio & Identity Platform",
      detail:
        "Engineered with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and structured JSON-LD SEO schema for optimum web discoverability.",
      icon: <CheckCircle2 className="text-emerald-500" size={20} />,
      badge: "Live System",
      actionText: "Explore Architecture",
      link: null,
      techs: ["Next.js 16", "React 19", "Framer Motion", "Tailwind v4"],
    },
    {
      id: 3,
      step: "04",
      label: "Building for Web",
      value: 2024,
      suffix: "",
      caption: "Started hands-on full-stack engineering",
      headline: "Hands-on Engineering Journey",
      detail:
        "Began deep practical web development and progressed into building real-world digital solutions and working at ZENVIQ Digital.",
      icon: <Calendar className="text-violet-500" size={20} />,
      badge: "Journey Inception",
      actionText: "Read Story",
      link: null,
      techs: ["Hands-on Dev", "ZENVIQ Digital", "BCA Studies", "AI Workflows"],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      name: "PLAN",
      title: "Requirements & Architecture",
      desc: "Understand the core goal, audience, user flows, and technical requirements before writing code.",
      icon: <Workflow size={14} />,
    },
    {
      step: "02",
      name: "DESIGN",
      title: "UI & Component Systems",
      desc: "Create clear, responsive, accessible layouts with cohesive design tokens and dark/light palettes.",
      icon: <Layers size={14} />,
    },
    {
      step: "03",
      name: "DEVELOP",
      title: "Clean Modular Implementation",
      desc: "Write maintainable components, typed interfaces, reusable utility hooks, and robust API endpoints.",
      icon: <Code2 size={14} />,
    },
    {
      step: "04",
      name: "TEST",
      title: "Verification & Polish",
      desc: "Test cross-device responsiveness, accessibility compliance, keyboard navigation, and fast loading.",
      icon: <CheckCircle2 size={14} />,
    },
    {
      step: "05",
      name: "DEPLOY",
      title: "Ship & Iterate",
      desc: "Deploy to production, configure SEO schema metadata, monitor speed, and continuously improve.",
      icon: <Zap size={14} />,
    },
  ];

  const meanings = [
    { label: "BUILD", subtitle: "Real Projects", desc: "Turning ideas into functional products" },
    { label: "LEARN", subtitle: "Modern Stack", desc: "Mastering React, Next.js & Node" },
    { label: "SHIP", subtitle: "Production Work", desc: "Delivering real client solutions" },
    { label: "GROW", subtitle: "Continuous Drive", desc: "Refining workflows & AI tooling" },
  ];

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-transparent relative overflow-hidden border-t border-border-primary/50"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                05 / MILESTONES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
              Key Milestones
            </h2>
            <p className="text-text-secondary mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
              A visual timeline of the progress, projects, technologies, and experiences shaping my journey as a developer.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-border-primary text-xs font-bold text-text-secondary shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono">BUILDING • LEARNING • SHIPPING</span>
            </div>
          </div>
        </motion.div>

        {/* Milestone Journey Timeline Connection (Desktop Indicator) */}
        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto px-12 mb-4 text-[10px] font-mono font-bold tracking-wider text-text-muted select-none">
          <span className="flex items-center gap-1 text-brand-accent">
            <span>2024 INCEPTION</span>
          </span>
          <div className="flex-1 mx-4 h-[1px] bg-gradient-to-r from-brand-accent/40 via-border-primary to-emerald-500/40" />
          <span className="flex items-center gap-1 text-emerald-500">
            <span>CONTINUOUS PROGRESS</span>
          </span>
        </div>

        {/* Bento Grid: 4-Column Interactive Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedMilestone(item.id)}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:border-brand-accent/50 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 relative group cursor-pointer border-border-primary/80"
            >
              {/* Subtle background glow on card hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover:scale-110 group-hover:rotate-3 group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-mono font-bold text-text-muted group-hover:text-brand-accent transition-colors duration-200">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-brand-accent transition-colors duration-200">
                    {item.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive "Explore →" Bar */}
              <div className="pt-3 border-t border-border-primary/40 flex items-center justify-between text-[11px] font-semibold text-text-muted group-hover:text-brand-accent transition-colors relative z-10">
                <span>{item.badge}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "More Than Numbers" Meaning Panel */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-6xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border-border-primary/80 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent">
                <Sparkles size={14} />
                <span>More Than Numbers</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-text-primary tracking-tight">
                Practical Progress Shaping Every Build
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Each milestone represents practical progress — learning technologies, building real websites, improving development workflows, and turning ideas into working digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              {meanings.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 hover:border-brand-accent/40 transition-colors cursor-default"
                >
                  <span className="text-xs font-mono font-extrabold text-brand-accent block">
                    {m.label}
                  </span>
                  <span className="text-xs font-bold text-text-primary block mt-0.5">
                    {m.subtitle}
                  </span>
                  <span className="text-[10px] text-text-muted block mt-0.5 leading-snug">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive "How I Build" Engineering Pipeline & Terminal Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-6xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border-border-primary/80 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: 5-Step Pipeline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Workflow size={16} className="text-brand-accent" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    How I Build • Engineering Pipeline
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  Interactive Workflow
                </span>
              </div>

              {/* Step Badges Row */}
              <div className="flex flex-wrap gap-2">
                {workflowSteps.map((step, idx) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveWorkflowStep(idx)}
                    onMouseEnter={() => setActiveWorkflowStep(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      activeWorkflowStep === idx
                        ? "bg-brand-accent text-white shadow-md scale-105"
                        : "bg-bg-secondary text-text-secondary border border-border-primary hover:border-brand-accent/40"
                    }`}
                  >
                    <span>{step.step}</span>
                    <span>{step.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Details Card */}
              <div className="p-4 rounded-2xl bg-bg-secondary/70 border border-border-primary/70 space-y-1.5 transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <span className="text-brand-accent">
                    {workflowSteps[activeWorkflowStep].icon}
                  </span>
                  <span>
                    {workflowSteps[activeWorkflowStep].step} — {workflowSteps[activeWorkflowStep].title}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {workflowSteps[activeWorkflowStep].desc}
                </p>
              </div>
            </div>

            {/* Right: Live Engineering Status Terminal (Simulated) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-950 p-4 border border-white/10 font-mono text-xs text-neutral-300 shadow-xl space-y-3">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-neutral-400">~/kuldeep/portfolio</span>
                </div>

                {/* Terminal Output */}
                <div className="space-y-2 text-[11px]">
                  <div>
                    <span className="text-brand-accent">$</span> npm run build
                    <div className="text-emerald-400 mt-0.5 flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      <span>✓ Build successful (Ready for production)</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-brand-accent">$</span> git status
                    <div className="text-neutral-400 mt-0.5">
                      <span>✓ Working tree clean (main branch)</span>
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>● READY TO SHIP</span>
                  </div>
                  <span className="text-neutral-400">Next.js + TypeScript</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Forward-Looking "Next Milestone" Strip */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-6xl mx-auto glass-panel p-5 sm:p-6 rounded-3xl border-border-primary/80 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="p-2 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
              <Zap size={16} />
            </span>
            <div>
              <span className="text-xs font-mono font-bold text-brand-accent block uppercase">
                Next Milestone → Keep building real-world products
              </span>
              <span className="text-xs text-text-secondary block font-medium">
                Full Stack Development + Modern Web Technologies + AI-assisted workflows @ ZENVIQ Digital
              </span>
            </div>
          </div>

          <a
            href="https://www.zenviqdigital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-bg-secondary hover:bg-brand-accent hover:text-white text-text-primary text-xs font-bold border border-border-primary hover:border-brand-accent transition-all duration-200 shrink-0 shadow-2xs"
          >
            <span>ZENVIQ Digital</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>

      </div>

      {/* Interactive Milestone Detail Modal */}
      <AnimatePresence>
        {selectedMilestone !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border-border-primary shadow-2xl relative bg-bg-card"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-bg-secondary text-text-muted hover:text-text-primary hover:bg-bg-card transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    MILESTONE {milestones[selectedMilestone].step}
                  </span>
                  <span className="text-xs font-semibold text-text-muted">
                    {milestones[selectedMilestone].badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                    {milestones[selectedMilestone].headline}
                  </h3>
                  <p className="text-xs font-semibold text-brand-accent">
                    {milestones[selectedMilestone].label} ({milestones[selectedMilestone].value}
                    {milestones[selectedMilestone].suffix})
                  </p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {milestones[selectedMilestone].detail}
                </p>

                {/* Tech Badges */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted block">
                    Associated Technologies & Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {milestones[selectedMilestone].techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action */}
                <div className="pt-4 border-t border-border-primary/40 flex items-center justify-between">
                  {milestones[selectedMilestone].link ? (
                    <a
                      href={milestones[selectedMilestone].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-md transition-all duration-200"
                    >
                      <span>View Live Project</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedMilestone(null)}
                      className="px-5 py-2.5 rounded-full bg-bg-secondary hover:bg-brand-accent hover:text-white text-text-primary text-xs font-bold border border-border-primary transition-all duration-200 cursor-pointer"
                    >
                      Close Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
