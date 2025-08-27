
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from '@/components/ui/dropdown-menu';
import LanguageSwitcher from './language-switcher';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  const [organizersOpen, setOrganizersOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const mainNavLinks = t.mainNavLinks;
  const organizerLinks = t.organizerLinks;
  const moreDropdownLinks = t.moreDropdownLinks;
  const learningLinks = t.learningLinks;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (label: string) => {
    gtagEvent({ action: 'click_nav_link', category: 'Header Navigation', label });
  };
  
  const handleDropdownClick = (label: string) => {
    gtagEvent({ action: 'click_dropdown_link', category: 'Header Navigation', label });
  };
  
  const handleMobileMenuToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    gtagEvent({ action: 'toggle_mobile_nav', category: 'Header Navigation', label: newState ? 'Open' : 'Close' });
  }

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
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group" onClick={() => handleNavClick('Logo')}>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_for_Wiki_Science_Competition_India.svg"
                    alt="Wiki Science Competition India Logo"
                    width={160}
                    height={40}
                    className="transition-transform group-hover:scale-105"
                />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1 ml-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => handleNavClick(link.name)}
              >
                {link.name}
              </Link>
            ))}
             <DropdownMenu open={organizersOpen} onOpenChange={setOrganizersOpen}>
                <div onMouseEnter={() => setOrganizersOpen(true)} onMouseLeave={() => setOrganizersOpen(false)}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={() => handleNavClick('Organizers Dropdown')}>
                        {t.organizersDropdown} <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 p-2">
                        {organizerLinks.map(link => (
                            <DropdownMenuItem key={link.name} asChild className="p-3 text-base">
                              <Link href={link.href} onClick={() => handleDropdownClick(link.name)}>{link.name}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </div>
            </DropdownMenu>
            <DropdownMenu open={moreOpen} onOpenChange={setMoreOpen}>
                <div onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={() => handleNavClick('More Dropdown')}>
                        {t.moreDropdown} <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 p-2">
                        {moreDropdownLinks.map(link => (
                            <DropdownMenuItem key={link.name} asChild className="p-3 text-base">
                              <Link href={link.href} onClick={() => handleDropdownClick(link.name)}>{link.name}</Link>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="p-3 text-base">{t.learningDropdown}</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className="p-2">
                                    {learningLinks.map(link => (
                                        <DropdownMenuItem key={link.name} asChild className="p-3 text-base">
                                          <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => handleDropdownClick(link.name)}>{link.name}</a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </div>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1">
             <ThemeToggle />
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold hidden sm:flex">
              <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('Participate CTA')}>{t.participateButton}</a>
            </Button>
            <LanguageSwitcher />
            <div className="flex md:hidden">
              <Button
                onClick={handleMobileMenuToggle}
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
            {[...mainNavLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => { setIsOpen(false); handleNavClick(`Mobile - ${link.name}`); }}
                className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <div className="border-t border-border pt-2 mt-2">
                 <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">{t.organizersDropdown}</p>
                 {organizerLinks.map(link => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => { setIsOpen(false); handleDropdownClick(`Mobile - ${link.name}`); }}
                        className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                     {link.name}
                    </Link>
                 ))}
            </div>
             <div className="border-t border-border pt-2 mt-2">
                 <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">{t.moreDropdown}</p>
                 {moreDropdownLinks.map(link => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => { setIsOpen(false); handleDropdownClick(`Mobile - ${link.name}`); }}
                        className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                     {link.name}
                    </Link>
                 ))}
            </div>
            <div className="border-t border-border pt-2 mt-2">
                 <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">{t.learningDropdown}</p>
                 {learningLinks.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { setIsOpen(false); handleDropdownClick(`Mobile - ${link.name}`); }}
                        className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                     {link.name}
                    </a>
                 ))}
            </div>
            <div className="p-2 border-t border-border mt-2 pt-3">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('Mobile - Participate CTA')}>{t.participateButton}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
