"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
  LayoutTemplate,
  Globe,
  Lock,
  ArrowRight,
  Activity,
  Layers,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  badge: string;
  description: string;
  tech: Array<{ name: string; icon?: string }>;
  metrics: Array<{ label: string; value: string }>;
  impacts: string[];
  features: string[];
  image: string;
  live: string;
  github?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    whatIBuilt: Array<{ title: string; desc: string }>;
    keyFeatures: string[];
    technology: string[];
    result: string;
  };
};

const projects: Project[] = [
  {
    id: "ganpati",
    number: "01",
    title: "Ganpati Lifecare",
    category: "Healthcare / Business Website",
    status: "Live Website",
    badge: "LIVE IN PRODUCTION",
    description:
      "A production healthcare website for showcasing surgical products, hospital supplies, and customer inquiry services with a fast, responsive, SEO-focused experience.",
    tech: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "WhatsApp API" },
      { name: "SEO" },
    ],
    metrics: [
      { label: "Featured Project", value: "01" },
      { label: "Production", value: "LIVE" },
      { label: "Business Platform", value: "WEB" },
      { label: "Structured Data", value: "SEO" },
    ],
    impacts: [
      "Product-focused business presence",
      "Responsive customer experience",
      "Direct inquiry workflow via WhatsApp & Call",
      "SEO-focused landing structure",
      "Production-ready Vercel deployment",
    ],
    features: [
      "Comprehensive medical & surgical product catalog",
      "Categorized orthopedic & hospital supplies",
      "Direct WhatsApp and call-to-order inquiry integration",
      "SEO-focused landing architecture and fast page load",
    ],
    image: "/image/ganpati-lifecare.png",
    live: "https://www.ganpatilifecare.com/",
    caseStudy: {
      challenge:
        "Creating a reliable, accessible digital presence for a healthcare supply business to showcase medical equipment and orthopedic products to clinics, hospitals, and regional buyers with seamless direct inquiry.",
      solution:
        "Engineered a clean, SEO-optimized business website with Next.js and Tailwind CSS. Designed structured product listings, responsive navigation, and direct WhatsApp / phone inquiry buttons for frictionless customer communication.",
      whatIBuilt: [
        {
          title: "Responsive UI",
          desc: "Mobile-first adaptive layout with clean touch targets and smooth navigation.",
        },
        {
          title: "SEO Structure",
          desc: "Semantic HTML hierarchy, OpenGraph metadata, and structured local business tags.",
        },
        {
          title: "Product Showcase",
          desc: "Clear categorization for surgical, orthopedic, and hospital equipment.",
        },
        {
          title: "Customer Inquiry Flow",
          desc: "One-tap WhatsApp and direct call-to-order buttons for rapid client inquiries.",
        },
        {
          title: "Fast Page Performance",
          desc: "Server-optimized Next.js rendering and lightweight CSS delivering fast load times.",
        },
        {
          title: "Production Architecture",
          desc: "High-reliability static export and global edge CDN hosting on Vercel.",
        },
      ],
      keyFeatures: [
        "Product catalog with clear categorization",
        "Quick customer inquiry channels via WhatsApp and direct call",
        "Optimized local business SEO tags and structured data",
        "Mobile-first responsive architecture",
      ],
      technology: ["Next.js", "React", "Tailwind CSS", "JavaScript", "WhatsApp API", "SEO"],
      result:
        "A fast, professional business platform that effectively presents medical supplies, strengthens company credibility, and streamlines inquiry generation for local and regional healthcare buyers.",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                03 / FEATURED PROJECT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary max-w-2xl leading-tight">
              Real-world projects I&apos;ve designed and developed.
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card border border-border-primary text-xs font-semibold text-text-secondary shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>01 Project in Focus • Live Website</span>
            </div>
            <p className="text-text-secondary font-medium text-xs sm:text-sm md:text-base leading-relaxed">
              Production-ready digital experiences built with modern technologies, responsive UI, performance optimization, and real business requirements.
            </p>
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        <div className="space-y-16 md:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden border-border-primary/80 hover:border-brand-accent/30 hover:shadow-2xl transition-all duration-300"
            >
              {/* Floating Decorative Project Watermark Number */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 text-8xl sm:text-9xl md:text-[11rem] font-extrabold text-brand-accent/5 dark:text-brand-accent/5 pointer-events-none select-none tracking-tighter">
                {project.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Column: Premium Browser Window Preview */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/browser rounded-2xl sm:rounded-3xl bg-neutral-900 border border-border-primary/80 shadow-xl hover:shadow-2xl hover:shadow-brand-accent/15 hover:border-brand-accent/50 transition-all duration-500 overflow-hidden cursor-pointer"
                    title={`Open ${project.title} live website in new tab`}
                  >
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 text-xs">
                      {/* Window Controls (Red, Yellow, Green) */}
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                      </div>

                      {/* Mock URL Address Bar */}
                      <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300 truncate max-w-[180px] sm:max-w-xs">
                        <Lock size={10} className="text-emerald-400 shrink-0" />
                        <span className="truncate">ganpatilifecare.com</span>
                      </div>

                      {/* Live Badge */}
                      <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE</span>
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-neutral-950">
                      <Image
                        src={project.image}
                        alt={`${project.title} — Healthcare & Surgical Supply Platform`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top group-hover/browser:scale-[1.02] transition-transform duration-500 ease-out"
                        unoptimized
                      />

                      {/* Subtle hover overlay with CTA */}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover/browser:bg-neutral-950/0 transition-colors duration-300" />
                      
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover/browser:opacity-100 transition-all duration-300 translate-y-2 group-hover/browser:translate-y-0 bg-neutral-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/10 pointer-events-none">
                        <span>Open Live Website</span>
                        <ExternalLink size={12} className="text-brand-accent" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right Column: Case Study Details & Information */}
                <div className={`lg:col-span-5 space-y-5 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {/* Category & Status Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-brand-accent">
                        {project.number} /
                      </span>
                      <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-wider text-text-muted uppercase bg-bg-secondary px-3 py-1 rounded-full border border-border-primary/60">
                        <LayoutTemplate size={12} className="text-brand-accent" />
                        <span>{project.category}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Impact Panel */}
                  <div className="p-4 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                      Project Impact & Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                      {project.impacts.map((impact, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-brand-accent mt-0.5 shrink-0" />
                          <span>{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t.name}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary hover:border-brand-accent/50 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shadow-2xs"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-hover text-white shadow-md hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 text-xs sm:text-sm font-bold cursor-pointer"
                    >
                      <span>Live Website</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-border-primary bg-bg-card hover:bg-bg-secondary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      <Sparkles size={14} className="text-brand-accent group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-200" />
                      <span>View Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#12131a] border border-border-primary shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-left"
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full border border-border-primary bg-bg-secondary text-text-muted hover:text-text-primary hover:bg-bg-card hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pb-6 border-b border-border-primary/60 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                    <Sparkles size={12} />
                    <span>Engineering Case Study</span>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live in Production</span>
                  </span>
                </div>

                <h3 id="case-study-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary">
                  {selectedProject.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-medium">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Body */}
              <div className="py-6 space-y-7">
                {/* 01: Business Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-accent">01 /</span>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                      The Business Challenge
                    </h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed bg-bg-secondary/60 p-4 rounded-2xl border border-border-primary/50 text-xs sm:text-sm">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                {/* 02: Technical Architecture & Solution */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-accent">02 /</span>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                      Technical Architecture & Solution
                    </h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed bg-bg-secondary/60 p-4 rounded-2xl border border-border-primary/50 text-xs sm:text-sm">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                {/* 03: What I Built */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-accent">03 /</span>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                      What I Built — Key Engineering Features
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.caseStudy.whatIBuilt.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-bg-secondary/50 border border-border-primary/50 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-brand-accent shrink-0" />
                          <h5 className="text-xs font-bold text-text-primary tracking-tight">
                            {feat.title}
                          </h5>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed pl-5">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 04: Result & Measurable Outcome */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-accent">04 /</span>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                      Result & Business Outcome
                    </h4>
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                    {selectedProject.caseStudy.result}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-border-primary/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.caseStudy.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-md hover:shadow-lg hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  <span>Open Live Website</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
