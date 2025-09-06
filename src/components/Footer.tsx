import React from 'react';
import { Shield, Mail, Phone, MapPin, LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Program Tracks', href: '#tracks' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'FAQ', href: '#faq' }
  ];

  const programs = [
    { name: 'Foundation Track', href: '#tracks' },
    { name: 'Executive Track', href: '#tracks' },
    { name: 'Innovation Track', href: '#tracks' },
    { name: 'Certification Programs', href: '#tracks' },
    { name: 'Custom Corporate Programs', href: '#application' }
  ];

  const resources = [
    { name: 'Research Reports', href: '#leadership' },
    { name: 'Industry Insights', href: '#awards' },
    { name: 'Best Practices', href: '#pillars' },
    { name: 'White Papers', href: '#leadership' },
    { name: 'Webinar Series', href: '#why-join' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
              <Shield className="w-10 h-10 text-cyan-400" />
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
                <span>info@cybersherpacouncil.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Washington, DC & Global</span>
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive insights, industry reports, and early access to events from the world's 
              leading cybersecurity executives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
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
            <div className="flex space-x-4">
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
            </div>
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