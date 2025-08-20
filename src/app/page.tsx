import HeroCarousel from '@/components/home/hero-carousel';
import AutoscrollCarousel from '@/components/home/autoscroll-carousel';
import InfoSections from '@/components/home/info-sections';
import PrizesSection from '@/components/home/prizes-section';
import JurySection from '@/components/home/jury-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <AutoscrollCarousel />
      <InfoSections />
      <PrizesSection />
      <JurySection />
    </div>
  );
}
