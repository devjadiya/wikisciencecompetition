
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';

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

  const handleFooterLinkClick = (label: string) => {
    gtagEvent({ action: 'click_footer_link', category: 'Footer Navigation', label });
  };
  
  const handleSocialLinkClick = (label: string) => {
    gtagEvent({ action: 'click_social_icon', category: 'Footer Socials', label });
  };


  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Wiki_Science_Competition_India_-_2025_Edition.svg"
                    alt="Wiki Science Competition India 2025 Logo"
                    width={200}
                    height={50}
                />
            </Link>
            <p className="text-muted-foreground text-sm">
              {t.footerSubtitle}
            </p>
            <div className="flex space-x-4 items-center">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-opacity hover:opacity-80" onClick={() => handleSocialLinkClick(item.name)}>
                  <span className="sr-only">{item.name}</span>
                   <Image 
                        src={item.icon}
                        alt={`${item.name} Logo`}
                        width={item.name === 'Meta Wiki' || item.name === 'Commons' ? 28 : 24}
                        height={item.name === 'Meta Wiki' || item.name === 'Commons' ? 28 : 24}
                        className="object-contain"
                   />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerNavHeader}</h3>
                <ul role="list" className="mt-4 space-y-3">
                    {navLinks.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => handleFooterLinkClick(item.name)}>
                        {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerSupportHeader}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {supportLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => handleFooterLinkClick(item.name)}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4">
                     <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">{t.footerContactHeader}</h3>
                     <p className='italic'><strong> Mail: contact [at] wikisciencecompetition [dot] in </strong></p>
                     <a href={`mailto:${t.contact.emailAddress}`} className="text-sm font-bold text-accent hover:text-accent/80 transition-colors break-all" onClick={() => handleFooterLinkClick('Email')}>
                        {t.contact.emailAddress}
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/10 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t.footerDeveloperCredit} <a href="https://www.linkedin.com/in/devjadiya/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" onClick={() => handleFooterLinkClick('Developer - Dev Jadiya')}>Dev Jadiya</a>
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.footerCopyright}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footerLicense}
          </p>
        </div>
      </div>
    </footer>
  );
}

    