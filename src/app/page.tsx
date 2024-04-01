"use client";

import Image from "next/image";
import Starfield from "./components/Starfield";
import { Suspense } from "react";
import VideoComponent from "./components/Video";
import { Example } from "./components/HeroText";
import { FloatingNav } from "./components/FloatingNav";
import { SpotlightContainer } from "./components/SpotlightContainer";
import { Grid } from "./components/Grid";
import { Marquee } from "./components/Marquee";
import { CaseStudiesText, TextGeneration } from "./components/Typewriter";
import { StickyScroll } from "./components/StickyScroll";
import one from "@public/C1275.00_00_12_27.Still057.jpg";
import two from "@public/SCR-20240222-dqzk.jpeg";
import three from "@public/SCR-20240222-drcs.jpeg";
import { CaseStudies } from "./components/CaseStudies";
import { Spotlight } from "./components/Spotlight";
import SmallParticles from "./components/SmallParticles";
import { Card } from "./components/Card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ElevateVisualsSection } from "@/components/elevate-visuals-section";
import { ServicesTabsContainer } from "./components/ServicesTabsContainer";
import { Parallax } from "./components/ParallaxImages/Parallax";
import { BackgroundGradient } from "./components/BackgroundGradient";
import Illustration from "@public/glow-bottom.svg";
import LazyVideo from "./components/LazyVideo";
import gif3 from "@public/homepage_gif3.webp";
import mgm from "@public/mgm-screengrab.jpeg";
import astro from "@public/astro2.jpeg";
import videobg from "@public/div.hero-background.png";
// import { MainVideo } from "./components/MainVideo";
import dynamic from "next/dynamic";
import { SparklesCore } from "./components/sparkles";
import clsx from "clsx";
import { StarsIllustration } from "./components/StarsStatic";
import ModalVideo01 from "./components/ModalVideo";
import Link from "next/link";
import { BgGradientTW } from "./components/BgGradientTW";
import ModalVideo from "./components/ModalVideo";
import { BlurIn } from "./components/BlurIn";

const MainVideo = dynamic(() => import("./components/MainVideo"), {
  ssr: false,
});

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    imageUrl: one.src,
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    imageUrl: two.src,
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageUrl: three.src,
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageUrl: gif3.src,
  },
];

export default function HomePage() {
  return (
    <main className="">
      <FloatingNav />
      <div className="relative">
        <div className="w-full h-full py-1">
          <video
            src="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/show.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            className="h-[70vh] w-full rounded-b-3xl object-cover"
          ></video>
        </div>
        <div className="left-0 mx-auto h-[1px] ease-in-out -mt-[3px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#6A62B7] to-[rgba(17,17,17,0)] transition-all duration-[2000ms]" />
        <div className="left-0 mx-auto h-[10px] ease-in-out -mt-[7px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#1900ff] to-[rgba(17,17,17,0)] blur-lg transition-all duration-[2000ms]" />
      </div>
      <div className="relative min-h-full">
        <Starfield />
      </div>
      <h1 className="flex ml-[10%] h-[1.1em] z-50 mt-[20px] gap-4 items-center text-nowrap text-[50px] flex-1 font-medium text-white">
        Let your next
        <span className="relative h-[1.1em] mt-1 w-[1000px] overflow-hidden">
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
            production
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:2.8s]">
            documentary
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:5.4s]">
            story
          </span>
        </span>
      </h1>
      <section className=" text-white max-w-6xl mr-auto ml-80 relative gap-36 items-center flex mb-40">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
        <h1 className="text-[160px] font-bold leading-tight mt-1 mb-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-50 from-60% to-slate-800 to-90%">
          Fascinate
        </h1>
        <button className="relative inline-flex h-20 w-60 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer text-3xl items-center justify-center rounded-full bg-gray-950 px-8 py-4 font-medium text-gray-50 backdrop-blur-3xl">
            Contact Us
          </span>
        </button>
      </section>
      <ModalVideo />
      <div className="mt-60">
        <Marquee />
      </div>
      <ServicesTabsContainer />
      <div
        className={clsx(
          "mask-radial-faded pointer-events-none relative h-[60rem] overflow-hidden",
          // "[--color:#a78bfa] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.8]",
          "[--color:#8B5CF6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-neutral-950",
        )}
        id="_mask"
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.8}
          particleDensity={30}
          className="w-full h-1/2"
          particleColor="#FFFFFF"
        />
      </div>
      <CaseStudiesText />
      <StickyScroll content={content} />
      <div className="w-full flex">{/* <LetsTalk /> */}</div>
    </main>
  );
}
