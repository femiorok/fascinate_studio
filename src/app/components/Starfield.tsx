"use client";

import React, { useRef, useEffect } from "react";

const COUNT = 800;
const SPEED = 0.05;

class Star {
  x: number;
  y: number;
  z: number;
  xPrev: number;
  yPrev: number;
  bright: boolean;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xPrev = x;
    this.yPrev = y;
    this.bright = Math.random() < 0.1;
  }

  update(width: number, height: number, speed: number) {
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.z += speed * 0.0675;
    this.x += this.x * (speed * 0.0225) * this.z;
    this.y += this.y * (speed * 0.0225) * this.z;
    if (
      this.x > width / 2 ||
      this.x < -width / 2 ||
      this.y > height / 2 ||
      this.y < -height / 2
    ) {
      this.x = Math.random() * width - width / 2;
      this.y = Math.random() * height - height / 2;
      this.xPrev = this.x;
      this.yPrev = this.y;
      this.z = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.bright) {
      // For bright stars, use a solid white stroke with full opacity
      ctx.strokeStyle = "rgba(255, 255, 255, 1)"; // Full opacity for maximum brightness
      ctx.lineWidth = this.z * 1.5; // Increase the line width for enhanced visibility
    } else {
      // For other stars, use the gradient for a darker tip
      const gradient = ctx.createLinearGradient(
        this.xPrev,
        this.yPrev,
        this.x,
        this.y,
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.3)"); // Darker tip
      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.z;
    }

    ctx.beginPath();
    ctx.moveTo(this.xPrev, this.yPrev);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(container);

    function setup() {
      cancelAnimationFrame(rafId);
      if (!canvas || !container || !ctx) return;

      const { clientWidth: width, clientHeight: height } = container;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Initialization logic for stars

      ctx.translate(width / 2, height / 2);
      ctx.fillStyle = "rgb(09, 09, 09)";
      ctx.strokeStyle = "white";

      const stars = Array.from(
        { length: COUNT },
        () =>
          new Star(
            Math.random() * width - width / 2,
            Math.random() * height - height / 2,
          ),
      );

      function frame() {
        if (!canvas || !container || !ctx) return;
        const { clientWidth: width, clientHeight: height } = container;

        ctx.fillRect(-width / 2, -height / 2, width, height);

        for (const star of stars) {
          star.update(width, height, SPEED);
          star.draw(ctx);
        }

        rafId = requestAnimationFrame(frame);
      }

      frame();
    }

    setup();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 h-[300px]"
      id="starfield"
    >
      <canvas ref={canvasRef} className=""></canvas>
    </div>
  );
};

export default Starfield;
