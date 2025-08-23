
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import type { ImageType } from '@/app/competition/page';
import { gtagEvent } from '@/lib/gtm';
import { useEffect } from 'react';

interface ImageGalleryModalProps {
  images: ImageType[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageGalleryModal({ images, selectedIndex, onClose, onNext, onPrev }: ImageGalleryModalProps) {
  const image = images[selectedIndex];
  
  useEffect(() => {
    gtagEvent({ action: 'open_modal', category: 'Image Gallery', label: image.alt });

    return () => {
      gtagEvent({ action: 'close_modal', category: 'Image Gallery', label: image.alt });
    }
  }, [image.alt]);

  const getCommonsUrl = (imageUrl: string) => {
    try {
      const url = new URL(imageUrl);
      const pathname = url.pathname;
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
      return `https://commons.wikimedia.org/wiki/File:${filename}`;
    } catch (e) {
      console.error("Invalid image URL:", imageUrl);
      return '#';
    }
  };

  const handleNext = () => {
    gtagEvent({ action: 'click', category: 'Image Gallery', label: 'Next Image' });
    onNext();
  }

  const handlePrev = () => {
    gtagEvent({ action: 'click', category: 'Image Gallery', label: 'Previous Image' });
    onPrev();
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-2 sm:p-4 bg-background/80 backdrop-blur-md border-border text-foreground">
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">{image.alt}</DialogDescription>
        <div className="relative aspect-video w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
        </div>
        <div className="absolute top-2 right-2 z-50">
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-50">
          <Button variant="ghost" size="icon" onClick={handlePrev} aria-label="Previous image">
            <ChevronLeft className="h-8 w-8" />
          </Button>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50">
          <Button variant="ghost" size="icon" onClick={handleNext} aria-label="Next image">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="mt-2 text-center flex justify-between items-center px-4 pb-2">
            <p className="text-sm text-muted-foreground text-left">{image.alt}</p>
            <Button asChild variant="outline" onClick={() => gtagEvent({ action: 'click_outbound', category: 'Image Gallery', label: `View on Commons: ${image.alt}` })}>
                <a href={getCommonsUrl(image.src)} target="_blank" rel="noopener noreferrer">
                    View on Commons <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

    