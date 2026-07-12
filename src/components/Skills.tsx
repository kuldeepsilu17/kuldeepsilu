"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Globe, Layers, Server, Database, Settings } from "lucide-react";

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", level: "Expert", progress: 90, icon: <Code2 size={16} /> },
    { name: "Next.js", level: "Expert", progress: 88, icon: <Globe size={16} /> },
    { name: "Tailwind CSS", level: "Expert", progress: 95, icon: <Layers size={16} /> },
    { name: "JavaScript", level: "Expert", progress: 90, icon: <Code2 size={16} /> },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Expert", progress: 85, icon: <Server size={16} /> },
    { name: "Express.js", level: "Advanced", progress: 80, icon: <Server size={16} /> },
  ];

  const databaseSkills = [
    { name: "MySQL", level: "Advanced", progress: 80, icon: <Database size={16} /> },
  ];

  const workflowTools = [
    { name: "Git", level: "Advanced", progress: 85, icon: <Settings size={16} /> },
    { name: "GitHub", level: "Advanced", progress: 90, icon: <Settings size={16} /> },
    { name: "VS Code", level: "Expert", progress: 95, icon: <Settings size={16} /> },
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
    <section id="skills" className="py-12 md:py-20 bg-transparent relative overflow-hidden border-y border-border-primary">
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            03 / Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-3">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto font-medium text-sm leading-relaxed">
            A comprehensive overview of backend routing systems, design principles, database models, and developer tools.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Box 1: Frontend Engineering (col-span-2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Layers size={140} />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Code2 size={12} />
                  <span>Frontend Engineering</span>
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-2">
                  Responsive & Interactive Interfaces
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary flex items-center space-x-1.5">
                        <span className="text-brand-accent">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-bg-secondary border border-border-primary/30 overflow-hidden">
                      <div
                        style={{ width: `${skill.progress}%` }}
                        className="h-full rounded-full bg-brand-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 2: Backend Stack (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Server size={100} />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Server size={12} />
                  <span>Server Logic</span>
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-2">
                  Node & API Servers
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary flex items-center space-x-1.5">
                        <span className="text-brand-accent">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-bg-secondary border border-border-primary/30 overflow-hidden">
                      <div
                        style={{ width: `${skill.progress}%` }}
                        className="h-full rounded-full bg-brand-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 3: Databases (col-span-1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Database size={100} />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Database size={12} />
                  <span>Data Architecture</span>
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-2">
                  Relational Schemas
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                {databaseSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary flex items-center space-x-1.5">
                        <span className="text-brand-accent">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-bg-secondary border border-border-primary/30 overflow-hidden">
                      <div
                        style={{ width: `${skill.progress}%` }}
                        className="h-full rounded-full bg-brand-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 4: Workflow & Developer Tools (col-span-2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
              <Settings size={140} />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  <Settings size={12} />
                  <span>Workflow & Environment</span>
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-2">
                  Version Control & Code Editing
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {workflowTools.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary flex items-center space-x-1.5">
                        <span className="text-brand-accent">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-bg-secondary border border-border-primary/30 overflow-hidden">
                      <div
                        style={{ width: `${skill.progress}%` }}
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
