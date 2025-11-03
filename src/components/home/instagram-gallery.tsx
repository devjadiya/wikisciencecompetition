
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import feedData from '@/lib/data/instagram-feed.json';
import { InstagramPost } from './instagram-post';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {feedData.map((post) => (
            <InstagramPost key={post.id} url={post.url} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
