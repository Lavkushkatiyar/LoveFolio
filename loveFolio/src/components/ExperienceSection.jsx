import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 sm:py-10">
      <div className="portfolio-container flex flex-col gap-4">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <h2 className="whitespace-nowrap font-manrope text-xl font-black text-[#009BFF] sm:text-2xl">
            Work Experience
          </h2>

          <div className="hidden h-[2px] flex-1 bg-[#009BFF] sm:block" />
        </div>

        <div className="flex flex-col gap-14">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="px-4 sm:px-6 lg:px-10">
              <div
                className="flex flex-col gap-1 rounded-[18px] border border-slate-200/70 bg-[#eef2f7] px-6 py-6 shadow-xs sm:px-8 sm:py-7 lg:px-10 lg:py-8"
              >
                {/* Header Info */}
                <div className="flex h-[100px] w-full flex-row justify-between border-slate-300/60 sm:items-center">
                  <div>
                    <h3 className="font-manrope text-xl font-black tracking-tight text-[#0f3276] sm:text-2xl">
                      {exp.role}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#009BFF] sm:text-sm">
                      <Briefcase className="h-3.5 w-3.5 text-[#009BFF]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-2 text-xs font-medium text-slate-500 sm:flex-col sm:items-end">
                    <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] text-slate-700 sm:text-xs">
                      <Calendar className="h-3 w-3 text-[#009BFF]" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-slate-700">
                  {exp.description}
                </p>

                {/* Bullet Achievements */}
                {exp.bullets && (
                  <ul className="list-outside list-disc space-y-1 ps-5 text-xs font-normal leading-relaxed text-slate-700">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}