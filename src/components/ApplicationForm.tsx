import React, { useState } from 'react';
import { Send, User, Mail, Phone, Building, GraduationCap, FileText } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    currentTitle: '',
    experience: '',
    track: '',
    motivation: '',
    goals: '',
    references: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.currentTitle.trim()) newErrors.currentTitle = 'Current title is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.track) newErrors.track = 'Program track is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';
    if (!formData.goals.trim()) newErrors.goals = 'Goals are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message (in a real app, you'd handle this properly)
      alert('Application submitted successfully! We will contact you within 48 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        currentTitle: '',
        experience: '',
        track: '',
        motivation: '',
        goals: '',
        references: ''
      });
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Apply Now
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Begin your journey to cybersecurity leadership excellence
          </p>
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-cyan-400 text-sm">
              <strong>Application Deadline:</strong> Rolling admissions with cohorts starting quarterly. 
              Early applications receive priority review and scholarship consideration.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="w-6 h-6 text-cyan-400 mr-3" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.firstName 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.lastName 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-6 h-6 text-purple-400 mr-3" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Building className="w-6 h-6 text-green-400 mr-3" />
              Professional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.company 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="Your company name"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                )}
              </div>
              <div>
                <label htmlFor="currentTitle" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Title *
                </label>
                <input
                  type="text"
                  id="currentTitle"
                  name="currentTitle"
                  value={formData.currentTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.currentTitle 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="e.g., CISO, Security Director"
                />
                {errors.currentTitle && (
                  <p className="mt-1 text-sm text-red-400">{errors.currentTitle}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                Years of Cybersecurity Leadership Experience *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.experience 
                    ? 'border-red-500 focus:ring-red-400/50' 
                    : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                }`}
              >
                <option value="">Select experience level</option>
                <option value="2-4">2-4 years</option>
                <option value="5-7">5-7 years</option>
                <option value="8-12">8-12 years</option>
                <option value="13-18">13-18 years</option>
                <option value="19+">19+ years</option>
              </select>
              {errors.experience && (
                <p className="mt-1 text-sm text-red-400">{errors.experience}</p>
              )}
            </div>
          </div>

          {/* Program Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 text-yellow-400 mr-3" />
              Program Selection
            </h3>
            <div>
              <label htmlFor="track" className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Program Track *
              </label>
              <select
                id="track"
                name="track"
                value={formData.track}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.track 
                    ? 'border-red-500 focus:ring-red-400/50' 
                    : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                }`}
              >
                <option value="">Select a program track</option>
                <option value="foundation">Foundation Track (6 months) - Entry Level</option>
                <option value="executive">Executive Track (12 months) - Advanced</option>
                <option value="innovation">Innovation Track (9 months) - Specialized</option>
              </select>
              {errors.track && (
                <p className="mt-1 text-sm text-red-400">{errors.track}</p>
              )}
            </div>
          </div>

          {/* Essay Questions */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 text-red-400 mr-3" />
              Essay Questions
            </h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join the Cyber Sherpa Council? (500 words max) *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-vertical ${
                    errors.motivation 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="Describe your motivation for joining our cybersecurity leadership community..."
                />
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-400">{errors.motivation}</p>
                )}
              </div>
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
                  What are your career goals and how will this program help you achieve them? (500 words max) *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-vertical ${
                    errors.goals 
                      ? 'border-red-500 focus:ring-red-400/50' 
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                  }`}
                  placeholder="Share your career aspirations and how our program aligns with your goals..."
                />
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-400">{errors.goals}</p>
                )}
              </div>
              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-300 mb-2">
                  Professional References (Name, Title, Company, Email - Optional)
                </label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-200 resize-vertical"
                  placeholder="List 2-3 professional references who can speak to your leadership capabilities..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-3 mx-auto"
            >
              <Send className="w-5 h-5" />
              <span>
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </span>
            </button>
            <p className="text-gray-400 text-sm mt-4">
              By submitting this application, you agree to our terms of service and privacy policy.
              We will contact you within 48 hours of submission.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;