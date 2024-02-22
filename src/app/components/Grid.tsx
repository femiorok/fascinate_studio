import React from "react";
import { cn } from "@/lib/utils"; 
import Image from "next/image";
import house from "@public/fascinatehouse-25.jpg";
import head from "@public/SCR-20240221-sreo.png"
import threeD from "@public/C1275.00_00_12_27.Still057.jpg"
import story from "@public/SCR-20240221-stoo.jpeg"
import prod from "@public/ontheverge-72.jpg"



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
 
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2]  border justify-between flex flex-col space-y-4",
        className
      )}
    >
		<div
  className="absolute opacity-10 inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
></div>

      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal  text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};


export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-8">
		<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({src}: {src: string}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative border border-white/[0.2] shadow-sm">
    <Image src={src} alt="Descriptive Alt Text" fill={true} objectFit="cover" />
  </div>
);
const items = [
  {
    title: "In-House Production Studio",
    description: "Crafting visuals where science meets art.",
    header: <Skeleton src={house.src}/>,
  },
  {
    title: "3D VFX & Virtual Production",
    description: "3D VFX: Unveiling the cosmos.",
    header: <Skeleton src={prod.src} />,
  },
  {
    title: "Authentic Storytelling",
    description: "Telling tales of tech and time.",
    header: <Skeleton src={threeD.src} />,
  },
  {
    title: "Commercial-Grade Equipment",
    description: "Precision gear for epic tales.",
    header: <Skeleton src={story.src}/>,
  },
  {
    title: "Long head ass",
    description: "Insert fry",
    header: <Skeleton src={head.src} />,
  },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//   },
];
