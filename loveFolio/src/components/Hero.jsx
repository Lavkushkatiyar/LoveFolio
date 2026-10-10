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

        {/* Compact profile metrics */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
          <a
            href="#skills"
            className="group flex min-h-36 flex-col justify-between rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4 transition-colors hover:border-[#2563eb] hover:bg-white sm:p-5"
            aria-label={`${PROFILE_DATA.verified_skills_count} verified skills. View skills`}
          >
            <span className="material-symbols-outlined text-2xl text-[#2563eb]">verified</span>
            <span>
              <span className="block font-display text-3xl text-[#111827] sm:text-4xl">
                {PROFILE_DATA.verified_skills_count}
              </span>
              <span className="font-label-sm text-[#525a65]">Verified skills</span>
            </span>
          </a>

          <a
            href="https://leetcode.com/u/lkatiyar12/"
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-36 flex-col justify-between rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4 transition-colors hover:border-[#2563eb] hover:bg-white sm:p-5"
            aria-label={`${PROFILE_DATA.dsa_solved_count} DSA problems solved. Open LeetCode`}
          >
            <span className="material-symbols-outlined text-2xl text-[#2563eb]">code</span>
            <span>
              <span className="block font-display text-3xl text-[#111827] sm:text-4xl">
                {PROFILE_DATA.dsa_solved_count}
              </span>
              <span className="font-label-sm text-[#525a65]">DSA problems solved</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
