
'use client';

import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export default function CampusAmbassadorsPage() {
  const { t } = useLanguage();
  const { title, subtitle, institutes, cta } = t.campusAmbassadors;

  return (
    <div className="bg-background text-foreground">
      <motion.div
        className="bg-primary/5 py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">{title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {institutes.map((institute) => (
                institute.ambassadors.map((ambassador, a_index) => (
                <motion.div
                  key={a_index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-card/60 backdrop-blur-lg border border-primary/10 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={ambassador.image}
                      alt={`Portrait of ${ambassador.name}`}
                      data-ai-hint="ambassador portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col text-center items-center">
                    <h3 className="text-2xl font-headline font-bold text-primary mb-4">{ambassador.name}</h3>
                    <div className="flex space-x-4 mb-4">
                      {ambassador.meta && (
                        <a href={ambassador.meta} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" alt="Meta-Wiki" width={32} height={32} />
                        </a>
                      )}
                    </div>
                     <div className="flex items-center gap-2 mt-auto">
                        <Image src={institute.logo} alt={`${institute.name} logo`} width={24} height={24} className="rounded-sm" />
                        <a href={institute.website} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:underline">
                            {institute.name}
                        </a>
                    </div>
                  </div>
                </motion.div>
                ))
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-10 py-7 shadow-xl transition-transform hover:scale-105">
                <a href={cta.href} target="_blank" rel="noopener noreferrer">{cta.text}</a>
            </Button>
        </div>

      </div>
    </div>
  );
}
