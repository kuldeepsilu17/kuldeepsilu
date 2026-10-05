"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Brain, Code } from "lucide-react";
import Image from "next/image";

export default function About() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const progressSkills = [
    { name: "Frontend Development", level: "Proficient", value: 85 },
    { name: "Backend Development", level: "Familiar", value: 70 },
    { name: "Database Systems", level: "Familiar", value: 65 },
    { name: "Problem Solving", level: "Strong", value: 80 },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-transparent relative overflow-hidden border-y border-border-primary">
      {/* Background spotlights */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            01 / Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            About Me
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Box 1: Profile Photo Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 glass-panel p-4 md:p-6 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[260px] md:min-h-[320px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-square bg-bg-secondary border border-border-primary/50">
              <Image
                src="/image/kuldeep-silu.jpg"
                alt="Kuldeep Silu"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>
          
          {/* Box 2: BCA Education & Intro */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-text-muted pointer-events-none">
              <BookOpen size={120} className="opacity-10" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-brand-accent uppercase">
                  <Brain size={14} />
                  <span>Academic Journey</span>
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                  BCA Student & Full Stack Web Developer
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  Currently pursuing a Bachelor of Computer Applications (BCA) at Government Nehru Memorial College (MGSU). I currently work as a Full Stack Web Developer at <a href="https://www.zenviqdigital.in/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline font-semibold">ZENVIQ Digital</a>, where I contribute to real-world websites and digital solutions.
                </p>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  Passionate about clean code architecture, intuitive UI/UX design, SEO best practices, and exploring AI-assisted web workflows to engineer reliable digital products.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary border border-border-primary text-brand-accent hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  ZENVIQ Digital
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary border border-border-primary text-text-secondary hover:text-text-primary hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  Govt. Nehru Memorial College
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary border border-border-primary text-text-secondary hover:text-text-primary hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  Full-Stack & SEO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Currently Building Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-brand-accent uppercase">
                  Learning & Building
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                Currently Building
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                Exploring AI-powered web applications and modern full-stack architectures. Experimenting with intelligent agents, interactive audio engines, and next-gen developer tooling.
              </p>
            </div>

            <div className="pt-6 border-t border-border-primary/50 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-bg-secondary text-text-secondary border border-border-primary/40 hover:border-brand-accent/40 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default">Next.js 16</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-bg-secondary text-text-secondary border border-border-primary/40 hover:border-brand-accent/40 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default">AI Workflows</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-bg-secondary text-text-secondary border border-border-primary/40 hover:border-brand-accent/40 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default">TypeScript</span>
            </div>
          </motion.div>

          {/* Box 4: Skills & Core Focus */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-brand-accent uppercase">
                  <Code size={14} />
                  <span>Technical Foundations</span>
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  Core Engineering Strengths
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Focused on scalable web architectures, clean responsive component libraries, secure server routes, and fast-loading web applications.
                </p>
              </div>

              {/* Progress bars with scroll animations */}
              <div className="space-y-4">
                {progressSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary">{skill.name}</span>
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{skill.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-bg-secondary border border-border-primary/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        className="h-full rounded-full bg-brand-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
