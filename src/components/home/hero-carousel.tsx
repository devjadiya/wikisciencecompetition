'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { gsap } from 'gsap';

const slides = [
  {
    id: 1,
    headline: 'Wiki Science Competition',
    subheadline: 'India 2025',
    description: 'Unveiling the art in science. Join us in a nationwide celebration of scientific imagery and discovery.',
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'science competition' },
    cta: 'Learn More',
    ctaLink: '/competition',
  },
  {
    id: 2,
    headline: 'Explore Microscopic Worlds',
    subheadline: 'Capture the Unseen',
    description: 'From cellular structures to crystal formations, showcase the unseen beauty.',
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'microscope' },
    cta: 'View Categories',
    ctaLink: '/competition#categories',
  },
  {
    id: 3,
    headline: 'Celestial Wonders Await',
    subheadline: 'Photograph the Cosmos',
    description: 'The cosmos is your canvas. Photograph galaxies, nebulae, and planetary events.',
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'galaxy' },
    cta: 'Get Inspired',
    ctaLink: '/resources',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
  }, [page]);

  useEffect(() => {
    const contentRef = contentRefs.current[page];
    if (contentRef) {
        const headline = contentRef.querySelector('.headline');
        const subheadline = contentRef.querySelector('.subheadline');
        const description = contentRef.querySelector('.description');
        const cta = contentRef.querySelector('.cta');
        
        gsap.fromTo([headline, subheadline, description, cta], 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );
    }
  }, [page]);


  const slideIndex = page;

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={slides[slideIndex].image.src}
            data-ai-hint={slides[slideIndex].image.hint}
            alt={slides[slideIndex].headline}
            fill
            className="object-cover"
            priority={slideIndex === 0}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center text-center px-4" ref={el => contentRefs.current[slideIndex] = el}>
          <h1 className="headline font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg">
            {slides[slideIndex].headline}
          </h1>
          <p className="subheadline font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 drop-shadow-lg">
            {slides[slideIndex].subheadline}
          </p>
          <p className="description max-w-2xl text-lg md:text-xl text-primary-foreground/90 mb-12">
            {slides[slideIndex].description}
          </p>
          <div className="cta">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform hover:scale-105">
                <Link href={slides[slideIndex].ctaLink}>
                {slides[slideIndex].cta} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
        <button
          onClick={() => paginate(-1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
        <button
          onClick={() => paginate(1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
      </div>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              i === slideIndex ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
