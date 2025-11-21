'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-romantic-rose fill-romantic-rose" />
              <span className="text-2xl font-bold">Perfect Match</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting hearts, creating families. Your journey to find true love starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-romantic-rose/20 rounded-full flex items-center justify-center hover:bg-romantic-rose transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-romantic-rose/20 rounded-full flex items-center justify-center hover:bg-romantic-rose transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-romantic-rose/20 rounded-full flex items-center justify-center hover:bg-romantic-rose transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-romantic-rose transition-colors">Home</Link></li>
              <li><Link href="/find-partner" className="hover:text-romantic-rose transition-colors">Find Partner</Link></li>
              <li><Link href="/members" className="hover:text-romantic-rose transition-colors">Members</Link></li>
              <li><Link href="/stories" className="hover:text-romantic-rose transition-colors">Success Stories</Link></li>
              <li><Link href="/pricing" className="hover:text-romantic-rose transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-romantic-rose transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-romantic-rose transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-romantic-rose transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-romantic-rose transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-romantic-rose transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-romantic-rose mt-1" />
                <span>contact@perfectmatch.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={20} className="text-romantic-rose mt-1" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-romantic-rose mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Perfect Match. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
