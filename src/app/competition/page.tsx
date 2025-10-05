// Your main page file, e.g., app/competition/page.tsx
'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Calendar,
  CheckSquare,
  Microscope,
  Users,
  Layers,
  Star,
  FlaskConical,
  Atom,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import CategoryShowcase from '@/components/competition/category-showcase';
import ImageGalleryModal from '@/components/competition/image-gallery-modal'; // Corrected import
import { useLanguage } from '@/context/language-context';
import { Vortex } from '@/components/ui/vortex';

// --- CORRECTED ---
// Updated ImageType to include the commonsLink
export type ImageType = {
  src: string;
  alt: string;
  hint: string;
  commonsLink: string; // The correct link to the Wikimedia Commons page
  loading?: string;
  decoding?: string;
  width?: number;
  height?: number;
};

// --- CORRECTED ---
// Helper function to process images and generate Wikimedia Commons links
const processImages = (images: Omit<ImageType, 'loading' | 'decoding' | 'commonsLink'>[], width = 1200, height = 800) =>
  images.map(img => {
    // This logic extracts the core filename from the thumbnail URL
    const url = new URL(img.src);
    const pathSegments = url.pathname.split('/');
    // The filename is the segment before the final thumbnail size segment
    const filename = pathSegments[pathSegments.length - 2];
    const commonsLink = `https://commons.wikimedia.org/wiki/File:${filename}`;

    return {
      ...img,
      commonsLink, // Add the generated link
      loading: 'lazy',
      decoding: 'async',
      width,
      height,
    };
  });


// --- Image Arrays for Each Category (No changes needed here) ---

const peopleInScienceImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/The_Chairman%2C_Indian_Space_Research_Organisation_%28ISRO%29%2C_Dr._K._Sivan_addressing_a_press_conference_on_the_occasion_of_%E2%80%98Lunar_Orbit_Insertion_of_Chandrayaan-2_Mission%E2%80%99%2C_in_Bengaluru_on_August_20%2C_2019_%28cropped%29.jpg/960px-thumbnail.jpg', alt: 'A lecturer at the rostrum.', hint: 'lecturer science' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/KPS_MEERUT_LAB.jpg/960px-KPS_MEERUT_LAB.jpg', alt: 'Exploring a cave.', hint: 'cave exploration' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/IA_ARPAN_BASU_CHOWDHURY_Foldscope_-_A_revolutionary_Microscope.jpg/1024px-IA_ARPAN_BASU_CHOWDHURY_Foldscope_-_A_revolutionary_Microscope.jpg', alt: 'Archaeological excavation.', hint: 'archaeology dig' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Heart_valve_replacement_operations.jpg/1024px-Heart_valve_replacement_operations.jpg', alt: 'Archaeological excavation.', hint: 'polar researcher' },
]);

const microscopyImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/%D0%93%D0%BB%D0%B0%D0%B7_%D1%84%D0%BB%D0%B5%D1%80%D0%BD%D0%B8%D1%86%D1%8B.jpg/960px-%D0%93%D0%BB%D0%B0%D0%B7_%D1%84%D0%BB%D0%B5%D1%80%D0%BD%D0%B8%D1%86%D1%8B.jpg', alt: 'Stamen hairs and pollen of Tradescantia.', hint: 'pollen microscopy' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Birefringent_Water_Ice_5.jpg/960px-Birefringent_Water_Ice_5.jpg', alt: 'Decomposition of EMImBF4 ionic liquid.', hint: 'insect microscopy' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_army_of_titanium_dioxide_nanotubes.jpg/960px-The_army_of_titanium_dioxide_nanotubes.jpg', alt: 'Decomposition of EMImBF4 ionic liquid.', hint: 'ionic liquid' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Hover_Fly_%D0%BD%D0%B0_%D1%86%D0%B2%D0%B5%D1%82.jpg/1024px-Hover_Fly_%D0%BD%D0%B0_%D1%86%D0%B2%D0%B5%D1%82.jpg', alt: 'HEK 293 cells.', hint: 'HEK cells' },
]);

const astronomyImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Lion_nebula.jpg/960px-The_Lion_nebula.jpg', alt: 'Total Solar Eclipse', hint: 'solar eclipse' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Joshua_Tree_Milky_Way.jpg/960px-Joshua_Tree_Milky_Way.jpg', alt: 'Kuffner Observatory Refractor', hint: 'observatory telescope' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ic443_nf_c_shorgb_2218m%2B823m%2B666m%2B729m_2218m_37h.jpg/1022px-Ic443_nf_c_shorgb_2218m%2B823m%2B666m%2B729m_2218m_37h.jpg', alt: 'The Carina Nebula', hint: 'carina nebula' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Puesta_de_Luna_Llena_Supertropical_sobre_la_parroqu%C3%ADa_San_Alberto_Hurtado_de_Monted%C3%B3nico_en_Valpara%C3%ADso._Supertropical_Full_Moonset_over_the_church_of_San_Alberto_Hurtado_in_Monted%C3%B3nico_of_Valpara%C3%ADso.jpg/1024px-thumbnail.jpg', alt: 'A Busy Universe', hint: 'galaxy cluster' },
], 1600, 900);

const specialCategoryImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Hektoen_enteric_agar_stool_culture.jpg/960px-Hektoen_enteric_agar_stool_culture.jpg', alt: 'Fluorescence in calcite', hint: 'mineral fluorescence' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Cala_dei_Santi_-_Palaeolithic_Cave.jpg/960px-Cala_dei_Santi_-_Palaeolithic_Cave.jpg', alt: 'Water under 11 Hz vibration', hint: 'cymatics water' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Hot_Musicians.tif/lossy-page1-640px-Hot_Musicians.tif.jpg', alt: 'Pulsed Laser Deposition in Action', hint: 'laser deposition' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Collezione_Microbica.jpg/500px-Collezione_Microbica.jpg', alt: 'Ferrofluid influenced by a magnet', hint: 'ferrofluid magnet' },
], 1400, 900);

const everydayCategoryImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Calving_in_Laos_%287_of_9%29.jpg/1024px-Calving_in_Laos_%287_of_9%29.jpg', alt: 'Soap bubbles showing interference colors', hint: 'soap bubble physics' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Burning_match.jpg/960px-Burning_match.jpg', alt: 'Melting ice cubes in water', hint: 'heat transfer' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spider_web_with_dew_drops03.jpg/1024px-Spider_web_with_dew_drops03.jpg', alt: 'Toast showing the Maillard reaction', hint: 'maillard reaction' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Pressure_cooker_releasing_water_vapor.jpg/1024px-Pressure_cooker_releasing_water_vapor.jpg', alt: 'Water droplet showing the Leidenfrost effect', hint: 'leidenfrost effect' },
], 1400, 900);

const equipmentImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fine_rotative_table_Microscope_5_%2812996283235%29.jpg/500px-Fine_rotative_table_Microscope_5_%2812996283235%29.jpg', alt: 'Test Bench at the Fraunhofer LBF.', hint: 'engineering lab' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mortar_and_pestle_used_for_grinding_pigments.jpg/960px-Mortar_and_pestle_used_for_grinding_pigments.jpg', alt: 'Test Bench at the Fraunhofer LBF.', hint: 'x-ray diffraction' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Branchement_TENS-oscilloscope_num%C3%A9rique-multim%C3%A8tre.jpg/960px-Branchement_TENS-oscilloscope_num%C3%A9rique-multim%C3%A8tre.jpg', alt: 'Scientist with auger equipment', hint: 'scientist equipment' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/RO_SYSTEM.jpg', alt: 'Rotary evaporator in a chemistry lab', hint: 'rotovap lab' },
]);

const chemistryImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Winkler_Titration_Prior_Titration.jpg/1025px-Winkler_Titration_Prior_Titration.jpg', alt: 'A scientist explaining a reaction mechanism.', hint: 'chemistry explanation' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Curcumin_fluorescence.jpg/960px-Curcumin_fluorescence.jpg', alt: 'Precipitation of lead(II) iodide', hint: 'chemical reaction' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%A1rystallization_from_solvent.jpg/1280px-%D0%A1rystallization_from_solvent.jpg', alt: 'Liquid oxygen in a flask', hint: 'liquid oxygen' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chemical_flower.jpg/1024px-Chemical_flower.jpg', alt: 'Crystals of vanillin', hint: 'vanillin crystallization' },
]);

const physicsImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Newton%27s_Cradle.jpg', alt: 'Wierszowski\'s pendulum demonstrating conservation of momentum', hint: 'newtons cradle' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Schlieren_image_of_supersonic_nitrogen_flow.jpg/1280px-Schlieren_image_of_supersonic_nitrogen_flow.jpg', alt: 'A plasma ball in a science museum', hint: 'plasma ball' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Chladni_plate_10.jpg/1280px-Chladni_plate_10.jpg', alt: 'Interference pattern from a laser', hint: 'laser interference' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1N829.jpg/1024px-1N829.jpg', alt: 'A simple homopolar motor', hint: 'homopolar motor' },
]);

const mobileImages: ImageType[] = processImages([
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lemon_Tea_1.jpg/500px-Lemon_Tea_1.jpg', alt: 'A ladybug in flight, captured with a mobile device', hint: 'ladybug flight' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Sunset_clouds_and_crepuscular_rays_over_pacific_edit.jpg/1024px-Sunset_clouds_and_crepuscular_rays_over_pacific_edit.jpg', alt: 'Close-up of a dandelion seed head', hint: 'dandelion macro' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rainbow_on_Rara_Lake.jpg/1024px-Rainbow_on_Rara_Lake.jpg', alt: 'Dew drops on a spider web', hint: 'dew spiderweb' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Chapathi.jpg', alt: 'A rainbow over a field', hint: 'rainbow nature' },
]);


