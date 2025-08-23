
'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Globe, Lightbulb, PenSquare, Handshake } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function AboutPage() {
    const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-96">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg"
          alt="Team of scientists collaborating"
          data-ai-hint="collaboration team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-white drop-shadow-lg text-center px-4">
            {t.about.title}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-center">
            <div className="md:col-span-2">
                <Badge variant="secondary" className="mb-2">{t.about.badge}</Badge>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                    {t.about.heading}
                </h2>
                <div className="text-base md:text-lg text-muted-foreground space-y-6">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                     <p>{t.about.p4}</p>
                </div>
            </div>
            <div className="relative h-48 w-48 md:h-64 md:w-64 mx-auto">
                 <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg"
                    alt="Wiki Science Competition India 2025 Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
        
        <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    {t.about.aims.title}
                </h2>
                <p className="mt-2 text-base md:text-lg text-muted-foreground">{t.about.aims.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {t.about.aims.items.map(item => (
                    <div key={item.title} className="p-6 md:p-8 bg-card rounded-lg shadow-md">
                        <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                            {item.icon === 'PenSquare' && <PenSquare className="h-8 w-8 text-primary" />}
                            {item.icon === 'Lightbulb' && <Lightbulb className="h-8 w-8 text-primary" />}
                            {item.icon === 'Globe' && <Globe className="h-8 w-8 text-primary" />}
                            {item.icon === 'Handshake' && <Handshake className="h-8 w-8 text-primary" />}
                        </div>
                        <h3 className="text-lg md:text-xl font-headline font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16 md:mt-24 bg-primary/5 p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                <div className="md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">{t.about.supportingOrg.title}</h2>
                    <div className="text-muted-foreground space-y-4 text-sm md:text-base">
                       <p>{t.about.supportingOrg.p1}</p>
                       <p>{t.about.supportingOrg.p2}</p>
                    </div>
                </div>
                <div className="relative h-36 w-36 md:h-48 md:w-48 mx-auto">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/WIKI_CLUB_SATI_Logo.svg"
                        alt="Wiki Club SATI Logo"
                        data-ai-hint="organization logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
