"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Sparkles, FileText, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const responsibilities = [
    "Developing responsive websites",
    "Building modern React / Next.js interfaces",
    "Creating reusable UI components",
    "Implementing responsive layouts",
    "Working with Tailwind CSS",
    "Improving website performance",
    "Implementing SEO-friendly structures",
    "Working on real-world business websites",
    "Maintaining and improving production websites"
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            02 / Work Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-3">
            Current Experience & Timeline
          </h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full border border-border-primary bg-bg-card hover:bg-bg-secondary text-text-secondary hover:text-brand-accent hover:border-brand-accent/30 text-xs font-semibold shadow-xs hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <FileText size={13} />
            <span>Download / View Resume</span>
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: ZENVIQ Digital (Current Professional Experience - col-span-3) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-brand-accent/20"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Briefcase size={160} />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Header: Logo, Status Badge, Period & Location */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Official ZENVIQ Logo Container */}
                  <a
                    href="https://www.zenviqdigital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-3.5 py-2 rounded-2xl border border-border-primary/80 shadow-xs inline-flex items-center justify-center hover:scale-105 transition-transform duration-200"
                    title="Visit ZENVIQ Digital"
                  >
                    <Image
                      src="/image/zenviq-logo.svg"
                      alt="ZENVIQ Digital Official Logo"
                      width={112}
                      height={34}
                      className="h-6 w-auto object-contain"
                    />
                  </a>
                  
                  {/* Visual Status Indicator */}
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Currently Working</span>
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted">
                  <span className="inline-flex items-center space-x-1">
                    <MapPin size={13} className="text-text-muted" />
                    <span>Hanumangarh, Rajasthan / India</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 font-semibold text-text-primary">
                    <Calendar size={13} className="text-brand-accent" />
                    <span>2026 — Present</span>
                  </span>
                </div>
              </div>

              {/* Company & Role Details */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                    Full Stack Web Developer
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <a
                    href="https://www.zenviqdigital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-accent hover:underline inline-flex items-center gap-1"
                  >
                    <span>ZENVIQ Digital</span>
                  </a>
                  <span className="text-text-muted/50">•</span>
                  <span className="text-xs sm:text-sm font-medium text-text-muted">
                    Web • SEO • AI • Digital Solutions
                  </span>
                </div>
              </div>

              {/* Company Description */}
              <div className="p-4 rounded-2xl bg-bg-secondary/60 border border-border-primary/50 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p className="font-medium text-text-primary mb-1">
                  About the Company:
                </p>
                <p>
                  ZENVIQ Digital is a web, SEO and AI agency focused on building modern websites, digital solutions, e-commerce experiences and AI-powered solutions for businesses.
                </p>
              </div>

              {/* Role Summary */}
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Currently contributing to modern web development, responsive interfaces, SEO-focused websites and real-world digital projects.
              </p>

              {/* Responsibilities */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Key Responsibilities & Contributions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-secondary">
                  {responsibilities.map((resp) => (
                    <div key={resp} className="flex items-start space-x-2">
                      <CheckCircle2 size={15} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Row: Tech tags & CTA */}
            <div className="pt-6 mt-6 relative z-10 border-t border-border-primary/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">Next.js</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">React</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">JavaScript</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">SEO</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary/50">Git/GitHub</span>
              </div>

              <a
                href="https://www.zenviqdigital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-sm hover:shadow-md hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer flex-shrink-0"
              >
                <span>Visit ZENVIQ Digital</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
          
          {/* Card 2: Ducat Trainee (col-span-2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Briefcase size={120} />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Briefcase size={12} />
                  <span>Professional Training</span>
                </span>
                
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-text-muted">
                  <Calendar size={12} />
                  <span>2025 - 2026</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary tracking-tight">
                  Full Stack Web Development Trainee
                </h3>
                <h4 className="text-sm font-semibold text-text-muted mt-1">
                  Ducat – Gurgaon
                </h4>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                Underwent intensive hands-on professional training in full-stack architectures. Focused on HTML, CSS, JavaScript, React, Node.js, Express, databases, and core Python programming.
              </p>
            </div>

            <div className="pt-6 relative z-10 border-t border-border-primary/50 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">Express APIs</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">React Modules</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">Python Core</span>
            </div>
          </motion.div>

          {/* Card 3: BCA studies (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <GraduationCap size={100} />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <GraduationCap size={12} />
                  <span>Academic</span>
                </span>
                
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-text-muted">
                  <Calendar size={12} />
                  <span>2024 - Pres</span>
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-primary tracking-tight">
                  Bachelor of Computer Applications
                </h3>
                <h4 className="text-xs font-semibold text-text-muted mt-1">
                  Government Nehru Memorial College
                </h4>
              </div>

              <p className="text-text-secondary text-xs leading-relaxed">
                Pursuing university computer applications studies. Re-enforces algorithms, object-oriented concepts, relational database systems, and logic structures.
              </p>
            </div>

            <div className="pt-6 relative z-10 border-t border-border-primary/50 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-bg-secondary text-text-secondary">MGSU Affiliated</span>
            </div>
          </motion.div>

          {/* Card 4: Personal projects (col-span-3) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Sparkles size={140} />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Self-Directed Work</span>
                </span>
                
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-text-muted">
                  <Calendar size={12} />
                  <span>2024 - Present</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary tracking-tight">
                  Web Development Prototyping
                </h3>
                <h4 className="text-sm font-semibold text-text-muted mt-1">
                  Academic & Personal Projects
                </h4>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                Designed, tested, and shipped multiple beginner-to-intermediate level software applications. Focused heavily on grid modularity, light/dark responsiveness, custom theme states, API integrations, and secure SQL database backends.
              </p>
            </div>

            <div className="pt-6 relative z-10 border-t border-border-primary/50 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">UI Transitions</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">Custom cursors</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">SQL schemas</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-bg-secondary text-text-secondary">Clean layouts</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
