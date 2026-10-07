
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SkillModal from './components/SkillModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    document.body.style.overflow =
      activeSkill || activeProject ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeSkill, activeProject]);

  return (
    <div className="min-h-screen bg-white font-body-md text-[#111827] selection:bg-[#e5e7eb] selection:text-[#111827]">
      <Navbar />

      <main className="w-full bg-white pt-20">
        <div className="flex w-full flex-col text-[#111827]">
          <Hero />
          <ExperienceSection />
          <SkillsSection onSelectSkill={setActiveSkill} />
          <ProjectsSection onSelectProject={setActiveProject} />
          <EducationSection />
          <ContactSection />
        </div>
      </main>

      <Footer />

      <SkillModal
        skill={activeSkill}
        onClose={() => setActiveSkill(null)}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
