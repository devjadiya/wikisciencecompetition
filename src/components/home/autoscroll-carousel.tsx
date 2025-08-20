
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const slideImages = [
  {
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F_%D0%BC%D1%83%D1%85%D0%B0.png', hint: 'microscope' },
  },
  {
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Carina_Nebula_in_Narrowband.jpg', hint: 'galaxy' },
  },
  {
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lunar_Mini-Magnetosphere.png', hint: 'data visualization' },
  },
  {
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg', hint: 'laboratory' },
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
  const { t } = useLanguage();
  const [[page, direction], setPage] = useState([0, 0]);

  const slides = t.home.autoscroll.slides.map((slide, index) => ({
      ...slide,
      ...slideImages[index]
  }));

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, slides.length]);

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
