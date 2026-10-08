import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1321]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#1e293b]">
      <div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-4">

        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Go to top">
          <div className="w-9 h-9 rounded-lg border border-[#e5e7eb] bg-white flex items-center justify-center">
            <span className="font-body-sm text-body-sm text-[#111827] font-medium">LK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-[#dee2f6] leading-none">{PROFILE_DATA.name}</span>
            <span className="hidden sm:block font-label-sm text-label-sm text-[#bcc9cd] uppercase tracking-wider mt-0.5">{PROFILE_DATA.title}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 font-label-md text-label-md text-[#bcc9cd] hover:text-[#dee2f6] hover:bg-[#252a39] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/LAVKUSH_KATYAR_CV.pdf"
            download
            className="shrink-0 whitespace-nowrap px-4 py-2 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] font-body-sm text-body-sm transition-colors flex items-center gap-1.5"
          >
            <span>Download CV</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-[#252a39] flex items-center justify-center text-[#dee2f6] hover:text-[#4cd7f6] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e5e7eb] px-gutter py-4 animate-fade-in space-y-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-label-md text-[#dee2f6] hover:bg-[#252a39] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
