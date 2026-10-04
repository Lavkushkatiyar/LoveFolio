import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { RenderTechIcon } from './TechLogos';

export default function SkillsSection({ onSelectSkill }) {
  return (
    <section id="skills" className="py-8 sm:py-10">
      <div className="portfolio-container">
        
        {/* Section Title with Extension Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#009BFF] whitespace-nowrap font-manrope">
            Skills Acquired
          </h2>
          <div className="h-[2px] bg-[#009BFF] flex-1 hidden sm:block" />
        </div>

        {/* Clean Grid of Skill Cards (4 columns on mobile for tight phone layout) */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-6 justify-items-center">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              onClick={() => onSelectSkill && onSelectSkill(skill)}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Soft Blue Icon Box */}
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-[14px] bg-[#009BFF] shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <RenderTechIcon iconName={skill.iconKey} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              {/* Label Written Beneath */}
              <span className="mt-1.5 text-[10px] sm:text-xs font-medium text-slate-800 text-center tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
