import { Megaphone } from 'lucide-react';

export default function SponsorsPage() {
  return (
    <div className="bg-background text-foreground flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center p-8">
            <div className="inline-block p-6 bg-primary/10 rounded-full mb-6">
                <Megaphone className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                Sponsors To Be Announced
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
                We are currently finalizing our partnerships. Our generous sponsors who make this event possible will be featured here soon.
            </p>
        </div>
    </div>
  );
}
