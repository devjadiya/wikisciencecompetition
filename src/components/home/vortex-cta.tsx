
'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function VortexCta() {
  const { t } = useLanguage();

  return (
    <div className="w-full mx-auto my-16 md:my-24 px-4">
        <div className="bg-primary text-primary-foreground rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center flex-col justify-center text-center">
                <h2 className="text-2xl md:text-4xl font-headline font-bold">
                    {t.home.vortex.title}
                </h2>
                <p className="text-primary-foreground/80 text-sm md:text-lg max-w-xl mt-4">
                    {t.home.vortex.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg shadow-lg px-8 py-6 text-base">
                    <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                        {t.competition.readyToParticipate.cta}
                    </a>
                </Button>
                <Button asChild variant="outline" className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/50 hover:border-primary-foreground/80 rounded-lg px-8 py-6 text-base">
                    <Link href="/resources">
                    {t.home.vortex.cta}
                    </Link>
                </Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VortexCta;
