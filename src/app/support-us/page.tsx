import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Handshake, Megaphone, Gift } from 'lucide-react';
import Link from 'next/link';

const supportOptions = [
  {
    id: 'sponsorship',
    icon: Handshake,
    title: 'Become a Sponsor',
    description: 'Support us with monetary contributions to help cover operational costs, prize money, and event management. We offer various sponsorship tiers with prominent branding opportunities.',
    cta: 'Contact for Sponsorship',
  },
  {
    id: 'gifts',
    icon: Gift,
    title: 'Provide Gifts & Swag',
    description: 'Contribute to our prize pool with exciting gifts, vouchers, or branded merchandise (swag) for our winners and participants. Get your brand in the hands of science enthusiasts.',
    cta: 'Offer Gifts',
  },
  {
    id: 'outreach',
    icon: Megaphone,
    title: 'Outreach & Marketing',
    description: 'Collaborate with us to spread the word. Help us reach a wider audience through your institutional channels, social media, or marketing expertise.',
    cta: 'Collaborate on Outreach',
  },
];

export default function SupportUsPage() {
  return (
    <div className="bg-background text-foreground">
       <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Support Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Help us make the Wiki Science Competition India 2025 a massive success.
            </p>
        </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {supportOptions.map((option) => (
                    <Card key={option.id} id={option.id} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4">
                            <option.icon className="h-10 w-10 text-accent" />
                            <CardTitle className="font-headline text-2xl">{option.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                           <p className="text-muted-foreground flex-grow mb-6">{option.description}</p>
                           <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90">
                                <Link href="/contact">{option.cta}</Link>
                           </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
       </div>
    </div>
  );
}
