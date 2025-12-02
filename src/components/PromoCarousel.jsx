import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const PromoCarousel = () => {
  const banners = [
    { id: 1, img: '/images/banner-1.svg', title: 'Mega Sale', link: '/sale' },
    { id: 2, img: '/images/banner-2.svg', title: 'Weekly Deals', link: '/deals' },
    { id: 3, img: '/images/banner-3.svg', title: 'New Arrivals', link: '/new' },
    { id: 4, img: '/images/banner-4.svg', title: 'Clearance', link: '/clearance' },
  ]

  return (
    // Outer section styling is clean, relying on the inherited dark background
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        <h2 className="text-3xl font-serif font-bold mb-6 text-[var(--text-light)]">
          Featured Promotions
        </h2>

        <Swiper
          spaceBetween={24} // Increased space for a cleaner separation
          slidesPerView={1.2} // Show a peek of the next slide on small screens
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 } // Increased space on desktop
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }} // Slightly slower autoplay
          modules={[Autoplay]}
          className="pb-4"
        >
          {banners.map(b => (
            <SwiperSlide key={b.id}>
              {/* Added a link wrapper for interactivity */}
              <a 
                href={b.link} 
                className="block hover:scale-[1.01] transition-transform duration-300"
              >
                <div 
                  // Card Styling: Dark surface, sharp corners, premium shadow
                  className="bg-[var(--surface)] rounded-xl overflow-hidden shadow-luxe border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                >
                  <img 
                    src={b.img} 
                    alt={b.title} 
                    // Adjusted height slightly for a bigger banner look
                    className="w-full h-44 md:h-56 object-cover" 
                  />
                  {/* Optional: Add text overlay if images are abstract */}
                  <div className="p-4">
                      <h3 className="text-xl font-semibold text-[var(--text-light)]">{b.title}</h3>
                      <p className="text-sm text-[var(--text-mid)] mt-1">Shop now and save big!</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PromoCarousel