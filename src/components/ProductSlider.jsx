import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/pagination";

const ProductSlider = () => {
  const slides = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]} 
        spaceBetween={16}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img
              src={s}
              alt={`slide-${i}`}
              className="w-full h-64 md:h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
