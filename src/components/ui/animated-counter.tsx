
'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isClient) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to, isInView, isClient]);

  return (
    <motion.p
        ref={nodeRef}
        className="text-4xl md:text-6xl font-bold font-headline text-primary drop-shadow-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {from.toLocaleString()}
      </motion.p>
  );
}
