
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/IA_ARPAN_BASU_CHOWDHURY_Foldscope_-_A_revolutionary_Microscope.jpg' },
    alt: 'Foldscope - A revolutionary Microscope by Arpan Basu Chowdhury',
    caption: 'Foldscope - A revolutionary Microscope by Arpan Basu Chowdhury, CC BY-SA 4.0',
  },
  {
    id: 2,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Yellow_orange-tip_male_Ixias_pyrene.jpg' },
    alt: 'Yellow orange-tip male Ixias pyrene',
    caption: 'Yellow orange-tip male by Jeevan Jose, CC BY-SA 4.0',
  },
  {
    id: 3,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Yellow_orange-tip_female_Ixias_pyrene.jpg' },
    alt: 'Yellow orange-tip female Ixias pyrene',
    caption: 'Yellow orange-tip female by Jeevan Jose, CC BY-SA 4.0',
  },
  {
    id: 4,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/A_Coot%27s_Scoot.jpg' },
    alt: 'A Coot\'s Scoot',
    caption: 'A Coot\'s Scoot by Ayonija Ghosh, CC BY-SA 4.0',
  },
  {
    id: 5,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Sarus_Crane_Duet.jpg' },
    alt: 'Sarus Crane Duet',
    caption: 'Sarus Crane Duet by A J Ganaie, CC BY-SA 4.0',
  },
  {
    id: 6,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Greater_Crimson_Glider_%28Urothemis_signata%29.jpg' },
    alt: 'Greater Crimson Glider (Urothemis signata)',
    caption: 'Greater Crimson Glider by Sayan Hazra, CC BY-SA 4.0',
  },
  {
    id: 7,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Indian_Gharial.jpg' },
    alt: 'Indian Gharial',
    caption: 'Indian Gharial by A J Ganaie, CC BY-SA 4.0',
  },
  {
    id: 8,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/PSLV_C47_Cartosat-3_lifting_off_from_Second_Launch_Pad_003.jpg' },
    alt: 'PSLV C47 Cartosat-3 lifting off from Second Launch Pad',
    caption: 'PSLV C47 Cartosat-3 lift off by ISRO, CC BY-SA 4.0',
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
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 1 }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={slides[slideIndex].image.src}
            alt={slides[slideIndex].alt}
            fill
            className="object-cover"
            priority={slideIndex === 0}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
           <div className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-md text-xs text-right">
             {slides[slideIndex].caption}
           </div>
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
