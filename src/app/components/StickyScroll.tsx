"use client";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useRef } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  //   background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);

  return (
    <motion.div
      className="h-[800px] overflow-y-auto flex justify-center gap-8 relative space-x-10 border border-zinc-500/50 rounded-md bg-gradient-to-tl from-black via-zinc-600/20 to-black scroll-snap-type: y mandatory"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 scroll-snap-align: start">
        <div className="max-w-2xl relative">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-28 scroll-ps-9">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-96" />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={content[activeCard % content.length].imageUrl} // Change key to image URL for AnimatePresence
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
          className="hidden lg:block h-80 w-96 rounded-md sticky top-16 overflow-hidden"
        >
          <Image
            src={content[activeCard % content.length].imageUrl}
            alt={content[activeCard % content.length].title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
