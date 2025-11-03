
'use client';

import { ThemeProvider } from '@/components/layout/theme-provider';
import { LanguageProvider } from '@/context/language-context';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const LiveMarquee = dynamic(() => import('@/components/layout/live-marquee'));

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(true);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <LanguageProvider>
        <LiveMarquee isVisible={isMarqueeVisible} onClose={() => setIsMarqueeVisible(false)} />
        <Navbar isMarqueeVisible={isMarqueeVisible} />
        <main className={cn('flex-grow', isMarqueeVisible ? 'pt-10' : 'pt-0')}>
            {children}
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
