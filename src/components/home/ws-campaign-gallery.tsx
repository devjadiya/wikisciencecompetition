'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Smartphone, Loader2, AlertTriangle } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';

interface WSCampaignGalleryProps {
  title: string;
  subtitle: string;
  campaignCategory: string;
  campaignUrl: string;
  apiUrl?: string;
}

export default function WSCampaignGallery({
  title,
  subtitle,
  campaignCategory,
  campaignUrl,
  apiUrl = 'https://commons.wikimedia.org/w/api.php',
}: WSCampaignGalleryProps) {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- Fetch total count from category info ---
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

      } catch (err: any) {
        setError(err.message || 'An unknown error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, [campaignCategory, apiUrl]);

  const isMobileCampaign = campaignCategory.includes('Mobile');

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">{subtitle}</p>
          {isLoading && (
              <div className="mt-6 flex justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
          )}
          {error && (
             <div className="text-center p-4 bg-destructive/10 rounded-lg max-w-md mx-auto mt-6">
                <AlertTriangle className="mx-auto h-8 w-8 text-destructive" />
                <h3 className="mt-2 text-md font-semibold text-destructive">Failed to Load Stats</h3>
                <p className="mt-1 text-xs text-destructive-foreground">{error}</p>
            </div>
          )}
          {totalCount !== null && !isLoading && !error && (
            <div className="mt-6">
                <AnimatedCounter from={0} to={totalCount} />
                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                    {isMobileCampaign ? <Smartphone className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                    <span>Total Submissions</span>
                </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href={campaignUrl} target="_blank" rel="noopener noreferrer">
                Upload <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
