"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Terminal, Settings } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "database" | "tools">("all");

  const categories = [
    { id: "all", name: "All Tech" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & Git" },
  ];

  const skills = [
    { name: "HTML5", level: "Expert", category: "frontend", icon: <Code size={18} /> },
    { name: "CSS3", level: "Expert", category: "frontend", icon: <Code size={18} /> },
    { name: "JavaScript", level: "Advanced", category: "frontend", icon: <Code size={18} /> },
    { name: "React.js", level: "Advanced", category: "frontend", icon: <Code size={18} /> },
    { name: "Next.js", level: "Advanced", category: "frontend", icon: <Code size={18} /> },
    
    { name: "Node.js", level: "Intermediate", category: "backend", icon: <Terminal size={18} /> },
    { name: "Express.js", level: "Advanced", category: "backend", icon: <Terminal size={18} /> },
    { name: "Python", level: "Intermediate", category: "backend", icon: <Terminal size={18} /> },
    
    { name: "MongoDB", level: "Intermediate", category: "database", icon: <Database size={18} /> },
    { name: "MySQL", level: "Advanced", category: "database", icon: <Database size={18} /> },
    
    { name: "Git", level: "Advanced", category: "tools", icon: <Settings size={18} /> },
    { name: "GitHub", level: "Advanced", category: "tools", icon: <Settings size={18} /> },
    { name: "VS Code", level: "Expert", category: "tools", icon: <Settings size={18} /> },
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-y border-border-primary">
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
            03 / Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-primary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto font-medium text-sm md:text-base leading-relaxed">
            A breakdown of my technical domain expertise, focusing on structural layout and system scaling capabilities.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as typeof activeTab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? "bg-brand-accent text-white border-transparent shadow-md shadow-brand-accent/15"
                  : "bg-bg-card text-text-secondary border-border-primary hover:border-brand-accent/30 hover:text-brand-accent hover:scale-[1.02]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={skill.name}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-accent/40 hover:shadow-md hover:shadow-brand-accent/5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow highlight on hover */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-brand-accent/5 dark:bg-brand-accent/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="space-y-4">
                  <div className="text-text-secondary group-hover:text-brand-accent transition-colors duration-300">
                    {skill.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-extrabold text-text-primary tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-1 uppercase tracking-wider">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
