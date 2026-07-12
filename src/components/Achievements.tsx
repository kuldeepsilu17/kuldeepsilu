"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const stats = [
    { label: "Completed Projects", value: 12, suffix: "+", icon: <CheckCircle className="text-emerald-500" size={20} /> },
    { label: "Technologies Mastered", value: 14, suffix: "", icon: <Code2 className="text-indigo-500" size={20} /> },
    { label: "GitHub Commits", value: 450, suffix: "+", icon: <Award className="text-violet-500" size={20} /> },
    { label: "Coding Practice Hours", value: 1500, suffix: "+", icon: <Hourglass className="text-pink-500" size={20} /> },
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

  return (
    <section id="achievements" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-y border-border-primary">
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
            05 / Milestones
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-primary">
            Stats & Testimonials
          </h2>
        </div>

        {/* Animated Counter Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={stat.label}
              className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-xs sm:text-sm font-semibold text-text-muted mt-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={test.author}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 text-text-muted pointer-events-none">
                <MessageSquare size={100} className="opacity-10" />
              </div>
              <div className="relative z-10 space-y-6">
                <p className="text-text-secondary italic leading-relaxed text-sm md:text-base">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div>
                  <h4 className="font-extrabold text-text-primary tracking-tight">
                    {test.author}
                  </h4>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-1">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
