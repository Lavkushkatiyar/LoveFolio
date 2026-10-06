import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function SkillsSection({ onSelectSkill }) {
  // Map material icons and subtitles matching code.html
  const skillDetailsMap = {
    linux: { icon: 'terminal', subtitle: 'Core OS', colorClass: 'text-[#4cd7f6]' },
    http: { icon: 'http', subtitle: 'Protocols', colorClass: 'text-[#4cd7f6]' },
    css: { icon: 'css', subtitle: 'Flexbox & Grid', colorClass: 'text-[#4cd7f6]' },
    bootstrap: { icon: 'view_quilt', subtitle: 'UI Framework', colorClass: 'text-[#b4c5ff]' },
    html: { icon: 'html', subtitle: 'Semantic Web', colorClass: 'text-[#4cd7f6]' },
    rest: { icon: 'api', subtitle: 'Architecture', colorClass: 'text-[#b4c5ff]' },
    git: { icon: 'alt_route', subtitle: 'Version Control', colorClass: 'text-[#7bd0ff]' },
    js: { icon: 'javascript', subtitle: 'ES6+ Async', colorClass: 'text-[#4cd7f6]' },
    react: { icon: 'deployed_code', subtitle: 'Hooks & State', colorClass: 'text-[#4cd7f6]' },
    node: { icon: 'dns', subtitle: 'Runtime', colorClass: 'text-[#b4c5ff]' },
    express: { icon: 'route', subtitle: 'Middleware', colorClass: 'text-[#7bd0ff]' },
    mongo: { icon: 'storage', subtitle: 'NoSQL DB', colorClass: 'text-[#4cd7f6]' },
  };

  return (
    <section className="scroll-mt-24 w-full py-16 sm:py-20 max-w-[1200px] mx-auto px-gutter" id="skills">
      
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#4cd7f6]" />
          <span className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-widest">Technical Toolkit</span>
        </div>
        <h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-[#dee2f6]">Skills Acquired</h2>
      </div>

      {/* 12 Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS_DATA.map((skill) => {
          const detail = skillDetailsMap[skill.iconKey] || { icon: 'code', subtitle: skill.category, colorClass: 'text-[#4cd7f6]' };
          return (
            <div
              key={skill.id}
              onClick={() => onSelectSkill && onSelectSkill(skill)}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#161b2a] hover:bg-[#1a1f2e] hover:-translate-y-1 transition-all duration-200 group cursor-pointer border border-[#252a39]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#252a39] flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                <span className={`material-symbols-outlined text-[28px] ${detail.colorClass}`}>
                  {detail.icon}
                </span>
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
