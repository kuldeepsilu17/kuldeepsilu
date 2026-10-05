"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Sparkles,
  ChevronDown,
  Globe,
  Layers,
  Zap,
  GitBranch,
  Cpu,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [zenviqHovered, setZenviqHovered] = useState(false);
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Mouse position for subtle interactive parallax/glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orbRotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const orbRotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);
  const cardParallaxX = useTransform(smoothMouseX, [-400, 400], [-12, 12]);
  const cardParallaxY = useTransform(smoothMouseY, [-400, 400], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Stack pills with verified technologies and roles
  const stackPills = [
    { name: "React", role: "Frontend UI", icon: <Layers size={13} /> },
    { name: "Next.js", role: "Full-Stack & SSR", icon: <Zap size={13} /> },
    { name: "JavaScript", role: "Core Logic", icon: <Code2 size={13} /> },
    { name: "Tailwind CSS", role: "Design System", icon: <Sparkles size={13} /> },
    { name: "Node.js", role: "Backend Runtime", icon: <Cpu size={13} /> },
    { name: "Git", role: "Version Control", icon: <GitBranch size={13} /> },
    { name: "GitHub", role: "Collaboration", icon: <Terminal size={13} /> },
    { name: "SEO", role: "Search Optimization", icon: <Globe size={13} /> },
  ];

  // Quick facts row
  const quickFacts = [
    { label: "BCA Student", detail: "MGSU Affiliated" },
    { label: "Full Stack Developer", detail: "Modern Web Solutions" },
    { label: "ZENVIQ Digital", detail: "Real-world Engineering" },
    { label: "SEO-focused", detail: "Performance & Indexing" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden bg-transparent pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8"
    >
      {/* Background Interactive Ambient Spotlight */}
      <div
        className="absolute top-[15%] left-[20%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-brand-accent/8 dark:bg-brand-accent/5 blur-[100px] md:blur-[140px] pointer-events-none -z-10"
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-indigo-600/8 dark:bg-indigo-600/4 blur-[100px] md:blur-[140px] pointer-events-none -z-10"
      />

      {/* Decorative Subtle Code Fragments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none text-[11px] font-mono text-text-muted/15 dark:text-text-muted/10 -z-10" aria-hidden="true">
        <span className="absolute top-24 left-8 sm:left-16 hidden sm:block">&lt;Developer /&gt;</span>
        <span className="absolute top-36 right-12 sm:right-24 hidden md:block">const build = true;</span>
        <span className="absolute bottom-28 left-12 sm:left-24 hidden md:block">npm run build</span>
        <span className="absolute bottom-36 right-16 sm:right-32 hidden sm:block">git push origin main</span>
      </div>

      {/* Interactive Developer Tech Orbit Graphic (Behind Center Text) */}
      <motion.div
        style={{ rotateX: orbRotateX, rotateY: orbRotateY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[640px] h-[340px] sm:h-[500px] md:h-[640px] pointer-events-none -z-10 opacity-35 dark:opacity-25"
        aria-hidden="true"
      >
        {/* Outer Orbit Rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-brand-accent/20 animate-spin-slow" style={{ animationDuration: "60s" }} />
        <div className="absolute inset-12 sm:inset-16 rounded-full border border-border-primary/40" />

        {/* Orbit Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="50%" y2="8%" stroke="var(--brand-accent)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="92%" y2="50%" stroke="var(--brand-accent)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="50%" y2="92%" stroke="var(--brand-accent)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="8%" y2="50%" stroke="var(--brand-accent)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Center Minimal Developer Symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-bg-card/40 border border-brand-accent/30 backdrop-blur-md flex items-center justify-center font-mono font-bold text-xs text-brand-accent shadow-sm">
          &lt;/&gt;
        </div>

        {/* Orbit Satellite Nodes */}
        <span className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-bg-card/70 border border-border-primary/60 text-[10px] font-mono text-text-muted">
          React
        </span>
        <span className="absolute top-1/2 right-2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-bg-card/70 border border-border-primary/60 text-[10px] font-mono text-text-muted">
          Next.js
        </span>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-bg-card/70 border border-border-primary/60 text-[10px] font-mono text-text-muted">
          Node.js
        </span>
        <span className="absolute top-1/2 left-2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-bg-card/70 border border-border-primary/60 text-[10px] font-mono text-text-muted">
          Git
        </span>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl w-full flex flex-col items-center"
        >
          {/* Top Availability Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-border-primary/80 bg-bg-card/90 backdrop-blur-md shadow-2xs hover:border-brand-accent/40 hover:shadow-md transition-all duration-300 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-text-secondary uppercase">
                Available for Freelance & Full-time Opportunities
              </span>
            </div>
          </motion.div>

          {/* Name & Title Block */}
          <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-text-primary uppercase select-none leading-none">
              Kuldeep{" "}
              <span className="relative inline-block bg-gradient-to-r from-brand-accent via-indigo-500 to-brand-accent bg-clip-text text-transparent">
                Silu
                {/* Subtle animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent origin-center"
                />
              </span>
            </h1>

            <div className="space-y-1 sm:space-y-1.5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary flex items-center justify-center gap-2">
                <span>Full Stack Web Developer</span>
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-text-muted uppercase font-mono">
                Frontend • Backend • SEO • Digital Experiences
              </p>
            </div>
          </motion.div>

          {/* Dynamic Work Status Badge */}
          <motion.div variants={itemVariants}>
            <div
              onMouseEnter={() => setZenviqHovered(true)}
              onMouseLeave={() => setZenviqHovered(false)}
              className="group/zenviq inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-primary bg-bg-card text-xs sm:text-sm font-medium text-text-secondary hover:border-brand-accent/40 hover:bg-bg-secondary transition-all duration-300 cursor-default shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {!zenviqHovered ? (
                <span>
                  Currently @{" "}
                  <a
                    href="https://www.zenviqdigital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:underline font-bold inline-flex items-center gap-0.5"
                  >
                    ZENVIQ Digital
                  </a>
                </span>
              ) : (
                <span className="text-text-primary font-bold animate-fadeIn">
                  Building Real-World Digital Solutions
                </span>
              )}
            </div>
          </motion.div>

          {/* Core Introduction Paragraph & Signature */}
          <motion.div variants={itemVariants} className="space-y-2 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-medium">
              Building modern, responsive & SEO-friendly web experiences for businesses and real-world products. Focused on clean architecture, performance, and delightful user interfaces.
            </p>
            <p className="text-xs sm:text-sm text-text-muted italic">
              &ldquo;I build useful things, keep learning, and turn ideas into real products.&rdquo;
            </p>
          </motion.div>

          {/* Developer Stack Pills (Interactive) */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl pt-1">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {stackPills.map((tech) => (
                <button
                  key={tech.name}
                  type="button"
                  onMouseEnter={() => setActiveStack(tech.name)}
                  onMouseLeave={() => setActiveStack(null)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-default select-none ${
                    activeStack === tech.name
                      ? "bg-brand-accent text-white border-brand-accent shadow-md -translate-y-0.5"
                      : "bg-bg-card border border-border-primary text-text-secondary hover:border-brand-accent/40 hover:text-text-primary hover:-translate-y-0.5"
                  }`}
                >
                  <span className={activeStack === tech.name ? "text-white" : "text-brand-accent"}>
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                  {activeStack === tech.name && (
                    <span className="text-[10px] font-mono opacity-90 border-l border-white/30 pl-1 ml-0.5">
                      {tech.role}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Link
              href="#projects"
              className="group flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-hover text-white font-bold shadow-md hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} strokeWidth={2.2} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            <Link
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 rounded-full border border-border-primary bg-bg-card/90 hover:bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-brand-accent/50 hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center font-semibold"
            >
              <span>Let&apos;s Connect</span>
              <ExternalLink size={14} strokeWidth={2} className="text-brand-accent" />
            </Link>
          </motion.div>

          {/* Quick Facts Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium text-text-muted"
          >
            {quickFacts.map((fact, index) => (
              <div key={fact.label} className="inline-flex items-center gap-2 group/fact cursor-default">
                <span className="group-hover/fact:text-brand-accent transition-colors font-semibold text-text-secondary">
                  {fact.label}
                </span>
                {index < quickFacts.length - 1 && (
                  <span className="text-border-primary">•</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Floating Interactive Status Panels (Desktop / Tablet) */}
      <motion.div
        style={{ x: cardParallaxX, y: cardParallaxY }}
        className="hidden lg:block absolute top-[28%] left-8 xl:left-14 pointer-events-auto"
      >
        <div className="glass-panel p-4 rounded-2xl max-w-[210px] space-y-2 border-border-primary/80 shadow-lg hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-wider">
              BUILDING RIGHT NOW
            </span>
          </div>
          <p className="text-xs font-bold text-text-primary leading-snug">
            Modern Web Experiences + AI-assisted workflows
          </p>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted pt-1 border-t border-border-primary/40">
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>SEO</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ x: cardParallaxX, y: cardParallaxY }}
        className="hidden lg:block absolute top-[30%] right-8 xl:right-14 pointer-events-auto"
      >
        <a
          href="https://www.ganpatilifecare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel p-4 rounded-2xl max-w-[210px] space-y-2 border-border-primary/80 shadow-lg hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 block group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                LIVE PROJECT
              </span>
            </div>
            <ExternalLink size={12} className="text-text-muted group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </div>
          <div>
            <span className="text-xs font-bold text-text-primary block group-hover:text-brand-accent transition-colors">
              Ganpati Lifecare
            </span>
            <span className="text-[11px] text-text-muted block">
              Healthcare Platform
            </span>
          </div>
          <span className="text-[10px] font-bold text-brand-accent inline-flex items-center gap-1 pt-1 border-t border-border-primary/40">
            <span>Open Project</span>
            <span>↗</span>
          </span>
        </a>
      </motion.div>

      {/* Bottom Creative "Scroll to Explore" Element */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 cursor-pointer group select-none"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted group-hover:text-brand-accent transition-colors uppercase flex items-center gap-1">
          <span>SCROLL TO EXPLORE</span>
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-border-primary to-brand-accent/60 mt-1.5 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-2 bg-brand-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
