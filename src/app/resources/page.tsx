import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, BookOpen } from 'lucide-react';

const pastWinners = [
  { year: 2023, image: {src: 'https://placehold.co/600x400.png', hint: 'physics experiment'}, category: 'Physics', winner: 'Anjali Sharma' },
  { year: 2023, image: {src: 'https://placehold.co/600x400.png', hint: 'biology cell'}, category: 'Biology', winner: 'Rohan Mehta' },
  { year: 2022, image: {src: 'https://placehold.co/600x400.png', hint: 'chemistry reaction'}, category: 'Chemistry', winner: 'Priya Desai' },
  { year: 2022, image: {src: 'https://placehold.co/600x400.png', hint: 'astronomy nebula'}, category: 'Astronomy', winner: 'Vikram Singh' },
];

const learningResources = [
    { title: 'Guide to Science Photography', description: 'Learn the basics of capturing stunning scientific images.', link: '#' },
    { title: 'Understanding Creative Commons', description: 'A quick guide to licensing your work for the competition.', link: '#' },
    { title: 'Image Upload Tutorial', description: 'Step-by-step video on how to submit your photos.', link: '#' },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="bg-primary/5 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Resources</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Get inspired by past winners and access helpful materials to prepare your submission.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <section id="past-winners">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">Gallery of Past Winners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pastWinners.map((winner, index) => (
                        <Card key={index} className="overflow-hidden group">
                            <CardContent className="p-0">
                                <div className="relative h-60">
                                    <Image src={winner.image.src} data-ai-hint={winner.image.hint} alt={`Winning photo from ${winner.year}`} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="p-4">
                                    <p className="font-bold text-lg text-foreground">{winner.category}</p>
                                    <p className="text-sm text-muted-foreground">{winner.year} Winner: {winner.winner}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            
            <section id="learning-materials" className="mt-24">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">Learning Materials</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                     {learningResources.map(resource => (
                         <Card key={resource.title}>
                             <CardContent className="p-6">
                                <BookOpen className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-headline text-xl font-bold mb-2">{resource.title}</h3>
                                <p className="text-muted-foreground mb-4">{resource.description}</p>
                                <Button asChild variant="link" className="p-0">
                                    <Link href={resource.link}>
                                        Learn More <Download className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                             </CardContent>
                         </Card>
                     ))}
                 </div>
            </section>
        </div>
    </div>
  );
}
