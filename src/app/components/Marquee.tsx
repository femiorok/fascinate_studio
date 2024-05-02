import chevy from "@public/chevrolet-1.svg";
// import discovery from "@public/discovery-channel-4.svg"
import intuit from "@public/intuit-logo.svg";
import linkedin from "@public/linkedin-logo-2013-1.svg";
import natg from "@public/national-geographic.svg";
import pbs from "@public/pbs-1.svg";
import nsf from "@public/NSF_logo.png";
import Image from "next/image";

const LOGOS = [
  <Image
    src={chevy.src}
    key={chevy.src}
    alt="chevy"
    className="w-full "
    width={100}
    height={300}
  />,
  <Image
    src={intuit.src}
    key={intuit.src}
    alt="intuit"
    className="w-full -mt-4 "
    width={100}
    height={300}
  />,
  <Image
    src={linkedin.src}
    key={linkedin.src}
    alt="linked"
    className="w-full "
    width={100}
    height={300}
  />,
  <Image
    src={natg.src}
    key={natg.src}
    alt="natg"
    className="w-full "
    width={100}
    height={300}
  />,
  <Image
    src={pbs.src}
    key={pbs.src}
    alt="pbs"
    className="w-full "
    width={100}
    height={300}
  />,
  <Image
    src={nsf.src}
    key={nsf.src}
    alt="nsf"
    className="w-full "
    width={100}
    height={300}
    quality={100}
  />,
];
const a = "animate-infinite-slider";

export const Marquee = () => {
  return (
    <div className="relative m-auto mb-20 h-[350px] w-[960px] overflow-hidden before:absolute before:inset-0 before:z-[2] before:h-full before:w-1/6 before:bg-gradient-to-r before:from-main after:absolute  after:z-[3] after:h-full after:right-0 after:top-0 after:w-1/6 after:bg-gradient-to-l after:from-main after:to-transparent">
      <div className="animate-infinite-slider flex gap-8 w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center bg-blend-screen"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
