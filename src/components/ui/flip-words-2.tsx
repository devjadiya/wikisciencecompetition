
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
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className={cn(
          "z-10 inline-block text-left text-accent",
          className
        )}
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
  );
};

    