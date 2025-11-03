
'use client';

import { FlipWords } from '@/components/ui/flip-words-2';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';

export default function InfoSections() {
  const words = ["Science.", "Discovery.", "Knowledge.", "Innovation."];

  return (
    <HeroHighlight>
      <motion.div
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
        className="py-16 md:py-24"
      >
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          Clicking Today, Creating Tomorrow.
          <br />
          Explore the World of&nbsp;
          <FlipWords words={words} />
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

    