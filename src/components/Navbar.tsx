"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "experience", "projects", "skills", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out pointer-events-none ${
      scrolled ? "pt-3 md:pt-4 px-3 sm:px-6" : "pt-0 px-0"
    }`}>
      <nav
        className={`pointer-events-auto mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? "max-w-5xl rounded-2xl md:rounded-full bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-border-primary shadow-lg shadow-black/5 dark:shadow-black/25 py-2.5 px-5 sm:px-8"
            : "max-w-7xl bg-transparent py-5 px-6 md:px-12 border-transparent"
        } flex justify-between items-center`}
      >
        {/* Logo */}
        <Link href="#home" className="group flex items-center space-x-2">
          <span className="font-extrabold text-xl tracking-tight text-text-primary transition-colors duration-300">
            KULDEEP SILU<span className="text-brand-accent font-semibold">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    activeSection === link.id
                      ? "text-brand-accent font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-secondary hover:border-border-hover transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-sm hover:shadow-md hover:shadow-brand-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span className="text-white">Let&apos;s Talk</span>
            <span className="text-xs text-white font-bold">→</span>
          </Link>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center space-x-2.5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto md:hidden mx-auto mt-2 ${
              scrolled ? "max-w-5xl rounded-2xl" : "max-w-7xl mx-4 sm:mx-6 rounded-2xl"
            } bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-border-primary shadow-xl overflow-hidden`}
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium transition-colors duration-200 ${
                      activeSection === link.id ? "text-brand-accent font-bold" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2.5 rounded-full bg-brand-accent text-white font-bold text-sm shadow-md"
                >
                  <span className="text-white">Let&apos;s Talk</span>{" "}
                  <span className="text-white">→</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
