"use client";

import { motion, Variants, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { CheckCircle2, Code2, FolderGit2, Calendar, Sparkles, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const milestones = [
    {
      label: "Featured Project",
      value: 1,
      suffix: "+",
      caption: "Healthcare & business platforms",
      icon: <FolderGit2 className="text-brand-accent" size={18} />
    },
    {
      label: "Core Technologies",
      value: 6,
      suffix: "+",
      caption: "React, Next.js, Node, MySQL & Tailwind",
      icon: <Code2 className="text-indigo-500" size={18} />
    },
    {
      label: "Developer Portfolio",
      value: 1,
      suffix: "",
      caption: "Polished responsive digital presence",
      icon: <CheckCircle2 className="text-emerald-500" size={18} />
    },
    {
      label: "Building for Web",
      value: 2024,
      suffix: "",
      caption: "Started hands-on full-stack engineering",
      icon: <Calendar className="text-violet-500" size={18} />
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="achievements" className="py-12 md:py-20 bg-transparent relative overflow-hidden border-y border-border-primary">
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            05 / Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Key Milestones
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Honest, verifiable milestones reflecting dedicated web development practice and real-world project building.
          </p>
        </div>

        {/* Bento Grid: 4-Column Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 relative group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover:scale-110 group-hover:rotate-6 group-hover:border-brand-accent/30 group-hover:bg-brand-soft transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="space-y-1.5">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
                <h3 className="text-sm font-bold text-text-primary group-hover:text-brand-accent transition-colors duration-200">
                  {item.label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Highlight Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 max-w-6xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-wider text-brand-accent uppercase">
              <Sparkles size={14} className="animate-pulse" />
              <span>Engineering Standard</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-text-primary">
              Committed to Modern Best Practices
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Every project is constructed with production standards in mind: semantic HTML, responsive viewport engineering, accessible contrast, optimized asset delivery, and maintainable TypeScript code.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-text-secondary bg-bg-secondary px-4 py-2.5 rounded-2xl border border-border-primary shrink-0">
            <Terminal size={14} className="text-brand-accent" />
            <span>Ready for Production</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
