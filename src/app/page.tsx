import dynamic from 'next/dynamic';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
const CallToAction = dynamic(() => import('@/components/home/call-to-action'));
const ContactForm = dynamic(() => import('@/components/home/contact-form'));
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section'));
const VortexCta = dynamic(() => import('@/components/home/vortex-cta'));

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <InfoSections />
      <PrizesSection />
      <VortexCta />
      <CallToAction />
      <ContactForm />
      <TestimonialsSection />
    </div>
  );
}
