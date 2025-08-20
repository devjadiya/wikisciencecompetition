'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Building } from 'lucide-react';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function CallToAction() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get Involved</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Be a part of India's first national Wiki Science Competition. We're looking for passionate individuals and organizations to join us.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-3">Call for Campus Ambassadors</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                   Promote the campaign in your institution, share guidelines, and help organize awareness activities.
                </p>
                <p className="text-sm font-bold text-destructive mb-6">Deadline: 31st August 2025</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/campus-ambassadors">Apply Now</Link>
                </Button>
            </motion.div>
             <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Building className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-3">Call for Wikimedia Affiliates</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                    Partner with us to promote the campaign, organize local outreach, and help bring impactful scientific contributions from your region.
                </p>
                <p className="text-sm font-bold text-destructive mb-6">Deadline: 31st August 2025</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/affiliates">Partner With Us</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
