"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Student Management System",
      category: "Full Stack Development",
      description: "A robust records administration program designed to organize and structure student files, course schedules, and registration details. Integrates a secure Express API server with a clean SQL schema.",
      tech: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/kuldeepsilu17",
      live: "#",
    },
    {
      title: "Personal Portfolio Website",
      category: "Frontend & Design",
      description: "An award-winning developer portfolio showcasing clean Apple/Stripe-inspired aesthetics, interactive micro-animations, local-storage dark/light theme switching, and custom cursor trail layouts.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/kuldeepsilu17",
      live: "#",
    },
    {
      title: "Simple Calculator Application",
      category: "Utility Application",
      description: "A clean web utility executing arithmetic operations with fluid transitions. Features modular calculation states, responsiveness, and minimal custom dashboard styles.",
      tech: ["React", "JavaScript", "Tailwind CSS", "CSS Grid"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/kuldeepsilu17",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
              02 / Showcase
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-primary">
              Featured Projects
            </h2>
          </div>
          <p className="text-text-secondary max-w-md font-medium text-sm md:text-base leading-relaxed">
            A curated selection of work showing web engineering capabilities, backend architecture, and design execution.
          </p>
        </div>

        {/* Projects Column */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-3xl border border-border-primary bg-bg-secondary aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-neutral-950/10 dark:bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors duration-300" />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-accent uppercase">
                  <Code size={14} />
                  <span>{project.category}</span>
                </span>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold border border-border-primary bg-bg-secondary text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-border-primary bg-bg-card text-text-secondary hover:text-brand-accent hover:border-brand-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white shadow-md hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-bold cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
