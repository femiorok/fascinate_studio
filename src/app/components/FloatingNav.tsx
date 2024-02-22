"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = () => {

    const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  // Removed the scroll logic and visible state since it's always visible now.

  return (
    <div
      className={cn(
        "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 "
          )}
        >
          {/* <span className="block sm:hidden">{navItem.icon}</span> */}
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <button className="border text-sm font-medium relative  border-white/[0.2] text-white px-4 py-2 rounded-full">
        <span>Contact</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </div>
  );
};
