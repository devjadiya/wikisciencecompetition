'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gtagEvent } from '@/lib/gtm'; // Assuming gtm is setup

export default function UpcomingEvent() {
  const eventDetails = {
    title: "Commons Workshop 01",
    subtitle: "Wiki Science Competition 2025",
    tagline: "Master Wikimedia Commons and prepare for the competition.",
    date: "Sunday, 5 October 2025",
    time: "8:00 PM – 9:00 PM IST",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/WSC_Commons_Workshop_01.png/960px-WSC_Commons_Workshop_01.png",
    registerLink: "https://meta.wikimedia.org/wiki/Event:WSC_India_2025_Commons_Workshop_01"
  };

  return (
    <div className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">Join Our Upcoming Workshop</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            An essential session for all aspiring participants.
          </p>
        </motion.div>

        {/* The `overflow-hidden` class is essential for clipping the image to the rounded corners. */}
        <div className="group relative bg-card rounded-xl shadow-lg overflow-hidden border dark:border-white/[0.1] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Right Side: Clickable Image Poster (First in code for mobile-first layout) */}
            {/* CRITICAL: This `<a>` tag has no padding, allowing the image to be flush with the card edges. */}
            <a
              href={eventDetails.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full aspect-video lg:aspect-auto cursor-pointer"
              aria-label={`Register for ${eventDetails.title}`}
              onClick={() => gtagEvent({ action: 'click_register_image', category: 'Workshop', label: eventDetails.title })}
            >
              <Image
                src={eventDetails.imageUrl}
                alt={`${eventDetails.title} Poster`}
                fill
                className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 lg:bg-gradient-to-l lg:from-black/20 lg:via-transparent" />
            </a>

            {/* Left Side: Information (Second in code, appears below image on mobile) */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {eventDetails.subtitle}
              </p>
              <h3 className="text-3xl font-bold font-headline text-foreground mb-4">
                {eventDetails.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mb-6">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{eventDetails.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{eventDetails.time}</span>
                </div>
              </div>

              <p className="text-lg text-foreground/90 mb-8 max-w-md">
                {eventDetails.tagline}
              </p>

              <Button asChild size="lg" className="self-start">
                <a 
                  href={eventDetails.registerLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => gtagEvent({ action: 'click_register', category: 'Workshop', label: eventDetails.title })}
                >
                  Learn More & Register
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}