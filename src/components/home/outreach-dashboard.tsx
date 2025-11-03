
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';

export default function OutreachDashboard() {
  const { t } = useLanguage();

  const handleCTAClick = () => {
    gtagEvent({
      action: 'click_outreach_cta',
      category: 'Homepage Engagement',
      label: 'View Dashboard'
    });
  };

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            {t.home.dashboard.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
            {t.home.dashboard.subtitle}
          </p>
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
