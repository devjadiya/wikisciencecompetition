import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Competition', href: '/competition' },
  { name: 'Jury', href: '/jury' },
  { name: 'Organizers', href: '/organizers' },
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
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Telegram', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-1.39.2-1.61l15.35-5.85c.73-.28 1.4.17 1.18.91l-2.06 9.85c-.22 1.03-.87 1.28-1.75.8l-4.75-3.51l-2.32 2.2c-.25.24-.47.45-.96.45z"/></svg>, href: '#' },
  { name: 'Meta Wiki', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm-89.2 129.5h49.4l11.5 35.8h2.3l27.1-35.8h29.5l-33 43.1l36.1 52.8h-31l-19-35.8l-2.3 2.3v33.5h-28.7zm134.4 0l42.9 95.9h-28.1l-10.3-25.1h-31.6l-9.7 25.1h-29.3zm-13.4 52.8h25.1l-12-30.9l-13.1 30.9zm101.4-52.8h28.7v95.9h-28.7z"/></svg>, href: '#' },
  { name: 'Commons', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-12H9v8h2v-8zm4 0h-2v8h2v-8z"/></svg>, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_for_Wiki_Science_Competition_India.svg"
                    alt="Wiki Science Competition India Logo"
                    width={40}
                    height={40}
                />
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
        <div className="mt-12 border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Wiki Science Competition India. All rights reserved.
          </p>
          <p className="text-base text-muted-foreground mt-4 sm:mt-0">
            Developed by <a href="https://github.com/devjadiya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dev Jadiya</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
