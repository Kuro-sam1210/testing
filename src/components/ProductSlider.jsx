import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// NOTE: Custom CSS must be added globally to theme the pagination dots 
// to ensure they are visible against the dark images/background.

const HeroCarousel = () => {
  // Assuming these are high-resolution hero/banner images
  const slides = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

  return (
    <div 
      // Container Styling: Sharp corners (rounded-xl) and a subtle shadow
      className="w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // Reduced space for a tighter look
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        // Pagination: Class added to target custom dark theme styling
        pagination={{ clickable: true, el: '.swiper-pagination-custom', type: 'bullets' }}
        className="hero-swiper-container"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img
              src={s}
              alt={`slide-${i}`}
              // Image Height: Maintained responsive height
              className="w-full h-72 md:h-[400px] lg:h-[500px] object-cover" 
            />
          </SwiperSlide>
        ))}
        {/* Custom Pagination Element for Styling */}
        <div className="swiper-pagination-custom absolute bottom-4 left-0 right-0 z-10 flex justify-center"></div>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;