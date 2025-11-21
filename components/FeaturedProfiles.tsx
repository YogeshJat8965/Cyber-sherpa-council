'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 26,
    location: 'Mumbai, India',
    profession: 'Software Engineer',
    education: 'B.Tech in Computer Science',
    image: '👩',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    age: 29,
    location: 'Delhi, India',
    profession: 'Business Analyst',
    education: 'MBA',
    image: '👨',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    age: 25,
    location: 'Bangalore, India',
    profession: 'Doctor',
    education: 'MBBS',
    image: '👩',
  },
  {
    id: 4,
    name: 'Arjun Singh',
    age: 30,
    location: 'Pune, India',
    profession: 'Architect',
    education: 'B.Arch',
    image: '👨',
  },
];

export default function FeaturedProfiles() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
              Featured Profiles
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Meet our verified members looking for their perfect match</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-romantic-rose text-romantic-rose rounded-full font-semibold hover:bg-romantic-rose hover:text-white transition-all duration-200">
            View All Profiles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
