
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { Check, ExternalLink } from 'lucide-react';

export default function CallForTeamPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.organizersCall.title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
             {t.organizersCall.subtitle}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">{t.organizersCall.joinHeading}</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              {t.organizersCall.joinDescription}
            </p>
            
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">{t.organizersCall.lookingForHeading}</h3>
            <ul className="space-y-3 text-muted-foreground mb-8 text-sm md:text-base">
              {t.organizersCall.lookingFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <Card className="sticky top-24 bg-primary/5 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">{t.organizersCall.sidebarTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  {t.organizersCall.sidebarDescription}
                </p>
                <p className="font-bold text-destructive mb-6">{t.organizersCall.deadline}</p>
                <Button asChild className="w-full" disabled>
                  <a>
                    {t.organizersCall.cta}
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
