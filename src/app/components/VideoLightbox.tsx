"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientLines from "./GradientLines";

const VideoLightbox = ({
  thumbnailSrc,
  videoSrc,
}: {
  thumbnailSrc: string;
  videoSrc: string;
}) => {
  return (
    <>
      <section className="h-screen w-screen relative flex items-center mx-auto">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-main to-70% z-[100]"></div> */}
        <div className="relative w-[1200px] aspect-video mx-auto flex items-center">
          <Dialog>
            <DialogTrigger
              aria-label="Watch the video"
              asChild
              className="z-50"
            >
              <Button className="relative m-auto animate-fade-in hover:text-purple-400 flex justify-center items-center w-24 h-24 overflow-hidden rounded-full border border-gray-800 p-[1px]">
                <span className="absolute w-full h-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-[90%] w-[90%] rounded-full items-center justify-center bg-gray-950/80 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                  <span className="absolute h-12 w-12 z-10 grid place-items-center text-fuchsia-100 hover:text-purple-400 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M7.703 1.973C6.18.986 4.167 2.08 4.167 3.897v12.206c0 1.816 2.012 2.91 3.536 1.924l9.432-6.103a2.292 2.292 0 0 0 0-3.848L7.703 1.973Z"
                      />
                    </svg>
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center">
              <video
                src={videoSrc}
                controls
                autoPlay
                className="max-w-screen-lg"
              ></video>
            </DialogContent>
          </Dialog>
          <div className="absolute -inset-[1px] rounded-sm bg-fuchsia-400 after:absolute after:inset-0 after:bg-hero-glow after:blur-[120px] after:opacity-50"></div>
          <div className="absolute -inset-[2px] rounded-sm bg-fuchsia-200 blur-sm opacity-90 animate-pulse"></div>
          <div className="absolute inset-0 z-20 rounded-sm shadow-[inset_-12px_-8px_40px_#fae8ff] blur-[1px] opacity-35"></div>
          <div className="absolute inset-0 z-20 rounded-sm shadow-[inset_0px_0px_10px_5px_#fae8ff] opacity-45"></div>

          <div className="absolute -inset-1 bg-white z-10 rounded-sm blur-[10px] animate-pulse opacity-75"></div>
          <div className="absolute -inset-5 bg-gradient-to-br from-indigo-700 via-fuchsia-700 to-purple-900 rounded-sm blur-xl animate-pulse opacity-80"></div>
          <Image
            src={thumbnailSrc}
            fill
            alt="Thumbnail"
            className=" rounded-sm z-10"
          />
        </div>
      </section>
    </>
  );
};

export default VideoLightbox;

const Play = () => {
  return (
    <Button className="relative m-auto animate-fade-in hover:text-purple-400 flex justify-center items-center w-16 h-16 overflow-hidden rounded-full border border-gray-800 p-[1px] backdrop-blur-3xl z-[100]">
      <span className="absolute w-full h-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-[90%] w-[90%] rounded-full items-center justify-center bg-gray-950 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        <span className="absolute h-5 w-5 z-10 grid place-items-center text-white hover:text-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7.703 1.973C6.18.986 4.167 2.08 4.167 3.897v12.206c0 1.816 2.012 2.91 3.536 1.924l9.432-6.103a2.292 2.292 0 0 0 0-3.848L7.703 1.973Z"
            />
          </svg>
        </span>
      </div>
    </Button>
  );
};
