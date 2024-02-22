"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils"; 
 
const words = `You need more than a creative agency. Our experience makes us uniquely qualified at crafting engaging, innovative content. Our clients agree:`;
 
export function TextGeneration() {
  return (
  <div className="max-w-[800px] mx-auto my-20 text-center"><TextGenerateEffect words={words} /></div>);
}

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
 
  return (
    <div className={cn("font-bold relative", className)}>
      <div className="mt-4">
        <div className=" text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};