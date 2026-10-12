import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section className="scroll-mt-24 w-full bg-[#090e1c] py-12 sm:py-16 border-b border-[#e5e7eb]" id="experience">
      <div className="max-w-[1200px] mx-auto px-gutter space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#4cd7f6]" />
            <span className="font-label-sm text-label-sm text-[#4cd7f6]">Experience</span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#dee2f6] font-semibold">Work Experience</h2>
        </div>

        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp) => (
            <article key={exp.id} className="relative bg-[#161b2a] rounded-2xl p-5 sm:p-6 shadow-md border border-[#d1d5db]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-[#252a39]">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#4cd7f6]">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-[#bcc9cd] font-label-md text-label-md">
                    <span className="text-[#dee2f6] font-semibold">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center rounded-lg bg-[#252a39] px-3 py-1.5 font-label-sm text-label-sm text-[#4cd7f6] border border-[#3d494c]">
                  {exp.period}
                </span>
              </div>

              {exp.description && (
                <p className="font-body-sm text-body-sm text-[#bcc9cd] mt-4">{exp.description}</p>
              )}

              {exp.bullets?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {exp.bullets.map((highlight, index) => (
                    <p
                      key={`${exp.id}-${index}`}
                      className="rounded-lg bg-[#1a1f2e] border border-[#252a39] px-3.5 py-3 font-body-sm text-body-sm text-[#bcc9cd]"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
