import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const PromoCarousel = () => {
  const banners = [
    { id: 1, img: '/images/banner-1.svg', title: 'Mega Sale' },
    { id: 2, img: '/images/banner-2.svg', title: 'Weekly Deals' },
    { id: 3, img: '/images/banner-3.svg', title: 'New Arrivals' },
  ]

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="pb-4"
        >
          {banners.map(b => (
            <SwiperSlide key={b.id}>
              <div className="bg-[var(--surface)] rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow)]">
                <img src={b.img} alt={b.title} className="w-full h-40 object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PromoCarousel
