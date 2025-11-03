
'use client';

import { FlipWords } from '@/components/ui/flip-words-2';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';

export default function InfoSections() {
  const { t } = useLanguage();
  const words = t.home.info.words;

  return (
      <div className="py-16 md:py-24 bg-background">
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
        >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            {t.home.info.title}
            <br />
            {t.home.info.subtitle}&nbsp;
            <FlipWords words={words} />
            </div>
        </motion.div>
      </div>
  );
}
