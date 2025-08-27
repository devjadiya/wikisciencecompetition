
'use client';

import { motion } from 'framer-motion';
import { Info, Target, Award, Users, History, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';
import { HeroHighlight } from '../ui/hero-highlight';
import { FlipWords } from '../ui/flip-words';

const sectionImages = [
  { image: { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Water_under_11_Hz_vibration.jpg', hint: 'science abstract' } },
  { image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuffner-Sternwarte_Wien_2015_Refraktor_11.jpg', hint: 'camera photography' } },
  { image: { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/PSLV_C47_Cartosat-3_lifting_off_from_Second_Launch_Pad_003.jpg', hint: 'trophy award' } },
  { image: { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9B%D0%B5%D0%BA%D1%82%D0%BE%D1%80.JPG', hint: 'judges meeting' } },
  { image: { src: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Sulfide_disaster_in_Levikha_Village.jpg', hint: 'photo gallery' } },
];

const icons = { Info, Target, Award, Users, History };

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function InfoSections() {
  const { t } = useLanguage();
  const sections = t.home.info.sections.map((section, index) => ({
    ...section,
    ...sectionImages[index]
  }));
  const words = ["photography", "science", "capture", "moments", "India"];

  return (
    <div className="py-16 md:py-24 bg-background">
      <HeroHighlight containerClassName="py-16 md:py-24">
        <div className="flex flex-col items-center justify-center">
            <motion.h1
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Showcasing the Unseen, Celebrating the
            </motion.h1>

            <div className="mt-4 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 rounded-lg p-2 w-52 h-14 flex items-center justify-center">
                 <FlipWords words={words} />
            </div>
        </div>
      </HeroHighlight>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = icons[section.icon as keyof typeof icons];
            return (
             <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border dark:border-white/[0.1] hover:dark:border-white/[0.2]"
              >
              <div className="relative h-56 w-full">
                <Image src={section.image.src} alt={section.title} data-ai-hint={section.image.hint} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground flex-grow mb-6 text-sm">{section.description}</p>
                <Button asChild variant="ghost" className="self-start group -ml-4">
                    <Link href={section.link} onClick={() => gtagEvent({ action: 'click_card', category: 'Homepage Info', label: section.title })}>
                        {t.home.info.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
              </div>
            </motion.div>
          )})}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="md:col-span-2 lg:col-span-1 bg-primary text-primary-foreground rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-8 justify-center items-center text-center"
            >
                <h3 className="text-2xl font-headline font-bold">{t.home.info.finalCard.title}</h3>
                <p className="mt-4 mb-6">{t.home.info.finalCard.subtitle}</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform hover:scale-105">
                    <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer" onClick={() => gtagEvent({ action: 'click_cta', category: 'Homepage Info', label: 'Submit Your Work' })}>
                        {t.home.info.finalCard.cta}
                    </a>
                </Button>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
