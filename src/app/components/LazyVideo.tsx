"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface VideoComponentProps {
  videoSrc: string;
  webpGifSrc: string;
  className?: string;
}

const LazyVideo: React.FC<VideoComponentProps> = ({
  videoSrc,
  className,
  webpGifSrc,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const webpGifRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
      video?.play();
    };

    video?.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      video?.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      {!isVideoLoaded && (
        <Image
          ref={webpGifRef}
          src={webpGifSrc}
          alt="Gif"
          layout="fill"
          objectFit="cover"
          className={cn("w-full h-full object-cover", {
            "opacity-100": !isVideoLoaded,
            "opacity-0": isVideoLoaded,
          })}
        />
      )}
      <video
        ref={videoRef}
        className={cn("w-full h-full object-cover", {
          "opacity-0": !isVideoLoaded,
          "opacity-100": isVideoLoaded,
        })}
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default LazyVideo;
