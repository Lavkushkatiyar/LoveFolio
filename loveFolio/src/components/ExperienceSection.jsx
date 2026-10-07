import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const iconMap = ['verified', 'speed', 'database', 'bug_report'];
  const titleMap = ['REST API Architecture', 'Frontend Performance', 'Schema & Validations', 'Testing & Reliability'];

  return (
    <section className="scroll-mt-24 w-full bg-[#090e1c] py-12 sm:py-16 border-b border-[#e5e7eb]" id="experience">
      <div className="max-w-[1200px] mx-auto px-gutter space-y-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#4cd7f6]" />
            <span className="font-label-sm text-label-sm text-[#4cd7f6]">Experience</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#dee2f6] font-semibold">Work Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative bg-[#161b2a] rounded-2xl p-6 sm:p-8 shadow-md border border-[#d1d5db]">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#252a39]">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#4cd7f6]">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-[#bcc9cd] font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">domain</span>
                    <span className="text-[#dee2f6] font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#252a39] text-[#4cd7f6] font-label-md text-label-md shrink-0 self-start border border-[#3d494c]">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-body-md text-body-md text-[#bcc9cd] my-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Structured Highlights Grid */}
              {exp.bullets && exp.bullets.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#1a1f2e] border border-[#252a39]">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] shrink-0 mt-0.5">
                        {iconMap[idx % iconMap.length]}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-sm font-semibold text-[#dee2f6] mb-1">
                          {titleMap[idx % titleMap.length] || `Achievement ${idx + 1}`}
                        </span>
                        <span className="font-body-sm text-xs sm:text-sm text-[#bcc9cd] leading-normal">{bullet}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}