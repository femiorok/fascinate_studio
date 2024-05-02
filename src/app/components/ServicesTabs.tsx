"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import verge from "@public/verge.webp";
import secondhome from "@public/secondhome.webp";
import intuit from "@public/intuit.webp";
import chevy from "@public/chevy.webp";
import planets from "@public/planets.webp";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const ServicesTabs = () => {
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabsArray];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  const TabContent = ({ image }: { image: string }) => {
    return (
      <Image src={image} alt="dummy image" fill className="object-cover " />
    );
  };

  const tabsArray = [
    {
      title: "Commercial",
      value: "commercial",
      content: (
        <div className="relative justify-center overflow-hidden text-center bg-gradient-to-br from-main from-30% via-violet-950 to-main to-70% border border-violet-950 rounded-md  py-6">
          <p className="text-3xl font-extrabold text-white z-10">
            Commercial content aligned with your brand identity{" "}
          </p>
          <div className="aspect-video h-[500px] mx-auto z-0 relative">
            <TabContent image={chevy.src} />
          </div>
        </div>
      ),
    },
    {
      title: "Television",
      value: "television",
      content: (
        <div className="relative justify-center overflow-hidden text-center bg-gradient-to-br from-main from-30% via-violet-950 to-main to-70% border border-violet-950 rounded-md  p-4">
          <p className="text-3xl font-extrabold text-white z-10">
            Broadcast-quality footage ready for any network{" "}
          </p>
          <div className="aspect-video h-[500px] mx-auto z-0 relative">
            <TabContent image={verge.src} />
          </div>
        </div>
      ),
    },
    {
      title: "Educational",
      value: "educational",
      content: (
        <div className="relative justify-center overflow-hidden text-center bg-gradient-to-br from-main from-30% via-violet-950 to-main to-70% border border-violet-950 rounded-md  p-4">
          <p className="text-3xl font-extrabold text-white z-10 ">
            Impactful content for students and learners
          </p>
          <div className="aspect-video h-[500px] mx-auto z-0 relative">
            <TabContent image={secondhome.src} />
          </div>
        </div>
      ),
    },
    {
      title: "Documentary",
      value: "documentary",
      content: (
        <div className="relative justify-center overflow-hidden text-center bg-gradient-to-br from-main from-30% via-violet-950 to-main to-70% border border-violet-950 rounded-md  p-4">
          <p className="text-3xl font-extrabold text-white z-10">
            Narrative-driven storytelling
          </p>
          <div className="aspect-video h-[500px] mx-auto z-0 relative">
            <TabContent image={intuit.src} />
          </div>
        </div>
      ),
    },
    {
      title: "3D VFX",
      value: "3d",
      content: (
        <div className="relative justify-center overflow-hidden text-center bg-gradient-to-br from-main from-30% via-violet-950 to-main to-70% border border-violet-950 rounded-md  p-4">
          <p className="text-3xl font-extrabold text-white z-10">
            Dynamic environments build with Unreal Engine 4
          </p>
          <div className="aspect-video h-[500px] mx-auto z-0 relative">
            <TabContent image={planets.src} />
          </div>
        </div>
      ),
    },
  ];

  const [active, setActive] = useState<Tab>(tabsArray[0]);
  const [tabs, setTabs] = useState<Tab[]>(tabsArray);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center gap-3 justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
        )}
      >
        {tabsArray.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full bg-gradient-to-b from-purple-700 to-purple-950",
              active.value === tab.value ? "text-purple-100" : "text-black",
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.1, duration: 0.45 }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-b from-purple-400 to-purple-700 rounded-full ",
                )}
              />
            )}

            <span className="relative block  ">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32")}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -75 : idx * -45,
            zIndex: -idx,
            opacity: idx < 4 ? 1 - idx * 0.2 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export function BadgeRotateBorder() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-px">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl">
        Badge
      </span>
    </div>
  );
}
