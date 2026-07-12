"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Sparkles } from "lucide-react";

export default function Experience() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="experience" className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            04 / Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Experience & Education
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Ducat Trainee (col-span-2) */}
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

          {/* Card 2: BCA studies (col-span-1) */}
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

          {/* Card 3: Personal projects (col-span-3) */}
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
