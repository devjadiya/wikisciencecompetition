import dynamic from 'next/dynamic';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
const JurySection = dynamic(() => import('@/components/home/jury-section'));
const CallToAction = dynamic(() => import('@/components/home/call-to-action'));
const ContactForm = dynamic(() => import('@/components/home/contact-form'));
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section'));
const DraggableCardsSection = dynamic(() => import('@/components/home/autoscroll-carousel'));
const VortexCta = dynamic(() => import('@/components/home/vortex-cta'));

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <InfoSections />
      <DraggableCardsSection />
      <PrizesSection />
      <VortexCta />
      <CallToAction />
      <ContactForm />
      <TestimonialsSection />
      <JurySection />
    </div>
  );
}
