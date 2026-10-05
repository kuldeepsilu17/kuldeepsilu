"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Brain,
  Code,
  Sparkles,
  CheckCircle2,
  Layers,
  Server,
  Database,
  Settings,
  Zap,
  Terminal,
  Compass,
  Lightbulb,
  Workflow,
  Cpu,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const [activeOrbitTech, setActiveOrbitTech] = useState<string | null>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const developerDna = [
    {
      num: "01",
      title: "BUILD",
      desc: "Turn ideas into reliable, working digital products.",
      icon: <Code size={14} />,
    },
    {
      num: "02",
      title: "SIMPLIFY",
      desc: "Keep user interfaces clean, intuitive, and accessible.",
      icon: <Lightbulb size={14} />,
    },
    {
      num: "03",
      title: "OPTIMIZE",
      desc: "Care deeply about performance, fast loading, and SEO.",
      icon: <Zap size={14} />,
    },
    {
      num: "04",
      title: "LEARN",
      desc: "Continuously explore modern tools and agentic workflows.",
      icon: <Brain size={14} />,
    },
  ];

  const whatIBuild = [
    "Websites",
    "Full Stack Apps",
    "Business Platforms",
    "Responsive Interfaces",
    "SEO-focused Websites",
    "AI-assisted Experiences",
  ];

  const orbitNodes = [
    { id: "react", name: "React", role: "UI Component Architecture", pos: "top-2 left-4", x1: "50%", y1: "50%", x2: "20%", y2: "25%" },
    { id: "nextjs", name: "Next.js", role: "SSR & Full-Stack Routing", pos: "top-2 right-4", x1: "50%", y1: "50%", x2: "80%", y2: "25%" },
    { id: "seo", name: "SEO", role: "Organic Visibility & Meta Data", pos: "bottom-2 left-4", x1: "50%", y1: "50%", x2: "20%", y2: "75%" },
    { id: "ai", name: "AI Workflows", role: "Agentic Tools & Accelerated Dev", pos: "bottom-2 right-4", x1: "50%", y1: "50%", x2: "80%", y2: "75%" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent relative overflow-hidden border-t border-border-primary/50">
      {/* Background Ambient Atmosphere */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[100px] pointer-events-none" />

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
                01 / BACKGROUND
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
              About Me
            </h2>
          </div>

          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-primary text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Stack Web Developer @ ZENVIQ Digital</span>
            </div>
          </div>
        </motion.div>

        {/* Top Grid: Interactive Profile Photo Card + Main Story & DNA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-8">
          
          {/* Left Column (col-span-4): Interactive Layered Profile Identity Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-4 glass-panel p-5 sm:p-6 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:border-brand-accent/40 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Background subtle radial glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Photo Container with floating badges */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-bg-secondary border border-border-primary/80 shadow-inner group/photo">
                <Image
                  src="/image/kuldeep-silu.jpg"
                  alt="Kuldeep Silu — Full Stack Web Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover/photo:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle glass overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Top-Right Badge: BCA */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white border border-white/15 text-[10px] font-mono font-bold tracking-wider shadow-md hover:scale-105 transition-transform duration-200">
                  BCA Student
                </div>

                {/* Floating Bottom-Left Badge: Full Stack */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white border border-white/15 text-[10px] font-mono font-bold tracking-wider shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>Full Stack</span>
                </div>
              </div>

              {/* Developer Status Strip */}
              <div className="p-3.5 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-text-primary block leading-tight">
                      Available for Opportunities
                    </span>
                    <span className="text-[10px] text-text-muted block">
                      Freelance • Full-time • Internships
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Personal Metrics */}
            <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-border-primary/40 relative z-10 text-center">
              <div className="p-2.5 rounded-2xl bg-bg-secondary/40 border border-border-primary/40 hover:border-brand-accent/30 transition-colors">
                <span className="font-mono font-extrabold text-xs text-brand-accent block">2026</span>
                <span className="text-[10px] text-text-muted font-medium block">Working @ ZENVIQ</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-bg-secondary/40 border border-border-primary/40 hover:border-brand-accent/30 transition-colors">
                <span className="font-mono font-extrabold text-xs text-brand-accent block">BCA</span>
                <span className="text-[10px] text-text-muted font-medium block">MGSU Affiliated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (col-span-8): Main Narrative & Developer DNA */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-8 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between border-border-primary/80"
          >
            <div className="space-y-6">
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Terminal size={14} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-primary font-mono">
                    Professional Story
                  </span>
                </div>

                {/* Interactive Status Pill */}
                <div className="group/status inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold cursor-default select-none hover:bg-emerald-500/15 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="group-hover/status:hidden font-mono">● CURRENTLY BUILDING</span>
                  <span className="hidden group-hover/status:inline font-bold">Building • Learning • Improving</span>
                </div>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
                  BCA Student & Full Stack Web Developer
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                  Currently pursuing a Bachelor of Computer Applications and working as a Full Stack Web Developer at{" "}
                  <a
                    href="https://www.zenviqdigital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:underline font-bold inline-flex items-center gap-0.5"
                  >
                    ZENVIQ Digital
                  </a>
                  , where I contribute to real-world websites and digital solutions.
                </p>
                <p className="text-text-secondary leading-relaxed text-xs sm:text-sm md:text-base">
                  I enjoy turning ideas into clean, responsive and useful digital experiences, with a growing focus on modern web development, SEO, performance and AI-assisted workflows.
                </p>
              </div>

              {/* My Developer DNA */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-brand-accent" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    My Developer DNA
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {developerDna.map((dna) => (
                    <div
                      key={dna.num}
                      className="group/dna p-3 sm:p-3.5 rounded-2xl bg-bg-secondary/40 border border-border-primary/50 hover:border-brand-accent/50 hover:bg-bg-secondary/80 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-start gap-3 cursor-default"
                    >
                      <span className="font-mono font-extrabold text-xs text-brand-accent group-hover/dna:scale-110 transition-transform duration-200 shrink-0 mt-0.5">
                        {dna.num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-brand-accent group-hover/dna:translate-x-0.5 transition-transform duration-200">
                            {dna.icon}
                          </span>
                          <h5 className="text-xs font-bold text-text-primary tracking-tight">
                            {dna.title}
                          </h5>
                        </div>
                        <p className="text-[11px] text-text-muted group-hover/dna:text-text-secondary leading-relaxed mt-1 transition-colors duration-200">
                          {dna.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Chips */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-border-primary/40">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-brand-accent border border-border-primary hover:border-brand-accent/40 transition-colors duration-200">
                ZENVIQ Digital
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary hover:border-brand-accent/40 transition-colors duration-200">
                Govt. Nehru Memorial College
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary hover:border-brand-accent/40 transition-colors duration-200">
                Full-Stack & SEO
              </span>
            </div>
          </motion.div>
        </div>

        {/* Middle Row: "Currently Exploring" & Technology Orbit + Core Engineering Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8">
          
          {/* Card 1 (col-span-5): Currently Exploring & Technology Orbit */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between border-border-primary/80 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <Compass size={16} className="text-brand-accent" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    Currently Exploring
                  </h3>
                </div>
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-0.5 rounded-full border border-brand-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>Learning & Building</span>
                </span>
              </div>

              <div className="space-y-2">
                {[
                  "AI-assisted web workflows & agentic tools",
                  "Modern full-stack React & Next.js architecture",
                  "Developer productivity & automated verification",
                  "SEO indexing & structured schema data",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-xl bg-bg-secondary/40 border border-border-primary/30 text-xs text-text-secondary">
                    <CheckCircle2 size={13} className="text-brand-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technology Orbit Graphic */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Technology Orbit
                  </span>
                  {activeOrbitTech && (
                    <span className="text-[10px] font-mono font-bold text-brand-accent animate-fadeIn">
                      {orbitNodes.find((n) => n.id === activeOrbitTech)?.role}
                    </span>
                  )}
                </div>

                <div className="relative h-28 rounded-2xl bg-bg-secondary/40 border border-border-primary/50 flex items-center justify-center overflow-hidden">
                  {/* Dynamic SVG Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    {orbitNodes.map((node) => (
                      <line
                        key={node.id}
                        x1={node.x1}
                        y1={node.y1}
                        x2={node.x2}
                        y2={node.y2}
                        stroke="var(--brand-accent)"
                        strokeWidth={activeOrbitTech === node.id ? "2" : "1"}
                        strokeDasharray={activeOrbitTech === node.id ? "none" : "3 3"}
                        opacity={activeOrbitTech === node.id ? "0.9" : "0.25"}
                        className="transition-all duration-300"
                      />
                    ))}
                  </svg>

                  {/* Center Node */}
                  <div className="relative z-10 px-3.5 py-1.5 rounded-full bg-brand-accent text-white font-mono font-bold text-[11px] shadow-sm tracking-wider">
                    BUILD
                  </div>

                  {/* Orbiting Satellite Nodes with Hover Interaction */}
                  {orbitNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      onMouseEnter={() => setActiveOrbitTech(node.id)}
                      onMouseLeave={() => setActiveOrbitTech(null)}
                      className={`absolute ${node.pos} px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all duration-200 cursor-pointer ${
                        activeOrbitTech === node.id
                          ? "bg-brand-accent text-white border-brand-accent scale-105 shadow-md"
                          : "bg-bg-card border border-border-primary text-text-secondary hover:border-brand-accent/50"
                      }`}
                    >
                      {node.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (col-span-7): Core Engineering Strengths (Structured Categories, No Fake Bars) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7 glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between border-border-primary/80 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-brand-accent" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    Core Engineering Strengths
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  Full Stack Foundation
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Frontend */}
                <div className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 space-y-1.5 hover:border-brand-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                    <Layers size={13} className="text-brand-accent" />
                    <span>FRONTEND</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    React.js · Next.js · JavaScript · Tailwind CSS · HTML5/CSS3
                  </p>
                </div>

                {/* Backend */}
                <div className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 space-y-1.5 hover:border-brand-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                    <Server size={13} className="text-brand-accent" />
                    <span>BACKEND</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Node.js · Express.js · RESTful APIs · Server Routing
                  </p>
                </div>

                {/* Database */}
                <div className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 space-y-1.5 hover:border-brand-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                    <Database size={13} className="text-brand-accent" />
                    <span>DATABASE</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    MySQL · MongoDB · Relational Schema Modeling
                  </p>
                </div>

                {/* Workflow */}
                <div className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 space-y-1.5 hover:border-brand-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                    <Settings size={13} className="text-brand-accent" />
                    <span>WORKFLOW</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Git · GitHub · VS Code · Antigravity AI · CI/CD
                  </p>
                </div>
              </div>

              {/* "How I Think" Mindset Flow */}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-2">
                  How I Think & Build
                </span>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50 text-[11px] font-semibold text-text-secondary flex-wrap gap-2">
                  <span className="text-text-primary">USER FIRST</span>
                  <span className="text-brand-accent">→</span>
                  <span className="text-text-primary">CLEAN UI</span>
                  <span className="text-brand-accent">→</span>
                  <span className="text-text-primary">SOLID CODE</span>
                  <span className="text-brand-accent">→</span>
                  <span className="text-text-primary">PERFORMANCE</span>
                  <span className="text-brand-accent">→</span>
                  <span className="text-brand-accent font-bold">REAL-WORLD VALUE</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Area: "What I Build" Interactive Chips + Developer Signature */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border-border-primary/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Workflow size={14} className="text-brand-accent" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                What I Build
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {whatIBuild.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary hover:border-brand-accent/50 hover:text-brand-accent hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default select-none shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Developer Signature Statement */}
          <div className="p-4 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 text-center md:text-right shrink-0 max-w-xs">
            <span className="text-xs font-bold text-text-primary block tracking-tight">
              &ldquo;Build with curiosity. Ship with purpose. Keep improving.&rdquo;
            </span>
            <span className="text-[10px] font-mono text-brand-accent block mt-1">
              — Kuldeep Silu
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
