'use client';

import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import AmbassadorsSection from '@/components/AmbassadorsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <LandingHero />
        <FeaturesSection />
        <AmbassadorsSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
