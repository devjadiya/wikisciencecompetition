
'use client';

import type { Metadata } from 'next';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { LanguageProvider } from '@/context/language-context';
import Script from 'next/script';
import Analytics from '@/components/layout/analytics';
import { ThemeProvider } from '@/components/layout/theme-provider';
import LiveMarquee from '@/components/layout/live-marquee';
import { useState } from 'react';

// Metadata cannot be exported from a client component.
// We can define it here and then use it in a server component if needed,
// but for now, we'll keep it here and address any build warnings if they arise.
// Since this is the root layout, it is often a server component.
// The 'use client' directive makes this a client component.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(true);

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Wiki Science Competition 2025 - India</title>
        <meta
          name="description"
          content="Participate in India's biggest science photography competition for 2025. Submit images in categories like microscopy, astronomy, and more to win exciting prizes. Join the premier science and photography event, Wiki Science Competition 2025 in India, and contribute to free knowledge."
        />
        <meta name="keywords" content="wiki science competition 2025, science competition india 2025, photography competition 2025, wsc india 2025, science photo contest india, official wiki science competition india, indian photography competition, national science competition, wikimedia india competition, astronomy photography competition, microscopy photo contest, submit science photos, win science prizes india, open science india, free knowledge competition, science images, scientific photography, research images, wikimedia commons" />
        <meta property="og:title" content="Official Wiki Science Competition 2025 - India" />
        <meta property="og:description" content="India's national science photography competition. Join WSC India to celebrate science, contribute to free knowledge, and win exciting prizes." />
        <meta property="og:url" content="https://www.wikisciencecompetition.in/" />
        <meta property="og:site_name" content="Wiki Science Competition 2025 - India" />
        <meta property="og:image" content="https://www.wikisciencecompetition.in/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Official Wiki Science Competition 2025 - India" />
        <meta name="twitter:description" content="Calling all students, researchers, and science enthusiasts! Participate in India's biggest science photography competition and showcase your work to the world." />
        <meta name="twitter:image" content="https://www.wikisciencecompetition.in/twitter-image.png" />
        <link rel="canonical" href="https://www.wikisciencecompetition.in/" />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VBJS2HS9WM`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VBJS2HS9WM');
          `}
        </Script>
        <Script async src="https://cdn.counter.dev/script.js"
            data-id="cc7a036d-a904-4d76-bcac-37ea4196c014"
            data-utcoffset="6">
        </Script>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_for_Wiki_Science_Competition_India.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Source+Sans+Pro:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground min-h-screen flex flex-col')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Analytics />
            <VercelAnalytics />
            <LiveMarquee isVisible={isMarqueeVisible} onClose={() => setIsMarqueeVisible(false)} />
            <Navbar isMarqueeVisible={isMarqueeVisible} />
            <main className={cn('flex-grow', isMarqueeVisible ? 'pt-10' : 'pt-0')}>
              {children}
            </main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
