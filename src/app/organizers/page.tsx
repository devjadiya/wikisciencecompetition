
'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const organizerImages: { [key: string]: { image: string, hint: string } } = {
  'dev_jadiya': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dev_Jadiya_WTS_2024.png/1060px-Dev_Jadiya_WTS_2024.png',
    hint: 'organizer portrait',
  },
  'gauri_gupta': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Indic_Wikimedia_Hackathon_Kochi_2025_Portraits_34.jpg',
    hint: 'team member photo',
  },
  'suyash_dwivedi': {
     image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Suyash_Dwivedi_at_Wikimania_2025%2C_Day_2_12.jpg',
    hint: 'professional headshot',
  },
  'sai_kiran': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sai_Kiran_Sharing_His_Experience_In_Feedback_Session_-_Wikiconference_India_2023_-_Hyderabad_2023-04-30_9229.jpg/1024px-Sai_Kiran_Sharing_His_Experience_In_Feedback_Session_-_Wikiconference_India_2023_-_Hyderabad_2023-04-30_9229.jpg',
    hint: 'organizer portrait',
  },
  'chinmayee_mishra': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chinmayee_Mishra_at_Wikimania_2023.jpg/960px-Chinmayee_Mishra_at_Wikimania_2023.jpg',
    hint: 'team member photo',
  },
  'athul_rt': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Athul_at_TTT_2024.jpg/1024px-Athul_at_TTT_2024.jpg',
    hint: 'professional headshot',
  },
  'uday_dongre': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Uday_dongre_photo_01.jpg',
    hint: 'organizer portrait',
  },
  'pankaj_yadav': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pankaj_Yadav_%28Wiki_Club_SATI_Board_Member%29.jpg/1024px-Pankaj_Yadav_%28Wiki_Club_SATI_Board_Member%29.jpg',
    hint: 'team member photo',
  },
  'ashmita_bathre': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ashmita_Bathre_%28Wiki_Club_SATI_Board_Member%29.jpg',
    hint: 'professional headshot',
  },
  'aanchal_patel': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aanchal_Patel.jpg/960px-Aanchal_Patel.jpg',
    hint: 'organizer portrait',
  },
  'riddhi_sharma': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Riddhi_at_Chanderi_01.jpg',
    hint: 'team member photo',
  },
};

export default function OrganizersPage() {
  const { t } = useLanguage();

  const leadOrganizers = t.organizers.team
    .filter(o => o.roleKey === 'lead_organizer')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.id] || { image: 'https://placehold.co/400x400.png', hint: 'placeholder image' })
  }));

  const advisors = t.organizers.team
    .filter(o => o.roleKey === 'advisor')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.id] || { image: 'https://placehold.co/400x400.png', hint: 'placeholder image' })
  }));

  const coreTeam = t.organizers.team
    .filter(o => o.roleKey === 'core_team')
    .map((organizer) => ({
        ...organizer,
        ...(organizerImages[organizer.id] || { image: 'https://placehold.co/400x400.png', hint: 'placeholder image' })
    }));

  return (
    <div className="bg-background">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.organizers.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                {t.organizers.subtitle}
            </p>
        </div>
       </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.lead_organizers}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {leadOrganizers.map((organizer) => (
              <div
                key={organizer.id}
                className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
              >
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={organizer.image}
                      alt={`Portrait of ${organizer.name}`}
                      data-ai-hint={organizer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-xl md:text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                    <p className="text-accent font-semibold mb-4 text-sm md:text-base">{organizer.role}</p>
                    <div className="flex space-x-4 mt-auto">
                      {organizer.social.linkedin && (
                        <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" width={28} height={28} />
                        </a>
                      )}
                      {organizer.social.meta && (
                        <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={28} height={28} />
                        </a>
                      )}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.advisors}</h2>
          <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
            {advisors.map((organizer) => (
               <div
                key={organizer.id}
                className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
              >
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={organizer.image}
                      alt={`Portrait of ${organizer.name}`}
                      data-ai-hint={organizer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-xl md:text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                    <p className="text-accent font-semibold mb-4 text-sm md:text-base">{organizer.role}</p>
                    <div className="flex space-x-4 mt-auto">
                      {organizer.social.linkedin && (
                        <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" width={28} height={28} />
                        </a>
                      )}
                      {organizer.social.meta && (
                        <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={28} height={28} />
                        </a>
                      )}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.core_organizing_team}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreTeam.map((organizer) => (
               <div
                key={organizer.id}
                className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
              >
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={organizer.image}
                      alt={`Portrait of ${organizer.name}`}
                      data-ai-hint={organizer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-lg md:text-xl font-headline font-bold text-primary">{organizer.name}</h3>
                    <p className="text-accent font-semibold mb-4 text-sm">{organizer.role}</p>
                    <div className="flex space-x-4 mt-auto">
                      {organizer.social.linkedin && (
                        <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" width={28} height={28} />
                        </a>
                      )}
                      {organizer.social.meta && (
                        <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={28} height={28} />
                        </a>
                      )}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
