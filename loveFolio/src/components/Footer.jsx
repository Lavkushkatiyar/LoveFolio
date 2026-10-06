import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#090e1c] mt-16 border-t border-[#252a39]">
      <div className="max-w-[1200px] mx-auto px-gutter py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-[#bcc9cd]">
            <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">location_on</span>
            <span className="font-label-md text-label-md text-[#bcc9cd]">{PROFILE_DATA.location}</span>
          </div>
          <div className="font-body-sm text-body-sm text-[#bcc9cd]">
            © {currentYear} {PROFILE_DATA.name}. Crafted with engineering precision.
          </div>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-1 font-label-md text-label-md text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>GitHub</span>
          </a>

          <a
            className="flex items-center gap-1 font-label-md text-label-md text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">hub</span>
            <span>LinkedIn</span>
          </a>

          <a
            className="flex items-center gap-1 font-label-md text-label-md text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
            href={`mailto:${PROFILE_DATA.email}`}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Email</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
