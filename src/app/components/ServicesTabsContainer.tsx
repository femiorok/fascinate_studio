"use client";

import Image from "next/image";
import { ServicesTabs } from "./ServicesTabs";

export function ServicesTabsContainer() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center mt-20 mb-10">
        Our Services
      </h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40">
        <ServicesTabs />
      </div>
    </>
  );
}
