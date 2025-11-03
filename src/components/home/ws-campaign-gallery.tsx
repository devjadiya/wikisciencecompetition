'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, AlertTriangle, ExternalLink, Users, Smartphone, Camera } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/animated-counter';

interface ImageInfo {
  pageid: number;
  title: string;
  thumbnailUrl: string;
  user: string;
  pageUrl: string;
}

interface WSCampaignGalleryProps {
  title: string;
  subtitle: string;
  campaignCategory: string;
  campaignUrl: string;
  apiUrl?: string;
}

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WSCampaignGallery({
  title,
  subtitle,
  campaignCategory,
  campaignUrl,
  apiUrl = 'https://commons.wikimedia.org/w/api.php',
}: WSCampaignGalleryProps) {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImagesAndCount = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- 1. Fetch total count from category info ---
        const catInfoParams = new URLSearchParams({
          action: 'query',
          prop: 'categoryinfo',
          titles: `Category:${campaignCategory}`,
          format: 'json',
          origin: '*',
        });
        const catInfoRes = await fetch(`${apiUrl}?${catInfoParams}`);
        if (!catInfoRes.ok) throw new Error('Failed to fetch category statistics.');
        const catInfoData = await catInfoRes.json();
        const pages = catInfoData.query.pages;
        const pageId = Object.keys(pages)[0];
        const totalFiles = pageId !== "-1" ? pages[pageId].categoryinfo?.files || 0 : 0;
        setTotalCount(totalFiles);

        if (totalFiles === 0) {
            setImages([]);
            setIsLoading(false);
            return;
        }

        // --- 2. Fetch latest 15 image members ---
        const memberParams = new URLSearchParams({
          action: 'query',
          list: 'categorymembers',
          cmtitle: `Category:${campaignCategory}`,
          cmlimit: '15',
          cmsort: 'timestamp',
          cmdir: 'desc',
          cmtype: 'file',
          format: 'json',
          origin: '*',
        });
        const memberRes = await fetch(`${apiUrl}?${memberParams}`);
        if (!memberRes.ok) throw new Error('Failed to fetch category members.');
        const memberData = await memberRes.json();
        const pageids = memberData.query.categorymembers?.map((m: any) => m.pageid).join('|');

        if (!pageids) {
          setImages([]);
          setIsLoading(false);
          return;
        }
        
        // --- 3. Fetch details for those 15 images ---
        const imageInfoParams = new URLSearchParams({
          action: 'query',
          prop: 'imageinfo',
          iiprop: 'url|user|comment',
          iiurlwidth: '400',
          pageids: pageids,
          format: 'json',
          origin: '*',
        });
        const imageInfoRes = await fetch(`${apiUrl}?${imageInfoParams}`);
        if (!imageInfoRes.ok) throw new Error('Failed to fetch image details.');
        const imageInfoData = await imageInfoRes.json();
        
        const imageData = Object.values(imageInfoData.query.pages).map((p: any) => ({
          pageid: p.pageid,
          title: p.title.replace('File:', '').replace(/\.[^/.]+$/, ""),
          thumbnailUrl: p.imageinfo[0].thumburl,
          user: p.imageinfo[0].user,
          pageUrl: p.imageinfo[0].descriptionurl,
        })).sort((a: any, b: any) => {
            const aIndex = memberData.query.categorymembers.findIndex((m: any) => m.pageid === a.pageid);
            const bIndex = memberData.query.categorymembers.findIndex((m: any) => m.pageid === b.pageid);
            return aIndex - bIndex;
        });

        setImages(imageData as ImageInfo[]);

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesAndCount();
  }, [campaignCategory, apiUrl]);

  const isMobileCampaign = campaignCategory.includes('Mobile');

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">{subtitle}</p>
          {totalCount !== null && (
            <div className="mt-6">
                <AnimatedCounter from={0} to={totalCount} />
                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                    {isMobileCampaign ? <Smartphone className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                    <span>Total Submissions</span>
                </div>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <Card key={i} className="animate-pulse bg-muted/50">
                <div className="aspect-square w-full rounded-t-lg bg-muted"></div>
                <div className="p-3">
                  <div className="h-4 w-3/4 rounded bg-muted"></div>
                  <div className="h-3 w-1/2 rounded bg-muted mt-2"></div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {error && (
            <div className="text-center p-8 bg-destructive/10 rounded-lg max-w-md mx-auto">
                <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
                <h3 className="mt-4 text-lg font-semibold text-destructive">Failed to Load Gallery</h3>
                <p className="mt-2 text-sm text-destructive-foreground">{error}</p>
            </div>
        )}

        {!isLoading && !error && images.length === 0 && (
            <div className="text-center p-8 bg-card rounded-lg max-w-md mx-auto">
                <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">No Submissions Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">Be the first to contribute! Images from this campaign will appear here live.</p>
            </div>
        )}

        {!isLoading && !error && images.length > 0 && (
          <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
              variants={galleryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
          >
            {images.map((image) => (
              <motion.div
                key={image.pageid}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={image.pageUrl} target="_blank" rel="noopener noreferrer">
                  <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                    <CardContent className="p-0 flex-grow">
                      <div className="relative aspect-square">
                        <Image
                          src={image.thumbnailUrl}
                          alt={image.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <div className="p-2 md:p-3 bg-card/80">
                      <p className="text-xs font-semibold truncate text-foreground" title={image.title}>{image.title}</p>
                      <p className="text-xs text-muted-foreground truncate">by {image.user}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href={campaignUrl} target="_blank" rel="noopener noreferrer">
                Load More <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}