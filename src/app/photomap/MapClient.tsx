'use client';
import dynamic from 'next/dynamic';
import type { PhotoPoint } from './MapComponent';

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

interface MapClientProps {
  points: PhotoPoint[];
}

export default function MapClient({ points }: MapClientProps) {
  return <MapComponent points={points} />;
}
