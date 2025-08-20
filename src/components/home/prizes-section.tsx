'use client';

import { motion } from 'framer-motion';
import { Award, Camera, BookOpen } from 'lucide-react';
import Image from 'next/image';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1
    }
  }
};

const prizes = [
    {
        icon: Award,
        title: "National Recognition",
        description: "Winners will be celebrated on our official platforms and gain national media coverage."
    },
    {
        icon: Camera,
        title: "Top-tier Equipment",
        description: "Exciting photography gear and accessories for the top winners to aid their passion."
    },
    {
        icon: BookOpen,
        title: "Publication Feature",
        description: "Get your work featured in prestigious science magazines and publications."
    }
]

export default function PrizesSection() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Prizes & Recognition</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Your groundbreaking visuals deserve to be celebrated. Discover what you can win.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={prize.title}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="p-4 bg-accent/10 rounded-full mb-4">
                                <prize.icon className="h-10 w-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-headline font-bold text-foreground mb-3">{prize.title}</h3>
                            <p className="text-muted-foreground flex-grow">{prize.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