export default function CompetitionPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ images: ImageType[]; index: number } | null>(null);

  const categories = useMemo(() => [
    {
      key: 'people',
      name: t.competition.categories.people.name,
      icon: Users,
      description: t.competition.categories.people.description,
      images: peopleInScienceImages,
    },
    {
      key: 'microscopy',
      name: t.competition.categories.microscopy.name,
      icon: Microscope,
      description: t.competition.categories.microscopy.description,
      images: microscopyImages,
    },
    {
      key: 'astronomy',
      name: t.competition.categories.astronomy.name,
      icon: Star,
      description: t.competition.categories.astronomy.description,
      images: astronomyImages,
    },
    {
      key: 'special',
      name: t.competition.categories.special.name,
      icon: Layers,
      description: t.competition.categories.special.description,
      images: specialCategoryImages,
    },
    {
      key: 'everyday',
      name: t.competition.categories.everyday.name,
      icon: Calendar,
      description: t.competition.categories.everyday.description,
      images: everydayCategoryImages,
    },
    {
      key: 'equipment',
      name: t.competition.categories.equipment.name,
      icon: CheckSquare,
      description: t.competition.categories.equipment.description,
      images: equipmentImages,
    },
    {
      key: 'chemistry',
      name: t.competition.categories.chemistry.name,
      icon: FlaskConical,
      description: t.competition.categories.chemistry.description,
      images: chemistryImages,
    },
    {
      key: 'physics',
      name: t.competition.categories.physics.name,
      icon: Atom,
      description: t.competition.categories.physics.description,
      images: physicsImages,
    },
    {
      key: 'mobile',
      name: t.competition.categories.mobile.name,
      icon: Smartphone,
      description: t.competition.categories.mobile.description,
      images: mobileImages,
    },
  ], [t]);

  const handleImageClick = (images: ImageType[], index: number) => {
    setSelectedImage({ images, index });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % selectedImage.images.length;
      setSelectedImage({ ...selectedImage, index: nextIndex });
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const prevIndex = (selectedImage.index - 1 + selectedImage.images.length) % selectedImage.images.length;
      setSelectedImage({ ...selectedImage, index: prevIndex });
    }
  };

  return (
    <div className="bg-background text-foreground">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.competition.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            {t.competition.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <section id="rules">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">{t.competition.howToParticipate.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="prose prose-base md:prose-lg text-muted-foreground max-w-none">
                  <p className="lead">
                    {t.competition.howToParticipate.p1}
                  </p>
                  <Button asChild className="my-4">
                    <a href="https://commons.wikimedia.org/w/index.php?title=Special:CreateAccount" target="_blank" rel="noopener noreferrer">
                      {t.competition.howToParticipate.createAccountLink}
                    </a>
                  </Button>
                  <h3 className="text-2xl font-headline font-bold text-primary mt-8 mb-4">{t.competition.howToParticipate.rulesTitle}</h3>
                  <ul className="space-y-3 pt-4">
                    {t.competition.howToParticipate.rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <CheckSquare className="h-5 w-5 md:h-6 md:w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                        {typeof rule === 'string' ? (
                          <span>{rule}</span>
                        ) : (
                          <span>
                            {rule.text}
                            <a
                              href={rule.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-accent hover:underline ml-1"
                            >
                              {rule.link.label}
                            </a>.
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <aside className="row-start-1 md:row-auto">
            <Card className="sticky top-24 bg-primary/5 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-primary flex items-center gap-2">
                  <Calendar className="h-6 w-6" /> {t.competition.keyDates.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.competition.keyDates.timeline.map(item => (
                    <li key={item.event} className="flex flex-col">
                      <span className="font-bold text-foreground text-sm md:text-base">{item.event}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90">
                  <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">{t.competition.submitNow}</a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>

        <Separator className="my-16 md:my-20" />

        <section id="categories">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t.competition.imageCategories.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              {t.competition.imageCategories.subtitle}
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {categories.map(category => (
              <CategoryShowcase
                key={category.key}
                icon={category.icon}
                name={category.name}
                description={category.description}
                images={category.images}
                onImageClick={(index: number) => handleImageClick(category.images || [], index)}
              />
            ))}
          </div>
        </section>

        <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden my-16 md:my-24">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              Capture the Unseen
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Unveil the beauty of science through your lens. Join a global community celebrating discovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                  {t.competition.readyToParticipate.cta}
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-white">
                <Link href="/resources">
                  View Past Winners
                </Link>
              </Button>
            </div>
          </Vortex>
        </div>

        <section id="participate" className="mt-16 md:mt-24 text-center">
          <div className="bg-primary text-primary-foreground rounded-lg shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-headline font-bold">{t.competition.readyToParticipate.title}</h3>
            <p className="mt-4 mb-8 max-w-xl mx-auto text-sm md:text-base">{t.competition.readyToParticipate.subtitle}</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-xl transition-transform hover:scale-105">
              <a href="https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India" target="_blank" rel="noopener noreferrer">
                {t.competition.readyToParticipate.cta}
              </a>
            </Button>
          </div>
        </section>
      </div>

      {selectedImage && (
        <ImageGalleryModal
          images={selectedImage.images}
          selectedIndex={selectedImage.index}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
}