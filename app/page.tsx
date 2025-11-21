import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FeaturedProfiles from '@/components/FeaturedProfiles';
import SuccessStories from '@/components/SuccessStories';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProfiles />
      <SuccessStories />
      <Footer />
    </main>
  )
}
