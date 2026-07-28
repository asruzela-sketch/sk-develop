import { useEffect, useRef, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const ProjectVideoPlayer = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    loadObserver.observe(player);

    return () => loadObserver.disconnect();
  }, []);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) return;

    const playbackObserver = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "150px 0px", threshold: 0.1 },
    );

    playbackObserver.observe(player);

    return () => playbackObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    video.load();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    if (isNearViewport && !prefersReducedMotion) {
      void video.play().catch(() => {
        // The poster remains visible when the browser declines autoplay.
      });
    } else {
      video.pause();
    }
  }, [isNearViewport, prefersReducedMotion, shouldLoad]);

  const handleCanPlay = () => {
    if (isNearViewport && !prefersReducedMotion) {
      void videoRef.current?.play().catch(() => {
        // The poster remains visible when the browser declines autoplay.
      });
    }
  };

  return (
    <div
      ref={playerRef}
      className="mx-auto aspect-[9/16] w-full max-w-[23.75rem] overflow-hidden rounded-2xl border border-[hsl(40_30%_60%_/_0.3)] bg-black shadow-2xl lg:mx-0 lg:ml-auto"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        controls={prefersReducedMotion}
        preload="metadata"
        poster="/video/sk-develop-poster.webp"
        aria-label="Архитектурная визуализация проекта"
        onCanPlay={handleCanPlay}
        className="block h-full w-full object-contain"
      >
        {shouldLoad && (
          <>
            <source src="/video/sk-develop.webm" type="video/webm" />
            <source src="/video/sk-develop.mp4" type="video/mp4" />
          </>
        )}
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
};
