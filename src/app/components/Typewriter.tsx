"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const words = `You need more than a creative agency.`;
const words2 = `Our experience makes us uniquely qualified at crafting engaging, innovative content. Our clients agree:`;

export function TextGeneration() {
  return (
    <div className="max-w-[800px] mx-auto my-20 text-4xl text-center">
      <TextGenerateEffect words={words} />
    </div>
  );
}

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      spanRefs.current.forEach((spanRef, index) => {
        if (spanRef) {
          setTimeout(() => {
            spanRef.style.opacity = "1";
          }, 200 * index);
        }
      });
    }
  }, [inView]);

  const renderWords = () => {
    return (
      <div ref={ref}>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              ref={(el) => (spanRefs.current[idx] = el)}
              className="text-white opacity-0 transition-opacity duration-500"
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold relative", className)}>
      <div className="mt-4">
        <div className="text-white leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
