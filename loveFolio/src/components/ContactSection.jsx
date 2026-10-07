import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="scroll-mt-24 w-full bg-[#090e1c] py-16 sm:py-20" id="contact">
      <div className="max-w-[1200px] mx-auto px-gutter space-y-8">
        
        {/* Direct Banner Card matching code.html */}
        <div className="relative rounded-3xl bg-white p-8 sm:p-12 overflow-hidden border border-[#e5e7eb]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#dee2f6]">
                Let’s Build Something Resilient Together.
              </h2>
              <p className="font-body-md text-body-md text-[#bcc9cd] max-w-xl">
                Whether you are looking to hire a dedicated full-stack engineer, collaborate on modern architectures, or discuss software problems, feel free to reach out directly.
              </p>
              <div className="flex items-center gap-2 text-[#bcc9cd] pt-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">location_on</span>
                <span className="font-label-md text-label-md">{PROFILE_DATA.location} • Open to Remote Worldwide</span>
              </div>
            </div>

            {/* Right Column Direct Links */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                className="w-full px-5 py-3.5 rounded-xl bg-[#06b6d4] text-[#003640] font-label-md text-label-md font-semibold hover:opacity-95 shadow-lg shadow-[#06b6d4]/20 flex items-center justify-center gap-2 transition-all"
                href={`mailto:${PROFILE_DATA.email}`}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span>{PROFILE_DATA.email}</span>
              </a>

              <a
                className="w-full px-5 py-3.5 rounded-xl bg-[#090e1c] text-[#dee2f6] font-label-md text-label-md font-semibold hover:bg-[#343948] flex items-center justify-center gap-2 transition-all border border-[#252a39]"
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                <span>Connect on GitHub</span>
              </a>

              <a
                className="w-full px-5 py-3.5 rounded-xl bg-[#090e1c] text-[#dee2f6] font-label-md text-label-md font-semibold hover:bg-[#343948] flex items-center justify-center gap-2 transition-all border border-[#252a39]"
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Direct Interactive Message Form */}
        <div className="bg-[#161b2a] rounded-2xl p-6 sm:p-8 border border-[#252a39]">
          <h3 className="font-headline-md text-xl font-bold text-[#dee2f6] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[22px]">send</span>
            <span>Send a Direct Message</span>
          </h3>

          {submitted ? (
            <div className="p-6 text-center bg-[#090e1c] border border-[#06b6d4]/40 rounded-xl text-[#4cd7f6] space-y-2 animate-fade-in font-label-md">
              <span className="material-symbols-outlined text-3xl text-[#4cd7f6]">task_alt</span>
              <h4 className="font-bold text-base text-[#dee2f6]">Message Sent Successfully!</h4>
              <p className="text-xs text-[#bcc9cd]">
                Thank you for reaching out. {PROFILE_DATA.name} will reply to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs text-[#bcc9cd] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-sm text-[#dee2f6] placeholder-[#869397] focus:outline-none focus:border-[#06b6d4] transition-all font-body-sm"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-xs text-[#bcc9cd] mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-sm text-[#dee2f6] placeholder-[#869397] focus:outline-none focus:border-[#06b6d4] transition-all font-body-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-xs text-[#bcc9cd] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-sm text-[#dee2f6] placeholder-[#869397] focus:outline-none focus:border-[#06b6d4] transition-all font-body-sm"
                />
              </div>

              <div>
                <label className="block font-label-sm text-xs text-[#bcc9cd] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={`Hi ${PROFILE_DATA.name}, I would like to discuss...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-sm text-[#dee2f6] placeholder-[#869397] focus:outline-none focus:border-[#06b6d4] transition-all resize-none font-body-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#06b6d4] text-[#003640] font-label-md text-label-md font-semibold hover:opacity-95 shadow-lg shadow-[#06b6d4]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
