
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Handshake, Megaphone, Gift } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const icons = {
  Handshake,
  Gift,
  Megaphone,
};

export default function SupportUsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground">
       <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.support.title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                {t.support.subtitle}
            </p>
        </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {t.support.options.map((option) => {
                    const Icon = icons[option.icon as keyof typeof icons];
                    return (
                        <Card key={option.id} id={option.id} className="flex flex-col">
                            <CardHeader className="flex-row items-center gap-4 p-4 md:p-6">
                                <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                                <CardTitle className="font-headline text-xl md:text-2xl">{option.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col p-4 md:p-6 pt-0">
                            <p className="text-muted-foreground flex-grow mb-6 text-sm md:text-base">{option.description}</p>
                            <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90">
                                    <Link href="/contact">{option.cta}</Link>
                            </Button>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
       </div>
    </div>
  );
}
