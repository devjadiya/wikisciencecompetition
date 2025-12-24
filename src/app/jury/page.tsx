
'use client';

import Image from 'next/image';

const juryMembers = [
  {
    name: 'Akshat Shrivastava',
    username: 'Bhaiyaji Smile 123',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
  {
    name: 'Dappa Solomon',
    username: 'Dappasolomon001',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
  {
    name: 'Dhaval Vyas',
    username: 'dsvyas',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
  {
    name: 'Fuseini Mugisu Suhuyini',
    username: 'Sir Amugi',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
  {
    name: 'Sarthak Khare',
    username: 'Status 401',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
  {
    name: 'Sudhanwa Jogalekar',
    username: 'sudhanwa',
    image: 'https://placehold.co/400x400.png',
    hint: 'jury member photo'
  },
];

export default function JuryPage() {
  return (
    <div className="bg-background">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Meet the National Jury</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                Our esteemed panel of scientists, photographers, and Wikimedians who will be judging the submissions for the competition. Experienced and passionate about both science and Wikimedia projects, they bring a wealth of knowledge and expertise to the table.
            </p>
        </div>
       </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {juryMembers.map((juror) => (
            <div
              key={juror.username}
              className="bg-card/60 backdrop-blur-lg border dark:border-white/[0.1] hover:dark:border-white/[0.2] rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300"
            >
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={juror.image}
                    alt={`Portrait of ${juror.name}`}
                    data-ai-hint={juror.hint}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6 flex-grow flex flex-col text-center items-center">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-2">{juror.name}</h3>
                  <div className="flex space-x-4 mt-auto">
                    <a 
                      href={`https://meta.wikimedia.org/wiki/User:${juror.username}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Meta-Wiki_Proposed_logo.svg" 
                        alt="Meta-Wiki" 
                        width={28} 
                        height={28} 
                      />
                    </a>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
