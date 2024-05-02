"use client";

import { cn } from "@/lib/utils";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import astro from "@public/astro2.jpeg";
import Image from "next/image";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: "to top" | "to left";
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to top" : "to left",
            duration: randomNumberBetween(1300, 2000),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="">
      <div className="absolute top-0 left-0 z-20 h-full w-full">
        {lines.map((line) => (
          <span
            key={line.id}
            onAnimationEnd={() => removeLine(line.id)}
            style={
              {
                "--direction": line.direction,
                "--size": line.size,
                "--animation-duration": `${line.duration}ms`,
              } as CSSProperties
            }
            className={cn(
              "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
              line.direction === "to left" &&
                `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
              line.direction === "to top" &&
                `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`,
            )}
          />
        ))}
      </div>
      <svg
        className={cn(
          "absolute left-0 top-0 h-full w-full",
          "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
          inView && "[&_path]:animate-sketch-lines",
        )}
        width="100%"
        viewBox="0 0 1499 778"
        fill="none"
      >
        <path pathLength="1" d="M1500 72L220 72"></path>
        <path pathLength="1" d="M1500 128L220 128"></path>
        <path pathLength="1" d="M1500 189L220 189"></path>
        <path pathLength="1" d="M220 777L220 1"></path>
        <path pathLength="1" d="M538 777L538 128"></path>
      </svg>

      <Image
        src={astro.src}
        alt="Features Illustration"
        quality={100}
        className="-z-10 rounded-3xl max-h-[564px] object-cover border border-violet-300/50"
        width={1000}
        height={564}
      />
    </div>
  );
};
