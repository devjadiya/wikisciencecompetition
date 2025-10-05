// @/components/competition/image-gallery-modal.tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ImageType } from './competition-page'; // Assuming you export ImageType from your page file

interface ImageGalleryModalProps {
  images: ImageType[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageGalleryModal({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: ImageGalleryModalProps) {
  const selectedImage = images[selectedIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-2xl p-4 flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button with React Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full h-8 w-8"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Image Display */}
        <div className="relative flex-grow flex items-center justify-center">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
          onClick={onPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
          onClick={onNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Footer with Image Info and Commons Link */}
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">{selectedImage.alt}</p>
          <Button asChild>
            <a href={selectedImage.commonsLink} target="_blank" rel="noopener noreferrer">
              View on Commons
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}