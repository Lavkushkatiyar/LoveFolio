import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
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
    <section id="contact" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 neu-flat p-8 space-y-6">
          <div>
            <span className="neu-badge text-xs text-blue-600 dark:text-blue-400 font-bold">
              Get In Touch
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">
              Let's Connect & Collaborate
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Available for full-stack developer opportunities, software engineering roles, and technical discussions.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 p-3 neu-inset rounded-2xl">
              <div className="w-10 h-10 neu-btn neu-btn-icon text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Email Address</div>
                <a href={`mailto:${PROFILE_DATA.email}`} className="text-sm font-extrabold text-slate-800 dark:text-slate-200 hover:text-blue-600">
                  {PROFILE_DATA.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 neu-inset rounded-2xl">
              <div className="w-10 h-10 neu-btn neu-btn-icon text-emerald-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Phone / WhatsApp</div>
                <a href={`tel:${PROFILE_DATA.phone}`} className="text-sm font-extrabold text-slate-800 dark:text-slate-200 hover:text-emerald-600">
                  {PROFILE_DATA.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 neu-inset rounded-2xl">
              <div className="w-10 h-10 neu-btn neu-btn-icon text-amber-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Location</div>
                <div className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                  {PROFILE_DATA.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 neu-flat p-8">
          <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span>Send a Direct Message</span>
          </h3>

          {submitted ? (
            <div className="neu-inset p-8 text-center text-emerald-600 dark:text-emerald-400 font-bold animate-fade-in rounded-2xl">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-500" />
              Thank you! Your message has been sent successfully. Navneet will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="neu-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="neu-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry / Full-stack position"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="neu-input"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Navneet, I would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="neu-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="neu-btn neu-btn-primary w-full py-3.5 text-base justify-center font-bold shadow-md"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
