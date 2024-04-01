"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { TextGeneration } from "./Typewriter";
import videobg from "@public/div.hero-background.png";
import astro from "@public/astro2.jpeg";
import ReactPlayer from "react-player";

export default function ModalVideo() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="shrink-0 relative">
      {/* Video thumbnail */}
      <div className="flex justify-center items-center">
        <div className="relative w-[1400px] py-20 aspect-video">
          <TextGeneration />
          <div
            id="mask"
            className="absolute top-[10%] inset-0 h-full w-full z-40 bg-[radial-gradient(farthest-side,_var(--tw-gradient-stops))] from-transparent from-60% to-neutral-950/90 to-85%"
          ></div>
          <Image
            src={videobg}
            alt=""
            className="-z-10 -inset-20 object-cover"
            quality={100}
            fill
          />
          <div className="rounded-3xl mt-[20%] relative w-[1000px] p-px overflow-hidden h-[564px] mx-auto">
            <div className="absolute inset-0 w-[1000px] h-full bg-gradient-to-r to-purple-400 from-purple-400 via-purple-200 "></div>
            <div className="relative w-full h-full">
              <Image
                src={astro.src}
                alt="Features Illustration"
                quality={100}
                className="object-cover z-10"
                fill
              />
              <div className="absolute inset-0 h-[564px] z-5 w-full bg-gradient-to-b from-transparent from-40% to-neutral-950" />
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setModalOpen(true);
          }}
          aria-label="Watch the video"
          className="absolute cursor-pointer top-[70%] animate-fade-in left-1/2 hover:text-purple-400 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-16 h-16 overflow-hidden rounded-full border border-gray-800 p-[1px] backdrop-blur-3xl z-50"
        >
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
        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <ReactPlayer
                  url="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}

// function LandingVideo() {
//   return (
//     <div
//       className="relative  w-full px-20 mt-40 max-h-screen aspect-video mx-auto py-20"
//       id="after-hero"
//     >
//       <div
//         className="absolute h-full w-full bg-[radial-gradient(farthest-side,_var(--tw-gradient-stops))] from-indigo-200 from-1% to-slate-950 to-80% -z-50"
//         id="behind-image"
//       />
//       <TextGeneration />
//       <Image
//         src={videobg}
//         alt=""
//         className="-z-10 object-contain"
//         quality={100}
//         fill
//       />

//       <div className="absolute top-[45%] inset-0 ">
//         <div className="rounded-3xl  w-[1002px] h-[564px] mx-auto p-px bg-gradient-to-r to-purple-400 from-purple-400 via-purple-200 ">
//           <MainVideo />
//         </div>
//         <div className="absolute inset-0 h-[564px] w-full bg-gradient-to-b from-transparent from-40% to-neutral-950" />
//       </div>
//     </div>
//   );
// }

const PlayButton = () => {
  return (
    <div className="absolute cursor-pointer top-1/2 animate-fade-in left-1/2 hover:text-purple-400 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-16 h-16 overflow-hidden rounded-full border border-gray-800 p-[1px] backdrop-blur-3xl z-50">
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
    </div>
  );
};
