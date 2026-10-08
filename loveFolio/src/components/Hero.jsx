import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero() {
  return ( 
   
    <section className="relative w-full max-w-[1200px] mx-auto px-gutter pt-8 pb-12 md:py-16 border-b border-[#e5e7eb]" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">

          {/* Typography Heading */}
          <div className="space-y-2">
            <p className="font-body-md text-body-md text-[#525a65]">Hello, I’m</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111827] tracking-tight">
              {PROFILE_DATA.name}
            </h1>
            <p className="font-headline-sm text-lg sm:text-xl text-[#525a65] font-normal">
              {PROFILE_DATA.title}
            </p>
          </div>

          <p className="font-body-md text-body-md text-[#525a65] max-w-xl">
            {PROFILE_DATA.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] text-white font-body-sm text-body-sm font-medium hover:bg-[#1d4ed8] transition-colors"
              href="#projects"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#111827] font-body-sm text-body-sm font-medium hover:bg-[#f9fafb] transition-colors border border-[#e5e7eb]"
              href="#contact"
            >
              <span>Get In Touch</span>
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
          </div>

        </div>

        {/* Monogram avatar */}
        <div className="hidden sm:flex lg:col-span-5 justify-center lg:justify-end items-center" aria-hidden="true">
          <div className="flex h-24 w-24 sm:h-36 sm:w-36 items-center justify-center rounded-full border border-[#d1d5db] bg-white p-2">
            <div className="flex h-full w-full items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f9fafb]">
              <span className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-[#2563eb]">
                {PROFILE_DATA.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
