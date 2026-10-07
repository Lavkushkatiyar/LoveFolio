import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function EducationSection() {
  const courseworkItems = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOPs)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering'
  ];

  return (
    <section className="scroll-mt-24 w-full py-16 sm:py-20 max-w-[1200px] mx-auto px-gutter" id="education">
      
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#4cd7f6]" />
          <span className="font-label-sm text-label-sm text-[#4cd7f6]">Education</span>
        </div>
        <h2 className="font-headline-lg text-3xl sm:text-4xl font-semibold text-[#dee2f6]">Education</h2>
      </div>

      {/* Education Card */}
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.id} className="bg-[#161b2a] rounded-2xl p-6 sm:p-8 shadow-md border border-[#252a39] space-y-4">
            
            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4">
              <div className="space-y-1">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#4cd7f6] font-bold">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-[#bcc9cd] font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">school</span>
                  <span className="text-[#dee2f6] font-semibold">{edu.institution}</span>
                  {edu.grade && (
                    <>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[#4cd7f6]">
                        <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                        <span>{edu.grade}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#252a39] text-[#4cd7f6] font-label-md text-label-md shrink-0 self-start border border-[#3d494c]">
                <span className="material-symbols-outlined text-[16px]">date_range</span>
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Coursework Pills */}
            <div className="pt-4 border-t border-[#252a39] space-y-3">
              <span className="font-label-sm text-label-sm text-[#bcc9cd] uppercase tracking-wider block">
                Key Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {courseworkItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-[#1a1f2e] text-[#dee2f6] font-label-sm text-label-sm border border-[#252a39]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
