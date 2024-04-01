"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export function BlurIn({ children }: { children: ReactNode }) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  console.log(inView);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
      variants={variants1}
      className=""
    >
      {children}
    </motion.div>
  );
}
