
'use client';

import { InteractiveWorldMap } from '@/components/ui/interactive-world-map';

export default function MapSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">A Global Competition</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                        Wiki Science Competition is a global event. Hover over a country to see who is participating.
                    </p>
                </div>
                <div className="relative flex items-center justify-center">
                    <InteractiveWorldMap />
                </div>
            </div>
        </section>
    );
}
