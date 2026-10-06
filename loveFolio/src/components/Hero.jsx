import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-gutter pt-8 pb-20 md:py-24" id="top">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#0053db]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Status Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252a39] text-[#4cd7f6] font-label-md text-label-md">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
            <span>Available for Full-Time &amp; High-Impact Roles</span>
          </div>

          {/* Typography Heading */}
          <div className="space-y-2">
            <p className="font-label-lg text-label-lg text-[#4cd7f6] tracking-wide">Hi, my name is</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#dee2f6] tracking-tight">
              {PROFILE_DATA.name}
            </h1>
            <p className="font-headline-sm text-lg sm:text-xl text-[#bcc9cd] font-medium">
              {PROFILE_DATA.title} specializing in resilient systems, React ecosystems, and modern Node.js micro-architectures.
            </p>
          </div>

          <p className="font-body-md text-body-md text-[#bcc9cd] max-w-xl">
            {PROFILE_DATA.subtitle}
          </p>

          {/* Metric Stat Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-2">
            <div className="flex flex-col p-4 rounded-xl bg-[#161b2a] shadow-sm border border-[#252a39]">
              <span className="font-headline-lg text-2xl sm:text-4xl text-[#4cd7f6] font-bold">{PROFILE_DATA.stats.verifiedSkillsCount}</span>
              <span className="font-label-sm text-label-sm text-[#bcc9cd] uppercase tracking-wider mt-1">Verified Skills</span>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-[#161b2a] shadow-sm border border-[#252a39]">
              <span className="font-headline-lg text-2xl sm:text-4xl text-[#b4c5ff] font-bold">{PROFILE_DATA.stats.professionalProjects}</span>
              <span className="font-label-sm text-label-sm text-[#bcc9cd] uppercase tracking-wider mt-1">Shipped Projects</span>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-[#161b2a] shadow-sm border border-[#252a39]">
              <span className="font-headline-lg text-2xl sm:text-4xl text-[#7bd0ff] font-bold">{PROFILE_DATA.stats.dsaSolvedCount}</span>
              <span className="font-label-sm text-label-sm text-[#bcc9cd] uppercase tracking-wider mt-1">DSA Solved</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#003640] font-label-md text-label-md font-semibold hover:opacity-95 shadow-md shadow-[#06b6d4]/20 transition-all"
              href="#projects"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#252a39] text-[#dee2f6] font-label-md text-label-md hover:bg-[#303444] transition-all border border-[#3d494c]"
              href="#contact"
            >
              <span>Get In Touch</span>
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
          </div>

        </div>

        {/* Right Column: Avatar Graphic Illustration from code.html */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#0053db] via-[#252a39] to-[#06b6d4]/40 p-1 flex items-center justify-center shadow-xl shadow-[#0053db]/20">
            <div className="w-full h-full rounded-full bg-[#090e1c] flex items-center justify-center overflow-hidden relative">
              <svg className="w-48 h-48 sm:w-56 sm:h-56 text-[#4cd7f6]" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" fill="currentColor" fillOpacity="0.08" r="88" />
                <circle cx="48" cy="62" fill="currentColor" fillOpacity="0.85" r="18" />
                <circle cx="152" cy="62" fill="currentColor" fillOpacity="0.85" r="18" />
                <rect fill="currentColor" height="84" rx="36" width="96" x="52" y="58" />
                <rect fill="currentColor" height="34" rx="10" width="52" x="74" y="132" />
                <circle class="text-[#090e1c]" cx="78" cy="98" fill="currentColor" r="9" />
                <circle class="text-[#090e1c]" cx="122" cy="98" fill="currentColor" r="9" />
                <path class="text-[#090e1c]" d="M84 116C90 123 110 123 116 116" stroke="currentColor" strokeLinecap="round" strokeWidth="6" />
              </svg>
              <div className="absolute bottom-4 px-3 py-1 rounded-full bg-[#252a39]/90 backdrop-blur-md text-[#dee2f6] font-label-sm text-label-sm flex items-center gap-1.5 border border-[#3d494c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
                <span>Lavkush v2.4</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
