# Perfect Match - Matrimonial Website

A modern matrimonial platform built with Next.js 14, featuring a romantic design theme with beautiful animations and comprehensive features for finding life partners.

## ✨ Features

- 🎨 Beautiful romantic UI with pastel pink, rose, lavender, and gold color scheme
- 💫 Smooth animations using Framer Motion (floating hearts, flower petals, etc.)
- 📱 Fully responsive design (mobile-first approach)
- 🔍 Advanced partner search with multiple filters
- 💑 Success stories carousel
- 💰 Subscription plans with animated pricing cards
- 🔐 Login and multi-step registration pages
- 📧 Contact form with office information
- 🎯 Profile browsing with hover effects
- ⚡ Built with Next.js 14 App Router for optimal performance

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn** as package manager
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`
- **Git** (to clone the repository)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/YogeshJat8965/Cyber-sherpa-council.git
cd Cyber-sherpa-council
```

2. **Checkout the matrimonial website branch**

```bash
git checkout copilot/build-matrimonial-website-frontend
```

3. **Install dependencies**

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

This will install all required dependencies including:
- Next.js 14.2.15
- React 18.3.1
- Framer Motion 11.5.4
- Tailwind CSS 3.4.1
- TypeScript 5.5.3
- Lucide React icons

4. **Run the development server**

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

The application will automatically reload if you make changes to the code.

## 📝 Available Scripts

- **`npm run dev`** - Starts the development server on http://localhost:3000
- **`npm run build`** - Creates an optimized production build
- **`npm run start`** - Starts the production server (run after `npm run build`)
- **`npm run lint`** - Runs ESLint to check code quality

## 📁 Project Structure

```
Cyber-sherpa-council/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── pricing/           # Pricing page
│   ├── members/           # Members browsing page
│   ├── stories/           # Success stories page
│   ├── contact/           # Contact page
│   ├── find-partner/      # Partner search page
│   ├── login/             # Login page
│   ├── register/          # Multi-step registration page
│   └── privacy-policy/    # Privacy policy page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── FloatingHearts.tsx # Animated hearts background
│   ├── FlowerPetals.tsx   # Falling petals animation
│   ├── FeaturedProfiles.tsx
│   └── SuccessStories.tsx
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Pages Overview

1. **Home (/)** - Landing page with hero section, quick search, featured profiles, and success stories
2. **Pricing (/pricing)** - Three subscription tiers: Free, Premium, and Elite
3. **Members (/members)** - Browse member profiles with advanced filtering
4. **Stories (/stories)** - Success stories from happy couples
5. **Contact (/contact)** - Contact form and office information
6. **Find Partner (/find-partner)** - Advanced search with detailed filters
7. **Login (/login)** - User login with social authentication options
8. **Register (/register)** - Three-step registration process
9. **Privacy Policy (/privacy-policy)** - Comprehensive privacy information

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 🔧 Troubleshooting

### Port already in use

If port 3000 is already in use, you can run the app on a different port:

```bash
npm run dev -- -p 3001
```

### Dependencies installation fails

Try clearing npm cache and reinstalling:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build errors

Make sure you're using Node.js 18.x or higher:

```bash
node --version
```

If you have an older version, update Node.js from [nodejs.org](https://nodejs.org/)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1280px and up)

## 🎯 Features Highlights

- ✅ No backend required - Pure frontend implementation
- ✅ No authentication system - Demo purposes only
- ✅ Sample data for profiles and testimonials
- ✅ SEO optimized with Next.js metadata
- ✅ Zero security vulnerabilities (CodeQL verified)
- ✅ Accessible design with ARIA labels
- ✅ SSR-compatible animations

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

Created by **YogeshJat8965**

## 🆘 Need Help?

If you encounter any issues while running the project:

1. Check that Node.js version is 18.x or higher
2. Make sure all dependencies are installed correctly
3. Try clearing cache and reinstalling dependencies
4. Check the console for error messages
5. Open an issue on GitHub with details about the error

---

Made with ❤️ using Next.js 14
