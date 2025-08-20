import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Globe, Lightbulb, PenSquare, Handshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="relative h-96">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg"
          alt="Team of scientists collaborating"
          data-ai-hint="collaboration team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white drop-shadow-lg text-center px-4">
            About WikiScience India 2025
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-2">
                <Badge variant="secondary" className="mb-2">Introduction for Indian Context</Badge>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                    Wiki Science Competition 2025 – India
                </h2>
                <div className="text-lg text-muted-foreground space-y-6">
                    <p>
                        For the very first time, India is organizing a national edition of the Wiki Science Competition (WSC) — one of the world’s largest initiatives that brings together science, photography, and free knowledge.
                    </p>
                    <p>
                        Launched in Estonia in 2011 and later expanded across Europe and worldwide, the competition has inspired thousands of scientists, researchers, and enthusiasts to share images that capture the wonder of science. From microscopic cells to cosmic galaxies, these freely licensed contributions enrich Wikimedia Commons and support open education globally.
                    </p>
                    <p>
                        India has proudly contributed to past international editions — with Indian photographers and scientists receiving recognition and awards. However, this is the first time India is hosting its own local competition, dedicated to showcasing the scientific spirit and creativity of our country.
                    </p>
                     <p>
                        The Wiki Science Competition 2025 – India is more than a contest. It’s a collective effort to represent Indian science to the world — through powerful images, stories, and creativity.
                    </p>
                </div>
            </div>
            <div className="relative h-64 w-64 mx-auto">
                 <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg"
                    alt="Wiki Science Competition India 2025 Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
        
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    Our Aims
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Through this campaign, we aim to:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <PenSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Encourage Contribution</h3>
                    <p className="text-muted-foreground">Encourage students, researchers, and enthusiasts across India to contribute valuable scientific media.</p>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Build Awareness</h3>
                    <p className="text-muted-foreground">Build awareness about the importance of open science and free knowledge.</p>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Celebrate Heritage</h3>
                    <p className="text-muted-foreground">Celebrate India’s rich scientific heritage and ongoing innovations.</p>
                </div>
                 <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Handshake className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Strengthen Collaboration</h3>
                    <p className="text-muted-foreground">Strengthen collaboration between Wikimedia communities, universities, research institutes, and organizations.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
