
'use client';

import { motion } from 'framer-motion';
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
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                    >
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
                    </motion.div>
                     <motion.div
                        className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Polaarteadlane.jpg"
                            alt="A panel of judges reviewing photos"
                            data-ai-hint="judges panel"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
