
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const pastWinnerImages = [
  { image: {src: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Total_lunar_eclipse.png', hint: 'lunar eclipse'} },
  { image: {src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/HEK_293.jpg', hint: 'cell biology'} },
  { image: {src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Decomposition_of_EMImBF4_ionic_liquid.jpg', hint: 'chemistry reaction'} },
  { image: {src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Carina_Nebula_in_Narrowband.jpg', hint: 'astronomy nebula'} },
];

export default function ResourcesPage() {
  const { t } = useLanguage();
  const pastWinners = t.resources.pastWinners.winners.map((winner, index) => ({
      ...winner,
      ...pastWinnerImages[index]
  }));
  const learningResources = t.resources.learningMaterials.resources;


  return (
    <div className="bg-background text-foreground">
        <div className="bg-primary/5 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.resources.title}</h1>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                    {t.resources.subtitle}
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <section id="past-winners">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">{t.resources.pastWinners.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pastWinners.map((winner, index) => (
                        <Card key={index} className="overflow-hidden group">
                            <CardContent className="p-0">
                                <div className="relative h-60">
                                    <Image src={winner.image.src} data-ai-hint={winner.image.hint} alt={`Winning photo from ${winner.year}`} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="p-4">
                                    <p className="font-bold text-base md:text-lg text-foreground">{winner.category}</p>
                                    <p className="text-sm text-muted-foreground">{t.resources.pastWinners.winnerLabel} {winner.year}: {winner.winner}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            
            <section id="learning-materials" className="mt-16 md:mt-24">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">{t.resources.learningMaterials.title}</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                     {learningResources.map(resource => (
                         <Card key={resource.title}>
                             <CardContent className="p-6">
                                <BookOpen className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-headline text-lg md:text-xl font-bold mb-2">{resource.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm md:text-base">{resource.description}</p>
                                <Button asChild variant="link" className="p-0">
                                    <Link href={resource.link}>
                                        {t.resources.learningMaterials.cta} <Download className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                             </CardContent>
                         </Card>
                     ))}
                 </div>
            </section>
        </div>
    </div>
  );
}
