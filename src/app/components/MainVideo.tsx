"use client";

import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import astro from "@public/astro2.jpeg";
import { SparklesCore } from "./sparkles";

export default function MainVideo() {
  return (
    <div
      className="w-full h-full object-cover relative mt-32 top-[58%] rounded-2xl shadow-2xl blur-0 *:!w-full *:!h-full"
      id="video"
    >
      <ReactPlayer
        url="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4"
        style={{ width: "100%", height: "100%" }}
        light={
          <Image
            src={astro.src}
            alt="Features Illustration"
            className="object-cover right-0 rounded-[3rem] rounded-tl-[3rem] z-0"
            fill
          />
        }
      />
      {/* <span className="absolute inset-0.5 z-20 grid place-items-center text-white hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 !hover:text-white z-20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M7.703 1.973C6.18.986 4.167 2.08 4.167 3.897v12.206c0 1.816 2.012 2.91 3.536 1.924l9.432-6.103a2.292 2.292 0 0 0 0-3.848L7.703 1.973Z"
          />
        </svg>
      </span> */}
    </div>
  );
}
