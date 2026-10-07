import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { RenderTechIcon } from './TechLogos';

export default function SkillsSection({ onSelectSkill }) {
  // Map supporting labels for each skill.
  const skillDetailsMap = {
    linux: { subtitle: 'Core OS' },
    http: { subtitle: 'Protocols' },
    css: { subtitle: 'Flexbox & Grid' },
    bootstrap: { subtitle: 'UI Framework' },
    html: { subtitle: 'Semantic Web' },
    rest: { subtitle: 'Architecture' },
    git: { subtitle: 'Version Control' },
    js: { subtitle: 'ES6+ Async' },
    react: { subtitle: 'Hooks & State' },
    node: { subtitle: 'Runtime' },
    express: { subtitle: 'Middleware' },
    mongo: { subtitle: 'NoSQL DB' },
  };

  return (
    <section className="scroll-mt-24 w-full py-16 sm:py-20 max-w-[1200px] mx-auto px-gutter" id="skills">
      
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#4cd7f6]" />
          <span className="font-label-sm text-label-sm text-[#4cd7f6]">Technical skills</span>
        </div>
        <h2 className="font-headline-lg text-3xl sm:text-4xl font-semibold text-[#dee2f6]">Skills</h2>
      </div>

      {/* 12 Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS_DATA.map((skill) => {
          const detail = skillDetailsMap[skill.iconKey] || { subtitle: skill.category };
          return (
            <div
              key={skill.id}
              onClick={() => onSelectSkill && onSelectSkill(skill)}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#161b2a] hover:bg-[#1a1f2e] hover:-translate-y-1 transition-all duration-200 group cursor-pointer border border-[#252a39]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#252a39] flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                <RenderTechIcon iconName={skill.iconKey} className="w-8 h-8" />
              </div>
              <span className="font-label-md text-label-md text-[#dee2f6] font-semibold text-center">
                {skill.name}
              </span>
              <span className="font-label-sm text-label-sm text-[#bcc9cd] mt-0.5 text-center">
                {detail.subtitle}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}
