import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { openFormInNewTab } from '../utils/formUtils';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    // { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Mission' },
    { id: 'pillars', label: 'Pillars' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'why-join-us', label: 'Why Join' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'awards', label: 'Awards' },
    { id: 'faq', label: 'FAQ' },
    { id: 'application', label: 'Apply' },
  ];

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    
    // Handle Apply button specially - open form in new tab
    if (sectionId === 'application') {
      openFormInNewTab();
      setIsOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found, scrolling...');
      
      // Get the element's position
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const offset = 100; // Account for fixed header
      
      // Scroll to the element
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
      
      // Fallback for browsers that don't support smooth scrolling
      if (window.scrollY === elementTop - offset) {
        console.log('Smooth scroll not supported, using fallback');
        window.scrollTo(0, elementTop - offset);
      }
      
    } else {
      console.error('Element not found with ID:', sectionId);
      // Show all available IDs for debugging
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log('Available IDs:', allIds);
    }
    
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/images/image.png" 
              alt="Cyber Sherpa Council Logo" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                // Fallback to Shield icon if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Shield className="w-8 h-8 text-blue-600 hidden" />
            <span className="text-xl font-bold text-black">
              Cyber Sherpa Council
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base transition-colors duration-200 hover:text-blue-600 ${
                  item.id === 'application' 
                    ? 'font-bold text-blue-600 hover:text-blue-700' 
                    : 'font-medium text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base transition-colors duration-200 hover:text-blue-600 ${
                    item.id === 'application' 
                      ? 'font-bold text-blue-600 hover:text-blue-700' 
                      : 'font-medium text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;