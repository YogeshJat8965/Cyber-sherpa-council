'use client';

import { motion } from 'framer-motion';
import { Search, Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';
import { useState } from 'react';

export default function Hero() {
  const [searchData, setSearchData] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-romantic-rose via-romantic-lavender to-romantic-gold bg-clip-text text-transparent">
              Find Your
            </span>
            <br />
            <span className="text-gray-800">Perfect Match</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of happy couples who found their soulmate through our platform.
            Your love story begins here.
          </motion.p>

          {/* Quick Search */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Partner Search</h3>
            <div className="grid grid-cols-2 gap-4">
              <select
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                value={searchData.gender}
                onChange={(e) => setSearchData({ ...searchData, gender: e.target.value })}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              
              <select
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                value={searchData.religion}
                onChange={(e) => setSearchData({ ...searchData, religion: e.target.value })}
              >
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </select>
              
              <input
                type="number"
                placeholder="Age From"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                value={searchData.ageFrom}
                onChange={(e) => setSearchData({ ...searchData, ageFrom: e.target.value })}
              />
              
              <input
                type="number"
                placeholder="Age To"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none"
                value={searchData.ageTo}
                onChange={(e) => setSearchData({ ...searchData, ageTo: e.target.value })}
              />
            </div>
            
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
              <Search size={20} />
              Search Partner
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-96 md:h-[500px]">
            {/* Couple Illustration Placeholder */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-romantic-pink to-romantic-lavender rounded-3xl flex items-center justify-center"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <Heart className="w-32 h-32 text-white/50 mx-auto mb-4 fill-white/30" />
                <p className="text-white/70 text-lg">Your Perfect Match Awaits</p>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-romantic-gold rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-romantic-rose rounded-full opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
