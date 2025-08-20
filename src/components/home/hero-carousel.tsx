'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'science photography winner' },
    alt: 'Previous winner photo 1',
  },
  {
    id: 2,
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'award-winning science image' },
    alt: 'Previous winner photo 2',
  },
  {
    id: 3,
    image: { src: 'https://placehold.co/1920x1080.png', hint: 'best scientific photograph' },
    alt: 'Previous winner photo 3',
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

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
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
            alt={slides[slideIndex].alt}
            fill
            className="object-cover"
            priority={slideIndex === 0}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

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
