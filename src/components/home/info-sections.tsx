'use client';

import { motion } from 'framer-motion';
import { Info, Target, Award, Users, History, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  {
    icon: Info,
    title: 'About The Competition',
    description: 'An annual international science photography competition, bringing together science enthusiasts to share their vision of the world of research.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Water_under_11_Hz_vibration.jpg', hint: 'science abstract' },
    link: '/about'
  },
  {
    icon: Target,
    title: 'How to Participate',
    description: 'Participation is free and open to everyone. Submit your best science-related images across various categories during the submission period.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuffner-Sternwarte_Wien_2015_Refraktor_11.jpg', hint: 'camera photography' },
    link: '/competition'
  },
  {
    icon: Award,
    title: 'Prizes & Recognition',
    description: 'Winners receive national recognition, certificates, and prizes. The best images also advance to the international final.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/PSLV_C47_Cartosat-3_lifting_off_from_Second_Launch_Pad_003.jpg', hint: 'trophy award' },
    link: '/competition'
  },
  {
    icon: Users,
    title: 'Jury & Criteria',
    description: 'Our expert jury of scientists and photographers will judge entries based on scientific value, originality, and aesthetic quality.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9B%D0%B5%D0%BA%D1%82%D0%BE%D1%80.JPG', hint: 'judges meeting' },
    link: '/competition'
  },
  {
    icon: History,
    title: 'Past Winners',
    description: 'Explore a gallery of previous years\' winning photographs and get inspired by the incredible talent showcased.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Sulfide_disaster_in_Levikha_Village.jpg', hint: 'photo gallery' },
    link: '/resources'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function InfoSections() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Everything You Need to Know</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From submission guidelines to jury details, get all the information you need to be a part of this exciting event.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
             <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
              <div className="relative h-56 w-full">
                <Image src={section.image.src} alt={section.title} data-ai-hint={section.image.hint} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground flex-grow mb-6">{section.description}</p>
                <Button asChild variant="ghost" className="self-start group">
                    <Link href={section.link}>
                        Find out more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
              </div>
            </motion.div>
          ))}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="md:col-span-2 lg:col-span-1 bg-primary text-primary-foreground rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-8 justify-center items-center text-center"
            >
                <h3 className="text-2xl font-headline font-bold">Ready to Participate?</h3>
                <p className="mt-4 mb-6">The stage is set. Your lens is the key. Show us the world through your scientific eyes.</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform hover:scale-105">
                    <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                        Submit Your Work
                    </a>
                </Button>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
