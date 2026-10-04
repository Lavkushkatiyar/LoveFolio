import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#f4f6fb]/95 backdrop-blur-md border-b border-slate-200/60">
      <div className="portfolio-container h-[56px] sm:h-[64px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 group text-decoration-none shrink-0">
          <div className="w-8 h-8 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#009BFF] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-4 h-4 fill-current text-[#009BFF]">
              <path d="M50 20c-15 0-25 10-25 25 0 8 4 15 10 19v11c0 3 2 5 5 5h20c3 0 5-2 5-5V64c6-4 10-11 10-19 0-15-10-25-25-25zm-12 25c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4-4-4-1.8-4-4zm24 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
            </svg>
          </div>
        </a>

        {/* Responsive Nav Links */}
        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold overflow-x-auto no-scrollbar py-1">
          <a
            href="#skills"
            className="text-slate-700 hover:text-[#009BFF] transition-colors whitespace-nowrap"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-slate-700 hover:text-[#009BFF] transition-colors whitespace-nowrap"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-slate-700 hover:text-[#009BFF] transition-colors whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-slate-700 hover:text-[#009BFF] transition-colors whitespace-nowrap"
          >
            Education
          </a>
        </nav>

      </div>
    </header>
  );
}
