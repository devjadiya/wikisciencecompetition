
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const marqueeVariants = {
  animate: {
    x: [0, -2500], // Increased width to accommodate more text
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // Increased duration for a smoother, slower scroll
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
    const announcement = "The Wiki Science Competition is live! Upload now! • विकी विज्ञान प्रतियोगिता लाइव है! अभी अपलोड करें! • উইকি বিজ্ঞান প্রতিযোগিতা লাইভ! এখন আপলোড করুন! • விக்கி அறிவியல் போட்டி நேரலையில் உள்ளது! இப்போது பதிவேற்றவும்! • ";

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
                            <p className="font-bold text-sm uppercase tracking-wider mx-8">{announcement}</p>
                            <p className="font-bold text-sm uppercase tracking-wider mx-8">{announcement}</p>
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
