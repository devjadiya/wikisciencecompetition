
"use client";
import React from "react";
import {
  DraggableCard,
} from "@/components/ui/draggable-card";
 
export function DraggableCardsSection() {
  const items = [

    {
      title: "People in Science",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Astronomy",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Carina_Nebula_in_Narrowband.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Mobile Category",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Emerging_cicada.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Non-photographic Media",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Lunar_Mini-Magnetosphere.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
     {
      title: "Special Category",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Water_under_11_Hz_vibration.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
  ];
  return (
    <div className="hidden md:flex">
      <DraggableCard.Container className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-primary/5">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-muted-foreground md:text-4xl select-none">
          Explore Winning Categories
        </p>
        {items.map((item) => (
          <DraggableCard.Body key={item.title} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 rounded-lg object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCard.Body>
        ))}
      </DraggableCard.Container>
    </div>
  );
}

export default DraggableCardsSection;
