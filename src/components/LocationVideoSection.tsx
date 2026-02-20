import locationVideo from "@/assets/location-video.mov";

export const LocationVideoSection = () => {
  return (
    <section className="w-full">
      <video
        src={locationVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-auto block"
      />
    </section>
  );
};
