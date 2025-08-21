
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ExternalLink } from 'lucide-react';

export default function CallForTeamPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Call for Organizers</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
             We’re excited to share that India will be organizing its own local edition of this global campaign that promotes science through freely licensed images, videos, and other media on Wikimedia Commons.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Join the Organizing Team</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              To support smooth coordination, outreach, and planning, we’re expanding our organizing team. If you’re interested in contributing to this important initiative, we would love to hear from you.
            </p>
            
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">What We're Looking For</h3>
            <ul className="space-y-3 text-muted-foreground mb-8 text-sm md:text-base">
              <li className="flex items-start">
                <Check className="h-5 w-5 md:h-6 md:w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Passionate individuals with an interest in science, photography, or open knowledge.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 md:h-6 md:w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Skills in event planning, outreach, social media management, or content creation.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 md:h-6 md:w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>A collaborative spirit and a desire to make a significant impact.</span>
              </li>
            </ul>
          </div>
          <aside>
            <Card className="sticky top-24 bg-primary/5 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">Apply Now</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Help us shape the first Wiki Science Competition in India.
                </p>
                <p className="font-bold text-destructive mb-6">Applications Closed: 15th July 2025</p>
                <Button asChild className="w-full" disabled>
                  <a>
                    Applications Closed
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
