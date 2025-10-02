import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoursesSection from '@/components/CoursesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CoursesSection />
    </div>
  );
}
