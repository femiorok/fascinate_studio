"use client";

import Image from "next/image";
import { ServicesTabs } from "./ServicesTabs";
import verge from "@public/verge.webp";
import secondhome from "@public/secondhome.webp";
import intuit from "@public/intuit.webp";
import chevy from "@public/chevy.webp";
import planets from "@public/planets.webp";

export function ServicesTabsContainer() {
  const tabs = [
    {
      title: "Commercial",
      value: "commercial",
      content: (
        <>
          <div className="relative flex justify-center overflow-hidden">
            <div className="flex bg-[#63e] shadow-[inset_5px_120px_40px_5px_rgba(53,24,134,0.8)] py-5 aspect-[2/1] w-full flex-col items-center rounded-xl border border-[#ad90fc]/40 px-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
              <p className="text-3xl font-extrabold text-white">
                Commercial content aligned with your brand identity{" "}
              </p>
            </div>
            <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#d0c1fb] absolute bottom-80 -z-10"></div>
          </div>
          <TabContent image={chevy.src} />
        </>
      ),
    },
    {
      title: "Television",
      value: "television",
      content: (
        <>
          <div className="relative flex justify-center overflow-hidden">
            <div className="flex bg-[#63e] shadow-[inset_5px_120px_40px_5px_rgba(53,24,134,0.8)] aspect-[2/1] py-5  w-full flex-col items-center rounded-xl border border-[#ad90fc]/40 px-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
              <p className="text-3xl font-extrabold text-white">
                Broadcast-quality footage ready for any network{" "}
              </p>
            </div>
            <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#d0c1fb] absolute bottom-80 -z-10"></div>
          </div>
          <TabContent image={verge.src} />
        </>
      ),
    },
    {
      title: "Educational",
      value: "educational",
      content: (
        <>
          <div className="relative flex justify-center overflow-hidden">
            <div className="flex bg-[#63e] shadow-[inset_5px_120px_40px_5px_rgba(53,24,134,0.8)]  py-5 aspect-[2/1] w-full flex-col items-center rounded-xl border border-[#ad90fc]/40 px-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
              <p className="text-3xl font-extrabold text-white">
                Impactful content for students and learners
              </p>
            </div>
            <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#d0c1fb] absolute bottom-80 -z-10"></div>
          </div>
          <TabContent image={secondhome.src} />
        </>
      ),
    },
    {
      title: "Documentary",
      value: "documentary",
      content: (
        <>
          <div className="relative flex justify-center overflow-hidden">
            <div className="flex bg-[#63e] shadow-[inset_5px_120px_40px_5px_rgba(53,24,134,0.8)] py-5  aspect-[2/1] w-full flex-col items-center rounded-xl border border-[#ad90fc]/40 px-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
              <p className="text-3xl font-extrabold text-white">
                Narrative-driven storytelling{" "}
              </p>
            </div>
            <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#d0c1fb] absolute bottom-80 -z-10"></div>
          </div>
          <TabContent image={intuit.src} />
        </>
      ),
    },
    {
      title: "3D VFX",
      value: "3d",
      content: (
        <>
          <div className="relative flex justify-center overflow-hidden">
            <div className="flex bg-[#63e] shadow-[inset_5px_120px_40px_5px_rgba(53,24,134,0.8)] py-5  aspect-[2/1] w-full flex-col items-center rounded-xl border border-[#ad90fc]/40 px-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]">
              <p className="text-3xl font-extrabold text-white">
                Dynamic environments build with Unreal Engine 4{" "}
              </p>
            </div>
            <div className="w-[500px] h-[500px] rounded-full blur-3xl bg-[#d0c1fb] absolute bottom-80 -z-10"></div>
          </div>
          <TabContent image={planets.src} />
        </>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center mt-80 mb-10">
        Our Services
      </h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40">
        <ServicesTabs tabs={tabs} activeTabClassName="bg-white" />
      </div>
    </>
  );
}

const TabContent = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
