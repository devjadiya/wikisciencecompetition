import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, CheckSquare, Microscope, Users, Video, Layers, PawPrint, Star, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CategoryShowcase from '@/components/competition/category-showcase';

const peopleInScienceImages = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9B%D0%B5%D0%BA%D1%82%D0%BE%D1%80.JPG', alt: 'A lecturer at the rostrum.', hint: 'lecturer science' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Suvi_ponor-2.jpg', alt: 'Exploring a cave.', hint: 'cave exploration' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Exploration_of_the_trench_of_cremation_burial_site_in_Chlodik.jpg', alt: 'Archaeological excavation.', hint: 'archaeology dig' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg', alt: 'Test Bench at the Fraunhofer LBF.', hint: 'engineering lab' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Lepitopteroloog.JPG', alt: 'A lepidopterologist at work.', hint: 'scientist nature' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Polaarteadlane.jpg', alt: 'A polar researcher.', hint: 'polar researcher' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/%CE%91%CE%BD%CE%B1%CF%83%CE%BA%CE%B1%CF%86%CE%AD%CF%82_%CE%9C%CE%B5%CF%84%CF%81%CF%8C_%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC_%282%29.jpg', alt: 'Excavations at the Piraeus metro station.', hint: 'archaeology excavation' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Engin_Umut_Akkaya_-_Reaction_mechanism.JPG', alt: 'A scientist explaining a reaction mechanism.', hint: 'chemistry explanation' },
];

const microscopyImages = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tradescantia_tolmukakarvad_ja_%C3%B5ietolm.JPG', alt: 'Stamen hairs and pollen of Tradescantia.', hint: 'pollen microscopy' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Tykadlo.jpg', alt: 'An antenna of a beetle under a microscope.', hint: 'insect microscopy' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/1.Magukbafordul%C3%B3_ikerszelv%C3%A9nyesek_72dpi.jpg', alt: 'Microscopic view of an organism.', hint: 'microorganism' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Decomposition_of_EMImBF4_ionic_liquid.jpg', alt: 'Decomposition of EMImBF4 ionic liquid.', hint: 'ionic liquid' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F_%D0%BC%D1%83%D1%85%D0%B0.png', alt: 'A housefly under a microscope.', hint: 'housefly macro' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/HEK_293.jpg', alt: 'HEK 293 cells.', hint: 'HEK cells' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Cross_section_of_Larix.jpg', alt: 'Cross section of a Larix.', hint: 'wood cross-section' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/The_Rotifer_Notholca_sp.jpg', alt: 'The Rotifer Notholca sp.', hint: 'rotifer' },
];


const categories = [
  { 
    name: 'People in Science', 
    icon: Users, 
    description: 'Scientists in their natural habitat.',
    images: peopleInScienceImages
  },
  { 
    name: 'Microscopy Images', 
    icon: Microscope, 
    description: 'Optical, electron, and scanning probe microscopy images.',
    images: microscopyImages
  },
  { 
    name: 'Non-photographic Media', 
    icon: Video, 
    description: 'Audio and video files, computer-generated imagery, etc.',
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'data visualization' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: '3d model' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'simulation' },
    ]
  },
  { 
    name: 'Image Sets', 
    icon: Layers, 
    description: 'Thematically linked images (up to 10) that can be viewed as one set.',
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'photo series' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'growth sequence' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'different angles' },
    ]
  },
  { 
    name: 'Wildlife & Nature', 
    icon: PawPrint, 
    description: 'Organisms in their natural habitat, including macro photography.',
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'wildlife animal' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'macro insect' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'rare flower' },
    ]
  },
  { 
    name: 'Astronomy', 
    icon: Star, 
    description: 'Images of stars, celestial events, and the equipment used to capture them.',
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'galaxy nebula' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'solar eclipse' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'telescope night' },
    ]
  },
  { 
    name: 'General Category', 
    icon: FlaskConical, 
    description: 'Everything else, from archaeology to vulcanology.',
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'geology' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'physics experiment' },
        { src: 'https://placehold.co/600x400.png', alt: 'Placeholder', hint: 'archaeological find' },
    ]
  },
];

const timeline = [
    { date: 'November 1, 2025', event: 'Submissions Open' },
    { date: 'December 15, 2025', event: 'Submissions Close' },
    { date: 'January 2026', event: 'Jury Deliberation' },
    { date: 'February 2026', event: 'National Winners Announced' },
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
                                   <Link href="/resources">View Full Rules <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                <div className="text-center mb-16">
                     <h2 className="text-4xl font-headline font-bold text-primary">Image Categories</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        You can participate in the following seven categories. Choose the one that best fits your work. See examples below to get inspired.
                    </p>
                </div>
                <div className="space-y-20">
                    {categories.map(category => (
                        <CategoryShowcase 
                            key={category.name}
                            icon={category.icon}
                            name={category.name}
                            description={category.description}
                            images={category.images}
                        />
                    ))}
                </div>
            </section>

            <section id="participate" className="mt-24 text-center">
                <div className="bg-primary text-primary-foreground rounded-lg shadow-2xl p-12">
                    <h3 className="text-3xl font-headline font-bold">Ready to Participate?</h3>
                    <p className="mt-4 mb-8 max-w-xl mx-auto">The stage is set. Your lens is the key. Show us the world through your scientific eyes.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-lg px-10 py-7 shadow-xl transition-transform hover:scale-105">
                        <Link href="#">
                            Submit Your Work
                        </Link>
                    </Button>
                </div>
            </section>
            
            <section id="supported-by" className="mt-24 text-center">
                <h4 className="text-2xl font-headline text-muted-foreground">Supported by:</h4>
                {/* Add supporter logos here later */}
            </section>
       </div>
    </div>
  );
}
