
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, Instagram } from 'lucide-react';

interface InstagramPostProps {
  url: string;
}

interface OEmbedData {
  thumbnail_url: string;
  author_name: string;
  title: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function InstagramPost({ url }: InstagramPostProps) {
  const [data, setData] = useState<OEmbedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.instagram.com/oembed?url=${url}&maxwidth=640`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch post data from Instagram.');
        }
        const json: OEmbedData = await response.json();
        setData(json);
      } catch (e) {
        setError('Could not load this post.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [url]);

  if (loading) {
    return (
      <Card className="overflow-hidden rounded-xl shadow-md h-full flex flex-col">
        <CardContent className="p-0 relative aspect-square">
          <Skeleton className="w-full h-full" />
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="group overflow-hidden rounded-xl border-2 border-transparent transition-all duration-300 shadow-md hover:shadow-2xl h-full flex flex-col">
        <CardContent className="p-0 relative aspect-square flex items-center justify-center bg-muted">
          <div className="text-center text-destructive">
            <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div variants={itemVariants}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Card className="group overflow-hidden rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300 shadow-md hover:shadow-2xl h-full flex flex-col">
          <CardContent className="p-0 relative aspect-square">
            <Image
              src={data.thumbnail_url}
              alt={data.title || 'Instagram post'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm line-clamp-2">{data.title}</p>
            </div>
            <div className="absolute top-2 right-2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
              <Instagram className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
