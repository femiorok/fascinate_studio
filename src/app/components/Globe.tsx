"use client";

import { cn } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { CardProduct } from "./CardProduct";
import { FaPersonCircleCheck } from "react-icons/fa6";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 2000,
  mapBrightness: 6,
  baseColor: [0.18, 0.08, 0.38],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.9, 0.6, 0.9],
  markers: [],
};

function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[800px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default function GlobeHero() {
  return (
    <div className="relative flex flex-col h-screen w-screen items-center justify-center overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-main z-[100] from-90%" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-main z-[100] from-90%" />

      <div className="flex justify-between w-4/5">
        <div className="w-80 h-40 bg-gradient-to-t from-fuchsia-900/30 via-fuchsia-950/30 via-5% to-40% to-main relative rounded-lg">
          <p className="pointer-events-none z-10 my-2 bg-gradient-to-tr from-fuchsia-950 to-fuchsia-100 to-40% bg-clip-text text-center text-3xl leading-tight text-transparent ">
            Crew & Talent Management
          </p>

          <div className="w-1/3 h-1/3 relative mx-auto">
            <svg
              className="w-full h-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                  <stop style={{ stopColor: "#C026D3" }} offset="0%"></stop>
                  <stop style={{ stopColor: "#701A75" }} offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#myGradient)"
                fill-rule="evenodd"
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg" />
          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg blur-sm" />
          <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-400/30 to-transparent to-60% -z-10 rounded-lg blur-lg opacity-50" />
        </div>

        <div className="w-80 h-40 bg-gradient-to-t from-fuchsia-900/30 via-fuchsia-950/30 via-5% to-40% to-main relative rounded-lg">
          <p className="pointer-events-none z-10 my-2 bg-gradient-to-tr from-fuchsia-950 to-fuchsia-100 to-40% bg-clip-text text-center text-3xl leading-tight text-transparent ">
            Pre-Production Planning
          </p>
          {/* SECoND CARD */}
          <div className="w-1/3 h-1/3 relative mx-auto">
            <svg
              className="w-full h-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                  <stop style={{ stopColor: "#C026D3" }} offset="0%"></stop>
                  <stop style={{ stopColor: "#701A75" }} offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#myGradient)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
              />
            </svg>
          </div>

          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg" />
          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg blur-sm" />
          <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-400/30 to-transparent to-60% -z-10 rounded-lg blur-lg opacity-50" />
        </div>

        <div className="w-80 h-40 bg-gradient-to-t from-fuchsia-900/50 via-fuchsia-950/30 via-5% to-40% to-main relative rounded-lg">
          <p className="pointer-events-none z-10 my-2 bg-gradient-to-tr from-fuchsia-950 to-fuchsia-100 to-40% bg-clip-text text-center text-3xl leading-tight text-transparent ">
            Scriptwriting & Storyboarding
          </p>
          {/* SECoND CARD */}
          <div className="w-1/3 h-1/3 relative mx-auto">
            <svg
              className="w-full h-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                  <stop style={{ stopColor: "#C026D3" }} offset="0%"></stop>
                  <stop style={{ stopColor: "#701A75" }} offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#myGradient)"
                fill-rule="evenodd"
                d="M8.5 4a4.5 4.5 0 0 0 0 9H11v6a1 1 0 1 0 2 0V6h2v13a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2H8.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg" />
          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg blur-sm" />
          <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-400/30 to-transparent to-60% -z-10 rounded-lg blur-lg opacity-50" />
        </div>

        <div className="w-80 h-40 bg-gradient-to-t from-fuchsia-900/30 via-fuchsia-950/30 via-5% to-40% to-main relative rounded-lg">
          <p className="pointer-events-none z-10 my-2 bg-gradient-to-tr from-fuchsia-950 to-fuchsia-100 to-40% bg-clip-text text-center text-3xl leading-tight text-transparent ">
            Postproduction & Delivery
          </p>
          {/* SECoND CARD */}
          <div className="w-1/3 h-1/3 relative mx-auto">
            <svg
              className="w-full h-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                  <stop style={{ stopColor: "#C026D3" }} offset="0%"></stop>
                  <stop style={{ stopColor: "#701A75" }} offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#myGradient)"
                fill-rule="evenodd"
                d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg" />
          <div className="absolute -inset-[1px] bg-gradient-to-t from-fuchsia-400/30 to-fuchsia-950/30 -z-10 rounded-lg blur-sm" />
          <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-400/30 to-transparent to-60% -z-10 rounded-lg blur-lg opacity-50" />
        </div>
      </div>

      <Globe className="bottom-0 translate-y-1/2 -z-20" />
      <div className="pointer-events-none absolute z-50 inset-0 h-full bg-[radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.2),rgba(0,0,0,0.5))] mix-blend-soft-light" />
    </div>
  );
}
