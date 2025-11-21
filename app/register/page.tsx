'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Lock, Phone, Heart, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlowerPetals from '@/components/FlowerPetals';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Step 2
    gender: '',
    dateOfBirth: '',
    religion: '',
    // Step 3
    otp: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
  };

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <FlowerPetals />
      
      <section className="pt-24 pb-20 px-4 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative z-20"
        >
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-romantic-rose fill-romantic-rose mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
                Create Your Account
              </span>
            </h1>
            <p className="text-gray-600">Start your journey to find true love</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s === step
                      ? 'bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white'
                      : s < step
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {s < step ? <Check size={20} /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      s < step ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Religion
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                    value={formData.religion}
                    onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                    required
                  >
                    <option value="">Select Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3: OTP Verification */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-600">
                    We've sent a verification code to<br />
                    <strong>{formData.email}</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    required
                  />
                </div>

                <p className="text-center text-sm text-gray-600">
                  Didn't receive the code?{' '}
                  <button type="button" className="text-romantic-rose hover:underline">
                    Resend
                  </button>
                </p>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-6 py-3 border-2 border-romantic-rose text-romantic-rose rounded-lg font-semibold hover:bg-romantic-rose hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Next
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                >
                  Create Account
                </button>
              )}
            </div>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-romantic-rose font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
