"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/youtube-banners" },
    // { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-outline-variant bg-surface-container-low/90 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-md md:px-xl h-16 w-full max-w-[1440px] mx-auto relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform group-hover:scale-105">
            {/* Outer Hexagon */}
            <polygon points="20,3 37,12.5 37,27.5 20,37 3,27.5 3,12.5" stroke="#00d4ff" strokeWidth="1.75" fill="none" opacity="0.45" strokeLinejoin="round" />
            {/* Inner Accent Hexagon */}
            <polygon points="20,6 34,14 34,26 20,34 6,26 6,14" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.15" strokeLinejoin="round" />
            {/* Symmetrical Esports Gamepad Body */}
            <path
              d="M 12,15 h 16 c 3,0 6,2.5 6,5.5 v 2 c 0,3 -2.5,5.5 -5.5,5.5 c -1.2,0 -2.2,-0.5 -3,-1.2 c -1,-0.8 -2.2,-1.3 -3.5,-1.3 h -4 c -1.3,0 -2.5,0.5 -3.5,1.3 c -0.8,0.7 -1.8,1.2 -3,1.2 c -3,0 -5.5,-2.5 -5.5,-5.5 v -2 c 0,-3 2.5,-5.5 5.5,-5.5 z"
              stroke="#00d4ff"
              strokeWidth="1.75"
              fill="rgba(0, 212, 255, 0.05)"
              strokeLinejoin="round"
            />
            {/* D-Pad */}
            <path d="M 10,21 h 4 M 12,19 v 4" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
            {/* Face Buttons */}
            <circle cx="28" cy="19.5" r="0.9" fill="#00d4ff" />
            <circle cx="30" cy="21.5" r="0.9" fill="#00d4ff" />
            <circle cx="28" cy="23.5" r="0.9" fill="#00d4ff" />
            <circle cx="26" cy="21.5" r="0.9" fill="#00d4ff" />
            {/* Menu Buttons */}
            <line x1="18" y1="18.5" x2="19.5" y2="17.5" stroke="#00d4ff" strokeWidth="1" strokeLinecap="round" />
            <line x1="20.5" y1="18.5" x2="22" y2="17.5" stroke="#00d4ff" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="font-extrabold text-lg tracking-wider font-sans select-none">
            <span className="text-on-background">GAMING</span>
            <span className="text-primary-container">BANNER</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-semibold text-outline hover:text-on-background transition-colors relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-md">
          <Link
            href="/youtube-banners"
            className="hidden sm:inline-block bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-sm px-lg py-xs rounded-lg transition-all primary-glow hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-xs text-outline hover:text-on-background outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current stroke-2 fill-none">
              {isOpen ? (
                <path d="M6 18 L18 6 M6 6 L18 18" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6 h16 M4 12 h16 M4 18 h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-surface-container-low border-b border-outline-variant/80 flex flex-col p-lg md:hidden gap-md animate-fade-in shadow-xl z-50">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-outline hover:text-on-background transition-colors py-2 border-b border-outline-variant/20 last:border-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
