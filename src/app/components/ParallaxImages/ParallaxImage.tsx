"use client";

import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

export function ParallaxImage({
  image,
  speed,
  random,
  index,
}: {
  image: string;
  speed: number;
  random: [number, number];
  index: number;
}) {
  const { ref } = useParallax<HTMLDivElement>({ speed });
  const [randomX, randomY] = random;
  const heights = [
    "h-[500px] z-10",
    "h-[250px]",
    "h-[350px]",
    "h-[350px] z-20",
  ];

  return (
    <div
      ref={ref}
      className={`aspect-video absolute ${heights[index]}`}
      style={{
        top: `${randomY}%`,
        left: `${randomX}%`,
      }}
    >
      <Image src={image} alt="Placeholder" fill />
    </div>
  );
}
