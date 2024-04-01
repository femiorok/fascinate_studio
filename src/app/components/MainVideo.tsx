"use client";

import Image from "next/image";
import React, { ReactNode, useState } from "react";
import ReactPlayer from "react-player";
import astro from "@public/astro2.jpeg";
import { SparklesCore } from "./sparkles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/utils/cn";

export default function MainVideo() {
  return (
    <div
      className="rounded-3xl animate-fade-in overflow-hidden shadow-2xl blur-0 w-[1000px] h-[562px] mx-auto col-auto row-auto "
      id="video"
    >
      <VideoModal open={open} setOpen={setOpen}>
        <ReactPlayer
          url="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4"
          width="100%"
          height="100%"
        />
      </VideoModal>
    </div>
  );
}
