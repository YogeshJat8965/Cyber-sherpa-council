'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Find Partner', href: '/find-partner' },
    { name: 'Members', href: '/members' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-romantic-rose fill-romantic-rose" />
            <span className="text-2xl font-bold bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
              Perfect Match
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-romantic-rose transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="px-4 py-2 text-romantic-rose border border-romantic-rose rounded-full hover:bg-romantic-rose hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-full hover:shadow-lg transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-romantic-rose transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-center px-4 py-2 text-romantic-rose border border-romantic-rose rounded-full hover:bg-romantic-rose hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-center px-4 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-full hover:shadow-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
