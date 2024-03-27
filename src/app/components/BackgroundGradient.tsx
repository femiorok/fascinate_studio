"use client";

import { motion } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className={cn(
        "relative p-[8px] h-full group blur-lg",
        containerClassName,
      )}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#9933ff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#6600cc,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#cc66ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#8a2be2,#141316)]",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#9933ff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#6600cc,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#cc66ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#8a2be2,#141316)]",
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
