
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};


export default function OrganizersPage() {
  const { t } = useLanguage();

  const leadOrganizers = t.organizers.team
    .filter(o => o.role === 'Lead Organizer')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.name] || { image: 'https://placehold.co/400x400.png', hint: 'placeholder image' })
  }));

  const advisors = t.organizers.team
    .filter(o => o.role === 'Advisor')
    .map((organizer) => ({
      ...organizer,
      ...(organizerImages[organizer.name] || { image: 'https://placehold.co/400x400.png', hint: 'placeholder image' })
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {leadOrganizers.map((organizer) => (
              <motion.div
                key={organizer.name}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/60 backdrop-blur-lg border border-primary/10 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
              >
                  <div className="relative h-80 w-full">
                    <Image
                      src={organizer.image}
                      alt={`Portrait of ${organizer.name}`}
                      data-ai-hint={organizer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                    <p className="text-accent font-semibold mb-4">{organizer.role}</p>
                    <div className="flex space-x-4 mt-auto">
                      <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" width={32} height={32} />
                      </a>
                      <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={32} height={32} />
                      </a>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.organizers.advisors}</h2>
          <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-sm mx-auto">
            {advisors.map((organizer) => (
               <motion.div
                key={organizer.name}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/60 backdrop-blur-lg border border-primary/10 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
              >
                  <div className="relative h-80 w-full">
                    <Image
                      src={organizer.image}
                      alt={`Portrait of ${organizer.name}`}
                      data-ai-hint={organizer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
                    <p className="text-accent font-semibold mb-4">{organizer.role}</p>
                    <div className="flex space-x-4 mt-auto">
                      <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" width={32} height={32} />
                      </a>
                      <a href={organizer.social.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={32} height={32} />
                      </a>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
