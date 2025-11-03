
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, AlertTriangle, ExternalLink, Users, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WSCampaignGalleryProps {
  title?: string;
  subtitle?: string;
  category: string;
  apiUrl?: string;
  redirectUrl: string;
}

interface ImageInfo {
  title: string;
  thumbnailUrl: string;
  user: string;
  descriptionUrl: string;
}

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WSCampaignGallery = ({
  title = 'Live Campaign Gallery',
  subtitle = 'See the latest submissions from participants across India.',
  category,
  apiUrl = 'https://commons.wikimedia.org/w/api.php',
  redirectUrl
}: WSCampaignGalleryProps) => {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [totalImages, setTotalImages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        action: 'query',
        format: 'json',
        list: 'categorymembers',
        cmtitle: category,
        cmtype: 'file',
        cmsort: 'timestamp',
        cmdir: 'desc',
        cmlimit: '15',
        prop: 'imageinfo',
        iiprop: 'url|user|comment',
        iiurlwidth: '400',
        origin: '*'
      });

      const catParams = new URLSearchParams({
        action: 'query',
        format: 'json',
        titles: category,
        prop: 'categoryinfo',
        origin: '*'
      });

      try {
        // Fetch category info for total count
        const catResponse = await fetch(`${apiUrl}?${catParams.toString()}`);
        if (!catResponse.ok) throw new Error('Failed to fetch category data');
        const catData = await catResponse.json();
        const pages = catData.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].categoryinfo) {
          setTotalImages(pages[pageId].categoryinfo.files);
        }

        // Fetch latest images
        const response = await fetch(`${apiUrl}?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch image data');
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.info);
        }
        
        const memberPromises = (data.query.categorymembers || []).map(async (member: any) => {
            const imageInfoParams = new URLSearchParams({
                action: 'query',
                format: 'json',
                prop: 'imageinfo',
                titles: member.title,
                iiprop: 'url|user|comment',
                iiurlwidth: '400',
                origin: '*'
            });
            const infoRes = await fetch(`${apiUrl}?${imageInfoParams.toString()}`);
            const infoData = await infoRes.json();
            const imagePageId = Object.keys(infoData.query.pages)[0];
            const imageInfo = infoData.query.pages[imagePageId].imageinfo[0];
            
            return {
                title: member.title.replace('File:', '').replace(/\.[^/.]+$/, ""),
                thumbnailUrl: imageInfo.thumburl,
                user: imageInfo.user,
                descriptionUrl: imageInfo.descriptionurl,
            };
        });

        const imageData = await Promise.all(memberPromises);
        setImages(imageData);

      } catch (err: unknown) {
        if (err instanceof Error) {
            setError(`Failed to load images. ${err.message}`);
        } else {
            setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category, apiUrl]);

  const isMobileCampaign = category.includes('wsc-in-m');

  return (
    <div className="bg-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                    {subtitle}
                </p>
                {totalImages !== null && (
                    <Badge variant="secondary" className="mt-4 text-base">
                       {isMobileCampaign ? <Smartphone className="mr-2 h-4 w-4" /> : <Users className="mr-2 h-4 w-4" />}
                        Total Submissions: {totalImages}
                    </Badge>
                )}
            </div>

            {loading && (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-12 w-12 text-primary animate-spin" />
                </div>
            )}

            {error && (
                <div className="flex flex-col items-center justify-center h-64 text-destructive bg-destructive/10 rounded-lg">
                    <AlertTriangle className="h-12 w-12 mb-4" />
                    <p className="text-lg font-semibold">Error Loading Gallery</p>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {!loading && !error && (
                <>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                        variants={galleryVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {images.map((image) => (
                            <motion.div
                                key={image.title}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link href={image.descriptionUrl} target="_blank" rel="noopener noreferrer">
                                    <Card className="overflow-hidden group cursor-pointer h-full flex flex-col bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] transition-all duration-300">
                                        <CardContent className="p-0 flex-grow">
                                            <div className="relative aspect-square">
                                                <Image 
                                                    src={image.thumbnailUrl} 
                                                    alt={image.title}
                                                    fill 
                                                    className="object-cover"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                />
                                            </div>
                                        </CardContent>
                                        <div className="p-3 bg-card/80">
                                            <p className="text-xs font-semibold text-primary truncate" title={image.title}>
                                                {image.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate">by {image.user}</p>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                            <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
                                Load More <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </>
            )}
        </div>
    </div>
  );
};

export default WSCampaignGallery;
