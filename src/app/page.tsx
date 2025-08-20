import HeroSection from '@/components/home/hero-section';
import AutoscrollCarousel from '@/components/home/autoscroll-carousel';
import InfoSections from '@/components/home/info-sections';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AutoscrollCarousel />
      <InfoSections />
    </div>
  );
}
