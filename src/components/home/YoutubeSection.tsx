"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { YOUTUBE_CHANNEL_URL, videos } from "@/lib/home-content";

export default function YoutubeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <div className="youtube-section">
      <h2 className="section-title">
        Popular Video Links for Your Civil Services Preparation
      </h2>

      <div className="video-grid">
        {videos.map((video) => (
          <div
            className="video-item"
            key={video.id}
            onClick={() => setActiveVideo(video.id)}
          >
            <div className="video-thumbnail">
              <Image
                src={video.image}
                alt={video.alt}
                width={400}
                height={225}
                loading="lazy"
              />
              <div className="play-button" />
            </div>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>

      <div className="youtube-link">
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          View More Videos on our Official YouTube Channel →
        </a>
      </div>

      <div
        className={`video-modal${activeVideo ? " active" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveVideo(null);
        }}
      >
        <div className="video-modal-content">
          <button
            className="modal-close-btn"
            aria-label="Close video"
            onClick={() => setActiveVideo(null)}
          >
            ×
          </button>
          <button
            className="modal-youtube-btn"
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${activeVideo}`, "_blank")
            }
          >
            <span>▶</span> Open in YouTube
          </button>
          {/* Mounted only while a video is open, so closing the modal stops
              playback and we never hand the iframe an empty src. */}
          {activeVideo && (
            <iframe
              title="ATC video"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
