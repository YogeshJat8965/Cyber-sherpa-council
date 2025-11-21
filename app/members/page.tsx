'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Heart, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const members = [
  { id: 1, name: 'Priya Sharma', age: 26, location: 'Mumbai', profession: 'Software Engineer', education: 'B.Tech', religion: 'Hindu', height: '5\'4"', image: '👩' },
  { id: 2, name: 'Rahul Verma', age: 29, location: 'Delhi', profession: 'Business Analyst', education: 'MBA', religion: 'Hindu', height: '5\'10"', image: '👨' },
  { id: 3, name: 'Ananya Patel', age: 25, location: 'Bangalore', profession: 'Doctor', education: 'MBBS', religion: 'Hindu', height: '5\'5"', image: '👩' },
  { id: 4, name: 'Arjun Singh', age: 30, location: 'Pune', profession: 'Architect', education: 'B.Arch', religion: 'Sikh', height: '6\'0"', image: '👨' },
  { id: 5, name: 'Sneha Reddy', age: 27, location: 'Hyderabad', profession: 'Teacher', education: 'B.Ed', religion: 'Hindu', height: '5\'3"', image: '👩' },
  { id: 6, name: 'Vikram Malhotra', age: 28, location: 'Chandigarh', profession: 'CA', education: 'CA', religion: 'Hindu', height: '5\'11"', image: '👨' },
  { id: 7, name: 'Neha Khan', age: 24, location: 'Mumbai', profession: 'Designer', education: 'B.Des', religion: 'Muslim', height: '5\'6"', image: '👩' },
  { id: 8, name: 'Karthik Iyer', age: 31, location: 'Chennai', profession: 'Manager', education: 'MBA', religion: 'Hindu', height: '5\'9"', image: '👨' },
];

export default function MembersPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    location: '',
    profession: '',
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
                Browse Members
              </span>
            </h1>
            <p className="text-xl text-gray-600">Discover verified profiles of people looking for their life partner</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                  <Filter className="w-5 h-5 text-romantic-rose" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="number" placeholder="From" className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none" />
                      <input type="number" placeholder="To" className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Religion</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                      <option value="">Select</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="sikh">Sikh</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <input type="text" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                        <option value="">From</option>
                        <option value="5">5'0"</option>
                        <option value="5.5">5'6"</option>
                        <option value="6">6'0"</option>
                      </select>
                      <select className="px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none">
                        <option value="">To</option>
                        <option value="5.5">5'6"</option>
                        <option value="6">6'0"</option>
                        <option value="6.5">6'6"</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
                    <input type="text" placeholder="e.g., Engineer" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-romantic-rose focus:ring-2 focus:ring-romantic-rose/20 outline-none" />
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Search size={20} />
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Members Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 bg-romantic-rose text-white rounded-lg flex items-center gap-2"
                >
                  <Filter size={20} />
                  Filters
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {members.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-romantic-pink to-romantic-lavender flex items-center justify-center">
                      <span className="text-8xl">{member.image}</span>
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
                        {member.name}, {member.age}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-romantic-rose" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-romantic-rose" />
                          <span>{member.profession}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap size={16} className="text-romantic-rose" />
                          <span>{member.education}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                        View Profile
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-12"
              >
                <button className="px-8 py-3 border-2 border-romantic-rose text-romantic-rose rounded-full font-semibold hover:bg-romantic-rose hover:text-white transition-all duration-200">
                  Load More Profiles
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
