
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FaqChatbot from '@/components/faq-chatbot';
import { LanguageProvider } from '@/context/language-context';

export const metadata: Metadata = {
  title: 'Wiki Science Competition 2025 - India',
  description: 'The national science photography competition in India. Participate in Wiki Science Competition (WSC) India, submit your images, and win exciting prizes. Categories include microscopy, astronomy, wildlife, and more.',
  keywords: 'wiki science india, wiki science competition, wsc india, science competition india, photography science competition india, science photography, wikimedia commons, open science, national science competition',
  authors: [{ name: 'Wiki Science Competition India Team' }],
  openGraph: {
    title: 'Wiki Science Competition 2025 - India',
    description: 'India\'s national science photography competition. Join WSC India to celebrate science and contribute to free knowledge.',
    url: 'https://wikiscience.in',
    siteName: 'Wiki Science Competition India',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg',
        width: 1200,
        height: 630,
        alt: 'Wiki Science Competition India 2025 Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wiki Science Competition 2025 - India',
    description: 'Calling all science enthusiasts! Participate in India\'s biggest science photography competition and showcase your work to the world.',
    images: ['https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg'],
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
    canonical: 'https://wikiscience.in',
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
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_for_Wiki_Science_Competition_India.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Source+Sans+Pro:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground min-h-screen flex flex-col')}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FaqChatbot />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
