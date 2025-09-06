import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import StrategicPillars from './components/StrategicPillars';
import ProgramTracks from './components/ProgramTracks';
import WhyJoin from './components/WhyJoin';
import Leadership from './components/Leadership';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sectionIds = [
    'hero', 'about', 'mission', 'pillars', 'tracks', 
    'why-join', 'leadership', 'awards', 'faq', 'application'
  ];
  
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Mission />
      <StrategicPillars />
      <ProgramTracks />
      <WhyJoin />
      <Leadership />
      <Awards />
      <FAQ />
      <ApplicationForm />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;