'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Heart, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const sampleResults = [
  { id: 1, name: 'Priya Sharma', age: 26, location: 'Mumbai', profession: 'Software Engineer', education: 'B.Tech', image: '👩' },
  { id: 2, name: 'Rahul Verma', age: 29, location: 'Delhi', profession: 'Business Analyst', education: 'MBA', image: '👨' },
  { id: 3, name: 'Ananya Patel', age: 25, location: 'Bangalore', profession: 'Doctor', education: 'MBBS', image: '👩' },
  { id: 4, name: 'Arjun Singh', age: 30, location: 'Pune', profession: 'Architect', education: 'B.Arch', image: '👨' },
];

export default function FindPartnerPage() {
  const [searchParams, setSearchParams] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    location: '',
    profession: '',
    education: '',
    maritalStatus: '',
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
                Find Your Perfect Partner
              </span>
            </h1>
            <p className="text-xl text-gray-600">Use our advanced filters to discover your ideal match</p>
          </motion.div>

          {/* Advanced Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Advanced Search</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age From</label>
                <input
                  type="number"
                  placeholder="21"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age To</label>
                <input
                  type="number"
                  placeholder="35"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Religion</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                  <option value="">Any</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City or State"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
                <input
                  type="text"
                  placeholder="e.g., Engineer"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Education</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                  <option value="">Any</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                  <option value="">Any</option>
                  <option value="never_married">Never Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <button className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
              <Search size={24} />
              Search for Partner
            </button>
          </motion.div>

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleResults.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-romantic-pink to-romantic-lavender flex items-center justify-center">
                    <span className="text-8xl">{profile.image}</span>
                    <motion.button
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5 text-romantic-rose group-hover:fill-romantic-rose transition-all" />
                    </motion.button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {profile.name}, {profile.age}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-romantic-rose" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-romantic-rose" />
                        <span>{profile.profession}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-romantic-rose" />
                        <span>{profile.education}</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
