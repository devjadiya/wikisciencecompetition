
'use client';

import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

export default function JurySection() {
    const { t } = useLanguage();
    const jury = t.home.jury;

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">
                            {jury.title}
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-8">
                            {jury.description}
                        </p>
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-xl transition-transform hover:scale-105">
                            <Link href="/jury">
                                {jury.cta} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                     <div
                        className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
                    >
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Polaarteadlane.jpg"
                            alt="A panel of judges reviewing photos"
                            data-ai-hint="judges panel"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
