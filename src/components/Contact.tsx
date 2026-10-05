"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, X, Share2, Copy, Check, Maximize2 } from "lucide-react";
import QRCode from "qrcode";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const portfolioUrl = "https://kuldeepsilu.vercel.app/";

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
        // User cancelled or share failed, fallback to copy
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

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
    <section id="contact" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
            06 / Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
            Let&apos;s build something useful.
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            I&apos;m open to freelance projects, collaborations, internships and full-time opportunities.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Quick Info & QR Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Info */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                Contact Details
              </h3>
              
              <div className="space-y-4 font-semibold text-sm text-text-secondary">
                <div className="flex items-center space-x-3.5 group/item">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover/item:border-brand-accent/40 group-hover/item:text-brand-accent group-hover/item:bg-brand-soft group-hover/item:scale-105 transition-all duration-200">
                    <Mail size={16} strokeWidth={1.8} />
                  </div>
                  <a href="mailto:kuldeepsilu7@gmail.com" className="hover:text-brand-accent transition-colors duration-200 break-all">
                    kuldeepsilu7@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3.5 group/item">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover/item:border-brand-accent/40 group-hover/item:text-brand-accent group-hover/item:bg-brand-soft group-hover/item:scale-105 transition-all duration-200">
                    <Phone size={16} strokeWidth={1.8} />
                  </div>
                  <a href="tel:+917300302661" className="hover:text-brand-accent transition-colors duration-200">
                    +91 7300302661
                  </a>
                </div>
                <div className="flex items-center space-x-3.5 group/item">
                  <div className="p-2.5 rounded-2xl bg-bg-secondary border border-border-primary text-text-secondary group-hover/item:border-brand-accent/40 group-hover/item:text-brand-accent group-hover/item:bg-brand-soft group-hover/item:scale-105 transition-all duration-200">
                    <MapPin size={16} strokeWidth={1.8} />
                  </div>
                  <span>Hanumangarh, Rajasthan, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border-primary/50">
                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                  Online Profiles
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/kuldeepsilu17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:bg-brand-soft hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-brand-accent/10 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 group-hover/social:scale-105 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/kuldeep-silu-0b056539b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-3 rounded-2xl bg-bg-secondary/70 border border-border-primary text-text-secondary hover:text-brand-accent hover:border-brand-accent/40 hover:bg-brand-soft hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-brand-accent/10 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 group-hover/social:scale-105 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* QR Code Quick Scan Card */}
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
              className="group glass-panel p-5 sm:p-6 rounded-3xl flex items-center space-x-5 hover:shadow-xl hover:border-brand-accent/40 cursor-pointer active:scale-[0.98] transition-all duration-300 relative overflow-hidden"
              aria-label="Open portfolio QR Code to scan or share"
            >
              <div className="p-2 bg-white rounded-2xl border border-border-primary shadow-xs shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {qrCodeUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={qrCodeUrl}
                    alt="Portfolio QR Code"
                    width={76}
                    height={76}
                    className="w-[76px] h-[76px] rounded-lg"
                  />
                ) : (
                  <div className="w-[76px] h-[76px] bg-neutral-100 rounded-lg animate-pulse" />
                )}
                {/* Scanning line animation */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_8px_rgba(99,102,241,0.9)] animate-scan pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-brand-accent/0 group-hover:bg-brand-accent/5 transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-accent uppercase font-bold tracking-wider">
                    Mobile Quick Connect
                  </span>
                  <span className="text-[11px] font-medium text-text-muted group-hover:text-brand-accent flex items-center space-x-1 transition-colors duration-200">
                    <span>Enlarge</span>
                    <Maximize2 size={12} className="group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-accent transition-colors duration-200">
                  Scan Portfolio QR
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Scan with your phone camera to open portfolio or share contact instantly.
                </p>
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
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl hover:shadow-xl transition-all duration-300"
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
                      placeholder="e.g. Alex Sharma"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
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
                      placeholder="alex@example.com"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
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
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm"
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
                    placeholder="Tell me about your project, timeline, or requirements..."
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary placeholder-text-muted/60 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3.5 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-2xl text-center font-medium">
                    Failed to send message. Please try again later or contact me directly via email.
                  </div>
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
                      <span>Start a Conversation</span>
                      <Send size={15} className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
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
                Mobile Quick Connect
              </div>

              <h3 id="qr-modal-title" className="text-xl font-bold text-text-primary">
                Scan Portfolio QR
              </h3>
              <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
                Scan with your phone camera or Google Lens to instantly open my live portfolio.
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
                  onClick={handleShare}
                  className="group/modalbtn flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-sm hover:shadow-lg hover:shadow-brand-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  <Share2 size={14} className="text-white group-hover/modalbtn:scale-110 transition-transform duration-200" />
                  <span className="text-white">Share</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="group/modalbtn flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-bg-secondary hover:bg-border-hover border border-border-primary text-text-primary text-xs font-bold hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500 animate-in fade-in" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="group-hover/modalbtn:scale-110 transition-transform duration-200" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
