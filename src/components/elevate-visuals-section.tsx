"use client";

import { PlaceholderImage } from "@/app/components/PlaceholderImage";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/E01jnheSV6a
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import video1 from "@public/video1.gif";
import video2 from "@public/video2.gif";
import video3 from "@public/video3.gif";
import video4 from "@public/video4.gif";
import Image from "next/image";

export function ElevateVisualsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
    });
  }, [api]);

  return (
    <section className="bg-black text-white p-8 max-w-[1600px] mx-auto relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-5xl font-bold leading-tight mt-4 mb-8">
        Fascination is our north star. And we can guide you there.
      </h1>
      <Carousel className="bg-black" setApi={setApi}>
        <CarouselContent>
          {[video1.src, video2.src, video3.src, video4.src].map(
            (video, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Image src={video} width={500} height={500} alt="gif"></Image>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className="bg-black" />
        <CarouselNext className="bg-black" />
      </Carousel>
    </section>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
