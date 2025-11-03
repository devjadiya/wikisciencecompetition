
'use client';

import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function LiveMarquee() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full h-10 overflow-hidden bg-accent text-accent-foreground flex items-center">
          <motion.div
            className="flex items-center whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            <p className="font-bold text-sm uppercase tracking-wider mx-8">
              The Wiki Science Competition is officially live! Upload your photos and videos now!
            </p>
             <p className="font-bold text-sm uppercase tracking-wider mx-8">
              The Wiki Science Competition is officially live! Upload your photos and videos now!
            </p>
             <p className="font-bold text-sm uppercase tracking-wider mx-8">
              The Wiki Science Competition is officially live! Upload your photos and videos now!
            </p>
          </motion.div>
        </div>
    );
}
