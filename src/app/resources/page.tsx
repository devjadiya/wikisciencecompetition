
'use client';

import { useState } from 'react';
import { Download, Video, CheckCircle, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const learningMaterials = [
  {
    title: 'What is the Wiki Science Competition?',
    description:
      'A short guide explaining the purpose, format, and impact of the Wiki Science Competition.',
    type: 'pdf',
    fileUrl: '/resources/WikiScienceCompetitionIndia2025.pdf',
    preview: '/images/wiki-science-pdf-preview.png',
  },
  {
    title: 'Creating a Wikimedia Account',
    description:
      'A step-by-step video tutorial to help new users register on Wikimedia and get started with editing and uploads.',
    type: 'video',
    videoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Wikimedia_Learning_-_Creating_an_Account_01.webm',
    preview: '/images/wikimedia-account.png',
    duration: '2:05',
  },
  {
    title: 'Understanding Creative Commons Licenses',
    description:
      'A visual explanation of different types of CC licenses to help you choose the right one for your submission.',
    type: 'video',
    videoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5c/Anatomy_of_a_CC_License_%28CC_Certificate_for_GLAM%29.mpg/Anatomy_of_a_CC_License_%28CC_Certificate_for_GLAM%29.mpg.720p.vp9.webm',
    preview: '/images/cc-license-preview.png',
    duration: '1:00',
  },
  {
    title: 'Image Upload Tutorial',
    description:
      'A beginner-friendly guide to uploading your images to Wikimedia Commons for the competition.',
    type: 'video',
    videoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/95/How_to_Upload_an_Image_to_Wikimedia_Commons_%28A_Beginner%27s_Guide_2025%29.webm',
    preview: '/images/image-upload-guide.png',
    duration: '2:00',
  },
  {
    title: "Do's and Don'ts",
    description:
      'A quick checklist of what’s allowed and what to avoid while participating in the competition.',
    type: 'pdf',
    fileUrl: '/resources/dos-and-donts.png',
    preview: '/images/dos-and-donts.png',
  },
];

const upcomingEvents = [
  {
      title: "Commons Workshop (Session 02)",
      subtitle: "Wiki Science Competition 2025",
      tagline: "Understand how to upload high-quality scientific images on Wikimedia Commons, choose accurate categories, and prepare entries for WSC 2025.",
      date: "Wednesday, 26 November 2025",
      time: "8:30 – 9:30 PM IST",
      speaker: "Suyash Dwivedi",
      platform: "Zoom",
      imageUrl: "/images/event_02.png",
      registerLink: "https://meta.wikimedia.org/wiki/Event:WSC_India_2025_Commons_Workshop_02"
  }
]

const pastEvents = [
  {
    title: "Commons Workshop 01",
    subtitle: "Wiki Science Competition 2025",
    tagline: "Mastered Wikimedia Commons and prepared for the competition.",
    date: "Sunday, 5 October 2025",
    time: "8:00 PM – 9:00 PM IST",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/WSC_Commons_Workshop_01.png/960px-WSC_Commons_Workshop_01.png",
    registerLink: "https://meta.wikimedia.org/wiki/Event:WSC_India_2025_Commons_Workshop_01"
  }
]

export default function ResourcesPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Learning Resources
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Whether you're a student, educator, or first-time contributor — this section will guide you step-by-step to participate in the Wiki Science Competition confidently.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="pt-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Upcoming Events</h2>
                <p className="mt-2 text-base md:text-lg text-muted-foreground">Join our workshops to learn and prepare for the competition.</p>
            </div>
            {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden shadow-lg border-accent/20 dark:border-accent/30 bg-card">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      <div>
                          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-2">
                          {event.title}
                          </h2>
                          <p className="text-muted-foreground mb-6 text-sm md:text-base">
                          {event.tagline}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-foreground mb-8">
                          <div className="flex items-center gap-3">
                              <Calendar className="h-5 w-5 text-accent" />
                              <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Clock className="h-5 w-5 text-accent" />
                              <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <User className="h-5 w-5 text-accent" />
                              <span>Speaker: {event.speaker}</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Video className="h-5 w-5 text-accent" />
                              <span>Platform: {event.platform}</span>
                          </div>
                          </div>

                          <Button asChild>
                            <a href={event.registerLink} target="_blank" rel="noopener noreferrer">View Event & Register</a>
                          </Button>
                      </div>
                    </div>
                    <div className="relative md:col-span-2 min-h-[300px] md:min-h-full bg-black/5">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="object-contain w-full h-full p-4"
                        />
                    </div>
                  </div>
                </Card>
            ))}
        </div>

        {learningMaterials.map((material, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row items-start overflow-hidden border dark:border-white/[0.1] shadow-md"
          >
            <div className="w-full md:w-1/2 h-52 md:h-auto relative">
              {material.type === 'video' && playingIndex === index ? (
                <video
                  src={material.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={material.preview}
                  alt={material.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() =>
                    material.type === 'video' && setPlayingIndex(index)
                  }
                />
              )}
            </div>

            <CardContent className="p-6 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  {material.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {material.description}
                </p>
              </div>

              {material.type === 'pdf' ? (
                <Button asChild variant="outline">
                  <Link
                    href={material.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    setPlayingIndex((prev) => (prev === index ? null : index))
                  }
                  variant="outline"
                >
                  {playingIndex === index ? 'Hide Video' : 'Play Video'}{' '}
                  <Video className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}

        <div className="pt-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Past Events</h2>
                <p className="mt-2 text-base md:text-lg text-muted-foreground">Catch up on workshops you might have missed.</p>
            </div>
            {pastEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden border dark:border-white/[0.1] shadow-md bg-muted/30">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative aspect-video md:aspect-auto">
                            <img src={event.imageUrl} alt={event.title} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>
                        <div className="p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-green-500" /> Event Completed
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="text-2xl font-headline font-bold mb-2">{event.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{event.date} &bull; {event.time}</p>
                                <p className="text-muted-foreground mb-6">{event.tagline}</p>
                                <Button asChild variant="secondary">
                                    <a href={event.registerLink} target='_blank' rel='noopener noreferrer'>View Event Page</a>
                                </Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            ))}
        </div>

        <div className="text-sm text-center text-muted-foreground pt-10 border-t border-muted">
          <p>
            Some resources used here are sourced from Wikimedia Commons under
            the Creative Commons Attribution-ShareAlike license. We gratefully
            acknowledge and credit the original creators for their educational
            contributions.
          </p>
        </div>
      </div>
    </div>
  );
}
