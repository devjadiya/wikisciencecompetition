
'use client';

import { useLanguage } from '@/context/language-context';
import AnimatedCounter from '@/components/ui/animated-counter';
import { Upload, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThankYouSection() {
    const { t } = useLanguage();

    return (
        <section className="bg-primary/5 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{t.home.thankyou.title}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                        {t.home.thankyou.subtitle}
                    </p>
                </motion.div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <AnimatedCounter from={0} to={3600} />
                        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Upload className="h-4 w-4" />
                            <span>{t.home.thankyou.uploads}</span>
                        </div>
                    </div>
                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <AnimatedCounter from={0} to={474} />
                        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{t.home.thankyou.contributors}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
