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
  Video,
  Layers,
  PawPrint,
  Star,
  FlaskConical,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import CategoryShowcase from '@/components/competition/category-showcase';
import ImageGalleryModal from '@/components/competition/image-gallery-modal';
import { useLanguage } from '@/context/language-context';
import { Vortex } from '@/components/ui/vortex';

export type ImageType = { src: string; alt: string; hint: string; loading?: string; decoding?: string; width?: number; height?: number };

/**
 * NOTE:
 * - We're reusing your existing image arrays (same images for now).
 * - Each image object is augmented with lazy-loading hints (loading/decoding).
 * - If CategoryShowcase or ImageGalleryModal use Next/Image, they can read width/height.
 */

const peopleInScienceImages: ImageType[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9B%D0%B5%D0%BA%D1%82%D0%BE%D1%80.JPG', alt: 'A lecturer at the rostrum.', hint: 'lecturer science' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Suvi_ponor-2.jpg', alt: 'Exploring a cave.', hint: 'cave exploration' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Exploration_of_the_trench_of_cremation_burial_site_in_Chlodik.jpg', alt: 'Archaeological excavation.', hint: 'archaeology dig' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Test_Bench_at_the_Fraunhofer_LBF_for_active_vibration_control.jpg', alt: 'Test Bench at the Fraunhofer LBF.', hint: 'engineering lab' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Lepitopteroloog.JPG', alt: 'A lepidopterologist at work.', hint: 'scientist nature' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Polaarteadlane.jpg', alt: 'A polar researcher.', hint: 'polar researcher' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/%CE%91%CE%BD%CE%B1%CF%83%CE%BA%CE%B1%CF%86%CE%AD%CF%82_%CE%9C%CE%B5%CF%84%CF%81%CF%8C_%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC_%282%29.jpg', alt: 'Excavations at the Piraeus metro station.', hint: 'archaeology excavation' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Engin_Umut_Akkaya_-_Reaction_mechanism.JPG', alt: 'A scientist explaining a reaction mechanism.', hint: 'chemistry explanation' },
].map(img => ({ ...img, loading: 'lazy', decoding: 'async', width: 1200, height: 800 }));

const microscopyImages: ImageType[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tradescantia_tolmukakarvad_ja_%C3%B5ietolm.JPG', alt: 'Stamen hairs and pollen of Tradescantia.', hint: 'pollen microscopy' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Tykadlo.jpg', alt: 'An antenna of a beetle under a microscope.', hint: 'insect microscopy' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/1.Magukbafordul%C3%B3_ikerszelv%C3%A9nyesek_72dpi.jpg', alt: 'Microscopic view of an organism.', hint: 'microorganism' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Decomposition_of_EMImBF4_ionic_liquid.jpg', alt: 'Decomposition of EMImBF4 ionic liquid.', hint: 'ionic liquid' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F_%D0%BC%D1%83%D1%85%D0%B0.png', alt: 'A housefly under a microscope.', hint: 'housefly macro' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/HEK_293.jpg', alt: 'HEK 293 cells.', hint: 'HEK cells' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Cross_section_of_Larix.jpg', alt: 'Cross section of a Larix.', hint: 'wood cross-section' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/The_Rotifer_Notholca_sp.jpg', alt: 'The Rotifer Notholca sp.', hint: 'rotifer' },
].map(img => ({ ...img, loading: 'lazy', decoding: 'async', width: 1200, height: 800 }));

const astronomyImages: ImageType[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Total_Solar_Eclipse_8-21-17.jpg', alt: 'Total Solar Eclipse', hint: 'solar eclipse' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Roberta_colallillo_13_auger_coihueco.jpg', alt: 'Scientist with auger', hint: 'scientist equipment' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuffner-Sternwarte_Wien_2015_Refraktor_11.jpg', alt: 'Kuffner Observatory Refractor', hint: 'observatory telescope' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Carina_Nebula_in_Narrowband.jpg', alt: 'The Carina Nebula', hint: 'carina nebula' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/A_Busy_Universe.jpg', alt: 'A Busy Universe', hint: 'galaxy cluster' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/25/PLO_7156.jpg', alt: 'Pises Lasteaed-Observatoorium', hint: 'observatory night' },
].map(img => ({ ...img, loading: 'lazy', decoding: 'async', width: 1600, height: 900 }));

