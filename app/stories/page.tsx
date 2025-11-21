'use client';

import { motion } from 'framer-motion';
import { Heart, Quote, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlowerPetals from '@/components/FlowerPetals';

const stories = [
  {
    id: 1,
    couple: 'Raj & Simran',
    image: '💑',
    story: 'We found each other on Perfect Match and it was love at first conversation. Our families are from different states, but the platform helped us connect beautifully. After three months of chatting and meeting, we knew we were meant for each other. Today, we\'re happily married with a beautiful baby girl.',
    date: 'Married in December 2023',
    weddingCity: 'Jaipur, Rajasthan',
  },
  {
    id: 2,
    couple: 'Amit & Neha',
    image: '👫',
    story: 'After years of searching through various platforms, we finally found our perfect match here. What started as a simple "hi" turned into endless conversations. We discovered we shared the same values, dreams, and even the same favorite travel destinations! Our families met within two months, and we got married in a grand celebration.',
    date: 'Married in October 2023',
    weddingCity: 'Delhi, India',
  },
  {
    id: 3,
    couple: 'Vikram & Anjali',
    image: '💏',
    story: 'Our families are from different states and backgrounds, but Perfect Match helped us find common ground. We connected over our love for classical music and literature. Despite the distance, we made it work. Today, we\'re grateful for this platform that brought us together. Forever thankful!',
    date: 'Married in August 2023',
    weddingCity: 'Bangalore, Karnataka',
  },
  {
    id: 4,
    couple: 'Sanjay & Priya',
    image: '💑',
    story: 'We were both skeptical about online matrimony, but Perfect Match changed our perspective. The detailed profiles and advanced filters helped us find exactly what we were looking for in a partner. Our journey from strangers to soulmates has been magical!',
    date: 'Married in June 2023',
    weddingCity: 'Mumbai, Maharashtra',
  },
  {
    id: 5,
    couple: 'Rohit & Divya',
    image: '👫',
    story: 'Thanks to Perfect Match, we found each other despite living in different countries. The video chat feature helped us build a strong connection before meeting. Now we\'re happily settled and planning our future together.',
    date: 'Married in March 2023',
    weddingCity: 'Pune, Maharashtra',
  },
  {
    id: 6,
    couple: 'Arjun & Kavya',
    image: '💏',
    story: 'Our story is proof that destiny works through modern technology! We matched based on our shared interests and values. The rest is history. We couldn\'t be happier!',
    date: 'Married in January 2023',
    weddingCity: 'Hyderabad, Telangana',
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FlowerPetals />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Real love stories that began on Perfect Match
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-romantic-pink to-romantic-lavender flex items-center justify-center">
                  <motion.div
                    className="text-9xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {story.image}
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <Heart className="w-12 h-12 fill-white text-white opacity-80" />
                  </div>
                </div>

                <div className="p-8">
                  <Quote className="w-10 h-10 text-romantic-rose/30 mb-4" />
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {story.couple}
                  </h3>

                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{story.story}"
                  </p>

                  <div className="flex items-center gap-2 text-romantic-rose font-semibold mb-2">
                    <Calendar size={18} />
                    <span>{story.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Wedding held in {story.weddingCity}
                  </p>

                  <div className="flex items-center gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Heart key={star} className="w-5 h-5 fill-romantic-rose text-romantic-rose" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-romantic-pink to-romantic-lavender rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Want to Share Your Story?
              </h3>
              <p className="text-gray-700 mb-6">
                If you found your life partner through Perfect Match, we'd love to hear from you!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200">
                Submit Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
