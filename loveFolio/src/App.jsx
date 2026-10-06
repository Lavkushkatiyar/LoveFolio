import React, { useState, useEffect } from 'react';
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
import QTripCard from './components/Project';
export default function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeSkill || activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeSkill, activeProject]);

  return (
    <div className="bg-[#0e1321] font-body-md text-[#dee2f6] selection:bg-[#06b6d4] selection:text-[#003640] min-h-screen">
      
      {/* Fixed Obsidian Header */}
      <Navbar />

      {/* Main Content Body */}
      <main className="w-full pt-20 bg-[#0e1321]">
        <div className="flex flex-col w-full text-[#dee2f6]">
          <Hero />
          <ExperienceSection />
          <SkillsSection onSelectSkill={(skill) => setActiveSkill(skill)} />
          <ProjectsSection onSelectProject={(project) => setActiveProject(project)} />
          <EducationSection />
          <ContactSection />
        </div>
      {/* Main Content Sections */}
      <main className="space-y-5">
        <br />
        <br />
        <Hero />
        <br />
        <br />
        <ExperienceSection />
        <br />
        <br />
        <SkillsSection onSelectSkill={(skill) => setActiveSkill(skill)} />
        <br />
        <br />
        <br />
        <ProjectsSection onSelectProject={(project) => setActiveProject(project)} />
        <br />
        <EducationSection />
        <br />
        <br />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

    </div>
  );
}
