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
import Leadership from './components/ExecutiveProfile';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import StayConnected from './components/StayConnected';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useScrollSpy } from './hooks/useScrollSpy';
import NewsAndInsights from './components/NewsAndInsights';
// import HeroSection from './components/HeroSection'; 

function App() {
  const sectionIds = [
    'hero', 'about', 'mission', 'pillars', 'tracks', 
    'why-join', 'leadership', 'awards', 'faq'
  ];
  
  const activeSection = useScrollSpy(sectionIds);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Medium-fast animation duration (between 300ms and 1200ms)
      easing: 'ease-out', // Simple, smooth easing
      once: false, // Allow animations to repeat when scrolling back up
      mirror: true, // Elements animate out while scrolling past them
      offset: 70, // Medium offset for balanced trigger (between 50px and 120px)
      delay: 0, // No delay for responsive animations
      anchorPlacement: 'top-bottom', // Trigger point
      startEvent: 'DOMContentLoaded', // Start AOS when DOM is ready
      useClassNames: true, // Use class names instead of inline styles
      disableMutationObserver: false, // Keep mutation observer enabled
    });

    // Debug: Check if all sections exist
    const requiredSections = ['hero', 'about', 'mission', 'pillars', 'tracks', 'why-join', 'leadership', 'awards', 'faq'];
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
      <div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-out">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-out">
        <Mission />
      </div>
      <div data-aos="zoom-in" data-aos-duration="250" data-aos-easing="ease-out">
        <StrategicPillars />
      </div>
      <div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-out">
        <ProgramTracks />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="250" data-aos-easing="ease-out">
        <WhyJoin />
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
        <Leadership />
      </div>
      <div data-aos="zoom-in" data-aos-duration="250" data-aos-easing="ease-out">
        <Awards />
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
        <FAQ />
      </div>
      <div>
        <NewsAndInsights></NewsAndInsights>
      </div>
      <StayConnected />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;