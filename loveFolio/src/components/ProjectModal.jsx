import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Calendar, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="neu-flat-lg max-w-2xl w-full p-6 sm:p-8 animate-fade-in relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="neu-btn neu-btn-icon absolute top-4 right-4 text-slate-500 hover:text-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="neu-badge text-xs text-blue-600 dark:text-blue-400 font-bold">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100">
            {project.title}
          </h3>
        </div>

        {/* Image Preview Banner */}
        <div className="neu-inset p-2 rounded-2xl mb-6 overflow-hidden">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-xl"
          />
        </div>

        {/* Description & Architecture Summary */}
        <div className="space-y-6 text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-500" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2 text-sm">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Completed Crio Modules */}
          {project.completedModules && (
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Verified Crio Modules Completed</span>
              </h4>
              <div className="space-y-2">
                {project.completedModules.map((module, idx) => (
                  <div key={idx} className="neu-inset p-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="neu-badge text-xs font-bold text-slate-700 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn neu-btn-primary text-xs px-5 py-2.5"
            >
              <span>View Live Demo</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn text-xs px-4 py-2.5 text-slate-700 dark:text-slate-200"
              >
                <GithubIcon className="w-4 h-4 mr-1" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="neu-btn text-xs px-5 py-2.5 text-slate-600 dark:text-slate-300"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
