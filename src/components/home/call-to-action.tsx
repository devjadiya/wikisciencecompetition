
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Building } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function CallToAction() {
  const { t } = useLanguage();
  const cta = t.home.cta;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{cta.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                {cta.subtitle}
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
                <div className="p-3 md:p-4 bg-primary/10 rounded-full mb-4">
                    <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-bold mb-3">{cta.campus.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-sm md:text-base">
                   {cta.campus.description}
                </p>
                <p className="text-sm font-bold text-destructive mb-6">{cta.campus.deadline}</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/campus-ambassadors">{cta.campus.cta}</Link>
                </Button>
            </motion.div>
             <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
                <div className="p-3 md:p-4 bg-primary/10 rounded-full mb-4">
                    <Building className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-bold mb-3">{cta.affiliates.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-sm md:text-base">
                    {cta.affiliates.description}
                </p>
                <p className="text-sm font-bold text-destructive mb-6">{cta.affiliates.deadline}</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/affiliates">{cta.affiliates.cta}</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
