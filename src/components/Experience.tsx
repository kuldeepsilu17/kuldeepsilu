"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const timelineItems = [
    {
      type: "training",
      title: "Full Stack Web Development Trainee",
      organization: "Ducat – Gurgaon",
      date: "2025 - 2026",
      description: "Underwent intensive hands-on professional training in full-stack architectures. Focused on HTML, CSS, JavaScript, React, Node.js, Express, databases, and core Python AI programming models.",
      icon: <Briefcase size={16} />,
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Government Nehru Memorial College",
      date: "2024 - Present",
      description: "Currently pursuing a bachelor degree in computer applications. Studies cover algorithm patterns, object-oriented concepts, relational database schemes, operating system functions, and interactive frontend templates.",
      icon: <GraduationCap size={16} />,
    },
    {
      type: "projects",
      title: "Web Development Prototyping",
      organization: "Academic & Personal Projects",
      date: "2024 - Present",
      description: "Designed, tested, and shipped beginner-to-intermediate level software. Focused on modularity, clean grids, responsiveness, custom states, and basic full-stack database integrations.",
      icon: <Briefcase size={16} />,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
            04 / Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-primary">
            Experience & Education
          </h2>
        </div>

        {/* Timeline Path container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar */}
          <div className="timeline-line" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-start md:items-center relative ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-[16px] md:left-1/2 top-1.5 md:top-auto md:-translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full border border-border-primary bg-bg-card text-brand-accent shadow-sm">
                  {item.icon}
                </div>

                {/* Card Container block */}
                <div className="w-full md:w-[calc(50%-24px)] ml-12 md:ml-0">
                  <div className="glass-panel p-6 md:p-8 rounded-3xl hover:shadow-lg transition-all duration-300 relative group">
                    {/* Tiny visual card corner gradient */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center space-x-2 text-xs font-mono text-text-muted mb-3">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-text-primary tracking-tight mb-1">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-sm font-semibold text-brand-accent mb-4">
                      {item.organization}
                    </h4>

                    <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty block on the opposite side to balance layout on desktop */}
                <div className="hidden md:block w-[calc(50%-24px)]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
