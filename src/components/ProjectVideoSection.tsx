import { useEffect, useRef, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const ProjectVideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    const section = sectionRef.current;

    if (!section) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    loadObserver.observe(section);

    return () => loadObserver.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const playbackObserver = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "150px 0px", threshold: 0.1 },
    );

    playbackObserver.observe(section);

    return () => playbackObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    video.load();

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
    <section ref={sectionRef} className="section-dark py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section text-[hsl(var(--text-light))] mb-10 sm:mb-12">
            Проект в деталях
          </h2>

          <div className="mx-auto aspect-[9/16] w-full max-w-[25rem] overflow-hidden rounded-2xl border border-[hsl(40_30%_60%_/_0.3)] bg-black shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};
