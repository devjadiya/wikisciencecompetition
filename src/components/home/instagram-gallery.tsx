
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import VideoModal from '@/components/ui/video-modal';

interface MediaItem {
    id: string;
    filename: string;
}

interface InstagramGalleryProps {
    title: string;
    subtitle: string;
    media: MediaItem[];
    mediaType: 'images' | 'reels' | 'videos';
}

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

export default function InstagramGallery({ title, subtitle, media, mediaType }: InstagramGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleMediaClick = (path: string) => {
    if (mediaType === 'reels' || mediaType === 'videos') {
      setSelectedVideo(path);
    }
  };

  return (
    <>
      <motion.section 
        className="bg-background py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              {subtitle}
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
          </motion.div>

          {/* Desktop Grid */}
          <motion.div
            className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
          >
            {media.map((post) => (
              <motion.div 
                key={post.id} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMediaClick(`/instagram/${mediaType}/${post.filename}`)}
              >
                <Card className="group overflow-hidden rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300 shadow-md hover:shadow-2xl h-full flex flex-col cursor-pointer">
                  <CardContent className="p-0 relative aspect-square">
                    {mediaType === 'images' ? (
                      <img
                        src={`/instagram/${mediaType}/${post.filename}`}
                        alt={`Instagram post ${post.id}`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <video
                          src={`/instagram/${mediaType}/${post.filename}`}
                          loop
                          muted
                          playsInline
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Vertical Feed */}
          <motion.div
            className="md:hidden flex flex-col items-center space-y-8"
            variants={containerVariants}
          >
            {media.map((post) => (
              <motion.div 
                key={post.id} 
                variants={itemVariants} 
                className="w-full max-w-sm"
                onClick={() => handleMediaClick(`/instagram/${mediaType}/${post.filename}`)}
              >
                  <Card className="group overflow-hidden rounded-2xl shadow-lg border dark:border-white/[0.1] w-full cursor-pointer">
                      <CardContent className="p-0 relative" style={{ aspectRatio: mediaType === 'reels' ? '9 / 16' : '1 / 1' }}>
                         {mediaType === 'images' ? (
                              <img
                                  src={`/instagram/${mediaType}/${post.filename}`}
                                  alt={`Instagram post ${post.id}`}
                                  className="object-cover w-full h-full"
                                  loading="lazy"
                              />
                          ) : (
                              <>
                                <video
                                    src={`/instagram/${mediaType}/${post.filename}`}
                                    loop
                                    muted
                                    playsInline
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <PlayCircle className="h-20 w-20 text-white/80" />
                                </div>
                              </>
                          )}
                      </CardContent>
                  </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {selectedVideo && (
        <VideoModal src={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </>
  );
}
