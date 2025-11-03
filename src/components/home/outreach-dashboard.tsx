
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';

export default function OutreachDashboard() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleCTAClick = () => {
    gtagEvent({
        action: 'click_outreach_cta',
        category: 'Homepage Engagement',
        label: 'View Dashboard'
    });
  };

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
            Follow our campaign's progress in real-time. See live statistics on uploads, edits, and contributor activity on the official dashboard.
          </p>
        </motion.div>
        
        <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-xl transition-transform hover:scale-105" onClick={handleCTAClick}>
                <a href="https://outreachdashboard.wmflabs.org/courses/Online/Wiki_Science_Competition_India_2025_(November_2025)" target="_blank" rel="noopener noreferrer">
                    View Live Dashboard
                </a>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
