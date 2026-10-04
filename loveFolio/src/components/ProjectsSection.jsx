import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-12 px-6 max-w-[1050px] mx-auto">
      
      {/* Section Title with Line */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#009BFF] whitespace-nowrap font-manrope">
          My Projects
        </h2>
        <div className="h-[2px] bg-[#009BFF] flex-1 hidden md:block" />
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={project.id}
            className="neu-card p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            {/* Left Info Column */}
            <div className={`w-full md:w-7/12 space-y-3 text-center md:text-left ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#303030] font-manrope">
                {project.title}
              </h3>

              <p className="text-slate-500 text-sm font-normal">
                {project.date}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#f0f4f8] text-slate-700 font-semibold px-3 py-1 text-xs rounded-md shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn neu-btn-primary min-w-[160px] text-center"
                >
                  View Demo
                </a>

                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="neu-btn neu-btn-secondary min-w-[160px] text-center"
                >
                  View Project Details
                </button>
              </div>

            </div>

            {/* Right Image Container */}
            <div className={`w-full md:w-5/12 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="neu-inset p-2 rounded-[20px] overflow-hidden">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-[14px]"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
