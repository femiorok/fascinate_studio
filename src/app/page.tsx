import Image from "next/image";
import Starfield from "./components/Starfield";
import { Suspense } from "react";
import VideoComponent from "./components/Video";
import { Example, } from "./components/HeroText";
import { FloatingNav } from "./components/FloatingNav";
import { SpotlightContainer } from "./components/SpotlightContainer";
import { Grid } from "./components/Grid";
import { Marquee } from "./components/Marquee";
import { TextGeneration } from "./components/Typewriter";
import { StickyScroll } from "./components/StickyScroll";
import one from "@public/C1275.00_00_12_27.Still057.jpg"
import two from "@public/SCR-20240222-dqzk.jpeg"
import three from "@public/SCR-20240222-drcs.jpeg"
import { CaseStudies } from "./components/CaseStudies";
import { Spotlight } from "./components/Spotlight";
import SmallParticles from "./components/SmallParticles";
import { Card } from "./components/Card";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    imageUrl: one.src
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        imageUrl: two.src

    },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageUrl: three.src

    },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageUrl: one.src
    },
];

export default function HomePage() {
  return (
    <main className="bg-black" >
      <div className="min-h-screen flex items-center justify-center">
      <FloatingNav />
      <Starfield />
      <div className="z-50">
          <Example />
          </div>
          </div>
          <div className="w-full py-8 text-center  text-white ">
            <h2 className="text-3xl font-bold my-4 tracking-widest">Elevate your visuals from functional to fascinating</h2>
          <Grid />
          </div>
          <div className="relative ">
      <SmallParticles
        className="absolute inset-0 animate-fade-in"
        quantity={100}
      />
      <TextGeneration />
      <Marquee />
          </div>
              <div className="p-10 relative">
                <div className="absolute [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] " ></div>
      <StickyScroll content={content} />
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
  <button className="relative mx-auto my-20 inline-flex h-40 shadow-[0_0_2px_#E2CBFF,inset_0_0_2px_#E2CBFF,0_0_5px_#393BB2,0_0_15px_#393BB2,0_0_30px_#393BB2]
 w-96 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
            <Input id="name" value="Pedro Duarte" className="col-span-3 text-black" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3 text-black" />
          </div>
        </div>
        <DialogFooter>
          <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
  Send
</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


