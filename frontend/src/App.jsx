import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopInfo from './components/TopInfo';
import About from './components/About';
import SkillsStack from './components/SkillsStack';
import LeetCodeSection from './components/LeetCodeSection';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import AiChatWidget from './components/AiChatWidget';
import Footer from './components/Footer';
import { fetchProfile, fetchProjects } from './services/api';

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadData() {
      const profileData = await fetchProfile();
      const projectsData = await fetchProjects();
      if (profileData) setProfile(profileData);
      if (projectsData) setProjects(projectsData);
    }
    loadData();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero profile={profile} />
        <TopInfo profile={profile} />
        <About />
        <SkillsStack />
        <LeetCodeSection />
        <Projects projects={projects} />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
      <AiChatWidget />
    </div>
  );
}
