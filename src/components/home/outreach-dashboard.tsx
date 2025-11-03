
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Users, Pencil } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';

interface CampaignStats {
  uploads: number;
  editors: number;
  edits: number;
}

const statIcons = {
  uploads: Upload,
  editors: Users,
  edits: Pencil,
};

export default function OutreachDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState<CampaignStats | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    async function fetchStats() {
      try {
        const response = await fetch('https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025).json');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        
        // Robustly get stats, falling back to root course object if stats object is empty/missing
        const rawCourse = data.course || {};
        const source = rawCourse.stats && Object.values(rawCourse.stats).some(v => v && Number(v) > 0) ? rawCourse.stats : rawCourse;

        setStats({
          uploads: source.uploads_count || 0,
          editors: source.editors_count || source.user_count || 0,
          edits: source.edit_count || 0,
        });

      } catch (error) {
        console.error('Error fetching Outreach Dashboard stats:', error);
        // On error, we can show fallback values.
        setStats({ uploads: 0, editors: 0, edits: 0 });
      }
    }

    fetchStats();
  }, [isInView]);

  const handleCTAClick = () => {
    gtagEvent({
        action: 'click_outreach_cta',
        category: 'Homepage Engagement',
        label: 'Join Campaign'
    });
  };

  const statItems = [
    { key: 'uploads', label: t.home.dashboard.stats.uploads },
    { key: 'editors', label: t.home.dashboard.stats.editors },
    { key: 'edits', label: t.home.dashboard.stats.edits },
  ];

  return (
    <section ref={ref} className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            {t.home.dashboard.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
            {t.home.dashboard.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {statItems.map((item, index) => {
            const Icon = statIcons[item.key as keyof typeof statIcons];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full bg-primary/5 text-center p-6 shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm md:text-base font-semibold text-muted-foreground mb-1">{item.label}</p>
                      {stats !== null ? (
                        <AnimatedCounter from={0} to={stats[item.key as keyof CampaignStats]} />
                      ) : (
                        <p className="text-4xl md:text-6xl font-bold font-headline text-primary">...</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <p className="text-muted-foreground mb-6 text-base md:text-lg">
                {t.home.dashboard.ctaLine1}
                <a 
                    href="https://outreachdashboard.wmflabs.org/users/new?origin=https%3A%2F%2Foutreachdashboard.wmflabs.org%2Fcourses%2FOnline%2FWiki_Science_Competition_India_2025_%28November_2025%29" 
                    target="_blank" rel="noopener noreferrer" 
                    className="text-accent font-bold hover:underline mx-1"
                >
                    {t.home.dashboard.ctaLinkText}
                </a> 
                {t.home.dashboard.ctaLine2}
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-xl transition-transform hover:scale-105" onClick={handleCTAClick}>
                <a href="https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025)/enroll" target="_blank" rel="noopener noreferrer">
                    {t.home.dashboard.ctaButton}
                </a>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
