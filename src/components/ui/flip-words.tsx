
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setTimeout(() => {
      const nextWordIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextWordIndex]);
    }, duration);

    return () => clearTimeout(interval);
  }, [currentWord, duration, words]);

  return (
    <div className="inline-flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white leading-snug tracking-tight">
        Clicking Today, Creating{' '}
        <div className="inline-block relative h-16 md:h-20 w-72 md:w-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="z-10 inline-block relative text-left text-accent px-2"
            >
              {currentWord.split("").map((letter, index) => (
                <motion.span
                  key={currentWord + index}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </h1>
      <p className="text-sm md:text-base font-normal text-neutral-500 dark:text-neutral-400 mt-4 max-w-lg mx-auto">
        Unveil the beauty of science through your lens. Join a global community celebrating discovery.
      </p>
    </div>
  );
};

    