
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
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/ju-jke
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -15,
          filter: "blur(4px)",
        }}
        className={cn(
          "z-10 inline-block relative text-left",
          className
        )}
        key={currentWord}
      >
        <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-2 pb-1 dark:from-indigo-500 dark:to-purple-500 text-black dark:text-white">
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
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
