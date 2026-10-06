import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const sanitizeText = (str) => {
    if (!str) return '';
    return str.replace(/^["']|["']$/g, '').trim();
  };

  return (
    <section className="scroll-mt-24 w-full bg-[#090e1c] py-16 sm:py-20" id="projects">
      <div className="max-w-[1200px] mx-auto px-gutter space-y-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#4cd7f6]" />
            <span className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-widest">Case Studies</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-[#dee2f6]">Featured Projects</h2>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {PROJECTS_DATA.map((project, index) => {
            const isReverse = index % 2 === 1;
            return (
              <div
                key={project.id}
                className={`bg-[#161b2a] rounded-2xl p-6 sm:p-8 flex flex-col ${
                  isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 items-center border border-[#252a39]`}
              >
                {/* Content Column */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-2xl font-bold text-[#dee2f6]">{project.title}</h3>
                    <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-[#252a39] text-[#4cd7f6] border border-[#3d494c]">
                      {project.date}
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-[#bcc9cd] leading-relaxed">
                    “{sanitizeText(project.summary)}”
                  </p>

                  {/* Bullet Highlights */}
                  {project.bullets && project.bullets.length > 0 && (
                    <ul className="space-y-2 font-body-sm text-body-sm text-[#bcc9cd]">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                            chevron_right
                          </span>
                          <span>{sanitizeText(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#1a1f2e] text-[#4cd7f6] font-label-sm text-label-sm border border-[#252a39]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-3 flex-wrap">
                    {project.demoUrl && (
                      <a
                        className="px-4 py-2 rounded-lg bg-[#06b6d4] text-[#003640] font-label-md text-label-md font-semibold hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md shadow-[#06b6d4]/10"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>View Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="px-4 py-2 rounded-lg bg-[#252a39] text-[#dee2f6] font-label-md text-label-md hover:bg-[#303444] transition-all flex items-center gap-1.5 border border-[#3d494c] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">code</span>
                      <span>View Code &amp; Details</span>
                    </button>
                  </div>
                </div>

                {/* Visual Image Preview Frame */}
                <div
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="w-full lg:w-96 h-60 rounded-xl overflow-hidden bg-[#1a1f2e] relative shrink-0 shadow-inner group cursor-pointer border border-[#252a39]"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={project.featuredImage}
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b2a] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
