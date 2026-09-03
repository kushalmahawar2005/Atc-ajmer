"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sliderImages } from "@/lib/home-content";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((index) => (index + 1) % sliderImages.length),
      AUTOPLAY_MS,
    );
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoplay]);

  // Any manual navigation restarts the 5s timer, as on the live site.
  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % sliderImages.length) + sliderImages.length) % sliderImages.length);
      startAutoplay();
    },
    [startAutoplay],
  );

  return (
    <div className="hero-section">
      <div
        className="slider"
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const diff = touchStartX.current - event.changedTouches[0].clientX;
          if (Math.abs(diff) > SWIPE_THRESHOLD) goTo(current + (diff > 0 ? 1 : -1));
        }}
      >
        {sliderImages.map((slide, index) => (
          <div
            key={slide.src}
            className={`slide${index === current ? " active" : ""}`}
            style={{ ["--slide-bg" as string]: `url('${slide.src}')` }}
          >
            {/* Plain <img>: the slider crops these with object-fit and a blurred
                background layer, so Next's optimiser buys nothing here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        <button
          className="slider-arrow slider-prev"
          aria-label="Previous slide"
          onClick={() => goTo(current - 1)}
        >
          ❮
        </button>
        <button
          className="slider-arrow slider-next"
          aria-label="Next slide"
          onClick={() => goTo(current + 1)}
        >
          ❯
        </button>
      </div>

      <Link href="/about/selections" className="selections-badge">
        <span className="selections-badge-text">View Our Past Selections →</span>
      </Link>
    </div>
  );
}
