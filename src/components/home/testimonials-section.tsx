
"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This competition is a fantastic bridge between the scientific community and the public. Seeing complex research translated into beautiful imagery is truly inspiring.",
    name: "Dr. Aruna Sharma",
    title: "Astrophysicist, Raman Research Institute",
  },
  {
    quote:
      "As a photographer, Wiki Science has pushed me to find the beauty in subjects I never considered before. It’s a challenge that has immensely improved my craft.",
    name: "Prakash Singh",
    title: "Wildlife Photographer & Past Participant",
  },
  {
    quote:
      "Contributing to Wikimedia Commons means my work can educate people globally. It's science for everyone, and this competition is the perfect gateway.",
    name: "Meera Desai",
    title: "Microbiologist & Open Science Advocate",
  },
  {
    quote:
      "I was amazed by the quality and diversity of images from India in the past. A national competition will undoubtedly uncover even more hidden talent.",
    name: "Julian Weber",
    title: "International Jury Member, WSC Global",
  },
  {
    quote:
      "The Campus Ambassador program gave me the platform to bring together science enthusiasts at my university. It was an incredible experience in community building.",
    name: "Rohan Chatterjee",
    title: "Student, IIT Bombay",
  },
];


export default function TestimonialsSection() {
  return (
    <div className="py-20 md:py-32 rounded-md flex flex-col antialiased bg-primary/5 items-center justify-center relative overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Voices of Our Community</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Hear what researchers, photographers, and enthusiasts are saying about the Wiki Science Competition.
          </p>
        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
