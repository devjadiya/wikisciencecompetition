
'use client';

import { useLanguage } from '@/context/language-context';
import AnimatedCounter from '@/components/ui/animated-counter';
import { Upload, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouSection() {
    const { t } = useLanguage();

    return (
        <section className="bg-primary/5 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">{t.home.thankyou.title}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                        {t.home.thankyou.subtitle}
                    </p>
                </motion.div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <AnimatedCounter from={0} to={3664} />
                        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Upload className="h-4 w-4" />
                            <span>{t.home.thankyou.uploads}</span>
                        </div>
                    </div>
                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <AnimatedCounter from={0} to={474} />
                        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{t.home.thankyou.contributors}</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="mt-16 text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border">
                         <div className="mb-8">
                            <Image 
                                src="https://blush-fashionable-swift-557.mypinata.cloud/ipfs/bafybeihht2ujcnvtm5ye5zk2o6p5ql4mz3vrx5i4apniav66b2hm662niy" 
                                alt="Certificate Preview"
                                width={842}
                                height={595}
                                className="object-contain rounded-md shadow-md mx-auto"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-4">{t.home.thankyou.certificateTitle}</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                           {t.home.thankyou.certificateMessage}
                        </p>
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                            <Link href="/certificate">
                                <Award className="mr-2 h-5 w-5" />
                                {t.home.thankyou.certificateCta}
                            </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground mt-6 italic">
                            - {t.home.thankyou.signature}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

    