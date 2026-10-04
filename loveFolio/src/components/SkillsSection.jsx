import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { RenderTechIcon } from './TechLogos';

export default function SkillsSection({ onSelectSkill }) {
  return (
    <section id="skills" className="py-12 px-6 max-w-[1050px] mx-auto">
      
      {/* Section Title with Extension Line */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#009BFF] whitespace-nowrap font-manrope">
          Skills Acquired
        </h2>
        <div className="h-[2px] bg-[#009BFF] flex-1 hidden md:block" />
      </div>

      {/* Clean Grid of Skill Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
        {SKILLS_DATA.map((skill) => (
          <div
            key={skill.id}
            onClick={() => onSelectSkill && onSelectSkill(skill)}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Soft Blue Icon Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[18px] bg-[#009BFF] shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-250">
              <RenderTechIcon iconName={skill.iconKey} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            {/* Label Written Beneath */}
            <span className="mt-2.5 text-xs sm:text-sm font-medium text-slate-800 text-center tracking-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
