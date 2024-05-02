"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import image1 from "@public/SCR-20240320-ladv.jpeg";
import image2 from "@public/SCR-20240320-lajp.jpeg";
import image3 from "@public/SCR-20240320-kzoe.jpeg";
import image4 from "@public/SCR-20240320-lazb.jpeg";
import { Vortex } from "./Vortex";
import Meteors from "./Meteors";

export function CaseStudies() {
  return (
    <div className="h-[800px] py-20 my-40 px-40 relative text-center">
      <h3 className="text-7xl font-bold bg-gradient-to-tr from-purple-950 to-purple-100 to-70% bg-clip-text text-transparent ">
        Case Studies
      </h3>
      <Meteors />
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Case Study 1: Brand A</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We worked with Brand to accelerate their initiative to spread
        environmental awareness to HBCU students.{" "}
        <span className="underline">Read More</span>
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Case Study 2: Brand X</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Brand X needed a crew for their latest campaign, but it {`wasn't`} just
        any shoot. They needed engaging content that would outperform their last
        projects, and we delivered. <span className="underline">Read More</span>
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Case Study 3: Brand Y</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Brand Y needed a crew for their latest campaign, but it {`wasn't`} just
        any shoot. They needed engaging content that would outperform their last
        projects, and we delivered. <span className="underline">Read More</span>
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Case Study 4: Brand Z</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Brand Z needed a crew for their latest campaign, but it {`wasn't`} just
        any shoot. They needed engaging content that would outperform their last
        projects, and we delivered. <span className="underline">Read More</span>
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: image1.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: image2.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: image3.src,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: image4.src,
  },
];

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-5xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative")}>
          <div className="absolute w-full h-full -inset-[1px] bg-gradient-to-br from-purple-300/50 to-main rounded-[11px] -z-50" />

          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40  rounded-xl h-full w-full"
                  : " rounded-xl h-full w-full",
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
            <div className="absolute inset-0 h-full w-full bg-main opacity-50 z-10 bg-[linear-gradient(to_right,#A855F7_1px,transparent_1px),linear-gradient(to_bottom,#A855F7_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle_at_100%_0%,transparent_60%,#000_100%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/70 to-transparent to-80% z-10"></div>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 backdrop-blur-lg",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      ></motion.div>
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      fill
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200 opacity-95",
        loaded ? "blur-none" : "blur-md",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
