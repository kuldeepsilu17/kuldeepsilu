"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code, X, Sparkles, CheckCircle2, LayoutTemplate } from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  live: string;
  github?: string;
  caseStudy: {
    challenge: string;
    solution: string;
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
    description: "A professional healthcare and surgical products website designed to showcase medical products and provide an easy inquiry experience for customers.",
    tech: ["Next.js", "React", "Tailwind CSS", "WhatsApp API", "SEO"],
    features: [
      "Comprehensive medical & surgical product catalog",
      "Categorized orthopedic & hospital supplies",
      "Direct WhatsApp and call-to-order inquiry integration",
      "SEO-focused landing architecture and fast page load"
    ],
    image: "/image/ganpati-lifecare.png",
    live: "https://www.ganpatilifecare.com/",
    caseStudy: {
      challenge: "Creating a reliable, accessible digital presence for a healthcare supply business to showcase medical equipment and orthopedic products to clinics and buyers with seamless direct inquiry.",
      solution: "Engineered a clean, SEO-optimized business website with Next.js and Tailwind CSS. Built structured product listings and direct WhatsApp inquiry buttons for frictionless customer communication.",
      keyFeatures: [
        "Product catalog with clear categorization",
        "Quick customer inquiry channels via WhatsApp and direct call",
        "Optimized local business SEO tags and structured data",
        "Mobile-first responsive architecture"
      ],
      technology: ["Next.js", "React", "Tailwind CSS", "JavaScript", "SEO"],
      result: "A fast, professional business platform that effectively presents medical supplies and streamlines inquiry generation for local and regional healthcare buyers."
    }
  }
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

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
              03 / Featured Project
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
              Real-world project I&apos;ve <br className="hidden md:block" /> designed and developed.
            </h2>
          </div>
          <p className="text-text-secondary max-w-lg font-medium text-sm md:text-base leading-relaxed">
            A production business platform engineered with modern web technologies, performance optimization, and seamless user experience.
          </p>
        </div>

        {/* Featured Project Showcase */}
        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group"
            >
              {/* Project Image Structure with direct clickable link */}
              <div className={`w-full lg:w-3/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-panel p-2 sm:p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 relative overflow-hidden group/image cursor-pointer"
                  title={`Open ${project.title} live website`}
                >
                  <div className="w-full aspect-[4/3] sm:aspect-video relative overflow-hidden rounded-2xl bg-bg-secondary border border-border-primary/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover/image:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 dark:bg-neutral-950/40 group-hover/image:bg-neutral-950/0 transition-colors duration-500" />
                    
                    {/* Hover Visit Website badge */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-neutral-950/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg pointer-events-none">
                      <span>Visit Live Website</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Content Structure */}
              <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 relative">
                {/* Number Watermark */}
                <span className="absolute -top-12 -left-6 md:-top-16 md:-left-10 text-8xl md:text-9xl font-extrabold text-brand-accent/5 dark:text-brand-accent/5 pointer-events-none select-none">
                  {project.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm font-bold text-brand-accent">
                      {project.number} /
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-text-muted uppercase bg-bg-secondary px-3 py-1 rounded-full border border-border-primary/50">
                      <LayoutTemplate size={12} />
                      <span>{project.category}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Highlights</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold border border-border-primary bg-bg-secondary text-text-secondary group-hover:border-brand-accent/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 relative z-10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-hover text-white shadow-md hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 text-xs sm:text-sm font-bold cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-border-primary bg-bg-card hover:bg-bg-secondary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 text-xs sm:text-sm font-semibold cursor-pointer"
                  >
                    <Sparkles size={14} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 group-hover/btn:text-brand-accent transition-all duration-200" />
                    <span>View Case Study</span>
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center space-x-1.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-border-primary bg-transparent text-text-secondary hover:text-brand-accent hover:border-brand-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm font-semibold"
                    >
                      <Code size={14} className="group-hover/btn:scale-110 transition-transform duration-200" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-border-primary z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-border-primary bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-primary transition-all duration-200 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pb-6 border-b border-border-primary">
                <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                  <Sparkles size={12} />
                  <span>Engineering Case Study</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                  {selectedProject.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Body */}
              <div className="py-6 space-y-6 text-sm sm:text-base">
                {/* The Challenge */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                    01 • The Problem & Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed bg-bg-secondary/50 p-4 rounded-2xl border border-border-primary/50 text-xs sm:text-sm">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                    02 • The Technical Architecture & Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed bg-bg-secondary/50 p-4 rounded-2xl border border-border-primary/50 text-xs sm:text-sm">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                    03 • Key Architectural Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {selectedProject.caseStudy.keyFeatures.map((kf, i) => (
                      <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-bg-secondary/30 border border-border-primary/30 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Outcome */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-text-muted">
                    04 • Result & Business Impact
                  </h4>
                  <p className="text-text-primary font-medium leading-relaxed bg-brand-accent/5 p-4 rounded-2xl border border-brand-accent/20 text-xs sm:text-sm">
                    {selectedProject.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-border-primary flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.caseStudy.technology.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-md hover:scale-102 active:scale-98 transition-all duration-200"
                >
                  <span>Open Live Application</span>
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
