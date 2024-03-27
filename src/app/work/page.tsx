import React from "react";
import { FloatingNav } from "../components/FloatingNav";

export default function Page() {
  return (
    <>
      <FloatingNav />
      <section className="mt-20 grid grid-cols-2 gap-4 p-4 justify-center">
        <div className="aspect-video min-w-[750px] mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1JDcukLgi2xFE-qqSZh5bEqmjwnwLzzDT/preview"
            allow="autoplay"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
        <div className="aspect-video min-w-[750px] mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1tBJthwi2vPMRYCCLaKwXrqH1TJ6R_eB9/preview"
            allow="autoplay"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
        <div className="aspect-video min-w-[750px] mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1lrtBhLieBSLVhq39gJbKCML0lEN0yCMM/preview"
            allow="autoplay"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
        <div className="aspect-video min-w-[750px] mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1IeA6NVp89Aiz7n6BORsaKgHKwPI4BY_1/preview"
            allow="autoplay"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </section>
    </>
  );
}
