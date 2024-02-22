'use client'

import React, { useState, useEffect, useRef, use } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const texts = ["Documentary", "Content", "Production"];
const variants = {
  enter: (direction: any) => ({
    y: -40,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: any) => ({
    zIndex: 0,
    opacity: 0,
  }),
};
const videos = {
  Documentary: "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4",
  Content: "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/planets.mp4",
  Production: "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/show.mp4",
};

const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const TextLoop = () => {
const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3400); // 3 * 1000

    return () => clearTimeout(timeoutId);
  }, [index]);

return (
  <div className="w-[350px] flex flex-col items-center text-white font-bold text-center justify-center gap-4 text-6xl">
    <div>
      <p>Make Your</p>
    </div>
    <AnimatePresence mode='wait'>
      <motion.div
        className="" // Use flexbox for centering instead of absolute positioning
        variants={variants}
        key={index}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {texts[index]}
      </motion.div>
    </AnimatePresence>
    <div className='relative flex justify-center'>
      <p className='drop-shadow-glow'>Fascinating</p>
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
      <div className="h-full absolute top-0 inset-0 rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <AnimatePresence mode="wait">
          {Object.entries(videos).map(([text, url], videoIndex) => (
            <motion.video
              key={text}
              src={url}
              preload='auto'
              autoPlay
              muted
              loop
              initial="hidden"
              animate={index === videoIndex ? "visible" : "hidden"}
              variants={videoVariants}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 p-[2px] border rounded-lg border-transparent right-0 bottom-0 w-full h-full object-cover" // Ensure video covers the area properly
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  </div>
);

};


export const Example = () => {
  return       <TextLoop />;
};