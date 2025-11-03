
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, AlertCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ImageInfo {
  pageid: number;
  title: string;
  thumbnailUrl: string;
  user: string;
  description: string;
  pageUrl: string;
}

interface WSCampaignGalleryProps {
  title: string;
  subtitle: string;
  campaignCategory: string;
  campaignUrl: string;
}

export default function WSCampaignGallery({ title, subtitle, campaignCategory, campaignUrl }: WSCampaignGalleryProps) {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      const API_ENDPOINT = 'https://commons.wikimedia.org/w/api.php';

      try {
        // 1. Fetch category members (latest 15 images)
        const categoryParams = new URLSearchParams({
          action: 'query',
          list: 'categorymembers',
          cmtitle: campaignCategory,
          cmlimit: '15',
          cmsort: 'timestamp',
          cmdir: 'desc',
          format: 'json',
          origin: '*',
        });
        const categoryRes = await fetch(`${API_ENDPOINT}?${categoryParams}`);
        if (!categoryRes.ok) throw new Error('Failed to fetch category members.');
        const categoryData = await categoryRes.json();
        const pageids = categoryData.query.categorymembers.map((m: any) => m.pageid).join('|');

        if (!pageids) {
          setImages([]);
          setIsLoading(false);
          // Fetch category info for total count even if no images
           const catInfoParams = new URLSearchParams({
            action: 'query',
            prop: 'categoryinfo',
            titles: campaignCategory,
            format: 'json',
            origin: '*',
          });
          const catInfoRes = await fetch(`${API_ENDPOINT}?${catInfoParams}`);
          const catInfoData = await catInfoRes.json();
          const pages = catInfoData.query.pages;
          const page = pages[Object.keys(pages)[0]];
          setTotalCount(page.categoryinfo?.files || 0);
          return;
        }

        // 2. Fetch image info for the page IDs
        const imageInfoParams = new URLSearchParams({
          action: 'query',
          prop: 'imageinfo',
          iiprop: 'url|user|comment|timestamp',
          iiurlwidth: '400',
          pageids: pageids,
          format: 'json',
          origin: '*',
        });
        const imageInfoRes = await fetch(`${API_ENDPOINT}?${imageInfoParams}`);
        if (!imageInfoRes.ok) throw new Error('Failed to fetch image info.');
        const imageInfoData = await imageInfoRes.json();
        
        const imageData = Object.values(imageInfoData.query.pages).map((p: any) => ({
          pageid: p.pageid,
          title: p.title,
          thumbnailUrl: p.imageinfo[0].thumburl,
          user: p.imageinfo[0].user,
          description: p.imageinfo[0].comment,
          pageUrl: p.imageinfo[0].descriptionurl,
        }));
        setImages(imageData as ImageInfo[]);

        // 3. Fetch total category size
        const catInfoParams = new URLSearchParams({
          action: 'query',
          prop: 'categoryinfo',
          titles: campaignCategory,
          format: 'json',
          origin: '*',
        });
        const catInfoRes = await fetch(`${API_ENDPOINT}?${catInfoParams}`);
        if (!catInfoRes.ok) throw new Error('Failed to fetch category info.');
        const catInfoData = await catInfoRes.json();
        const pages = catInfoData.query.pages;
        const page = pages[Object.keys(pages)[0]];
        setTotalCount(page.categoryinfo?.files || 0);

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [campaignCategory]);

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">{subtitle}</p>
          {totalCount !== null && (
            <div className="mt-4 text-lg font-bold text-primary">
              Total Submissions: <span className="text-accent">{totalCount}</span>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.map((image) => (
              <motion.div
                key={image.pageid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a href={image.pageUrl} target="_blank" rel="noopener noreferrer">
                  <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={image.thumbnailUrl}
                          alt={image.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </CardContent>
                    <div className="p-3 bg-card flex-grow">
                      <h3 className="text-xs font-semibold truncate text-foreground" title={image.title}>{image.title}</h3>
                      <p className="text-xs text-muted-foreground">by {image.user}</p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <a href={campaignUrl} target="_blank" rel="noopener noreferrer">
                View Full Campaign <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
