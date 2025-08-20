'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Explore Microscopic Worlds',
    description: 'From cellular structures to crystal formations, showcase the unseen beauty.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'microscope' },
  },
  {
    id: 2,
    title: 'Capture Celestial Wonders',
    description: 'The cosmos is your canvas. Photograph galaxies, nebulae, and planetary events.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'galaxy' },
  },
  {
    id: 3,
    title: 'Visualize Complex Data',
    description: 'Transform raw data into compelling scientific visualizations and infographics.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'data visualization' },
  },
  {
    id: 4,
    title: 'Document Human Ingenuity',
    description: 'Capture scientists at work, innovative lab equipment, and moments of discovery.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'laboratory' },
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function AutoscrollCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  const slideIndex = page;

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary/5">
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
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-16 max-w-7xl mx-auto gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-headline text-4xl md:text-6xl text-primary font-bold mb-4">{slides[slideIndex].title}</h2>
              <p className="text-lg md:text-xl text-muted-foreground">{slides[slideIndex].description}</p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-full relative shadow-2xl rounded-lg overflow-hidden">
                <Image
                    src={slides[slideIndex].image.src}
                    data-ai-hint={slides[slideIndex].image.hint}
                    alt={slides[slideIndex].title}
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-10">
        <button
          onClick={() => paginate(-1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-10">
        <button
          onClick={() => paginate(1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
      </div>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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
    </div>
  );
}
