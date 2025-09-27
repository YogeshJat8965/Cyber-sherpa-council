import React, { useState } from 'react';
import { Calendar, Share2 } from 'lucide-react';

const contentData = [
  {
    id: 1,
    category: 'White papers',
    title: 'GenAI Co-Pilots Across the Enterprise Stack',
    date: '28 July 2024',
    imageUrl: 'https://cdn.prod.website-files.com/65311e27941d4646368c9baf/674d9131f056ab24aab4a3c5_ai%20web%20developer.png',
  },
  {
    id: 2,
    category: 'White papers',
    title: 'Cyber Resilience in the Age of Generative AI',
    date: '26 July 2024',
    imageUrl: 'https://files.cyberriskalliance.com/wp-content/uploads/2024/12/121324_robots.jpg',
  },
  // Add more dummy data for other tabs if needed
];

const tabs = ['White papers', 'Blogs', 'Live Poll'];

const NewsAndInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const primaryDarkBlue = '#0D172A'; // Dark background
  const primaryBlue = '#0D59B5';    // Accent blue
  const sectionBgColor = '#E3DFDA'; // New section background color

  // Filter content based on the active tab (currently only White Papers are mocked)
  const filteredContent = contentData.filter(item => item.category === activeTab);

  const Card = ({ item }: { item: typeof contentData[0] }) => {
    return (
      <div 
        className="relative w-full overflow-hidden rounded-lg shadow-xl cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Card Image Background */}
        <div 
          className="h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
            
            {/* Category Tag */}
            <span 
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: primaryBlue }}
            >
              {item.category}
            </span>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              {item.title}
            </h3>

            {/* Footer / Meta Data */}
            <div className="flex items-center justify-between text-gray-300 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <Share2 className="w-4 h-4 cursor-pointer transition-colors hover:text-white" />
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      className="py-16 md:py-24 font-sans" 
      style={{ backgroundColor: sectionBgColor, color: '#1F2937' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800">
          News and Insights
        </h1>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-12 border-b border-gray-400">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-medium pb-3 transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-b-4 font-semibold text-gray-800'
                  : 'text-gray-600 hover:text-gray-800 border-b-4 border-transparent'
              }`}
              style={{
                borderBottomColor: activeTab === tab ? primaryBlue : 'transparent',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredContent.length > 0 ? (
            filteredContent.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="text-gray-600 text-lg col-span-full">No content available for "{activeTab}" yet. Please check back later!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsights;
