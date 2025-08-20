import Link from 'next/link';
import { Microscope, Twitter, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Competition', href: '/competition' },
  { name: 'Jury', href: '/jury' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const supportLinks = [
    { name: 'Sponsorship', href: '/support-us#sponsorship'},
    { name: 'Gifts/Swag', href: '/support-us#gifts'},
    { name: 'Outreach', href: '/support-us#outreach'},
]

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Microscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-headline font-bold text-foreground">
                WikiScience India 2025
              </span>
            </Link>
            <p className="text-muted-foreground text-base">
              Capturing the beauty of science through photography.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">Navigation</h3>
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
            <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">Support Us</h3>
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
            <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                <li>
                    <a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                </li>
                <li>
                    <a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Terms</a>
                </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/10 pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; {new Date().getFullYear()} Wiki Science Competition India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
