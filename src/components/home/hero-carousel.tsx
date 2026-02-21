
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Award, ExternalLink, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

const slides = [
  // Winning Camera Images
  {
    id: 1,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/3D-Printed_Biodegradable_Human_Bone_Scaffold_3.jpg' },
    alt: '3D-Printed Human Bone by Donvikro',
    caption: '1st Place (Camera) - 3D-Printed Human Bone by Donvikro',
    rank: 1,
    category: 'Camera'
  },
  {
    id: 2,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Haemometer.jpg' },
    alt: 'Haemometer by Kiran Vati K',
    caption: '2nd Place (Camera) - Haemometer by Kiran Vati K',
    rank: 2,
    category: 'Camera'
  },
  {
    id: 3,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Close_up_shot_of_an_appendix_surgery%2C_or_appendectomy_at_a_Hospital_in_Assam%2C_India_01.jpg' },
    alt: 'Shot of an appendix surgery by Amitabha Gupta',
    caption: '3rd Place (Camera) - Shot of an appendix surgery by Amitabha Gupta',
    rank: 3,
    category: 'Camera'
  },
  {
    id: 4,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Milky_way_as_seen_from_Satsar_camsite%2CGanderbal_district%2C_Kashmir_02.jpg' },
    alt: 'Milky way from Kashmir by Rohit14400',
    caption: '4th Place (Camera) - Milky way from Kashmir by Rohit14400',
    rank: 4,
    category: 'Camera'
  },
  {
    id: 5,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Multi-parallel_light_ray_producer.jpg' },
    alt: 'Multi-parallel light ray by Grajani1975',
    caption: '5th Place (Camera) - Multi-parallel light ray by Grajani1975',
    rank: 5,
    category: 'Camera'
  },
  // Winning Mobile Images
  {
    id: 6,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Sun_Dial_1.jpg' },
    alt: 'Sun Dial by Aliva Sahoo',
    caption: '1st Place (Mobile) - Sun Dial by Aliva Sahoo',
    rank: 1,
    category: 'Mobile'
  },
  {
    id: 7,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Fungi_Rhizopus.jpg' },
    alt: 'Fungi Rhizopus by Aaronantonypaul',
    caption: '2nd Place (Mobile) - Fungi Rhizopus by Aaronantonypaul',
    rank: 2,
    category: 'Mobile'
  },
  {
    id: 8,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/HC_SR04_Ultrasonic_Module.jpg' },
    alt: 'Ultrasonic Module by Suyash Dwivedi',
    caption: '3rd Place (Mobile) - Ultrasonic Module by Suyash Dwivedi',
    rank: 3,
    category: 'Mobile'
  },
  {
    id: 9,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Preserved_Reptile_and_Amphibian_Specimens.jpg' },
    alt: 'Amphibian Specimens by Aliva Sahoo',
    caption: '4th Place (Mobile) - Amphibian Specimens by Aliva Sahoo',
    rank: 4,
    category: 'Mobile'
  },
  {
    id: 10,
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Vintage_steam_engine.jpg' },
    alt: 'Vintage steam engine by Bhaiyaji Smile 123',
    caption: '5th Place (Mobile) - Vintage steam engine by Bhaiyaji Smile 123',
    rank: 5,
    category: 'Mobile'
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
  const { t } = useLanguage();

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
  const currentSlide = slides[slideIndex];

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
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={currentSlide.image.src}
            alt={currentSlide.alt}
            fill
            className="object-cover"
            priority={slideIndex === 0}
            sizes="100vw"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
           
           {/* Rank Badge for top 3 */}
           {currentSlide.rank <= 3 && (
             <div className="absolute top-24 left-4 md:left-10 z-30">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="bg-accent text-accent-foreground p-3 md:p-4 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white/20 backdrop-blur-md"
                >
                  <Trophy className="h-6 w-6 md:h-8 md:w-8 mb-1" />
                  <span className="text-xl md:text-2xl font-bold">{currentSlide.rank}</span>
                  <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest">Rank</span>
                </motion.div>
             </div>
           )}

           <div className="absolute bottom-4 right-4 p-3 bg-black/60 text-white rounded-lg border border-white/10 backdrop-blur-sm text-xs md:text-sm text-right max-w-[80%] shadow-lg">
             <p className="font-bold text-accent mb-1">{currentSlide.category} Category Winner</p>
             {currentSlide.caption}
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
            {t.home.hero.title}
        </motion.h1>
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
            <Button asChild size="lg" className="text-base md:text-lg px-8 py-7 rounded-full shadow-lg font-bold bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="/certificate">
                    <Award className="mr-3 h-6 w-6" /> {t.home.hero.certificate}
                </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-8 py-7 rounded-full shadow-lg font-bold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-transform hover:scale-105">
                <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India/Results" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-3 h-6 w-6" /> {t.home.hero.closed}
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
