
'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface AnimatedCounterProps {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

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
      onComplete() {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      },
    });

    return () => controls.stop();
  }, [from, to, isInView, isClient]);

  return (
    <>
      {isClient && showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.1}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}
      <motion.p
        ref={nodeRef}
        className="text-4xl md:text-6xl font-bold font-headline text-primary drop-shadow-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {from.toLocaleString()}
      </motion.p>
    </>
  );
}
