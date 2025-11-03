'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import feedData from '@/lib/data/instagram-feed.json';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function InstagramGallery() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            From Our Instagram
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Follow our journey and get the latest updates on the competition.
          </p>
          <Button asChild className="mt-6 bg-accent hover:bg-accent/90">
            <a
              href="https://www.instagram.com/wiki_science_competition/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" /> Follow on Instagram
            </a>
          </Button>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {feedData.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`https://www.instagram.com/p/${post.id}/`} target="_blank" rel="noopener noreferrer">
                <Card className="group overflow-hidden rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300 shadow-md hover:shadow-2xl h-full flex flex-col">
                  <CardContent className="p-0 relative aspect-square">
                    {post.type === 'image' ? (
                      <img
                        src={`/instagram/images/${post.filename}`}
                        alt={`Instagram post ${post.id}`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={`/instagram/${post.type === 'reel' ? 'reels' : 'videos'}/${post.filename}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                      />
                    )}
                     <div className="absolute top-2 right-2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                        <Instagram className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Vertical Feed */}
        <motion.div
          className="md:hidden flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {feedData.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="w-full max-w-sm">
                <Link href={`https://www.instagram.com/p/${post.id}/`} target="_blank" rel="noopener noreferrer">
                    <Card className="group overflow-hidden rounded-2xl shadow-lg border dark:border-white/[0.1] w-full">
                        <CardContent className="p-0 relative" style={{ aspectRatio: '9 / 16' }}>
                           {post.type === 'image' ? (
                                <img
                                    src={`/instagram/images/${post.filename}`}
                                    alt={`Instagram post ${post.id}`}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <video
                                    src={`/instagram/${post.type === 'reel' ? 'reels' : 'videos'}/${post.filename}`}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="object-cover w-full h-full"
                                />
                            )}
                             <div className="absolute top-4 right-4 p-2 bg-background/80 rounded-full">
                                <Instagram className="h-5 w-5 text-primary" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
