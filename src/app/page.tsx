
import dynamic from 'next/dynamic';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
const WSCampaignGallery = dynamic(() => import('@/components/home/ws-campaign-gallery'));
const CallToAction = dynamic(() => import('@/components/home/call-to-action'));
const InstagramGallery = dynamic(() => import('@/components/home/instagram-gallery'));
const ContactForm = dynamic(() => import('@/components/home/contact-form'));
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section'));
const VortexCta = dynamic(() => import('@/components/home/vortex-cta'));

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <InfoSections />
      <PrizesSection />
      <WSCampaignGallery 
        category="Category:Uploaded_via_Campaign:wsc-in-2025"
        redirectUrl="https://commons.wikimedia.org/wiki/Category:Uploaded_via_Campaign:wsc-in-2025"
      />
      <WSCampaignGallery 
        title="Live from Mobile"
        subtitle="See the latest submissions from participants using their mobile devices."
        category="Category:Uploaded_via_Campaign:wsc-in-m"
        redirectUrl="https://commons.wikimedia.org/wiki/Category:Uploaded_via_Campaign:wsc-in-m"
      />
      <VortexCta />
      <CallToAction />
      <InstagramGallery />
      <ContactForm />
      <TestimonialsSection />
    </div>
  );
}
