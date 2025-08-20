'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LanguageSwitcher from './language-switcher';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Competition', href: '/competition' },
  { name: 'Jury', href: '/jury' },
  { name: 'Organizers', href: '/organizers' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Resources', href: '/resources' },
];

const learningLinks = [
  { name: 'How to create a Wiki account', href: '#' },
  { name: 'How to use the Upload Wizard', href: '#' },
  { name: 'Understanding CC Licenses', href: '#' },
  { name: 'How to add categories', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_for_Wiki_Science_Competition_India.svg"
                    alt="Wiki Science Competition India Logo"
                    width={40}
                    height={40}
                    className="transition-transform group-hover:scale-105"
                />
              <span className="text-xl font-headline font-bold text-foreground">WikiScience India</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Learning <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {learningLinks.map(link => (
                   <DropdownMenuItem key={link.name} asChild><Link href={link.href}>{link.name}</Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
                href="/support-us"
                className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Support Us
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Link href="/competition">Participate</Link>
              </Button>
            </div>
            <LanguageSwitcher />
            <div className="flex md:hidden">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Learning <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
               <DropdownMenuContent>
                {learningLinks.map(link => (
                   <DropdownMenuItem key={link.name} asChild><Link href={link.href}>{link.name}</Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
                href="/support-us"
                 onClick={() => setIsOpen(false)}
                className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Support Us
            </Link>
            <div className="p-2">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Link href="/competition">Participate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
