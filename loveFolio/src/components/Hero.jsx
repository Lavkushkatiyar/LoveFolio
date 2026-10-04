import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="pt-[100px] pb-12 px-6 max-w-[1050px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Bio Column */}
        <div className="md:col-span-7 text-center md:text-left">
          <p className="text-slate-500 text-base sm:text-lg font-medium mb-1">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#009BFF] tracking-tight mb-3 font-manrope">
            {PROFILE_DATA.name}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {PROFILE_DATA.subtitle}
          </p>

          {/* Reference Blue Capsule Card */}
          <div className="bg-[#009BFF] text-white rounded-[20px] flex items-center justify-between p-3 sm:p-4 shadow-md text-center max-w-md mx-auto md:mx-0">
            
            {/* Stat 1 */}
            <div className="flex-1 px-2 border-r border-white/30">
              <div className="text-3xl sm:text-4xl font-extrabold leading-none mb-1">
                {PROFILE_DATA.stats.verifiedSkillsCount}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-wider uppercase opacity-90">
                VERIFIED SKILLS
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 px-2 border-r border-white/30">
              <div className="text-3xl sm:text-4xl font-extrabold leading-none mb-1">
                {PROFILE_DATA.stats.professionalProjects}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-wider uppercase opacity-90">
                PROFESSIONAL PROJECTS
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 px-2">
              <div className="text-3xl sm:text-4xl font-extrabold leading-none mb-1">
                {PROFILE_DATA.stats.dsaSolvedCount}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-wider uppercase opacity-90">
                DSA PROBLEMS SOLVED
              </div>
            </div>

          </div>
        </div>

        {/* Right Circular Avatar Column */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-60 h-60 sm:w-76 sm:h-76 rounded-full bg-gradient-to-tr from-cyan-600 via-teal-600 to-blue-600 p-2 shadow-lg flex items-center justify-center">
            
            <div className="w-full h-full rounded-full bg-[#086a9c] flex items-center justify-center overflow-hidden p-6">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
                <path d="M100 30c-25 0-42 16-42 38 0 13 6 24 16 31v18c0 5 4 9 9 9h34c5 0 9-4 9-9V99c10-7 16-18 16-31 0-22-17-38-42-38zm-20 38c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm40 0c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm-20 28c-7 0-13-4-15-10h30c-2 6-8 10-15 10z" />
                <circle cx="50" cy="45" r="14" fill="#ffffff" opacity="0.8" />
                <circle cx="150" cy="45" r="14" fill="#ffffff" opacity="0.8" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
