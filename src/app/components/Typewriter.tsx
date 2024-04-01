"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { SparklesCore } from "./sparkles";

const words = `You need more than a creative agency.`;
const words2 = `Case Studies`;

export function TextGeneration() {
  return (
    <div className="mx-auto max-w-[1200px] z-50 text-4xl text-center relative">
      <TextGenerateEffect words={words} />
      {/* <div className="absolute w-full h-[500px] z-50">
      </div> */}
    </div>
  );
}

export function CaseStudiesText() {
  return (
    <div className="mx-auto max-w-[1200px] z-50 text-4xl text-center relative">
      <TextGenerateEffect words={words2} />
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
      <div
        ref={ref}
        className={"font-bold relative text-white text-6xl tracking-wide"}
      >
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
    <>
      {renderWords()}
      <div className="w-full h-16 mx-auto relative flex flex-col items-center justify-center overflow-hidden rounded-md">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.8}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,black)]"></div>
      </div>
    </>
  );
};

export function SparklesPreview() {
  return (
    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      Aceternity
    </h1>
  );
}
