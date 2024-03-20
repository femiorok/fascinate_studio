"use client";

import React, { useState, useEffect, useRef, use } from "react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const texts = ["Documentary", "Content", "Production"];

const videos = {
  Documentary:
    "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4",
  Content:
    "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/planets.mp4",
  Production:
    "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/show.mp4",
};

const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const TextLoop = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[350px] flex flex-col items-center text-white font-bold text-center justify-center gap-4 text-6xl">
      <div>
        <p>Make Your</p>
      </div>
      <div
        className="" // Use flexbox for centering instead of absolute positioning
        key={index}
      >
        {texts[index]}
      </div>
      <div className="relative flex justify-center">
        <p className="drop-shadow-glow">Fascinating</p>
        {/* <p className='drop-shadow-glow absolute opacity-30'>Fascinating</p> */}
        <div className="absolute bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute animate-border-width bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
        <div className="absolute animate-border-width  bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/4 blur-sm" />
        <div className="absolute  bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/4" />
      </div>
      <div className="relative w-[600px] h-[340px] opacity-75">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        {/* <div className="h-full absolute top-0 inset-0 rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
          {Object.entries(videos).map(([text, url], videoIndex) => (
            <video
              key={text}
              src={url}
              preload="auto"
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 p-[2px] border rounded-lg border-transparent right-0 bottom-0 w-full h-full object-cover" // Ensure video covers the area properly
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export const Example = () => {
  return <TextLoop />;
};
