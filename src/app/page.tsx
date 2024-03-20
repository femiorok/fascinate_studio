import Image from "next/image";
import Starfield from "./components/Starfield";
import { Suspense } from "react";
import VideoComponent from "./components/Video";
import { Example } from "./components/HeroText";
import { FloatingNav } from "./components/FloatingNav";
import { SpotlightContainer } from "./components/SpotlightContainer";
import { Grid } from "./components/Grid";
import { Marquee } from "./components/Marquee";
import { TextGeneration } from "./components/Typewriter";
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
    imageUrl: one.src,
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
      <h1 className="flex ml-[200px] h-[1.1em] z-50 mt-[20px] gap-4 items-center text-nowrap w-[1800px] text-[50px] flex-1 font-medium text-white">
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
        {/* <p className="self-end mr-4"> Fascinate</p> */}
      </h1>
      <section className=" text-white max-w-6xl mr-auto ml-80 relative gap-36 items-center flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-[160px] font-bold leading-tight mt-1 mb-8">
          Fascinate
        </h1>
        <button className="relative inline-flex h-20 w-60 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer text-3xl items-center justify-center rounded-full bg-gray-950 px-8 py-4 font-medium text-gray-50 backdrop-blur-3xl">
            Click Me
          </span>
        </button>
      </section>
      <Parallax />
      <div className="relative ">
        <SmallParticles
          className="absolute inset-0 animate-fade-in"
          quantity={100}
        />

        <TextGeneration />
      </div>
      <div className="h-[800px] max-w-[1600px] bg-[#63e]/5 border border-white/20 backdrop-blur-lg ml-[25%] mr-[12%]  rounded-lg relative shadow-[inset_-1px_5px_40px_0px_rgba(53,24,134,0.5)]">
        <video
          src={
            "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4"
          }
          loop
          autoPlay
          muted
          playsInline
          className="w-[1000px] absolute right-1/2 top-28"
        />
        <div className="flex ml-auto justify-end max-w-[400px] text-[65px] h-full mr-24 items-center font-bold text-center animate-text-gradient duration-[3000ms] bg-gradient-to-l from-violet-300 via-violet-500 to-violet-200 bg-[200%_auto] bg-clip-text text-transparent">
          The security first platform
        </div>
        {/* <div className="bg-indigo-500/50 h-[5500px] w-full absolute top-1/3 -right-1/3 rounded-full blur-2xl opacity-25"></div> */}
        <div className="absolute opacity-10 inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "></div>
      </div>
      <ServicesTabsContainer />
      {/* <Marquee /> */}

      <div className="p-10 relative">
        <div className="absolute [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        {/* <StickyScroll content={content} /> */}
      </div>
      <CaseStudies />
      <div className="w-full flex">
        <LetsTalk />
      </div>
    </main>
  );
}

function LetsTalk() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="relative mx-auto my-20 inline-flex h-40 shadow-[0_0_2px_#E2CBFF,inset_0_0_2px_#E2CBFF,0_0_5px_#393BB2,0_0_15px_#393BB2,0_0_30px_#393BB2]
 w-96 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center text-6xl rounded-full bg-black px-3 py-1 font-medium text-white backdrop-blur-3xl">
            {`Let's talk`}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border border-white/[0.2]">
        <DialogHeader>
          <DialogTitle>Contact us</DialogTitle>
          <DialogDescription>
            Coming soon: ability to edit and choose fields
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value="Pedro Duarte"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value="@peduarte"
              className="col-span-3 text-black"
            />
          </div>
        </div>
        <DialogFooter>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Send
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
