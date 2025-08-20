'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract science background"
          data-ai-hint="science competition"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Wiki Science Competition
        </motion.h1>
        <motion.p
          className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          India 2025
        </motion.p>
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Unveiling the art in science. Join us in a nationwide celebration of scientific imagery and discovery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform hover:scale-105">
            <Link href="/competition">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
