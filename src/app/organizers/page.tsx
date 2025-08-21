
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const organizerImages: { [key: string]: { image: string, hint: string } } = {
  'Dev Jadiya': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dev_Jadiya_WTS_2024.png/1060px-Dev_Jadiya_WTS_2024.png',
    hint: 'organizer portrait',
  },
  'Gauri Gupta': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gauri_Gupta.jpg',
    hint: 'team member photo',
  },
  'Suyash Dwivedi': {
     image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Suyash_Dwivedi_at_Wikimania_2025%2C_Day_2_12.jpg',
    hint: 'professional headshot',
  },
};

const MetaWikiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-6 w-6" fill="currentColor">
        <path d="M25,3.15c-12.05,0-21.85,9.8-21.85,21.85S12.95,46.85,25,46.85S46.85,37.05,46.85,25S37.05,3.15,25,3.15z M25,43.26c-10.08,0-18.26-8.18-18.26-18.26c0-10.08,8.18-18.26,18.26-18.26s18.26,8.18,18.26,18.26C43.26,35.08,35.08,43.26,25,43.26z" />
        <path d="M25,8.81c-0.81,0-1.57,0.11-2.31,0.31l-1.33,0.36l-0.36-1.33c-0.2-0.74-0.31-1.5-0.31-2.31c0-0.81,0.11-1.57,0.31-2.31l0.36-1.33l-1.33,0.36c-0.74,0.2-1.5,0.31-2.31,0.31c-0.81,0-1.57-0.11-2.31-0.31l-1.33-0.36l0.36,1.33c0.2,0.74,0.31,1.5,0.31,2.31c0,0.81-0.11,1.57-0.31,2.31l-0.36,1.33l1.33-0.36c0.74-0.2,1.5-0.31,2.31-0.31c0.81,0,1.57,0.11,2.31,0.31l1.33,0.36l0.36-1.33c0.2-0.74,0.31-1.5,0.31-2.31c0,0.81-0.11,1.57-0.31,2.31l-0.36,1.33l1.33-0.36C23.43,8.92,24.19,8.81,25,8.81 M25,6.01c-1.3,0-2.52,0.23-3.65,0.65l-1.74,0.47l-0.47,1.74C18.91,9.94,18.68,11.16,18.68,12.47c0,1.3,0.23,2.52,0.65,3.65l0.47,1.74l-1.74-0.47c-1.13-0.42-2.35-0.65-3.65-0.65c-1.3,0-2.52,0.23-3.65,0.65l-1.74,0.47l0.47-1.74c0.42-1.13,0.65-2.35,0.65-3.65c0-1.3-0.23-2.52-0.65-3.65l-0.47-1.74l1.74,0.47C9.94,7.09,11.16,7.32,12.47,7.32c1.3,0,2.52-0.23,3.65-0.65l1.74-0.47l0.47,1.74c0.42,1.13,0.65,2.35,0.65,3.65c0,1.3-0.23,2.52-0.65,3.65l-0.47,1.74l1.74-0.47c1.13-0.42,2.35-0.65,3.65-0.65c1.3,0,2.52,0.23,3.65,0.65l1.74,0.47l0.47-1.74c0.42-1.13,0.65-2.35,0.65-3.65c0-1.3-0.23-2.52-0.65-3.65l-0.47-1.74l1.74,0.47c1.13,0.42,2.35,0.65,3.65,0.65c1.3,0,2.52-0.23,3.65,0.65l1.74,0.47l-0.47,1.74c-0.42,1.13-0.65,2.35-0.65,3.65c0,1.3,0.23,2.52,0.65,3.65l0.47,1.74l-1.74-0.47c-1.13-0.42-2.35-0.65-3.65-0.65c-1.3,0-2.52,0.23-3.65,0.65l-1.74,0.47l-0.47-1.74c-0.42-1.13-0.65-2.35-0.65-3.65c0-1.3,0.23-2.52,0.65-3.65l0.47-1.74l-1.74,0.47C27.52,6.24,26.3,6.01,25,6.01z" />
        <polygon points="17.91,18.06 17.06,20.66 17.65,20.73 18.73,26.54 20.35,26.24 19.33,20.87 22.4,20.17 22.84,22.45 24.45,22.21 23.75,18.59 20.69,19.29 21.05,17.38 22.67,17.08 21.65,11.71 20.03,11.95 20.59,14.73 17.52,15.43 17.91,18.06" />
        <path d="M35.61,24.32l-2.9-0.89l-0.22,0.78l0.98,3.2l1.6,0.5l-0.98-3.2l2.67-0.82l-0.53,1.69l1.58,0.5l1.45-4.62l-1.58-0.5l-0.53,1.69l-2.67-0.82l0.22-0.78l2.9-0.89l0.98,3.2l-1.6,0.5L35.61,24.32z" />
        <path d="M25.75,28.78l1.36,0.42V31h-1.6v-2.04l-3.32,1.02v3.18h-1.6V29.8l5.22-1.61L25.75,28.78z" />
        <path d="M15.4,32.48l1.6,1.05l-0.6,1.48l-1.6-1.05l-0.87,1.33l1.6,1.05l-0.6,1.48l-1.6-1.05l-0.87,1.33l1.6,1.05l-0.83,2.05h-1.58l3.15-7.73l1.58,0.64l-1.02,2.5L15.4,32.48z" />
        <path d="M28.09,33.53l-1.01,2.48l-1.59-0.64l1.01-2.48l-2.42-0.98l1.01-2.48l1.59,0.64l-1.01,2.48L28.09,33.53z" />
        <path d="M30.68,39.52l1.23,1.04l-0.87,2.05h-1.58l-1.23-1.04l-0.6,1.48l1.23,1.04l-0.87,2.05h-1.58l2.42-5.93l-0.6-1.48l-2.42,5.93l2.06,1.74h1.58L34.32,38h1.58l-3.15-7.73l-1.58,0.64l0.6,1.48L30.68,39.52z" />
    </svg>
)


export default function OrganizersPage() {
  const { t } = useLanguage();

  const leadOrganizers = t.organizers.team
    .filter(o => o.role === 'Lead Organizer')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.name] || { image: 'https://placehold.co/300x300.png', hint: 'placeholder image' })
  }));

  const advisors = t.organizers.team
    .filter(o => o.role === 'Advisor')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.name] || { image: 'https://placehold.co/300x300.png', hint: 'placeholder image' })
  }));

  return (
    <div className="bg-background">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">{t.organizers.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {t.organizers.subtitle}
            </p>
        </div>
       </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.lead_organizers}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadOrganizers.map((organizer) => (
              <div key={organizer.name} className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 mb-6">
                  <Image
                    src={organizer.image}
                    alt={`Portrait of ${organizer.name}`}
                    data-ai-hint={organizer.hint}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                <p className="text-accent font-semibold mb-3">{organizer.role}</p>
                <div className="flex space-x-4 mt-2">
                  <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
                  <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MetaWikiIcon /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.advisors}</h2>
          <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
            {advisors.map((organizer) => (
              <div key={organizer.name} className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 mb-6">
                  <Image
                    src={organizer.image}
                    alt={`Portrait of ${organizer.name}`}
                    data-ai-hint={organizer.hint}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                <p className="text-accent font-semibold mb-3">{organizer.role}</p>
                 <div className="flex space-x-4 mt-2">
                  <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
                  <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MetaWikiIcon /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
