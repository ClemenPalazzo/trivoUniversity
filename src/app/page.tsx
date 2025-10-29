import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import AmbassadorsSection from '@/components/AmbassadorsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHero />
      <AmbassadorsSection />
      <Footer />
    </div>
  );
}
