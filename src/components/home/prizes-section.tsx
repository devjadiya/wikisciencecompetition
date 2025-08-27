
'use client';

import { Award, Camera, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const icons = { Award, Camera, BookOpen };

export default function PrizesSection() {
    const { t } = useLanguage();
    const prizes = t.home.prizes.prizes;

    return (
        <section className="py-16 md:py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{t.home.prizes.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                        {t.home.prizes.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {prizes.map((prize) => {
                        const Icon = icons[prize.icon as keyof typeof icons];
                        return (
                        <div
                            key={prize.title}
                            className="bg-card p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border dark:border-white/[0.1] hover:dark:border-white/[0.2]"
                        >
                            <div className="p-4 bg-accent/10 rounded-full mb-4">
                                <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                            </div>
                            <h3 className="text-lg md:text-xl font-headline font-bold text-foreground mb-3">{prize.title}</h3>
                            <p className="text-muted-foreground flex-grow text-sm md:text-base">{prize.description}</p>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}
