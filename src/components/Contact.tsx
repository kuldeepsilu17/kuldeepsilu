"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Send,
  Sparkles,
  X,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
  Clock,
} from "lucide-react";
import QRCode from "qrcode";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const portfolioUrl = "https://kuldeepsilu.vercel.app/";

  const services = [
    "Web Development",
    "Full Stack Development",
    "Responsive Websites",
    "SEO Optimization",
    "UI/UX Design",
    "AI-Powered Solutions",
    "Website Optimization",
  ];

  useEffect(() => {
    // Generate high-resolution scannable QR code
    QRCode.toDataURL(portfolioUrl, {
      margin: 1,
      scale: 8,
      errorCorrectionLevel: "H",
      color: {
        dark: "#09090b",
        light: "#ffffff",
      },
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error("Failed to generate QR code", err));
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText("kuldeepsilu7@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Kuldeep Silu — Full Stack Web Developer",
          text: "Check out Kuldeep Silu's Portfolio & Web Projects",
          url: portfolioUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 md:mb-16 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
              06 / CONNECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-tight">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-text-secondary mt-3.5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            I&apos;m open to freelance projects, collaborations, internships and full-time opportunities. Let&apos;s turn a good idea into something useful.
          </p>
        </motion.div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Details, Availability, Quick Actions, QR */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl space-y-5 hover:shadow-xl transition-all duration-300 border-border-primary/60">
              {/* Header with Developer Hub Graphic */}
              <div className="flex items-center justify-between pb-3 border-b border-border-primary/40">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                  Contact Details
                </h3>

                {/* Subtle Creative Connection Hub Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-secondary/70 border border-border-primary text-[11px] font-mono text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Connect</span>
                </div>
              </div>

              {/* Availability Status Badge */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div className="text-xs">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs sm:text-sm">
                    ● Available for opportunities
                  </span>
                  <span className="text-text-muted text-[11px] leading-tight block mt-0.5">
                    Open to freelance • collaboration • internships
                  </span>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="space-y-3">
                {/* Email Item with Copy Button */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 group/mail hover:border-brand-accent/40 transition-all duration-200">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-bg-card border border-border-primary text-brand-accent shrink-0 group-hover/mail:scale-105 transition-transform duration-200">
                      <Mail size={15} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block">
                        Email
                      </span>
                      <a
                        href="mailto:kuldeepsilu7@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-text-primary hover:text-brand-accent transition-colors duration-200 truncate block"
                      >
                        kuldeepsilu7@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-bg-card hover:bg-brand-soft border border-border-primary text-text-muted hover:text-brand-accent hover:border-brand-accent/30 text-[11px] font-semibold transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-500" />
                        <span className="text-emerald-500 text-[10px] font-bold">Copied ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Item with Direct Call Action */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 group/phone hover:border-brand-accent/40 transition-all duration-200">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-bg-card border border-border-primary text-brand-accent shrink-0 group-hover/phone:scale-105 transition-transform duration-200">
                      <Phone size={15} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block">
                        Phone
                      </span>
                      <a
                        href="tel:+917300302661"
                        className="text-xs sm:text-sm font-semibold text-text-primary hover:text-brand-accent transition-colors duration-200 block"
                      >
                        +91 7300302661
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+917300302661"
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-bg-card hover:bg-brand-soft border border-border-primary text-text-muted hover:text-brand-accent hover:border-brand-accent/30 text-[11px] font-semibold transition-all duration-200 shrink-0 active:scale-95 cursor-pointer"
                    title="Call +91 7300302661"
                    aria-label="Call +91 7300302661"
                  >
                    <PhoneCall size={12} />
                    <span className="text-[10px]">Call</span>
                  </a>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-bg-secondary/60 border border-border-primary/60 group/loc hover:border-brand-accent/40 transition-all duration-200">
                  <div className="p-2 rounded-xl bg-bg-card border border-border-primary text-brand-accent shrink-0 group-hover/loc:scale-105 transition-transform duration-200">
                    <MapPin size={15} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-text-primary block truncate">
                      Hanumangarh, Rajasthan, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Response Time Micro Card */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-bg-secondary/40 border border-border-primary/50 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0">
                    <Clock size={13} />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary text-[11px] block">
                      Quick Response
                    </span>
                    <span className="text-text-muted text-[10px] block">
                      Usually responds within 24 hours
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-brand-accent shrink-0" />
              </div>

              {/* Online Profiles */}
              <div className="pt-3 border-t border-border-primary/40">
                <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2.5">
                  Online Profiles
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/kuldeepsilu17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-bg-secondary/80 border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:bg-brand-soft hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-xs font-semibold"
                    title="Visit GitHub Profile (kuldeepsilu17)"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-4 h-4 group-hover/social:scale-110 transition-transform duration-200 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/kuldeep-silu-0b056539b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-bg-secondary/80 border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:bg-brand-soft hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-xs font-semibold"
                    title="Visit LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 group-hover/social:scale-110 transition-transform duration-200 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <a
                href="mailto:kuldeepsilu7@gmail.com"
                className="group flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-bg-card hover:bg-brand-soft border border-border-primary text-text-primary hover:text-brand-accent hover:border-brand-accent/40 text-xs font-bold shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center cursor-pointer"
              >
                <Mail size={13} className="text-brand-accent group-hover:scale-110 transition-transform duration-200 shrink-0" />
                <span>Email Me</span>
              </a>
              <a
                href="tel:+917300302661"
                className="group flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-bg-card hover:bg-brand-soft border border-border-primary text-text-primary hover:text-brand-accent hover:border-brand-accent/40 text-xs font-bold shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center cursor-pointer"
              >
                <Phone size={13} className="text-brand-accent group-hover:scale-110 transition-transform duration-200 shrink-0" />
                <span>Call Me</span>
              </a>
              <a
                href="https://github.com/kuldeepsilu17"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-bg-card hover:bg-brand-soft border border-border-primary text-text-primary hover:text-brand-accent hover:border-brand-accent/40 text-xs font-bold shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center cursor-pointer"
              >
                <ExternalLink size={13} className="text-brand-accent group-hover:scale-110 transition-transform duration-200 shrink-0" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Upgraded QR Code Quick Scan Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setIsQrModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsQrModalOpen(true);
                }
              }}
              className="group glass-panel p-4 sm:p-5 rounded-3xl flex items-center space-x-4 hover:shadow-xl hover:border-brand-accent/40 cursor-pointer active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
              aria-label="Open portfolio QR Code to scan or share"
            >
              <div className="p-2 bg-white rounded-2xl border border-border-primary shadow-xs shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {qrCodeUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={qrCodeUrl}
                    alt="Portfolio QR Code"
                    width={72}
                    height={72}
                    className="w-[72px] h-[72px] rounded-lg"
                  />
                ) : (
                  <div className="w-[72px] h-[72px] bg-neutral-100 rounded-lg animate-pulse" />
                )}
                {/* Scanning line animation */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_8px_rgba(99,102,241,0.9)] animate-scan pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-brand-accent/0 group-hover:bg-brand-accent/5 transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-accent uppercase font-bold tracking-wider">
                    Mobile Quick Connect
                  </span>
                  <span className="text-[11px] font-semibold text-brand-accent group-hover:underline flex items-center space-x-0.5">
                    <span>View QR</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-accent transition-colors duration-200">
                  Scan Portfolio QR
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Open my portfolio instantly or share my contact details.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form & "What I Can Help With" */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Contact Form Card */}
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl hover:shadow-xl transition-all duration-300 border-border-primary/60">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mt-1">
                  Fill out the form below and I will get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 focus:bg-bg-card transition-all duration-200 text-sm"
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
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 focus:bg-bg-card transition-all duration-200 text-sm"
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
                    placeholder="Project inquiry / Collaboration / Job opportunity"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 focus:bg-bg-card transition-all duration-200 text-sm"
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
                    placeholder="Tell me about your project, goals, timeline, or opportunity..."
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 focus:bg-bg-card transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {/* Status Feedback Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <p className="font-bold">✓ Message sent successfully</p>
                      <p className="text-text-muted dark:text-emerald-300/80 mt-0.5 text-xs">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
                    <div>
                      <p className="font-bold">Something went wrong.</p>
                      <p className="text-text-muted dark:text-red-300/80 mt-0.5 text-xs">
                        Please try again or email me directly at kuldeepsilu7@gmail.com
                      </p>
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white font-bold shadow-md hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center space-x-2">
                      <Sparkles size={16} className="text-emerald-300 animate-pulse" />
                      <span>Message Sent Successfully!</span>
                    </span>
                  ) : (
                    <>
                      <span>Let&apos;s Start a Conversation</span>
                      <Send size={15} className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* "What I Can Help With" Interactive Tags Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl border-border-primary/60">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-brand-accent animate-pulse" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  What I can help with
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-bg-secondary/70 text-text-secondary border border-border-primary/60 hover:border-brand-accent/50 hover:text-brand-accent hover:bg-brand-soft hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default select-none shadow-2xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive QR Code Modal */}
      <AnimatePresence>
        {isQrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQrModalOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative z-10 w-full max-w-sm rounded-3xl bg-white dark:bg-[#12131a] border border-border-primary shadow-2xl p-6 sm:p-7 text-center overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="qr-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-bg-secondary hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Close QR Modal"
              >
                <X size={18} />
              </button>

              <div className="inline-block px-3 py-1 rounded-full bg-brand-soft border border-brand-accent/20 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider mb-3">
                Quick Connect
              </div>

              <h3 id="qr-modal-title" className="text-xl font-bold text-text-primary">
                Scan to open my portfolio
              </h3>
              <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
                Scan with your phone camera or Google Lens to open the live website.
              </p>

              {/* Large QR Display */}
              <div className="my-5 mx-auto p-4 bg-white rounded-2xl border border-border-primary shadow-sm inline-block relative overflow-hidden group/largeqr">
                {qrCodeUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={qrCodeUrl}
                    alt="Scan Portfolio QR Code — https://kuldeepsilu.vercel.app/"
                    width={220}
                    height={220}
                    className="w-52 h-52 sm:w-56 sm:h-56 rounded-xl"
                  />
                ) : (
                  <div className="w-52 h-52 sm:w-56 sm:h-56 bg-neutral-100 rounded-xl animate-pulse" />
                )}
                {/* Subtle animated scan line */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_10px_rgba(99,102,241,0.9)] animate-scan pointer-events-none" />
              </div>

              {/* URL Pill */}
              <div className="flex items-center justify-center space-x-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-border-primary text-xs font-mono text-text-secondary mb-5">
                <span className="truncate max-w-[220px]">https://kuldeepsilu.vercel.app/</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="group/modalbtn flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-bg-secondary hover:bg-border-hover border border-border-primary text-text-primary text-xs font-bold hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check size={14} className="text-emerald-500 animate-in fade-in" />
                      <span className="text-emerald-500 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="group-hover/modalbtn:scale-110 transition-transform duration-200" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="group/modalbtn flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-sm hover:shadow-lg hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  <Share2 size={14} className="text-white group-hover/modalbtn:scale-110 transition-transform duration-200" />
                  <span className="text-white">Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
