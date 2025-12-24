
'use client';
import HeroCarousel from '@/components/home/hero-carousel';
import ThankYouSection from '@/components/home/thank-you-section';
import InfoSections from '@/components/home/info-sections';
import PrizesSection from '@/components/home/prizes-section';
import WSCampaignGallery from '@/components/home/ws-campaign-gallery';
import OutreachDashboard from '@/components/home/outreach-dashboard';
import InstagramGallery from '@/components/home/instagram-gallery';
import ContactForm from '@/components/home/contact-form';
import TestimonialsSection from '@/components/home/testimonials-section';
import VortexCta from '@/components/home/vortex-cta';
import Leaderboard from '@/components/home/leaderboard';
import instagramFeed from '@/lib/data/instagram-feed.json';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <ThankYouSection />
      <InfoSections />
      <PrizesSection />

      <WSCampaignGallery 
        title={t.home.campaign.title}
        subtitle={t.home.campaign.subtitle}
        campaignCategory="Uploaded_via_Campaign:wsc-in-2025"
        campaignUrl="https://commons.wikimedia.org/wiki/Campaign:wsc-in-2025"
      />

      <WSCampaignGallery 
        title={t.home.mobileCampaign.title}
        subtitle={t.home.mobileCampaign.subtitle}
        campaignCategory="Uploaded_via_Campaign:wsc-in-m"
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
