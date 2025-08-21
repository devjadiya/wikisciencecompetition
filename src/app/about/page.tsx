
'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Globe, Lightbulb, PenSquare, Handshake } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function AboutPage() {
    const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="relative h-96">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg"
          alt="Team of scientists collaborating"
          data-ai-hint="collaboration team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white drop-shadow-lg text-center px-4">
            {t.about.title}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-2">
                <Badge variant="secondary" className="mb-2">{t.about.badge}</Badge>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                    {t.about.heading}
                </h2>
                <div className="text-lg text-muted-foreground space-y-6">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                     <p>{t.about.p4}</p>
                </div>
            </div>
            <div className="relative h-64 w-64 mx-auto">
                 <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg"
                    alt="Wiki Science Competition India 2025 Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
        
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    {t.about.aims.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">{t.about.aims.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {t.about.aims.items.map(item => (
                    <div key={item.title} className="p-8 bg-card rounded-lg shadow-md">
                        <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                            {item.icon === 'PenSquare' && <PenSquare className="h-8 w-8 text-primary" />}
                            {item.icon === 'Lightbulb' && <Lightbulb className="h-8 w-8 text-primary" />}
                            {item.icon === 'Globe' && <Globe className="h-8 w-8 text-primary" />}
                            {item.icon === 'Handshake' && <Handshake className="h-8 w-8 text-primary" />}
                        </div>
                        <h3 className="text-xl font-headline font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-24 bg-primary/5 p-12 rounded-lg">
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-headline font-bold text-primary mb-4">Supporting Organisation</h2>
                    <div className="text-muted-foreground space-y-4">
                       <p>Wiki Club SATI (Vidisha, Madhya Pradesh) is acknowledged as the supporting organisation for the first national edition of the Wiki Science Competition 2025 in India. The club has been at the forefront of engaging students and young professionals in the Wikimedia movement, contributing to open knowledge, technical innovation, and community-led initiatives.</p>
                       <p>Several members of the Core Organizing Team are associated with Wiki Club SATI, and their continued involvement reflects the club’s commitment to advancing free knowledge and scientific engagement. While the support is non-financial, the organisational capacity, experience, and community networks of Wiki Club SATI play an essential role in enabling this campaign at the national level.</p>
                    </div>
                </div>
                <div className="relative h-48 w-48 mx-auto">
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
