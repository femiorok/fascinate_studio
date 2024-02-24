import { OurWorkCarousel } from "@/components/our-work-carousel";

export default function Work() {
  const vid =
    "https://dtv9sxyhtfhqe3cm.public.blob.vercel-storage.com/documentary.mp4";
  return (
    <>
      <section className="flex relative flex-col gap-2 items-center justify-center h-screen">
        <div className="h-screen w-full bg-gradient-to-tr from-transparent via-zinc-800/50 to-transparent absolute"></div>
        <div className="max-w-4xl z-50">
          <video src={vid} loop autoPlay muted playsInline className="w-full" />
        </div>
        <OurWorkCarousel />
      </section>
    </>
  );
}
