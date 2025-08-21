
import dynamic from 'next/dynamic';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
const JurySection = dynamic(() => import('@/components/home/jury-section'));
const CallToAction = dynamic(() => import('@/components/home/call-to-action'));

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
