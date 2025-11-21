'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, Bell } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Shield className="w-16 h-16 text-romantic-rose mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600">Last updated: November 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
          >
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Perfect Match ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our matrimonial platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect personal information that you voluntarily provide to us when registering on the platform, including but not limited to: name, email address, phone number, date of birth, gender, religion, location, education, profession, and photographs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information when you visit, use or navigate the platform. This information may include: device information, browser type, IP address, pages viewed, time spent on pages, and other diagnostic data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To create and manage your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To provide and maintain our matrimonial services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To match you with compatible partners based on your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To communicate with you about your account and our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To send you promotional materials and updates (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To improve our platform and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span>To detect, prevent and address technical issues and fraud</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Information Sharing</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>With Other Users:</strong> Your profile information will be visible to other registered users of the platform for matchmaking purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-lavender rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Access:</strong> You have the right to request copies of your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Rectification:</strong> You have the right to request correction of any inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Erasure:</strong> You have the right to request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Restriction:</strong> You have the right to request restriction of processing your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-romantic-rose mt-1">•</span>
                  <span><strong>Objection:</strong> You have the right to object to our processing of your personal data</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-romantic-pink/30 rounded-lg">
                <p className="text-gray-800"><strong>Email:</strong> privacy@perfectmatch.com</p>
                <p className="text-gray-800"><strong>Phone:</strong> +91 123 456 7890</p>
                <p className="text-gray-800"><strong>Address:</strong> 123 Love Street, Mumbai, Maharashtra 400001, India</p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
