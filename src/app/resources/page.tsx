'use client';

import { useState } from 'react';
import { Download, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
  // {
  //   title: 'Guide to Science Photography',
  //   description:
  //     'Tips and techniques to help you capture scientific images that are clear, creative, and educational.',
  //   type: 'pdf',
  //   fileUrl: '/resources/science-photography-guide.pdf',
  //   preview: '/images/science-photo-guide.png',
  // },
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
        {learningMaterials.map((material, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row items-start overflow-hidden border dark:border-white/[0.1] shadow-md"
          >
            {/* Media Preview */}
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

            {/* Content */}
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

        {/* Attribution Section */}
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
