
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { worldMap } from './world-map-data';

const participatingCountries = [
  'AR', 'CL', 'US', 'NG', 'IN', 'MY', 
  'CH', 'EE', 'ES', 'FI', 'IE', 'IT', 'UA'
];

export function InteractiveWorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 500"
      className="w-full h-auto"
    >
      <g>
        {worldMap.paths.map((country) => {
          const isParticipating = participatingCountries.includes(country.id);
          const isHovered = hoveredCountry === country.id;

          const defaultFill = isParticipating 
            ? "hsl(var(--primary))" 
            : "hsl(var(--muted))";
          
          const hoverFill = isParticipating 
            ? "hsl(var(--accent))" 
            : "hsl(var(--muted-foreground))";

          return (
            <motion.path
              key={country.id}
              d={country.d}
              id={country.id}
              className="transition-colors duration-200"
              onMouseEnter={() => setHoveredCountry(country.id)}
              onMouseLeave={() => setHoveredCountry(null)}
              animate={{
                fill: isHovered ? hoverFill : defaultFill,
              }}
              transition={{ duration: 0.2 }}
            >
              <title>{country.name}</title>
            </motion.path>
          );
        })}
      </g>
    </svg>
  );
}
