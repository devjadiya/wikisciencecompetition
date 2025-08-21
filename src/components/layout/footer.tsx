
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const socialLinks = [
  { name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg', href: 'https://www.instagram.com/wiki_science_competition/' },
  { name: 'Telegram', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Telegram_2019_simple_logo.svg', href: 'https://t.me/wikisciencecompetition' },
  { name: 'Meta Wiki', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg', href: 'https://meta.wikimedia.org/wiki/Wiki_Science_Competition_2025_in_India' },
  { name: 'Commons', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Wikimedia_Commons_logo_Spanish_vertical_in_colour.svg', href: 'https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India' },
];

export default function Footer() {
    const { t } = useLanguage();

    const navLinks = t.footerNavLinks;
    const supportLinks = t.footerSupportLinks;

  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg"
                    alt="Wiki Science Competition India 2025 Logo"
                    width={200}
                    height={50}
                />
            </Link>
            <p className="text-muted-foreground text-base">
              {t.footerSubtitle}
            </p>
            <div className="flex space-x-4 items-center">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-opacity hover:opacity-80">
                  <span className="sr-only">{item.name}</span>
                   <Image 
                        src={item.icon}
                        alt={`${item.name} Logo`}
                        width={item.name === 'Meta Wiki' || item.name === 'Commons' ? 32 : 28}
                        height={item.name === 'Meta Wiki' || item.name === 'Commons' ? 32 : 28}
                        className="object-contain"
                   />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerNavHeader}</h3>
                    <ul role="list" className="mt-4 space-y-4">
                        {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                            {item.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerSupportHeader}</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {supportLinks.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
             <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerContactHeader}</h3>
                   <ul role="list" className="mt-4 space-y-4">
                        <li>
                            <a href="mailto:wikisciencecompetition@gmail.com" className="text-base text-muted-foreground hover:text-primary transition-colors">
                                {t.footerContactLink}
                            </a>
                        </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/10 pt-8">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline text-center">Supported By</h3>
            <div className="mt-4 flex justify-center items-center">
                 <a href="https://meta.wikimedia.org/wiki/Wiki_Club_SATI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/WIKI_CLUB_SATI_Logo.svg"
                        alt="Wiki Club SATI Logo"
                        width={40}
                        height={40}
                    />
                    <span>Wiki Club SATI</span>
                </a>
            </div>
        </div>
        <div className="mt-8 border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.footerCopyright}
          </p>
          <p className="text-base text-muted-foreground mt-4 sm:mt-0">
            {t.footerLicense}
          </p>
        </div>
      </div>
    </footer>
  );
}

  