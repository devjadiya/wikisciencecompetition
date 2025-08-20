import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CampusAmbassadorsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Call for Campus Ambassadors</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We’re excited to announce that India will be hosting the Wiki Science Competition 2025 for the first time at a national level! Join us as a local outreach coordinator.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Who are we looking for?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you’re a Wikimedian, science student, designer, teacher, or simply enthusiastic about open science—we’d love to have you on board! Campus Ambassadors act as local outreach coordinators for Wiki Science Competition 2025.
            </p>
            
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Responsibilities</h3>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Promote the campaign in your institution or community.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Share participation guidelines with potential contributors.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Optionally, organize awareness activities like workshops or photowalks (we can provide support!).</span>
              </li>
            </ul>
          </div>
          <aside>
            <Card className="sticky top-24 bg-primary/5 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Apply Now</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ready to make an impact? Fill out the form to become a Campus Ambassador.
                </p>
                <p className="font-bold text-destructive mb-6">Deadline: 31st August 2025</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLS..." target="_blank" rel="noopener noreferrer">
                    Open Application Form <ExternalLink className="ml-2 h-4 w-4" />
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
