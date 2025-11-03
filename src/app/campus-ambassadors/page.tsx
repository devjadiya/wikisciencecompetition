
'use client';

import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, XCircle } from 'lucide-react';
import { useMemo } from 'react';

export default function CampusAmbassadorsPage() {
  const { t } = useLanguage();
  const { title, subtitle, whoHeading, whoDescription, responsibilitiesHeading, responsibilities, sidebar, cta } = t.campus;

  const sortedAmbassadors = useMemo(() => {
    return [...t.campusAmbassadors.ambassadors].sort((a, b) => {
        const aHasRealImage = a.image.startsWith('https://upload.wikimedia.org');
        const bHasRealImage = b.image.startsWith('https://upload.wikimedia.org');
        if (aHasRealImage && !bHasRealImage) return -1;
        if (!aHasRealImage && bHasRealImage) return 1;
        return 0;
    });
  }, [t.campusAmbassadors.ambassadors]);

  return (
    <div className="bg-background text-foreground">
      <div
        className="bg-primary/5 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">{whoHeading}</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                    {whoDescription}
                </p>
                
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">{responsibilitiesHeading}</h3>
                <ul className="space-y-3 text-muted-foreground mb-8 text-sm md:text-base">
                {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 md:h-6 md:w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <aside>
                <Card className="sticky top-24 bg-destructive/5 shadow-lg border-destructive/20 dark:border-destructive/30">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl md:text-2xl text-destructive flex items-center gap-2">
                            <XCircle /> Applications Closed
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">
                         Thank you for your interest. The application period for the Campus Ambassador program has ended.
                        </p>
                        <Button disabled className="w-full">
                         Applications Closed
                        </Button>
                    </CardContent>
                </Card>
            </aside>
        </div>

        <div className="mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">{t.campusAmbassadors.title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {sortedAmbassadors.map((ambassador, a_index) => (
                    <div
                      key={a_index}
                      className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
                    >
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                        src={ambassador.image}
                        alt={`Portrait of ${ambassador.name}`}
                        data-ai-hint="ambassador portrait"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        />
                    </div>
                    <div className="p-4 md:p-6 flex-grow flex flex-col text-center items-center">
                        <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-1">{ambassador.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{ambassador.description}</p>
                        <div className="flex space-x-4 mb-4">
                            {ambassador.meta && (
                                <a href={ambassador.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={28} height={28} />
                                </a>
                            )}
                             {ambassador.boardLink && (
                                <a href={ambassador.boardLink.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity flex items-center gap-1 text-sm">
                                   <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki Board" width={28} height={28} /> {ambassador.boardLink.name}
                                </a>
                            )}
                            {ambassador.wikipedia && (
                                <a href={ambassador.wikipedia} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Wikipedia-logo-v2-en.svg" alt="Wikipedia" width={28} height={28} />
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
