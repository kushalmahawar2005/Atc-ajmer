"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/styles/launch.css";

/** Change these two lines to set the words shown during the launch. */
export const LAUNCH_HEADING = "ATC Ajmer";
export const LAUNCH_SUBHEADING = "Website Launch";

/** How long "Website is Live!" stays up before `onFinished` runs. */
const CELEBRATE_MS = 6_000;
/** Must match DISMISS_KEY in components/layout/RasBanner.tsx. */
const EXAM_POPUP_DISMISSED_KEY = "atcExamBanner2026Closed";

const CONFETTI_COLOURS = ["#f5a623", "#ffffff", "#00a8e8", "#ff5e5b", "#7bd389", "#ffd166"];

/** Lightweight canvas confetti, so the ceremony needs no extra library. */
function useConfetti(canvasRef: React.RefObject<HTMLCanvasElement | null>, active: boolean) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!active || !canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pieces = Array.from({ length: 260 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height,
      size: 6 + Math.random() * 8,
      speed: 2 + Math.random() * 4,
      drift: -1.5 + Math.random() * 3,
      spin: Math.random() * Math.PI,
      colour: CONFETTI_COLOURS[Math.floor(Math.random() * CONFETTI_COLOURS.length)],
    }));

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const piece of pieces) {
        piece.y += piece.speed;
        piece.x += piece.drift;
        piece.spin += 0.1;
        if (piece.y > canvas.height + 20) {
          piece.y = -20;
          piece.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.spin);
        ctx.fillStyle = piece.colour;
        ctx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
        ctx.restore();
      }
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [active, canvasRef]);
}

/** Seconds left until `launchAt`, measured on the server's clock. */
function secondsLeft(launchAt: number, clockOffset: number) {
  return Math.max(0, Math.ceil((launchAt - (Date.now() + clockOffset)) / 1000));
}

/**
 * Full-screen 10…1 countdown, then confetti and "Website is Live!". Every
 * screen counts towards the same server time, so they all hit zero together.
 */
export default function LaunchShow({
  launchAt,
  clockOffset,
  onFinished,
}: {
  launchAt: number;
  clockOffset: number;
  onFinished?: () => void;
}) {
  const [left, setLeft] = useState(() => secondsLeft(launchAt, clockOffset));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const done = left === 0;

  useConfetti(canvasRef, done);

  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => setLeft(secondsLeft(launchAt, clockOffset)), 200);
    return () => clearInterval(timer);
  }, [done, launchAt, clockOffset]);

  useEffect(() => {
    if (!done) return;
    try {
      // Keep the test series popup from covering the homepage on the display.
      sessionStorage.setItem(EXAM_POPUP_DISMISSED_KEY, "1");
    } catch {
      // Storage blocked: the popup can simply be closed by hand.
    }
    if (!onFinished) return;
    const timer = setTimeout(onFinished, CELEBRATE_MS);
    return () => clearTimeout(timer);
  }, [done, onFinished]);

  return (
    <main className="launch-screen">
      <canvas ref={canvasRef} className="launch-confetti" aria-hidden="true" />
      <div className="launch-card">
        <Image
          src="/images/atc-logo.png"
          alt="ATC Ajmer"
          width={140}
          height={140}
          priority
          className="launch-logo"
        />
        <h1 className="launch-heading">{LAUNCH_HEADING}</h1>
        <p className="launch-subheading">{LAUNCH_SUBHEADING}</p>

        {done ? (
          <>
            <p className="launch-live">🎉 Website is Live! 🎉</p>
            <p className="launch-url">www.atcajmer.com</p>
          </>
        ) : (
          <div className="launch-count" key={left} aria-live="assertive">
            {left}
          </div>
        )}
      </div>
    </main>
  );
}
