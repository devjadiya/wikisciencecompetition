"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";
 
export function WorldMapSection() {
  const worldMapDots = [
    // Europe to India
    { start: { lat: 52.5200, lng: 13.4050 }, end: { lat: 20.5937, lng: 78.9629 } }, // Berlin to India
    { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 20.5937, lng: 78.9629 } }, // Paris to India
    // US to India
    { start: { lat: 38.9072, lng: -77.0369 }, end: { lat: 20.5937, lng: 78.9629 } }, // Washington D.C. to India
    // Australia to India
    { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 20.5937, lng: 78.9629 } }, // Sydney to India
    // South America to India
    { start: { lat: -34.6037, lng: -58.3816 }, end: { lat: 20.5937, lng: 78.9629 } }, // Buenos Aires to India
    // Africa to India
    { start: { lat: -26.2041, lng: 28.0473 }, end: { lat: 20.5937, lng: 78.9629 } }, // Johannesburg to India
  ];

  return (
    <div className="py-16 md:py-24 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">
          A Global Celebration of Science
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Wiki Science Competition has a rich history of participation from countries around the world. The 2025 India edition joins a global movement to enrich our collective free knowledge.
        </p>
      </div>
      <WorldMap dots={worldMapDots} />
    </div>
  );
}

export default WorldMapSection;
