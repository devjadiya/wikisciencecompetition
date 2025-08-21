
import HeroCarousel from '@/components/home/hero-carousel';
import InfoSections from '@/components/home/info-sections';
import PrizesSection from '@/components/home/prizes-section';
import JurySection from '@/components/home/jury-section';
import CallToAction from '@/components/home/call-to-action';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <InfoSections />
      <PrizesSection />
      <CallToAction />
      <JurySection />
    </div>
  );
}
