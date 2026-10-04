import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 py-12 px-6 border-t border-slate-200/80 bg-white">
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-slate-600">
        
        {/* Name & Location */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-[#009BFF] text-lg font-manrope">
            {PROFILE_DATA.name}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-500 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {PROFILE_DATA.location}
          </span>
        </div>

        {/* Minimal Contact & Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="flex items-center gap-1.5 hover:text-[#009BFF] transition-colors text-xs sm:text-sm"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>{PROFILE_DATA.email}</span>
          </a>

          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#009BFF] transition-colors text-xs sm:text-sm"
          >
            <GithubIcon className="w-4 h-4 text-slate-500" />
            <span>GitHub</span>
          </a>

          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#009BFF] transition-colors text-xs sm:text-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-[#009BFF]" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
