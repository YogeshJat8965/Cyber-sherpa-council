import React from 'react';
import { Shield, Mail, Phone, MapPin, LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Mission & Vision', href: 'mission' },
    { name: 'Program Tracks', href: 'tracks' },
    { name: 'Leadership', href: 'leadership' },
    { name: 'FAQ', href: 'faq' }
  ];

  const programs = [
    { name: 'Foundation Track', href: 'tracks' },
    { name: 'Executive Track', href: 'tracks' },
    { name: 'Innovation Track', href: 'tracks' },
    { name: 'Certification Programs', href: 'tracks' },
    { name: 'Custom Corporate Programs', href: 'tracks' }
  ];

  const resources = [
    { name: 'Research Reports', href: 'news-insights' },
    { name: 'Industry Insights', href: 'news-insights' },
    { name: 'Best Practices', href: 'news-insights' },
    { name: 'White Papers', href: 'news-insights' },
    { name: 'Webinar Series', href: 'news-insights' }
  ];

  const scrollToSection = (sectionId: string) => {
    console.log('Footer: Attempting to scroll to section:', sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Footer: Element found, scrolling...');
      
      // Get the element's position
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const offset = 100; // Account for fixed header
      
      // Scroll to the element
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
      
    } else {
      console.error('Footer: Element not found with ID:', sectionId);
      // Show all available IDs for debugging
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log('Footer: Available IDs:', allIds);
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/image.png" 
                alt="Cyber Sherpa Council Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to Shield icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Shield className="w-10 h-10 text-cyan-400 hidden" />
              <span className="text-2xl font-bold text-white">Cyber Sherpa Council</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Elevating cybersecurity leaders through strategic excellence, innovation, 
              and an exclusive community of the world's top security executives.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact@cybersherpacouncil.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91-7304670468</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  WeWork India, Chromium, Cts No. 106/1-5,<br/>
                  Jogesh Wari-Vikhroli Link Road, Milind Nagar,<br/>
                  Powai, Mumbai - 400076
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(program.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Cyber Sherpa Council. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Additional Links */}
          <div className="text-center mt-6 text-gray-500 text-xs">
            <p>Cyber Sherpa Council is a registered trademark. All program materials are proprietary and confidential.</p>
            <p className="mt-2">Equal Opportunity Organization | Veteran Owned Business</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;