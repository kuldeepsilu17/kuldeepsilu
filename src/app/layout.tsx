import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import { Mail, Phone } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuldeep Silu | Full Stack Web Developer",
  description: "Portfolio of Kuldeep Silu, a modern Full Stack Web Developer specializing in React, Next.js, and TypeScript.",
  keywords: ["Kuldeep Silu", "Full Stack Developer", "Web Developer", "Next.js", "React Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var finalTheme = theme || systemTheme;
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(finalTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Re-designed Premium Footer */}
          <footer className="border-t border-border-primary bg-bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-3">
                <span className="font-extrabold text-lg tracking-tight text-text-primary">
                  KULDEEP SILU<span className="text-text-muted font-normal">.dev</span>
                </span>
                <p className="text-xs text-text-muted">
                  © 2026 Kuldeep Silu. Crafted with Next.js & Tailwind CSS. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 text-sm">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">
                    Contact
                  </h4>
                  <ul className="space-y-1 text-text-secondary font-medium">
                    <li className="flex items-center space-x-2">
                      <Phone size={12} className="text-text-muted" />
                      <a href="tel:+917300302661" className="hover:text-brand-accent transition-colors duration-200">+91 7300302661</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Mail size={12} className="text-text-muted" />
                      <a href="mailto:kuldeepsilu7@gmail.com" className="hover:text-brand-accent transition-colors duration-200">kuldeepsilu7@gmail.com</a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">
                    Socials
                  </h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/kuldeepsilu17" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors duration-200">
                      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/kuldeep-silu-0b056539b" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors duration-200">
                      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
