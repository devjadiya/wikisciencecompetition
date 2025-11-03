
'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { DraggableCard } from "../ui/draggable-card";

export function VortexCta() {
  const { t } = useLanguage();

  return (
    <div className="w-full mx-auto rounded-md overflow-hidden my-16 md:my-24 flex items-center justify-center">
      <DraggableCard.Container>
        <DraggableCard.Body>
            <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-center">
                <h2 className="text-foreground text-2xl md:text-5xl font-bold">
                    {t.home.vortex.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-xl max-w-xl mt-6">
                    {t.home.vortex.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg shadow-lg">
                    <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                        {t.competition.readyToParticipate.cta}
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/resources">
                    {t.home.vortex.cta}
                    </Link>
                </Button>
                </div>
            </div>
        </DraggableCard.Body>
      </DraggableCard.Container>
    </div>
  );
}

export default VortexCta;
