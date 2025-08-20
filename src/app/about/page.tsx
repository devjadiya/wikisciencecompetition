import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Target } from 'lucide-react';

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
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white drop-shadow-lg">
            About WikiScience
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-2">Our History</Badge>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              From National Roots to Global Reach
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              This competition originally started as a national competition and it was first organized in Estonia. In 2015, the contest was expanded to all of Europe and resulted in almost 10,000 freely licensed images attracting over 2,200 contesters. The 2017 edition was the first international one and saw an upload of more than 12,000 files.
            </p>
            <p className="text-lg text-muted-foreground">
              Now, in 2025, India is proud to host its own national edition, joining a global movement to celebrate and share the visual wonders of science.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
             <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Emerging_cicada.jpg"
              alt="Close-up of a camera lens"
              data-ai-hint="macro photography"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    Our Core Values
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Open Access</h3>
                    <p className="text-muted-foreground">We believe in free and open access to knowledge for everyone, everywhere.</p>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Community Collaboration</h3>
                    <p className="text-muted-foreground">Powered by a global community of volunteers, scientists, and photographers.</p>
                </div>
                <div className="p-8 bg-card rounded-lg shadow-md">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                        <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-semibold mb-2">Educational Impact</h3>
                    <p className="text-muted-foreground">Enhancing educational resources on Wikipedia and beyond with visual content.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
