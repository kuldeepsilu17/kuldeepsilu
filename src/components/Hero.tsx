"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-8 sm:pt-24 sm:pb-12"
    >
      
      {/* Ambient Spotlight Colors */}
      <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 md:space-y-6 max-w-4xl w-full"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-border-primary bg-bg-card backdrop-blur-sm shadow-xs hover:border-brand-accent/30 hover:shadow-md transition-all duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-text-secondary">
              Available for Freelance & Full-time Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary"
          >
            Kuldeep Silu
          </motion.h1>

          {/* Subheading */}
          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-neutral-950 via-indigo-950 to-indigo-600 dark:from-white dark:via-neutral-200 dark:to-indigo-400 bg-clip-text text-transparent">
              Full Stack Web Developer
            </h2>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border-primary bg-bg-card text-xs sm:text-sm font-medium text-text-secondary hover:border-brand-accent/30 transition-all duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently @ <a href="https://www.zenviqdigital.in/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline font-semibold inline-flex items-center gap-0.5">ZENVIQ Digital</a></span>
            </div>
            <p className="text-sm md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Building modern, responsive & SEO-friendly web experiences for businesses and real-world products. Focused on clean architecture, performance, and delightful user interfaces.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Link
              href="#projects"
              className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-hover text-white font-bold shadow-md hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center"
            >
              <span>View Projects</span>
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full border border-border-primary bg-bg-card/80 hover:bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-brand-accent/40 hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto text-center font-semibold"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animated Geometric Art */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-1/4 left-10 md:left-24 w-12 md:w-20 h-12 md:h-20 rounded-2xl border border-brand-accent/20 dark:border-brand-accent/10 rotate-12 hidden sm:block pointer-events-none"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-1/4 right-10 md:right-24 w-16 md:w-24 h-16 md:h-24 rounded-3xl border border-brand-accent/20 dark:border-brand-accent/10 -rotate-12 hidden sm:block pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
}
