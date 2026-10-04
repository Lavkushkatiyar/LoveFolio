import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-8 sm:py-10">
      <div className="portfolio-container">
        
        {/* Section Header with Extension Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#009BFF] whitespace-nowrap font-manrope">
            Education
          </h2>
          <div className="h-[2px] bg-[#009BFF] flex-1 hidden sm:block" />
        </div>

        {/* Education Cards List */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#eef2f7] rounded-[18px] sm:rounded-[22px] p-4 sm:p-6 md:p-8 shadow-xs border border-slate-200/70 space-y-3"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300/60 pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f3276] font-manrope tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#009BFF] font-bold text-xs sm:text-sm mt-0.5">
                    <GraduationCap className="w-4 h-4 text-[#009BFF]" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-1.5 text-slate-500 text-xs font-medium">
                  <div className="flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full text-slate-700 text-[10px] sm:text-xs">
                    <Calendar className="w-3 h-3 text-[#009BFF]" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs">
                      <Award className="w-3 h-3 text-emerald-600" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework & Description */}
              <p className="text-slate-700 text-xs leading-relaxed">
                {edu.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
