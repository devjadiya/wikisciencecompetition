import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, CheckSquare, Microscope, Users, Image as ImageIcon, Video, Star, PawPrint, Layers, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'People in Science', icon: Users, description: 'Scientists in their natural habitat.' },
  { name: 'Microscopy Images', icon: Microscope, description: 'Optical, electron, and scanning probe microscopy images.' },
  { name: 'Non-photographic Media', icon: Video, description: 'Audio and video files, computer-generated imagery, etc.' },
  { name: 'Image Sets', icon: Layers, description: 'Thematically linked images (up to 10) that can be viewed as one set.' },
  { name: 'Wildlife & Nature', icon: PawPrint, description: 'Organisms in their natural habitat, including macro photography.' },
  { name: 'Astronomy', icon: Star, description: 'Images of stars, celestial events, and the equipment used to capture them.' },
  { name: 'General Category', icon: FlaskConical, description: 'Everything else, from archaeology to vulcanology.' },
];

const timeline = [
    { date: 'November 1, 2024', event: 'Submissions Open' },
    { date: 'December 15, 2024', event: 'Submissions Close' },
    { date: 'January 2025', event: 'Jury Deliberation' },
    { date: 'February 2025', event: 'National Winners Announced' },
];

export default function CompetitionPage() {
  return (
    <div className="bg-background text-foreground">
       <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Competition Details</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Everything you need to know to participate and win.
            </p>
        </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-16">
                <div className="md:col-span-2">
                    <section id="rules">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-6">Rules & Guidelines</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>Participation is simple, but please read the rules carefully before submitting your images.</p>
                            <ul className="space-y-3 pt-4">
                                <li className="flex items-start">
                                    <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                    <span>All submissions must be your own work and uploaded by you.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                    <span>Photos must be uploaded under a free license (CC BY-SA 4.0) to Wikimedia Commons.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                    <span>Submissions must include a clear, concise, and accurate scientific description in English.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                    <span>High-resolution images are strongly encouraged for better evaluation and use.</span>
                                </li>
                            </ul>
                            <div className="pt-4">
                               <Button asChild>
                                   <Link href="#">View Full Rules <ArrowRight className="ml-2 h-4 w-4" /></Link>
                               </Button>
                           </div>
                        </div>
                    </section>
                </div>

                <aside className="row-start-1 md:row-auto">
                    <Card className="sticky top-24 bg-primary/5 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                               <Calendar className="h-6 w-6"/> Key Dates
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {timeline.map(item => (
                                <li key={item.event} className="flex flex-col">
                                    <span className="font-bold text-foreground">{item.event}</span>
                                    <span className="text-sm text-muted-foreground">{item.date}</span>
                                </li>
                                ))}
                            </ul>
                            <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90">
                                <Link href="#">Submit Now</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </aside>
            </div>

            <Separator className="my-20" />

            <section id="categories">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-headline font-bold text-primary">Image Categories</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        You can participate in the following seven categories. Choose the one that best fits your work.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categories.map(category => (
                        <Card key={category.name} className="bg-card flex flex-col group hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <category.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="font-headline text-2xl pt-2">{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{category.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    <div className="bg-primary text-primary-foreground rounded-lg shadow-lg flex flex-col justify-center items-center text-center p-8 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-headline font-bold">Ready to Participate?</h3>
                        <p className="mt-4 mb-6">The stage is set. Your lens is the key. Show us the world through your scientific eyes.</p>
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform hover:scale-105">
                            <Link href="#">
                                Submit Your Work
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
       </div>
    </div>
  );
}
