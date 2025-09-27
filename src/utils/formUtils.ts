// Utility function to open form in new tab
export const openFormInNewTab = () => {
  const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application Form - Cyber Sherpa Council</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #111827;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      </style>
    </head>
    <body>
      <div id="form-root"></div>
      <script type="module">
        // This would be where we'd mount the React form component
        // For now, we'll create a simple form structure
        const formRoot = document.getElementById('form-root');
        formRoot.innerHTML = \`
          <div class="min-h-screen bg-gray-900">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <h1 class="text-2xl font-bold text-white">Cyber Sherpa Council - Application Form</h1>
                  </div>
                  <button onclick="window.close()" class="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            
            <!-- Form Content will be injected here -->
            <main class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                  <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
                    Join the Elite
                  </h1>
                  <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Take the first step towards joining an exclusive community of cybersecurity leaders shaping the future of digital defense.
                  </p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                  <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                        <input type="text" required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your first name">
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                        <input type="text" required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your last name">
                      </div>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input type="email" required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="your.email@company.com">
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Current Position *</label>
                      <input type="text" required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="e.g., CISO, CTO, VP of Security">
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Company/Organization *</label>
                      <input type="text" required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your company name">
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Years of Experience in Cybersecurity *</label>
                      <select required class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                        <option value="">Select experience level</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Why do you want to join the Cyber Sherpa Council? *</label>
                      <textarea required rows="4" class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Tell us about your motivation and what you hope to achieve..."></textarea>
                    </div>
                    
                    <div class="flex justify-center pt-6">
                      <button type="submit" class="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        \`;
      </script>
    </body>
    </html>
  `;

  const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  if (newWindow) {
    newWindow.document.write(formHtml);
    newWindow.document.close();
  }
};
