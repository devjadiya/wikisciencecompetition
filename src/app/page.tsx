
import dynamic from 'next/dynamic';
import instagramFeed from '@/lib/data/instagram-feed.json';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
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
      
      <InstagramGallery 
        title="Featured Images"
        subtitle="A curated collection of stunning scientific photography from our community."
        media={instagramFeed.images}
        mediaType="images"
      />
      
      <InstagramGallery 
        title="Latest Reels"
        subtitle="Watch short, engaging videos showcasing science in action."
        media={instagramFeed.reels}
        mediaType="reels"
      />

      <InstagramGallery 
        title="Community Videos"
        subtitle="Explore in-depth video content from our talented contributors."
        media={instagramFeed.videos}
        mediaType="videos"
      />

      <VortexCta />
      <CallToAction />
      <ContactForm />
      <TestimonialsSection />
    </div>
  );
}
