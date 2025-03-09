import { useRef } from "react";

const images = [
  "/Images/Image (10).png",
  "/Images/Image (11).png",
  "/Images/Image (13).png",
  "/Images/Image (14).png",
  "/Images/Image (10).png",
  "/Images/Image (11).png",
  "/Images/Image (13).png",
  "/Images/Image (14).png",
  "/Images/Image (10).png",
  "/Images/Image (11).png",
  "/Images/Image (13).png",
  "/Images/Image (14).png",
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="overflow-hidden w-full py-6">
      <div
        ref={carouselRef}
        className="flex w-max min-w-full space-x-4 animate-scroll flex-nowrap"
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="cursor-pointer h-auto max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[250px] w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
