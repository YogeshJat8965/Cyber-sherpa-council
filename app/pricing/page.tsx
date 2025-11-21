'use client';

import { motion } from 'framer-motion';
import { Check, Heart, Sparkles, Crown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlowerPetals from '@/components/FlowerPetals';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'month',
    icon: Heart,
    features: [
      'Create Profile',
      'Browse Profiles',
      'Send 5 Interests/month',
      'Basic Search Filters',
      'Email Support',
    ],
    notIncluded: [
      'Contact Details',
      'Chat Feature',
      'Advanced Filters',
    ],
    color: 'from-gray-400 to-gray-500',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹999',
    period: 'month',
    icon: Sparkles,
    features: [
      'Everything in Free',
      'Unlimited Interests',
      'View Contact Details',
      'Chat Feature',
      'Advanced Search Filters',
      'Priority Support',
      'Profile Boost',
    ],
    notIncluded: [],
    color: 'from-romantic-rose to-romantic-lavender',
    popular: true,
  },
  {
    name: 'Elite',
    price: '₹2,499',
    period: 'month',
    icon: Crown,
    features: [
      'Everything in Premium',
      'Dedicated Relationship Manager',
      'Profile Verification Badge',
      'Top Search Ranking',
      'Unlimited Profile Views',
      'Premium Matches',
      'Photo Gallery',
      '24/7 Priority Support',
    ],
    notIncluded: [],
    color: 'from-romantic-gold to-yellow-500',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FlowerPetals />
      
      <section className="pt-24 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-romantic-rose to-romantic-lavender bg-clip-text text-transparent">
                Choose Your Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Find the plan that fits your journey to finding true love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`relative bg-white rounded-3xl shadow-2xl p-8 ${
                    plan.popular ? 'ring-4 ring-romantic-rose' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-romantic-rose to-romantic-lavender text-white hover:shadow-xl'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-romantic-rose hover:text-romantic-rose'
                    }`}
                  >
                    {plan.price === '₹0' ? 'Get Started' : 'Subscribe Now'}
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-4">All plans include secure payment and can be cancelled anytime</p>
            <p className="text-gray-500 text-sm">Need a custom plan? <a href="/contact" className="text-romantic-rose hover:underline">Contact us</a></p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
