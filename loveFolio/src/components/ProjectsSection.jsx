import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-8 sm:py-10">
      <div className="portfolio-container">

        {/* Section Title with Horizontal Extension Line */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#009BFF] whitespace-nowrap font-manrope">
            My Projects
          </h2>
          <div className="h-[2px] bg-[#009BFF] flex-1 hidden sm:block" />
        </div>

        {/* Projects Cards List */}
        <div className="space-y-6 sm:space-y-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-[#eef2f7] rounded-[18px] sm:rounded-[22px] p-4 sm:p-6 md:p-8 shadow-xs border border-slate-200/70 flex flex-col-reverse md:flex-row items-center justify-between gap-6"
            >
              {/* Left Content Column */}
              <div className="w-full md:w-7/12 text-left space-y-2">

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#0f3276] font-manrope tracking-tight">
                  {project.title}
                </h3>

                {/* Date */}
                <p className="text-slate-500 text-xs font-medium">
                  {project.date}
                </p>

                {/* Description & Bullet points */}
                <div className="text-slate-700 text-xs leading-relaxed space-y-1 pt-0.5">
                  <p className="font-normal">{project.summary}</p>
                  {project.bulletIntro && (
                    <p className="font-normal">{project.bulletIntro}</p>
                  )}
                  {project.bullets && (
                    <ul className="list-disc pl-4 space-y-0.5 font-normal text-slate-700">
                      {project.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-slate-700 font-medium text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}

                  {/* +more button pill */}
                  <button
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="text-slate-700 font-bold text-[10px] sm:text-xs flex items-center gap-0.5 px-1.5 py-1 hover:text-[#009BFF] transition-colors"
                  >
                    <span>{project.moreTechCount || "+more"}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {/* View Demo Amber Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0f3276] font-extrabold text-xs rounded-full px-6 py-2 shadow-2xs transition-colors text-center"
                  >
                    View Demo
                  </a>

                  {/* View Project Details Button */}
                  <button
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="bg-white hover:bg-slate-50 text-[#0f3276] border-1.5 border-[#0f3276] font-extrabold text-xs rounded-full px-6 py-2 transition-colors text-center cursor-pointer"
                  >
                    View Project Details
                  </button>
                </div>

              </div>

              {/* Right Side Illustration Image */}
              <div className="w-full md:w-5/12 flex justify-center items-center">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-none h-40 sm:h-52 md:h-60 object-contain drop-shadow-2xs"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
