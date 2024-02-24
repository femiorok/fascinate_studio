import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import video1 from "@public/video1.gif";
import video2 from "@public/video2.gif";
import video3 from "@public/video3.gif";
import video4 from "@public/video4.gif";
import Image from "next/image";

const videos = [
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4",
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/planets.mp4",
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/show.mp4",
];
const gifs = [video1, video2, video3, video4];

export function OurWorkCarousel() {
  return (
    <Carousel className=" max-w-6xl">
      <CarouselContent>
        {videos.map((video, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <video src={video} loop muted playsInline className="w-full" />
          </CarouselItem>
        ))}
        {gifs.map((gif, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <Image src={gif} width={500} height={500} alt="gif"></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white" />
      <CarouselNext className="bg-white" />
    </Carousel>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
