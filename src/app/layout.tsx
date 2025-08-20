import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FaqChatbot from '@/components/faq-chatbot';

export const metadata: Metadata = {
  title: 'WikiScience India 2025',
  description: 'National Science Competition in India',
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground min-h-screen flex flex-col')}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FaqChatbot />
        <Toaster />
      </body>
    </html>
  );
}
