
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface CategoryShowcaseProps {
    name: string;
    description: string;
    icon: LucideIcon;
    images?: { src: string; alt: string; hint: string }[];
    onImageClick: (index: number) => void;
}

export default function CategoryShowcase({ name, description, icon: Icon, images, onImageClick }: CategoryShowcaseProps) {
  return (
    <div className="py-8 border-b border-border last:border-b-0">
        <div className="md:flex items-center gap-4 mb-4">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary md:hidden">{name}</h3>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary hidden md:block">{name}</h3>
                <p className="text-muted-foreground max-w-prose text-sm md:text-base">{description}</p>
            </div>
        </div>
        
        {images && images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6">
                {images.map((image, index) => (
                    <Card 
                        key={index} 
                        className="overflow-hidden group transition-shadow hover:shadow-xl cursor-pointer"
                        onClick={() => onImageClick(index)}
                    >
                        <CardContent className="p-0">
                            <div className="relative aspect-square">
                                <Image 
                                    src={image.src} 
                                    data-ai-hint={image.hint} 
                                    alt={image.alt} 
                                    fill 
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
    </div>
  );
}
