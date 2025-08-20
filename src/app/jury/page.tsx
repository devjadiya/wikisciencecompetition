import { Megaphone } from 'lucide-react';

export default function JuryPage() {
  return (
    <div className="bg-background text-foreground flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center p-8">
            <div className="inline-block p-6 bg-primary/10 rounded-full mb-6">
                <Megaphone className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                To Be Announced
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
                Our esteemed jury panel of scientists, photographers, and science communicators will be announced soon. Please check back later for updates!
            </p>
        </div>
    </div>
  );
}
