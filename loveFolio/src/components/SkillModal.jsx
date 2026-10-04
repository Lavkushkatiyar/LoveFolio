import React from 'react';
import { X, CheckCircle2, Calendar, FolderGit2, Award } from 'lucide-react';

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="neu-flat-lg max-w-lg w-full p-6 sm:p-8 animate-fade-in relative"
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

        {/* Modal Header with Technology Brand Color Badge */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-2xl neu-inset p-3 flex items-center justify-center font-black text-lg shadow-inner"
            style={{
              backgroundColor: skill.bgColor,
              color: skill.textColor,
              border: `2px solid ${skill.brandColor}`
            }}
          >
            {skill.name.slice(0, 2).toUpperCase()}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                {skill.name}
              </h3>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
              >
                {skill.category}
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Verified: {skill.achievedAt}
              </span>
            </div>
          </div>
        </div>

        {/* Skill Details Body */}
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <div className="neu-inset p-4 rounded-xl">
            <div className="text-xs font-extrabold text-slate-500 uppercase mb-1">Skill Description</div>
            <p className="text-sm leading-relaxed">{skill.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="neu-flat p-4 text-center">
              <div className="text-xs text-slate-500 font-bold uppercase">Proficiency Level</div>
              <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
                {skill.level}
              </div>
            </div>
            <div className="neu-flat p-4 text-center">
              <div className="text-xs text-slate-500 font-bold uppercase">Status</div>
              <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Crio Verified</span>
              </div>
            </div>
          </div>

          {/* Projects Implemented In */}
          {skill.projectsUsed && skill.projectsUsed.length > 0 && (
            <div>
              <div className="text-xs font-extrabold text-slate-500 uppercase mb-2 flex items-center gap-1">
                <FolderGit2 className="w-4 h-4 text-blue-500" />
                <span>Applied In Projects</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.projectsUsed.map((pName) => (
                  <span
                    key={pName}
                    className="neu-badge text-xs font-bold text-slate-700 dark:text-slate-200"
                  >
                    {pName}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="neu-btn neu-btn-primary px-6 py-2 text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
