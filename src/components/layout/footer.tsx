import Link from 'next/link';
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
  { name: 'Instagram', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><radialGradient id="instagram-gradient" cx="0.3" cy="1" r="1"><stop offset="0" stop-color="#FFDC80"/><stop offset="0.1" stop-color="#FCAF45"/><stop offset="0.5" stop-color="#F77737"/><stop offset="0.7" stop-color="#F56040"/><stop offset="0.9" stop-color="#FD1D1D"/><stop offset="1" stop-color="#E1306C"/></radialGradient></defs><path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07c1.26.058 2.152.248 2.922.565c.78.32 1.448.745 2.12 1.42s1.1 1.34 1.42 2.12c.317.77.507 1.662.565 2.922c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.26-.248 2.152-.565 2.922c-.32.78-.745 1.448-1.42 2.12s-1.34 1.1-2.12 1.42c-.77.317-1.662.507-2.922.565c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.26-.058-2.152-.248-2.922-.565c-.78-.32-1.448-.745-2.12-1.42s-1.1-1.34-1.42-2.12c-.317-.77-.507-1.662-.565-2.922c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.26.248-2.152.565-2.922c.32-.78.745-1.448 1.42-2.12s1.34-1.1 2.12-1.42c.77-.317 1.662-.507 2.922-.565C8.416 2.175 8.796 2.163 12 2.163m0-1.002c-3.257 0-3.647.012-4.912.07c-1.27.058-2.153.25-2.928.56C3.415 2.187 2.76 2.635 2.188 3.207s-1.02 1.228-1.42 2.003c-.31.775-.502 1.658-.56 2.928C.15 9.403.138 9.793.138 12.05s.012 3.647.07 4.912c.058 1.27.25 2.153.56 2.928c.398.775.848 1.43 1.42 2.003s1.228 1.02 2.003 1.42c.775.31 1.658.502 2.928.56c1.265.058 1.655.07 4.912.07s3.647-.012 4.912-.07c1.27-.058 2.153-.25 2.928-.56c.775-.398 1.43-.848 2.003-1.42s1.02-1.228 1.42-2.003c.31-.775.502-1.658.56-2.928c.058-1.265.07-1.655.07-4.912s-.012-3.647-.07-4.912c-.058-1.27-.25-2.153-.56-2.928c-.398-.775-.848-1.43-1.42-2.003S20.59.848 19.814.45c-.775-.31-1.658-.502-2.928-.56C15.647 1.15 15.257 1.16 12.002 1.16zM12 7.05c-2.73 0-4.95 2.22-4.95 4.95s2.22 4.95 4.95 4.95s4.95-2.22 4.95-4.95s-2.22-4.95-4.95-4.95zm0 8.098c-1.74 0-3.148-1.408-3.148-3.148S10.26 8.852 12 8.852s3.148 1.408 3.148 3.148S13.74 15.148 12 15.148zm4.885-7.79c-.618 0-1.12.502-1.12 1.12s.502 1.12 1.12 1.12s1.12-.502 1.12-1.12s-.502-1.12-1.12-1.12z"/></svg>, href: 'https://www.instagram.com/wiki_science_competition/' },
  { name: 'Telegram', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#26A5E4" d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-1.39.2-1.61l15.35-5.85c.73-.28 1.4.17 1.18.91l-2.06 9.85c-.22 1.03-.87 1.28-1.75.8l-4.75-3.51l-2.32 2.2c-.25.24-.47.45-.96.45z"/></svg>, href: 'https://t.me/wikisciencecompetition' },
  { name: 'Meta Wiki', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm-89.2 129.5h49.4l11.5 35.8h2.3l27.1-35.8h29.5l-33 43.1l36.1 52.8h-31l-19-35.8l-2.3 2.3v33.5h-28.7zm134.4 0l42.9 95.9h-28.1l-10.3-25.1h-31.6l-9.7 25.1h-29.3zm-13.4 52.8h25.1l-12-30.9l-13.1 30.9zm101.4-52.8h28.7v95.9h-28.7z"/></svg>, href: 'https://meta.wikimedia.org/wiki/Wiki_Science_Competition_2025_in_India' },
  { name: 'Commons', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-12H9v8h2v-8zm4 0h-2v8h2v-8z"/></svg>, href: 'https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India' },
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
                    width={180}
                    height={40}
                />
            </Link>
            <p className="text-muted-foreground text-base">
              Capturing the beauty of science through photography.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
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
                <div className="mt-12 md:mt-0">
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
            </div>
             <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase font-headline">Contact</h3>
                   <ul role="list" className="mt-4 space-y-4">
                        <li>
                            <a href="mailto:wikisciencecompetition@gmail.com" className="text-base text-muted-foreground hover:text-primary transition-colors">
                                General Inquiries
                            </a>
                        </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Wiki Science Competition India. All rights reserved.
          </p>
          <p className="text-base text-muted-foreground mt-4 sm:mt-0">
            Content is available under CC BY-SA 4.0 unless otherwise noted.
          </p>
        </div>
      </div>
    </footer>
  );
}
