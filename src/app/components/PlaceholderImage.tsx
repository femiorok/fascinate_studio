import Image from "next/image";
import placeholder from "@public/placeholder.svg";

export function PlaceholderImage() {
  return (
    <div className="w-[300px] h-[300px] relative border border-black">
      <Image src={placeholder.src} alt="Placeholder" fill />
    </div>
  );
}
