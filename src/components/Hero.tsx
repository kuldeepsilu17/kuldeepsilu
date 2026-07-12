"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-border-primary bg-bg-card backdrop-blur-sm shadow-sm">
            <Sparkles size={14} className="text-brand-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-text-secondary uppercase">
              Available for Freelance & Full-time Roles
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
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-text-primary to-text-muted bg-clip-text text-transparent">
              Full Stack Web Developer
            </h2>
            <p className="text-sm md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              I build high-end web applications with clean code, modern architectures, and delightful interactive details. Specializing in React, Next.js, and TypeScript.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Link
              href="#projects"
              className="group flex items-center space-x-1.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-accent hover:bg-brand-hover text-white font-bold shadow-md hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-border-primary bg-bg-card backdrop-blur-md text-text-secondary font-semibold hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto text-center"
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
