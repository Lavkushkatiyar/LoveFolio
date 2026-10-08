import { useEffect } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { RenderTechIcon } from './TechLogos';

export default function SkillModal({ skill, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  const skillDetailsMap = {
    linux: { subtitle: 'Core OS' },
    http: { subtitle: 'Protocols' },
    css: { subtitle: 'Flexbox & Grid' },
    bootstrap: { subtitle: 'UI Framework' },
    html: { subtitle: 'Semantic Web' },
    rest: { subtitle: 'Architecture' },
    git: { subtitle: 'Version Control' },
    js: { subtitle: 'ES6+ Async' },
    react: { subtitle: 'Hooks & State' },
    node: { subtitle: 'Runtime' },
    express: { subtitle: 'Middleware' },
    mongo: { subtitle: 'NoSQL DB' },
  };

  const detail = skillDetailsMap[skill.iconKey] || { subtitle: skill.category };

  const projectsUsed = PROJECTS_DATA.filter((p) =>
    p.tech_stac.some(
      (t) =>
        t.toLowerCase().includes(skill.name.toLowerCase()) ||
        skill.name.toLowerCase().includes(t.toLowerCase())
    )
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-[#161b2a] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#252a39] animate-scale-up relative overflow-hidden max-h-[90vh] overflow-y-auto text-[#dee2f6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#252a39] text-[#bcc9cd] hover:text-[#dee2f6] hover:bg-[#303444] transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pt-2">
          <div className="w-14 h-14 rounded-xl bg-[#252a39] flex items-center justify-center shrink-0 border border-[#3d494c]">
            <RenderTechIcon iconName={skill.iconKey} className="w-9 h-9" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline-md text-2xl font-bold text-[#dee2f6]">
                {skill.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded bg-[#252a39] text-[#4cd7f6] border border-[#3d494c]">
                {skill.category}
              </span>
            </div>
          </div>
        </div>

        {/* Details Body */}
        <div className="space-y-4 text-[#bcc9cd] font-body-sm">
          <div className="bg-[#1a1f2e] rounded-xl p-4 border border-[#252a39] space-y-1">
            <div className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider">
              Skill Overview
            </div>
            <p className="font-body-sm text-body-sm text-[#dee2f6] leading-relaxed">
              Demonstrated hands-on expertise in {skill.name} ({detail.subtitle}) across production modules and micro-architectures.
            </p>
          </div>

          {/* Applied Projects */}
          <div>
            <div className="font-label-sm text-label-sm text-[#4cd7f6] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">folder</span>
              <span>Applied In Projects ({projectsUsed.length})</span>
            </div>

            {projectsUsed.length > 0 ? (
              <div className="space-y-2">
                {projectsUsed.map((proj) => (
                  <div key={proj.id} className="p-3 rounded-xl bg-[#1a1f2e] border border-[#252a39] flex items-center justify-between">
                    <div>
                      <div className="font-headline-sm text-sm font-semibold text-[#dee2f6]">{proj.title}</div>
                      <div className="font-label-sm text-xs text-[#bcc9cd]">{proj.category} • {proj.date}</div>
                    </div>
                    <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-[#252a39] text-[#4cd7f6] border border-[#3d494c]">
                      Applied
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-[#1a1f2e] border border-[#252a39] font-body-sm text-xs text-[#bcc9cd]">
                Integrated in core technical workflows and micro-experience modules.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#252a39] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#252a39] text-[#dee2f6] hover:bg-[#303444] font-label-md text-label-md transition-colors border border-[#3d494c] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
