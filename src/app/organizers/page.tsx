import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Linkedin } from 'lucide-react';

const organizers = [
  {
    name: 'Jane Doe',
    role: 'Lead Organizer',
    image: 'https://placehold.co/400x400.png',
    hint: 'organizer portrait',
    bio: 'Jane is a passionate science communicator and a long-time Wikimedian, dedicated to bridging the gap between science and the public.',
    social: {
      email: 'mailto:jane.doe@example.com',
      linkedin: '#',
    },
  },
  {
    name: 'John Smith',
    role: 'Technical Lead',
    image: 'https://placehold.co/400x400.png',
    hint: 'team member photo',
    bio: 'With a background in software engineering, John ensures the technical aspects of the competition run smoothly.',
     social: {
      email: 'mailto:john.smith@example.com',
      linkedin: '#',
    },
  },
   {
    name: 'Priya Patel',
    role: 'Outreach Coordinator',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional headshot',
    bio: 'Priya leads our outreach efforts, connecting with institutions and communities across India to promote the competition.',
     social: {
      email: 'mailto:priya.patel@example.com',
      linkedin: '#',
    },
  },
];

export default function OrganizersPage() {
  return (
    <div className="bg-background">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Meet the Organizers</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                The dedicated team working behind the scenes to make the first Wiki Science Competition India a grand success.
            </p>
        </div>
       </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {organizers.map((organizer) => (
            <div key={organizer.name} className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 mb-6">
                <Image
                  src={organizer.image}
                  alt={`Portrait of ${organizer.name}`}
                  data-ai-hint={organizer.hint}
                  fill
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary">{organizer.name}</h3>
              <p className="text-accent font-semibold mb-3">{organizer.role}</p>
              <p className="text-muted-foreground mb-4">{organizer.bio}</p>
              <div className="flex space-x-4">
                <a href={organizer.social.email} className="text-muted-foreground hover:text-primary transition-colors"><Mail /></a>
                <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
