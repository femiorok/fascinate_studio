"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "@/utils/cn";
import gif1 from "@public/homepage_gif1.webp";
import gif2 from "@public/homepage_gif2.webp";
import gif3 from "@public/homepage_gif3.webp";
import gif4 from "@public/homepage_gif4.webp";
import still1 from "@public/futureman.jpeg";
import purecycle from "@public/purecycle.jpeg";

import { ParallaxImage } from "./ParallaxImage";

export const Parallax = () => {
  const imagePaths = [gif3, gif2, gif1, gif4];

  return (
    <div className="relative h-[900px] overflow-hidden" id="parallax">
      {imagePaths.map((path, index) => {
        const speed = [20, 40, 35, 30];
        const randomValues: [number, number][] = [
          [10, 20],
          [30, 5],
          [60, 33],
          [40, 65],
        ];

        return (
          <ParallaxImage
            key={index}
            index={index}
            image={path.src}
            random={randomValues[index]}
            speed={speed[index]}
          />
        );
      })}
    </div>
  );
};
