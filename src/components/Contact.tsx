"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3">
            06 / Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-primary">
            Get In Touch
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project in mind, need a full-stack developer, or just want to connect? Hit the form below.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Quick Info Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl space-y-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">
                Contact Details
              </h3>
              
              <div className="space-y-4 font-semibold text-sm md:text-base text-text-secondary">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:kuldeepsilu7@gmail.com" className="hover:text-brand-accent transition-colors duration-200">
                    kuldeepsilu7@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+917300302661" className="hover:text-brand-accent transition-colors duration-200">
                    +91 7300302661
                  </a>
                </div>
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary">
                    <MapPin size={16} />
                  </div>
                  <span>Hanumangarh, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="glass-panel p-8 rounded-3xl space-y-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-extrabold text-text-primary tracking-tight">
                Follow My Code
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kuldeepsilu17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/kuldeep-silu-0b056539b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-10 rounded-3xl hover:shadow-xl transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-wider text-text-muted uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-wider text-text-muted uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="info@example.com"
                      required
                      className="w-full px-5 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold tracking-wider text-text-muted uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-wider text-text-muted uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message details..."
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white font-bold shadow-md hover:shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center space-x-2">
                      <Sparkles size={16} className="text-brand-accent animate-pulse" />
                      <span>Message Sent!</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
