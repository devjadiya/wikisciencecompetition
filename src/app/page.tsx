
'use client';
import dynamic from 'next/dynamic';
import instagramFeed from '@/lib/data/instagram-feed.json';
import { useLanguage } from '@/context/language-context';

const HeroCarousel = dynamic(() => import('@/components/home/hero-carousel'));
const InfoSections = dynamic(() => import('@/components/home/info-sections'));
const PrizesSection = dynamic(() => import('@/components/home/prizes-section'));
const WSCampaignGallery = dynamic(() => import('@/components/home/ws-campaign-gallery').then(mod => mod.WSCampaignGallery), { ssr: false });
const OutreachDashboard = dynamic(() => import('@/components/home/outreach-dashboard'));
const InstagramGallery = dynamic(() => import('@/components/home/instagram-gallery'));
const ContactForm = dynamic(() => import('@/components/home/contact-form'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section'), { ssr: false });
const VortexCta = dynamic(() => import('@/components/home/vortex-cta'), { ssr: false });
const Leaderboard = dynamic(() => import('@/components/home/leaderboard'), { ssr: false });

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <InfoSections />
      <PrizesSection />

      <WSCampaignGallery 
        title={t.home.campaign.title}
        subtitle={t.home.campaign.subtitle}
        campaignCategory="Category:Images_from_Wiki_Science_Competition_2025_in_India"
        campaignUrl="https://commons.wikimedia.org/wiki/Campaign:wsc-in-2025"
      />

      <WSCampaignGallery 
        title={t.home.mobileCampaign.title}
        subtitle={t.home.mobileCampaign.subtitle}
        campaignCategory="Category:Mobile_uploads_from_Wiki_Science_Competition_2025_in_India"
        campaignUrl="https://commons.wikimedia.org/wiki/Campaign:wsc-in-m"
      />
      
      <OutreachDashboard />
      
      <InstagramGallery 
        title={t.home.instagram.images.title}
        subtitle={t.home.instagram.images.subtitle}
        media={instagramFeed.images}
        mediaType="images"
      />
      
      <InstagramGallery 
        title={t.home.instagram.reels.title}
        subtitle={t.home.instagram.reels.subtitle}
        media={instagramFeed.reels}
        mediaType="reels"
      />

      <InstagramGallery 
        title={t.home.instagram.videos.title}
        subtitle={t.home.instagram.videos.subtitle}
        media={instagramFeed.videos}
        mediaType="videos"
      />

      <VortexCta />
      <ContactForm />
      <Leaderboard />
      <TestimonialsSection />
    </div>
  );
}
