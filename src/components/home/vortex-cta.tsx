
'use client';
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function VortexCta() {
  const { t } = useLanguage();

  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden my-16 md:my-24">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          {t.home.vortex.title}
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          {t.home.vortex.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
             <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                {t.competition.readyToParticipate.cta}
             </a>
          </Button>
          <Button asChild variant="ghost" className="text-white">
            <Link href="/resources">
              {t.home.vortex.cta}
            </Link>
          </Button>
        </div>
      </Vortex>
    </div>
  );
}

export default VortexCta;
