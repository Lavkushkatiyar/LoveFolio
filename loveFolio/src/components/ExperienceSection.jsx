import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 sm:py-10">
      <div className="portfolio-container">
        
        {/* Section Header with Horizontal Extension Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#009BFF] whitespace-nowrap font-manrope">
            Work Experience
          </h2>
          <div className="h-[2px] bg-[#009BFF] flex-1 hidden sm:block" />
        </div>

        {/* Experience Cards List */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#eef2f7] rounded-[18px] sm:rounded-[22px] p-4 sm:p-6 md:p-8 shadow-xs border border-slate-200/70 space-y-3"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300/60 pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f3276] font-manrope tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#009BFF] font-bold text-xs sm:text-sm mt-0.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#009BFF]" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-1 text-slate-500 text-xs font-medium">
                  <div className="flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full text-slate-700 text-[10px] sm:text-xs">
                    <Calendar className="w-3 h-3 text-[#009BFF]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-[10px] sm:text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs leading-relaxed">
                {exp.description}
              </p>

              {/* Bullet Achievements */}
              {exp.bullets && (
                <ul className="list-disc pl-4 space-y-0.5 font-normal text-slate-700 text-xs leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