const generalCategoryImages: ImageType[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Fluorescence_in_calcite.jpg', alt: 'Fluorescence in calcite', hint: 'mineral fluorescence' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Freezed_XRD.jpg', alt: 'Frozen sample in an X-ray diffractometer', hint: 'x-ray diffraction' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Water_under_11_Hz_vibration.jpg', alt: 'Water under 11 Hz vibration', hint: 'cymatics water' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Pulsed_Laser_Deposition_in_Action.jpg', alt: 'Pulsed Laser Deposition in Action', hint: 'laser deposition' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/%CE%91%CE%BD%CE%B1%CF%83%CE%BA%CE%B1%CF%86%CE%AD%CF%82_%CE%9C%CE%B5%CF%84%CF%81%CF%8C_%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC_%288%29.jpg', alt: 'Excavations at the Piraeus metro station', hint: 'archaeology greece' },
].map(img => ({ ...img, loading: 'lazy', decoding: 'async', width: 1400, height: 900 }));

const everydayCategoryImages: ImageType[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Soap_bubbles_3D.jpg', alt: 'Soap bubbles showing interference colors', hint: 'soap bubble physics' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Ice_cubes_in_glass.jpg', alt: 'Melting ice cubes in water', hint: 'heat transfer' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Magnets_on_fridge.jpg', alt: 'Magnets on a refrigerator door', hint: 'magnet everyday use' }
].map(img => ({ ...img, loading: 'lazy', decoding: 'async', width: 1400, height: 900 }));


// reuse microscopy images for the "microscopic images" category already defined above
// reuse peopleInScienceImages or generalCategoryImages for the remaining categories for now
// mobile category gets generalCategoryImages for now (mobile-phone-friendly photos)

/* Utility to clone arrays (so we can pass separate arrays to each category) */
const cloneImages = (arr: ImageType[]) => arr.map(i => ({ ...i }));

export default function CompetitionPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ images: ImageType[]; index: number } | null>(null);

  // memoize categories for perf
  const categories = useMemo(() => [
    {
      key: 'people',
      name: t.competition.categories.people.name,
      icon: Users,
      description: t.competition.categories.people.description,
      images: cloneImages(peopleInScienceImages),
    },
    {
      key: 'microscopy',
      name: t.competition.categories.microscopy.name,
      icon: Microscope,
      description: t.competition.categories.microscopy.description,
      images: cloneImages(microscopyImages),
    },
    {
      key: 'astronomy',
      name: t.competition.categories.astronomy.name,
      icon: Star,
      description: t.competition.categories.astronomy.description,
      images: cloneImages(astronomyImages),
    },
    {
      key: 'special',
      name: t.competition.categories.special.name,
      icon: Star,
      description: t.competition.categories.special.description,
      images: cloneImages(generalCategoryImages),
    },
    {
      key: 'everyday',
      name: t.competition.categories.everyday.name,
      icon: Calendar,
      description: t.competition.categories.everyday.description,
      images: cloneImages(peopleInScienceImages),
    },
    {
      key: 'equipment',
      name: t.competition.categories.equipment.name,
      icon: CheckSquare,
      description: t.competition.categories.equipment.description,
      images: cloneImages(generalCategoryImages),
    },
    {
      key: 'chemistry',
      name: t.competition.categories.chemistry.name,
      icon: FlaskConical,
      description: t.competition.categories.chemistry.description,
      images: cloneImages(peopleInScienceImages),
    },
    {
      key: 'physics',
      name: t.competition.categories.physics.name,
      icon: ArrowRight,
      description: t.competition.categories.physics.description,
      images: cloneImages(generalCategoryImages),
    },
    {
      key: 'mobile',
      name: t.competition.categories.mobile.name,
      icon: PawPrint,
      description: t.competition.categories.mobile.description,
      images: cloneImages(generalCategoryImages),
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
                // recommended: CategoryShowcase should use img loading="lazy" and decoding="async"
                // and responsive sizes. We pass images with width/height so it can choose to use next/image.
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
