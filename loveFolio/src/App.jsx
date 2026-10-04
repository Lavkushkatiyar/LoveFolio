import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import SkillModal from './components/SkillModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#f4f6fb]">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="space-y-4">
        <Hero />
        <SkillsSection onSelectSkill={(skill) => setActiveSkill(skill)} />
        <ProjectsSection onSelectProject={(project) => setActiveProject(project)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

    </div>
  );
}
