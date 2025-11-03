
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, UploadCloud, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/FMN_Lab_team_%282%29.jpg/1024px-FMN_Lab_team_%282%29.jpg' },
    alt: 'FMN Lab team by FMNLab',
    caption: 'FMN Lab team by FMNLab, CC BY-SA 4.0',
  },
  {
    id: 2,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ascaris_female_200x_section.jpg' },
    alt: 'Ascaris female 200x section',
    caption: 'Ascaris female 200x section by Massimo brizzi, CC BY-SA 4.0',
  },
  {
    id: 3,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Wismut_Kristall_und_1cm3_Wuerfel.jpg' },
    alt: 'Wismut Kristall und 1cm3 Wuerfel',
    caption: 'Wismut Kristall und 1cm3 Wuerfel by Alchemist-hp, CC BY-SA 3.0',
  },
  {
    id: 4,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Macrocranion_tupaiodon_01.jpg' },
    alt: 'Macrocranion tupaiodon',
    caption: 'Macrocranion tupaiodon by Llez, CC BY-SA 3.0',
  },
  {
    id: 5,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instrumente_in_der_Maschinenhalle_der_Zeche_Zollern.jpg' },
    alt: 'Instrumente in der Maschinenhalle der Zeche Zollern',
    caption: 'Instrumente in der Maschinenhalle der Zeche Zollern by GZagatta, CC BY-SA 4.0',
  },
  {
    id: 6,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Soldering_a_0805.jpg' },
    alt: 'Soldering a 0805',
    caption: 'Soldering a 0805 by Aisart~commonswiki, CC BY-SA 3.0',
  },
  {
    id: 7,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Total_Solar_Eclipse_8-21-17.jpg' },
    alt: 'Total Solar Eclipse 8-21-17',
    caption: 'Total Solar Eclipse 8-21-17 by Msadler13, CC BY-SA 4.0',
  },
  {
    id: 8,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%92%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9_%D1%81%D0%BB%D0%BE%D0%B9_%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B9_%D0%BC%D0%B0%D1%81%D0%BA%D0%B8_%28%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%29.tif/lossy-page1-800px-%D0%92%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9_%D1%81%D0%BB%D0%BE%D0%B9_%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B9_%D0%BC%D0%B0%D1%81%D0%BA%D0%B8_%28%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%29.tif.jpg' },
    alt: 'Microscopic image of the outer layer of a surgical mask',
    caption: 'Microscopic outer layer of a surgical mask by Alexander Klepnev, CC BY-SA 4.0',
  }
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
    <section className="relative h-[60vh] md:h-[90vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 30, duration: 1.2 },
            opacity: { duration: 1.2 }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={slides[slideIndex].image.src}
            alt={slides[slideIndex].alt}
            fill
            className="object-cover"
            priority={slideIndex === 0}
            sizes="100vw"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
           <div className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-md text-xs text-right">
             {slides[slideIndex].caption}
           </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute z-20 text-center p-4">
        <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white drop-shadow-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
            The Competition is Live!
        </motion.h1>
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
            <Button asChild size="lg" className="text-base md:text-lg px-8 py-7 rounded-full shadow-lg font-bold bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
                <a href="https://commons.wikimedia.org/wiki/Campaign:wsc-in-2025" target="_blank" rel="noopener noreferrer">
                    <UploadCloud className="mr-3 h-6 w-6" /> Upload Your Photos Now!
                </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-8 py-7 rounded-full shadow-lg font-bold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-transform hover:scale-105">
                <a href="https://commons.wikimedia.org/wiki/Campaign:wsc-in-m" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-3 h-6 w-6" /> Upload Mobile Photos
                </a>
            </Button>
        </motion.div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-10 z-20">
        <button
          onClick={() => paginate(-1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-10 z-20">
        <button
          onClick={() => paginate(1)}
          className="bg-background/50 hover:bg-background transition-colors p-2 rounded-full shadow-md"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
        </button>
      </div>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-colors ${
              i === slideIndex ? 'bg-accent' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
