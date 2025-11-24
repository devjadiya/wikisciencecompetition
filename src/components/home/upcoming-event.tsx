'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, User, Video, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { gtagEvent } from '@/lib/gtm';
import Image from 'next/image';

export default function UpcomingEvent() {

  const handleEventClick = () => {
    gtagEvent({
        action: 'click_event_link',
        category: 'Homepage Engagement',
        label: 'WSC India 2025 Commons Workshop 02'
    });
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-lg border-accent/20 dark:border-accent/30 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-2 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-2">
                  Upcoming Event: Commons Workshop (Session 02)
                </h2>
                <p className="text-muted-foreground mb-6 text-sm md:text-base">
                  Understand how to upload high-quality scientific images on Wikimedia Commons, choose accurate categories, and prepare entries for WSC 2025.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-foreground mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>Wednesday, 26 November 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>8:30 – 9:30 PM IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-accent" />
                    <span>Speaker: Suyash Dwivedi</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-accent" />
                    <span>Platform: Zoom</span>
                  </div>
                </div>

                <Button asChild onClick={handleEventClick}>
                  <a href="https://meta.wikimedia.org/wiki/Event:WSC_India_2025_Commons_Workshop_02" target="_blank" rel="noopener noreferrer">
                    View Event & Register
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative min-h-[200px] md:min-h-0">
                 <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c5/WSC_Commons_Workshop_02.png"
                    alt="WSC Commons Workshop 02 Banner"
                    data-ai-hint="event banner"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
