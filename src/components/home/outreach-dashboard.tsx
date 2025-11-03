
'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UploadCloud, Users, GitCommitHorizontal } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';
import { useLanguage } from '@/context/language-context';
import { Skeleton } from '../ui/skeleton';
import { gtagEvent } from '@/lib/gtm';
import React, { useRef } from 'react';

interface CampaignStats {
    uploads_count: number;
    user_count: number;
    revisions_count: number;
}

const statIcons = {
    uploads: UploadCloud,
    editors: Users,
    edits: GitCommitHorizontal,
};

export default function OutreachDashboard() {
    const { t } = useLanguage();
    const [stats, setStats] = useState<CampaignStats | null>(null);
    const [loading, setLoading] = useState(true);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        const fetchStats = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025).json');
                if (!response.ok) {
                    throw new Error('Failed to fetch stats');
                }
                const data = await response.json();
                setStats({
                    uploads_count: data.course.uploads_count,
                    user_count: data.course.user_count,
                    revisions_count: data.course.revisions_count
                });
            } catch (error) {
                console.error('Error fetching Outreach Dashboard stats:', error);
                // Set fallback stats on error to not break the UI
                 setStats({
                    uploads_count: 0,
                    user_count: 0,
                    revisions_count: 0
                });
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [isInView]);

    const handleCTAClick = () => {
        gtagEvent({
            action: 'click_outreach_cta',
            category: 'Homepage Engagement',
            label: 'Join Campaign'
        });
    };
    
    const dashboardStats = [
        {
            key: 'uploads',
            label: t.home.dashboard.stats.uploads,
            value: stats?.uploads_count ?? 0,
            icon: statIcons.uploads,
        },
        {
            key: 'editors',
            label: t.home.dashboard.stats.editors,
            value: stats?.user_count ?? 0,
            icon: statIcons.editors,
        },
        {
            key: 'edits',
            label: t.home.dashboard.stats.edits,
            value: stats?.revisions_count ?? 0,
            icon: statIcons.edits,
        },
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {dashboardStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <Card className="p-6 text-center flex flex-col items-center shadow-lg border-primary/10">
                                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    {loading ? (
                                        <Skeleton className="h-12 w-24 mb-2" />
                                    ) : (
                                        <AnimatedCounter from={0} to={stat.value} />
                                    )}
                                    <p className="text-base font-medium text-muted-foreground mt-1">
                                        {stat.label}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
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
