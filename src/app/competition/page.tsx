import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, CheckSquare, Microscope, BrainCircuit, Users, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'People in Science', icon: Users },
  { name: 'Microscopy Images', icon: Microscope },
  { name: 'Non-photographic Media', icon: BrainCircuit },
  { name: 'Image Sets', icon: ImageIcon },
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
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <section id="rules">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-6">Rules & Guidelines</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start">
                                <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                <span>All submissions must be your own work.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                <span>Photos must be uploaded under a free license (CC BY-SA 4.0).</span>
                            </li>
                            <li className="flex items-start">
                                <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                <span>Submissions must include a clear and concise scientific description.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckSquare className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                                <span>High resolution images are strongly encouraged for better evaluation.</span>
                            </li>
                        </ul>
                    </section>

                    <Separator className="my-12" />

                    <section id="categories">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-6">Categories</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {categories.map(category => (
                                <Card key={category.name} className="bg-card">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <category.icon className="h-8 w-8 text-accent" />
                                        <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                <aside>
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
       </div>
    </div>
  );
}
