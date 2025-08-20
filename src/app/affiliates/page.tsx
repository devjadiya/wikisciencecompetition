import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AffiliatesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Call for Wikimedia Affiliates</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are inviting Wikimedia affiliates, user groups, and organizations across India to collaborate with us in promoting and supporting Wiki Science Competition 2025.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Why Partner with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              This is a unique opportunity to celebrate science and enrich Wikimedia Commons with freely licensed media. As a partner, your group can play a pivotal role in making India's first national Wiki Science Competition a success by helping with outreach, awareness, and community engagement.
            </p>
            
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">How You Can Collaborate</h3>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Engage in online and offline outreach to your networks.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Facilitate uploads from institutions and research bodies.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Organize local workshops, edit-a-thons, or photowalks.</span>
              </li>
               <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Assist with translation and localization of campaign materials.</span>
              </li>
            </ul>
             <p className="text-muted-foreground">This form is intended for recognized Wikimedia affiliates or community groups. Individuals and students should use the <Link href="/campus-ambassadors" className="text-accent hover:underline">Campus Ambassador form</Link>.</p>
          </div>
          <aside>
            <Card className="sticky top-24 bg-primary/5 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Partner With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Let's collaborate to showcase India's scientific landscape to the world.
                </p>
                <p className="font-bold text-destructive mb-6">Deadline: 31st August 2025</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-D9-M4y3B_9hZJjR0d7g8sYkF2fT6eW5pR0tN3mJ4bA/viewform" target="_blank" rel="noopener noreferrer">
                    Open Partnership Form <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
