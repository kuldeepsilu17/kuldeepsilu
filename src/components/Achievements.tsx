"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Award, CheckCircle, Code2, Hourglass, MessageSquare } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-semibold text-text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const stats = [
    { label: "Completed Projects", value: 12, suffix: "+", icon: <CheckCircle className="text-emerald-500" size={16} /> },
    { label: "Technologies Mastered", value: 14, suffix: "", icon: <Code2 className="text-indigo-500" size={16} /> },
    { label: "GitHub Commits", value: 450, suffix: "+", icon: <Award className="text-violet-500" size={16} /> },
    { label: "Coding Practice Hours", value: 1500, suffix: "+", icon: <Hourglass className="text-pink-500" size={16} /> },
  ];

  const testimonials = [
    {
      quote: "Kuldeep's training performance is exemplary. His quick grasp of complex full stack paradigms and clean CSS layout capabilities is highly professional.",
      author: "Ducat Lead Instructor",
      role: "Ducat Training Center",
    },
    {
      quote: "Demonstrates high skill in problem-solving and structured algorithms. Kuldeep's portfolio structure is visually outstanding and responsive.",
      author: "Academic Supervisor",
      role: "Gov. Nehru Memorial College",
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
            Stats & Testimonials
          </h2>
        </div>

        {/* Bento Grid: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Row 1, Card 1: Completed Projects (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary self-start mb-4 group-hover:scale-105 transition-transform duration-300">
              {stats[0].icon}
            </div>
            <div>
              <AnimatedNumber value={stats[0].value} suffix={stats[0].suffix} />
              <p className="text-xs font-semibold text-text-muted mt-2">
                {stats[0].label}
              </p>
            </div>
          </motion.div>

          {/* Row 1, Card 2: Tech Mastered (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary self-start mb-4 group-hover:scale-105 transition-transform duration-300">
              {stats[1].icon}
            </div>
            <div>
              <AnimatedNumber value={stats[1].value} suffix={stats[1].suffix} />
              <p className="text-xs font-semibold text-text-muted mt-2">
                {stats[1].label}
              </p>
            </div>
          </motion.div>

          {/* Row 1, Card 3: Testimonial 1 (col-span-2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-text-muted pointer-events-none">
              <MessageSquare size={80} className="opacity-5" />
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-text-secondary italic leading-relaxed text-xs sm:text-sm">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-sm text-text-primary tracking-tight">
                  {testimonials[0].author}
                </h4>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mt-0.5">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2, Card 4: Testimonial 2 (col-span-2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-text-muted pointer-events-none">
              <MessageSquare size={80} className="opacity-5" />
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-text-secondary italic leading-relaxed text-xs sm:text-sm">
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-sm text-text-primary tracking-tight">
                  {testimonials[1].author}
                </h4>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mt-0.5">
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2, Card 5: GitHub Commits (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary self-start mb-4 group-hover:scale-105 transition-transform duration-300">
              {stats[2].icon}
            </div>
            <div>
              <AnimatedNumber value={stats[2].value} suffix={stats[2].suffix} />
              <p className="text-xs font-semibold text-text-muted mt-2">
                {stats[2].label}
              </p>
            </div>
          </motion.div>

          {/* Row 2, Card 6: Coding Hours (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary self-start mb-4 group-hover:scale-105 transition-transform duration-300">
              {stats[3].icon}
            </div>
            <div>
              <AnimatedNumber value={stats[3].value} suffix={stats[3].suffix} />
              <p className="text-xs font-semibold text-text-muted mt-2">
                {stats[3].label}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
