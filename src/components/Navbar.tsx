"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nev-nav">
      <div className="nav-header">
        <div className="logo">
          <div className="name">KULDEEP</div>
          <div className="title">Project Manager</div>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li><Link href="#home" onClick={closeMenu}>About me</Link></li>
        <li><Link href="#project" onClick={closeMenu}>Projects</Link></li>
        <li><Link href="#resume" onClick={closeMenu}>Resume</Link></li>
        <li><Link href="#contact" onClick={closeMenu}>Contact me</Link></li>
      </ul>
    </nav>
  );
}
