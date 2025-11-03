
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Users, Edit } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';

interface DashboardStats {
  uploads: number;
  editors: number;
  edits: number;
}

export default function OutreachDashboard() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025).json');
        
        if (!response.ok) {
            // Don't throw an error, just log it and set fallback stats
            console.error('Failed to fetch dashboard data, status:', response.status);
            setStats({ uploads: 0, editors: 0, edits: 0 });
            return;
        }

        const data = await response.json();
        
        if (data.message === "Not found") {
            // Handle the case where the API returns a 'Not found' message
            console.warn('OutreachDashboard API returned "Not found". The campaign might not be active yet. Defaulting to 0 stats.');
            setStats({ uploads: 0, editors: 0, edits: 0 });
            return;
        }
        
        // This logic handles cases where `stats` is nested or at the root of `course`
        const raw = data.course || {};
        const s = raw.stats && Object.values(raw.stats).some(v => typeof v === 'number' && v > 0) ? raw.stats : raw;

        setStats({
          uploads: s.uploads_count || 0,
          editors: s.editors_count || s.user_count || 0,
          edits: s.edit_count || 0,
        });

      } catch (error) {
        console.error('Error fetching or parsing dashboard data:', error);
        // Fallback to 0 if there's a network error or parsing error
        setStats({ uploads: 0, editors: 0, edits: 0 });
      }
    };

    fetchStats();
  }, []);

  const handleCTAClick = () => {
    gtagEvent({
      action: 'click_outreach_cta',
      category: 'Homepage Engagement',
      label: 'View Dashboard'
    });
  };

  const statCards = [
    {
      title: t.home.dashboard.stats.uploads,
      value: stats?.uploads,
      icon: Upload
    },
    {
      title: t.home.dashboard.stats.editors,
      value: stats?.editors,
      icon: Users
    },
    {
      title: t.home.dashboard.stats.edits,
      value: stats?.edits,
      icon: Edit
    }
  ];

  return (
    <section ref={ref} className="bg-primary/5 py-16 md:py-24">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            {stats === null ? (
                // Skeleton Loader
                Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] p-6 text-center animate-pulse">
                        <div className="h-10 w-10 bg-muted rounded-full mx-auto mb-4"></div>
                        <div className="h-8 w-20 bg-muted rounded-md mx-auto mb-2"></div>
                        <div className="h-6 w-32 bg-muted rounded-md mx-auto"></div>
                    </Card>
                ))
            ) : (
                // Stat Cards
                statCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader className="p-0 items-center mb-4">
                                <div className="p-3 bg-accent/10 rounded-full">
                                    <card.icon className="h-6 w-6 text-accent" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <AnimatedCounter from={0} to={card.value ?? 0} />
                                <CardTitle className="text-sm font-medium text-muted-foreground mt-2">{card.title}</CardTitle>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))
            )}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            {t.home.dashboard.ctaLine1} 
            <a 
              href="https://outreachdashboard.wmflabs.org/users/sign_up?course_id=6162" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent font-bold hover:underline"
            >
              {t.home.dashboard.ctaLinkText}
            </a> 
            {t.home.dashboard.ctaLine2}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-xl transition-transform hover:scale-105" onClick={handleCTAClick}>
            <a href="https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025)" target="_blank" rel="noopener noreferrer">
              {t.home.dashboard.ctaButton}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
