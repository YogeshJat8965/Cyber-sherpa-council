'use client';

import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';
import { useState } from 'react';

const stories = [
  {
    id: 1,
    couple: 'Raj & Simran',
    image: '💑',
    story: 'We found each other on Perfect Match and it was love at first conversation. Three months later, we got engaged!',
    date: 'Married in Dec 2023',
  },
  {
    id: 2,
    couple: 'Amit & Neha',
    image: '👫',
    story: 'After years of searching, we finally found our perfect match. Thank you for bringing us together!',
    date: 'Married in Oct 2023',
  },
  {
    id: 3,
    couple: 'Vikram & Anjali',
    image: '💏',
    story: 'Our families are from different states, but Perfect Match helped us find common ground. Forever grateful!',
    date: 'Married in Aug 2023',
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-romantic-pink/30 to-romantic-lavender/30">
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
              Success Stories
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Real love stories that started here</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Stories Carousel */}
          <div className="overflow-hidden">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  display: activeIndex === index ? 'block' : 'none',
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    className="flex-shrink-0 w-48 h-48 bg-gradient-to-br from-romantic-pink to-romantic-lavender rounded-full flex items-center justify-center text-7xl"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {story.image}
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-12 h-12 text-romantic-rose/30 mb-4" />
                    <p className="text-xl text-gray-700 mb-6 italic">"{story.story}"</p>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.couple}</h3>
                    <p className="text-romantic-rose font-semibold">{story.date}</p>
                    <div className="flex items-center justify-center md:justify-start gap-1 mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Heart key={star} className="w-5 h-5 fill-romantic-rose text-romantic-rose" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-romantic-rose w-8'
                    : 'bg-romantic-rose/30'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
              className="px-6 py-2 bg-white text-romantic-rose rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              ← Previous
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
              className="px-6 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Next →
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-romantic-rose text-romantic-rose rounded-full font-semibold hover:bg-romantic-rose hover:text-white transition-all duration-200">
            Read More Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
