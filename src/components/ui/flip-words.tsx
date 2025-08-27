
"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
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
  const [maxWordWidth, setMaxWordWidth] = useState(0);

  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Measure the width of each word and find the maximum
    const widths = words.map((word, index) => {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.fontSize = "inherit";
      span.style.fontWeight = "inherit";
      span.style.fontFamily = "inherit";
      span.innerText = word;
      document.body.appendChild(span);
      const width = span.offsetWidth;
      document.body.removeChild(span);
      return width;
    });
    setMaxWordWidth(Math.max(...widths));
  }, [words]);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timeoutId = setTimeout(startAnimation, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div
      style={{
        width: maxWordWidth ? `${maxWordWidth}px` : "auto",
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
      }}
      className="h-auto" // Ensure container has height
    >
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className={cn(
              "relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-2 pb-1 dark:from-indigo-500 dark:to-purple-500 text-black dark:text-white",
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
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
