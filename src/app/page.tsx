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
// import VideoLightbox from "./components/VideoLightbox";
import HeroVideo from "./components/video/HeroVideo";
import GridBackground from "./components/GridBackground";
import Hyperspace from "./components/Hyperspace";
import GlobeHero from "./components/Globe";
import { WeExist } from "./components/WeExist";

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

const VideoLightbox = dynamic(() => import("./components/VideoLightbox"));

export default function HomePage() {
  return (
    <main className=" ">
      <FloatingNav />
      <div className="h-screen flex flex-col items-stretch">
        <HeroVideo />
        <Starfield />
      </div>
      <div>
        <VideoLightbox
          videoSrc="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/show.mp4"
          thumbnailSrc={astro.src}
        />
      </div>

      <WeExist />

      <ServicesTabsContainer />

      <GlobeHero />

      <CaseStudies />
      <div className="w-full h-[500px]  flex justify-center items-center mix-blend-hard-light">
        <h1 className=" absolute z-10 text-4xl  border-fuchsia-100/50 border-4 rounded-md p-4 font-bold bg-clip-text bg-white text-transparent  text-center mt-12 mb-10">
          Contact Us
        </h1>
        <div className="planet relative w-48 h-48 bg-fuchsia-100 rounded-full  shadow-[inset_0_0_14px_0_rgba(255,255,255,1),inset_-40px_-30px_60px_0_rgba(128,0,128,1),inset_-40px_-30px_70px_0_rgba(75,0,130,1),inset_-40px_-30px_100px_0_rgba(147,112,219,1),inset_-40px_-30px_140px_0_rgba(230,230,250,1),0_0_20px_0_rgba(255,255,255,1),10px_10px_20px_10px_rgba(128,0,128,1),-10px_-10px_20px_0_rgba(147,112,219,1)]">
          <div className="star one absolute top-1/2 animate-pulse -left-36 transform-origin-[calc(200px+50%)] shadow-[0_0_20px_5px_rgba(255,255,255,1),0_0_30px_10px_rgba(147,112,219,1)] -rotate-30 w-2.5 h-2.5 bg-white rounded-full"></div>
          <div className="star two absolute -top-24 left-96 w-2.5 animate-pulse duration-1000 h-2.5 bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1),0_0_30px_10px_rgba(147,112,219,1)] rounded-full"></div>
          <div className="star three absolute -top-24 -left-72 w-2.5 animate-pulse duration-[2000ms] h-2.5 bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1),0_0_30px_10px_rgba(147,112,219,1)] rounded-full"></div>
          <div className="star four absolute top-72 left-[450px] w-2.5 animate-pulse duration-[4000ms] h-2.5 bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1),0_0_30px_10px_rgba(147,112,219,1)] rounded-full"></div>
        </div>
      </div>
      {/* <StickyScroll content={content} /> */}
      <div className="w-full flex">{/* <LetsTalk /> */}</div>
    </main>
  );
}
