import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const sanitizeText = (str) => {
    if (!str) return '';
    return str.replace(/^["']|["']$/g, '').trim();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-[#161b2a] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#252a39] animate-scale-up relative max-h-[90vh] overflow-y-auto text-[#dee2f6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#252a39] text-[#bcc9cd] hover:text-[#dee2f6] hover:bg-[#303444] transition-colors flex items-center justify-center z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6 pr-8 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-[#252a39] text-[#4cd7f6] border border-[#3d494c]">
              {project.category}
            </span>
            <span className="font-label-sm text-label-sm text-[#bcc9cd] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {project.date}
            </span>
          </div>

          <h3 className="font-headline-md text-2xl sm:text-3xl font-bold text-[#dee2f6]">
            {project.title}
          </h3>
        </div>

        {/* Image Preview Banner */}
        <div className="rounded-xl bg-[#1a1f2e] p-2 mb-6 border border-[#252a39] overflow-hidden">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Details Body */}
        <div className="space-y-6 text-[#bcc9cd]">
          <div>
            <h4 className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="font-body-md text-body-md text-[#dee2f6] leading-relaxed">
              “{sanitizeText(project.summary)}”
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">memory</span>
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2 font-body-sm text-body-sm text-[#dee2f6]">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span>{sanitizeText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Completed Modules */}
          {project.completedModules && project.completedModules.length > 0 && (
            <div>
              <h4 className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">layers</span>
                <span>Verified Crio Modules Completed</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.completedModules.map((module, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#1a1f2e] border border-[#252a39] font-body-sm text-xs text-[#dee2f6] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px] shrink-0">
                      check_circle
                    </span>
                    <span>{sanitizeText(module)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#1a1f2e] text-[#4cd7f6] font-label-sm text-label-sm border border-[#252a39]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-[#252a39] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#06b6d4] text-[#003640] font-label-md text-label-md font-semibold hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md shadow-[#06b6d4]/10"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>View Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#252a39] text-[#dee2f6] font-label-md text-label-md hover:bg-[#303444] transition-all flex items-center gap-1.5 border border-[#3d494c]"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#252a39] text-[#dee2f6] hover:bg-[#303444] font-label-md text-label-md transition-all border border-[#3d494c] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
