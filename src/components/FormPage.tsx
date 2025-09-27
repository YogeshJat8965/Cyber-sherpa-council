import React from 'react';
import ApplicationForm from './ApplicationForm';

const FormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Cyber Sherpa Council" 
                className="h-10 w-auto mr-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold text-white">Cyber Sherpa Council</h1>
            </div>
            <button
              onClick={() => window.close()}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <main className="flex-1">
        <ApplicationForm />
      </main>
    </div>
  );
};

export default FormPage;
