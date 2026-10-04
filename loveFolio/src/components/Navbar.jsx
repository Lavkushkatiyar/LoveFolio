import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#f4f6fb]/90 backdrop-blur-md transition-all border-b border-slate-200/60">
      <div className="max-w-[1050px] mx-auto h-[70px] px-6 flex items-center justify-between">
        
        {/* Brand Bear Logo */}
        <a href="#top" className="flex items-center gap-2 group text-decoration-none">
          <div className="w-9 h-9 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#009BFF] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current text-[#009BFF]">
              <path d="M50 20c-15 0-25 10-25 25 0 8 4 15 10 19v11c0 3 2 5 5 5h20c3 0 5-2 5-5V64c6-4 10-11 10-19 0-15-10-25-25-25zm-12 25c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm24 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
            </svg>
          </div>
        </a>

        {/* Clean Nav Links */}
        <nav className="flex items-center gap-8 font-rubik text-sm font-medium">
          <a
            href="#skills"
            className="text-slate-700 hover:text-[#009BFF] transition-colors py-1"
          >
            Skills Acquired
          </a>
          <a
            href="#projects"
            className="text-slate-700 hover:text-[#009BFF] transition-colors py-1 border-b-2 border-[#009BFF] pb-1 font-semibold"
          >
            My Projects
          </a>
        </nav>

      </div>
    </header>
  );
}
