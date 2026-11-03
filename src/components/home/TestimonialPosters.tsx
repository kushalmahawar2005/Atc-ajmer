"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type PosterStory = { src: string; alt: string; name: string; result: string };

const ZOOM_STEPS = [1, 1.5, 2, 3];

/** Testimonial poster grid; clicking a poster opens it alone in a zoomable viewer. */
export default function TestimonialPosters({ stories }: { stories: PosterStory[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [zoomIndex, setZoomIndex] = useState(0);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (step: number) => {
      setActive((current) =>
        current === null ? current : (current + step + stories.length) % stories.length,
      );
      setZoomIndex(0);
    },
    [stories.length],
  );
  const zoom = useCallback((step: number) => {
    setZoomIndex((current) => Math.min(ZOOM_STEPS.length - 1, Math.max(0, current + step)));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "+" || event.key === "=") zoom(1);
      else if (event.key === "-") zoom(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, go, zoom]);

  const story = active === null ? null : stories[active];
  const scale = ZOOM_STEPS[zoomIndex];

  return (
    <>
      <div className="testimonial-poster-grid">
        {stories.map((item, index) => (
          <figure className="testimonial-poster-card" key={item.src}>
            <button
              type="button"
              className="testimonial-poster-open"
              aria-label={`Open ${item.name}'s testimonial`}
              onClick={() => {
                setZoomIndex(0);
                setActive(index);
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={853}
                height={1280}
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
              />
            </button>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.result}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {story &&
        createPortal(
          <div
            className="poster-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={story.alt}
            onClick={close}
          >
            <div className="poster-viewer-bar" onClick={(event) => event.stopPropagation()}>
              <span className="poster-viewer-title">
                <strong>{story.name}</strong> · {story.result}
              </span>
              <div className="poster-viewer-tools">
                <button type="button" aria-label="Zoom out" onClick={() => zoom(-1)} disabled={zoomIndex === 0}>
                  <i className="fas fa-minus" aria-hidden="true" />
                </button>
                <span className="poster-viewer-zoom">{Math.round(scale * 100)}%</span>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => zoom(1)}
                  disabled={zoomIndex === ZOOM_STEPS.length - 1}
                >
                  <i className="fas fa-plus" aria-hidden="true" />
                </button>
                <button type="button" aria-label="Close" onClick={close}>
                  <i className="fas fa-times" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="poster-viewer-stage" onClick={close}>
              {/* Width grows with zoom; the stage scrolls so any part can be read. */}
              <div
                className="poster-viewer-frame"
                style={{ width: `min(${scale} * (100vw - 32px), ${scale * 84}vh * 853 / 1280)` }}
                onClick={(event) => {
                  event.stopPropagation();
                  setZoomIndex((current) => (current === 0 ? 2 : 0));
                }}
              >
                <Image
                  key={story.src}
                  src={story.src}
                  alt={story.alt}
                  width={853}
                  height={1280}
                  sizes="100vw"
                  className={scale > 1 ? "is-zoomed" : undefined}
                />
              </div>
            </div>

            {stories.length > 1 && (
              <>
                <button
                  type="button"
                  className="poster-viewer-nav prev"
                  aria-label="Previous testimonial"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(-1);
                  }}
                >
                  <i className="fas fa-chevron-left" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="poster-viewer-nav next"
                  aria-label="Next testimonial"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(1);
                  }}
                >
                  <i className="fas fa-chevron-right" aria-hidden="true" />
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
