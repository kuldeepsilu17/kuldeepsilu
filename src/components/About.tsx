"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Brain, Code, Cpu } from "lucide-react";
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
    { name: "Frontend Development", value: 90 },
    { name: "Backend Development", value: 75 },
    { name: "Database Systems", value: 80 },
    { name: "Problem Solving", value: 85 },
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
            className="md:col-span-1 glass-panel p-4 md:p-6 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[220px] md:min-h-[300px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/image/project-manager.jpeg"
                alt="Kuldeep Silu"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
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
                  Pursuing BCA & Exploring AI Integrations
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Currently a Bachelor of Computer Applications (BCA) student at Government Nehru Memorial College (MGSU). I combine academic concepts of computer science with practical, modern industry frameworks.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I love building scalable, interactive user interfaces and exploring how artificial intelligence can make products smarter and more delightful.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary border border-border-primary text-text-secondary">
                  Gov. Nehru Memorial College
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary border border-border-primary text-text-secondary">
                  MGSU Affiliated
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Quick Highlights */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-text-muted pointer-events-none">
              <Cpu size={120} className="opacity-10" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-brand-accent uppercase">
                  <Code size={14} />
                  <span>My Focus</span>
                </span>
                <h3 className="text-xl font-bold text-text-primary leading-tight">
                  Premium Web Systems
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Creating clean layouts, responsive grid patterns, interactive visual details, and secure database backends.
                </p>
              </div>
              <ul className="space-y-3 font-semibold text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>React & Next.js Core</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>Node.js / Express Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>Tailwind CSS & Animations</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Box 4: Skills Indicators */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  Technical Core Capacities
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I dedicate hours every day to mastering code structures. From clean frontends using Next.js to relational databases using MySQL, I construct solid full-stack systems.
                </p>
              </div>

              {/* Progress bars with scroll animations */}
              <div className="space-y-5">
                {progressSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-text-primary">{skill.name}</span>
                      <span className="font-mono text-xs text-text-muted">{skill.value}%</span>
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
