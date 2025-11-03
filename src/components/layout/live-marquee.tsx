
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface LiveMarqueeProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LiveMarquee({ isVisible, onClose }: LiveMarqueeProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: '2.5rem', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed top-0 left-0 right-0 z-50 w-full h-10 overflow-hidden bg-accent text-accent-foreground flex items-center"
                >
                    <div className="w-full flex items-center justify-between px-4">
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
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full flex-shrink-0" onClick={onClose}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
