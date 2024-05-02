"use client";

import { Vortex } from "./Vortex";

export function WeExist() {
  return (
    <div className="w-full mx-auto relative rounded-md !bg-transparent h-[30rem] overflow-hidden">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="bg-gradient-to-br from-white to-90% to-violet-700/50 text-transparent bg-clip-text text-2xl md:text-6xl font-bold text-center">
          Stories that mesmerize.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          We believe your media should be more than just visuals. They should
          provoke the imagination.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="relative inline-flex overflow-hidden rounded-xl p-px">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-main px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl">
              Contact Us
            </span>
          </button>
          <button className="px-4 py-2  text-white ">See Our Work</button>
        </div>
      </Vortex>
    </div>
  );
}
