import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Who is eligible to join the Cyber Sherpa Council?",
      answer: "The Cyber Sherpa Council is open to Chief Information Security Officers, cybersecurity executives, and senior professionals responsible for safeguarding digital assets within their organizations. Members typically come from diverse industries and regions, united by a shared commitment to advancing cybersecurity leadership and resilience."
    },
    {
      question: "What is the cost of membership?",
      answer: "Membership fees vary based on the type of participation and access level. Details regarding pricing and benefits will be shared during the application process. Some programs and events are included in membership, while others are available at preferential rates for members."
    },
    {
      question: "Is organizational membership required to join?",
      answer: "No, organizational affiliation is not mandatory. Individuals can apply independently. However, applicants should have demonstrable experience in cybersecurity leadership or related executive roles."
    },
    // {
    //   question: "What are the program costs and are there scholarship options?",
    //   answer: "Program fees range from $15,000-$35,000 depending on the track. We offer need-based scholarships, corporate sponsorships, and flexible payment options. Many organizations sponsor their executives' participation as a strategic investment in leadership development."
    // },
    // {
    //   question: "How does the peer mentorship and networking component work?",
    //   answer: "Each member is matched with a senior CISO mentor and joins a cohort of 8-12 peers. We facilitate monthly virtual roundtables, quarterly in-person gatherings, and an annual leadership summit. Our private member platform enables 24/7 collaboration and knowledge sharing."
    // },
    {
      question: "What kind of career advancement can I expect after completing the program?",
      answer: "Our members typically see significant career advancement within 18 months of completion. This includes promotions to CISO roles, board advisory positions, and average salary increases of 40%. Our executive placement network and industry connections accelerate these opportunities."
    },
    {
      question: "How does the program stay current with emerging cybersecurity threats and technologies?",
      answer: "Our curriculum is continuously updated through partnerships with leading cybersecurity vendors, government agencies, and research institutions. Members receive early access to threat intelligence, emerging technology briefings, and participate in strategic research projects."
    },
    // {
    //   question: "What ongoing support is available after program completion?",
    //   answer: "Graduates become lifetime members of our alumni network, with continued access to exclusive events, research reports, and peer connections. We also offer advanced masterclasses, board readiness programs, and executive coaching services."
    // },
    {
      question: "How is the program different from traditional cybersecurity certifications?",
      answer: "While technical certifications focus on skills and knowledge, our program develops strategic leadership capabilities. We emphasize business alignment, executive communication, risk management, and organizational transformation - capabilities essential for C-level cybersecurity leaders."
    },
    {
      question: "Can international executives participate in the program?",
      answer: "Yes, we have members from 15+ countries. Our virtual platform accommodates global participation, and we host regional events in major international markets. Content is adapted for different regulatory environments and regional threat landscapes."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our cybersecurity leadership programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-400/50 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-purple-400 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our admissions team is here to help you understand how our programs can accelerate your cybersecurity leadership journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
              <a
                href="mailto:info@cybersherpacouncil.com"
                className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;