import BackgroundVideo from "next-video/background-video";
import fascinateVideo from "/videos/fascinate_media_reel_2023_1080p.mp4?thumbnailTime=78";

export default function HeroVideo() {
  return (
    <div className="h-[70vh]">
      <BackgroundVideo src={fascinateVideo} className="w-full h-[70vh]" />
    </div>
  );
}
