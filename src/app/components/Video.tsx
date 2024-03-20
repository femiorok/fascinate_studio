"use client";
import Video from "next-video";

const documentaryUrl =
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4";
const productionUrl =
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/planets.mp4";
const contentUrl =
  "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/planets.mp4";

export default function VideoComponent({ url }: { url: string }) {
  return (
    <div className="relative">
      {/* <Video src="https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4" width={500} autoPlay controls={false}  loop muted style={{zIndex: 10, position: 'relative'}} /> */}
    </div>
  );
}
