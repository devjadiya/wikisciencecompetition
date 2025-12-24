
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ExternalLink, Camera, Smartphone, Loader2, AlertTriangle } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';
import { useLanguage } from '@/context/language-context';

interface WSCampaignGalleryProps {
  title: string;
  description: string;
  campaignCategory: string;
  campaignUrl: string;
  apiUrl?: string;
}

export default function WSCampaignGallery({
  title,
  description,
  campaignCategory,
  campaignUrl,
  apiUrl = 'https://commons.wikimedia.org/w/api.php',
}: WSCampaignGalleryProps) {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchCount = async () => {
      setIsLoading(true);
      setError(null);
      try {
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

  const isMobileCampaign = campaignCategory.includes('-m');

  return (
    <Card className="flex flex-col text-center shadow-lg border dark:border-white/[0.1]">
      <CardHeader className="pb-4">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow items-center justify-center">
        {isLoading && (
            <div className="my-4 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )}
        {error && (
            <div className="p-4 bg-destructive/10 rounded-lg w-full my-4">
              <AlertTriangle className="mx-auto h-8 w-8 text-destructive" />
              <h3 className="mt-2 text-md font-semibold text-destructive">Failed to Load Stats</h3>
              <p className="mt-1 text-xs text-destructive-foreground">{error}</p>
          </div>
        )}
        {totalCount !== null && !isLoading && !error && (
          <div className="my-4">
              <AnimatedCounter from={0} to={totalCount} />
              <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                  {isMobileCampaign ? <Smartphone className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                  <span>{t.home.campaign.totalSubmissions}</span>
              </div>
          </div>
        )}
        <div className="mt-auto pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href={campaignUrl} target="_blank" rel="noopener noreferrer">
                {t.home.campaign.viewFull} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
