import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Smoother easing function
      once: false, // Allow animations to repeat when scrolling back up
      mirror: true, // Elements animate out while scrolling past them
      offset: 120, // Offset (in px) from the original trigger point
      delay: 50, // Global delay
      anchorPlacement: 'top-bottom', // Trigger point
      startEvent: 'DOMContentLoaded', // Start AOS when DOM is ready
      useClassNames: true, // Use class names instead of inline styles
      disableMutationObserver: false, // Keep mutation observer enabled
    });

    // Debug: Check if all sections exist
    const requiredSections = ['hero', 'about', 'mission', 'pillars', 'tracks', 'why-join', 'leadership', 'awards', 'faq', 'application'];
    console.log('Checking for required sections...');
    requiredSections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      console.log(`Section ${sectionId}:`, element ? 'Found' : 'Missing');
    });

    // Refresh AOS on route changes or dynamic content
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      <Hero />
      <div data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-out-cubic">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-out-back">
        <Mission />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease-out-back">
        <StrategicPillars />
      </div>
      <div data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-out-cubic">
        <ProgramTracks />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1400" data-aos-easing="ease-out-back">
        <WhyJoin />
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
        <Leadership />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1300" data-aos-easing="ease-out-back">
        <Awards />
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
        <FAQ />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1400" data-aos-easing="ease-out-back">
        <ApplicationForm />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;