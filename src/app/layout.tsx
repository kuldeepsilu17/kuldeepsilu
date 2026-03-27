import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuldeep Silu",
  description: "Portfolio of Kuldeep Silu, Project Manager and Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="site-footer">
          <div className="footer-left">
            <p>© 2026 by Kuldeep. <br /> Powered and secured by kuldeep</p>
          </div>
          <div className="footer-right">
            <div className="contact-item">
              <strong>Call</strong>
              <a href="tel:+917300302661" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7300302661</a>
            </div>
            <div className="contact-item">
              <strong>Write</strong>
              <a href="mailto:kuldeepsilu7@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>kuldeepsilu7@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Follow</strong>
              <div className="footer-icons">
                <a href="https://github.com/kuldeepsilu17" title="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="#" title="Twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://linkedin.com/in/kuldeep-silu-0b056539b" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/kuldeepsilu_17" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
