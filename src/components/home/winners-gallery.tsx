
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Winner {
  id: string;
  rank?: number;
  title: string;
  author: string;
  license: string;
  imageUrl: string;
  commonsUrl: string;
  isSpecialMention?: boolean;
}

const cameraWinners: Winner[] = [
  { id: 'c1', rank: 1, title: '3D-Printed Human Bone', author: 'Donvikro', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/3D-Printed_Biodegradable_Human_Bone_Scaffold_3.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:3D-Printed_Biodegradable_Human_Bone_Scaffold_3.jpg' },
  { id: 'c2', rank: 2, title: 'Haemometer', author: 'Kiran Vati K', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Haemometer.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Haemometer.jpg' },
  { id: 'c3', rank: 3, title: 'Appendix Surgery', author: 'Amitabha Gupta', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Close_up_shot_of_an_appendix_surgery%2C_or_appendectomy_at_a_Hospital_in_Assam%2C_India_01.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Close_up_shot_of_an_appendix_surgery,_or_appendectomy_at_a_Hospital_in_Assam,_India_01.jpg' },
  { id: 'c4', rank: 4, title: 'Milky Way from Kashmir', author: 'Rohit14400', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Milky_way_as_seen_from_Satsar_camsite%2CGanderbal_district%2C_Kashmir_02.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Milky_way_as_seen_from_Satsar_camsite,Ganderbal_district,_Kashmir_02.jpg' },
  { id: 'c5', rank: 5, title: 'Multi-parallel Light Ray', author: 'Grajani1975', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Multi-parallel_light_ray_producer.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Multi-parallel_light_ray_producer.jpg' },
  { id: 'cs1', isSpecialMention: true, title: 'Mitral Valve Replacement', author: 'Drsrt', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Heart_valve_replacement_operations.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Mitral_Valve_Replacement.jpg' },
  { id: 'cs2', isSpecialMention: true, title: 'Atomic Force Microscope', author: 'Gannu03', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Atomic_Force_Microscope_01.jpg/1024px-Atomic_Force_Microscope_01.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Atomic_Force_Microscope_01.jpg' },
  { id: 'cs3', isSpecialMention: true, title: 'Aloe vera Turmeric Stained', author: 'ConformationXII', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aloe_vera_Turmeric_Stained_-_PMG.jpg/1024px-Aloe_vera_Turmeric_Stained_-_PMG.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Aloe_vera_Turmeric_Stained_-_PMG.jpg' },
  { id: 'cs4', isSpecialMention: true, title: 'Annular Solar Eclipse', author: 'Sushant.vale', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Annular_Solar_Eclipse_stage_in_Ooty_%28Dec_2019%29.jpg/1024px-Annular_Solar_Eclipse_stage_in_Ooty_%28Dec_2019%29.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Annular_Solar_Eclipse_stage_in_Ooty_(Dec_2019).jpg' },
  { id: 'cs5', isSpecialMention: true, title: 'Focused Discoveries', author: 'Sagar Shetty98', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Focused_Discoveries.jpg/1024px-Focused_Discoveries.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Focused_Discoveries.jpg' },
];

const mobileWinners: Winner[] = [
  { id: 'm1', rank: 1, title: 'Sun Dial', author: 'Aliva Sahoo', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Sun_Dial_1.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Sun_Dial_1.jpg' },
  { id: 'm2', rank: 2, title: 'Fungi Rhizopus', author: 'Aaronantonypaul', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Fungi_Rhizopus.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Fungi_Rhizopus.jpg' },
  { id: 'm3', rank: 3, title: 'Ultrasonic Module', author: 'Suyash Dwivedi', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/HC_SR04_Ultrasonic_Module.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:HC_SR04_Ultrasonic_Module.jpg' },
  { id: 'm4', rank: 4, title: 'Amphibian Specimens', author: 'Aliva Sahoo', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Preserved_Reptile_and_Amphibian_Specimens.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Preserved_Reptile_and_Amphibian_Specimens.jpg' },
  { id: 'm5', rank: 5, title: 'Vintage Steam Engine', author: 'Bhaiyaji Smile 123', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Vintage_steam_engine.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Vintage_steam_engine.jpg' },
  { id: 'ms1', isSpecialMention: true, title: 'Cylindrical Calm & Swash Plate', author: 'Aliva Sahoo', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cylindrical_Calm_and_Swash_Plate.jpg/1024px-Cylindrical_Calm_and_Swash_Plate.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Cylindrical_Calm_and_Swash_Plate.jpg' },
  { id: 'ms2', isSpecialMention: true, title: 'Standard Flask', author: 'Naithik Shetty', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/250ml_Standard_Flask.jpg/1024px-250ml_Standard_Flask.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:250ml_Standard_Flask.jpg' },
  { id: 'ms3', isSpecialMention: true, title: 'Pyrometer', author: 'Mikasa2025', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pyrometer1.jpg/1024px-Pyrometer1.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Pyrometer1.jpg' },
  { id: 'ms4', isSpecialMention: true, title: 'CBC Analyzer', author: 'Aliva Sahoo', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CBC_Analyzer.jpg/1024px-CBC_Analyzer.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:CBC_Analyzer.jpg' },
  { id: 'ms5', isSpecialMention: true, title: 'Two Glass Bodied Drifters', author: 'NirajKumar1717', license: 'CC BY-SA 4.0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Two_Glass-Bodied_Drifters_-_Niraj_Kumar_2025.jpg/1024px-Two_Glass-Bodied_Drifters_-_Niraj_Kumar_2025.jpg', commonsUrl: 'https://commons.wikimedia.org/wiki/File:Two_Glass-Bodied_Drifters_-_Niraj_Kumar_2025.jpg' },
];

function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border bg-card flex flex-col h-full">
      <div className="relative aspect-square w-full">
        <Image
          src={winner.imageUrl}
          alt={winner.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {winner.rank && winner.rank <= 3 && (
            <Badge className="bg-accent text-accent-foreground font-bold shadow-md">
              <Trophy className="h-3 w-3 mr-1" /> Rank {winner.rank}
            </Badge>
          )}
          {winner.isSpecialMention && (
            <Badge variant="secondary" className="bg-primary/80 text-white font-bold backdrop-blur-md">
              <Medal className="h-3 w-3 mr-1" /> Special Mention
            </Badge>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
           <p className="text-[10px] text-white text-center font-mono">{winner.license}</p>
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h4 className="font-bold text-lg text-primary line-clamp-1 mb-1">{winner.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">by <span className="font-semibold text-accent">{winner.author}</span></p>
        <Button asChild variant="outline" size="sm" className="mt-auto w-full group">
          <a href={winner.commonsUrl} target="_blank" rel="noopener noreferrer">
            Commons <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function WinnersGallery() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1 text-sm uppercase tracking-widest font-bold">National Results</Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">Gallery of Winners</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Celebrating the top contributors of the 2025 Wiki Science Competition – India. 
            Selected across DSLR/Camera and Mobile categories.
          </p>
        </div>

        <div className="space-y-24">
          {/* Camera Category */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">Camera Category</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-tighter">DSLR & Digital Cameras</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {cameraWinners.map((winner) => (
                <WinnerCard key={winner.id} winner={winner} />
              ))}
            </div>
          </div>

          {/* Mobile Category */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">Mobile Category</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-tighter">Smartphone Photography</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {mobileWinners.map((winner) => (
                <WinnerCard key={winner.id} winner={winner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
