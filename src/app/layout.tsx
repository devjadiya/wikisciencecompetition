
import type { Metadata } from 'next';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FaqChatbot from '@/components/faq-chatbot';
import { LanguageProvider } from '@/context/language-context';
import Script from 'next/script';
import Analytics from '@/components/layout/analytics';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'Wiki Science Competition 2025 - India',
    template: '%s | WSC India 2025',
  },
  description: "Participate in India's biggest science photography competition for 2025. Submit images in categories like microscopy, astronomy, and more to win exciting prizes. Join the premier science and photography event, Wiki Science Competition 2025 in India, and contribute to free knowledge.",
  keywords: 'wiki science competition 2025, science competition india 2025, photography competition 2025, wsc india 2025, science photo contest india, official wiki science competition india, indian photography competition, national science competition, wikimedia india competition, astronomy photography competition, microscopy photo contest, submit science photos, win science prizes india, open science india, free knowledge competition',
  authors: [{ name: 'Wiki Science Competition India Team' }],
  openGraph: {
    title: 'Official Wiki Science Competition 2025 - India',
    description: "India's national science photography competition. Join WSC India to celebrate science, contribute to free knowledge, and win exciting prizes.",
    url: 'https://www.wikisciencecompetition.in/',
    siteName: 'Wiki Science Competition 2025 - India',
    images: [
      {
        url: 'https://www.wikisciencecompetition.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wiki Science Competition 2025 in India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Official Wiki Science Competition 2025 - India',
    description: "Calling all students, researchers, and science enthusiasts! Participate in India's biggest science photography competition and showcase your work to the world.",
    images: ['https://www.wikisciencecompetition.in/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.wikisciencecompetition.in/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
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
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FaqChatbot />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
