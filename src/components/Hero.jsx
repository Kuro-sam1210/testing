import React from 'react';
import { Link } from 'react-router-dom';

const LuxeHero = () => {
  return (
    // Background: Deep dark background for max contrast
    <section className="bg-[var(--background)] text-[var(--text-light)] py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Headline and Search */}
          <div className="flex-1">
            
            {/* Headline: Elegant font-serif, with the primary color as an accent */}
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
              Curated <span className="text-[var(--primary)]">Luxury</span>. Unrivaled Performance.
            </h1>
            
            <p className="mt-4 text-lg text-[var(--text-mid)]">
              Discover the finest in high-end electronics and designer accessories. Free shipping and exclusive rewards.
            </p>

            {/* Search Bar */}
            <div className="mt-8 w-full max-w-xl">
              <div className="flex items-center bg-[var(--surface)] rounded-full p-1 shadow-luxe border border-[var(--border)]">
                {/* Input: Use the dark background inside the surface container */}
                <input 
                  className="flex-1 px-5 py-3 rounded-full outline-none text-[var(--text-light)] bg-transparent placeholder-gray-500" 
                  placeholder="Search products, brands and more" 
                />
                
                {/* Search Button: Primary CTA, high contrast */}
                <button className="px-6 py-2 bg-[var(--primary)] text-[var(--background)] rounded-full font-bold shadow-md hover:bg-[var(--primary-hover)] transition-colors">
                  Search
                </button>
              </div>

              {/* Quick Links */}
              <div className="flex gap-4 mt-4 flex-wrap text-sm">
                <span className="text-[var(--text-mid)]">Popular:</span>
                <Link to="/products?query=phones" className="px-3 py-1 bg-[var(--surface)] text-[var(--primary)] rounded-full border border-[var(--border)] hover:bg-[var(--background)] transition">Phones</Link>
                <Link to="/products?query=shoes" className="px-3 py-1 bg-[var(--surface)] text-[var(--primary)] rounded-full border border-[var(--border)] hover:bg-[var(--background)] transition">Shoes</Link>
                <Link to="/products?query=home" className="px-3 py-1 bg-[var(--surface)] text-[var(--primary)] rounded-full border border-[var(--border)] hover:bg-[var(--background)] transition">Home Tech</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Promo Block */}
          <div className="w-full lg:w-1/2">
            {/* Promo Card: Dark surface, elegant shadow, primary color highlights */}
            <div className="bg-[var(--surface)] rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-luxe border border-[var(--border)]">
              
              <div className='flex-shrink-0'>
                <img src="/images/promo-1.svg" alt="promo" className="w-24 h-24 object-contain rounded-lg bg-[var(--background)] p-2" />
              </div>
              
              <div>
                <div className="text-sm font-semibold text-[var(--text-mid)]">
                  Limited Time Offer
                </div>
                <div className="text-2xl font-extrabold mt-1 text-[var(--primary)]">
                  Up to 80% off on selected items
                </div>
                <Link to="/deals" className="mt-3 inline-block text-sm font-bold text-[var(--text-light)] hover:text-[var(--primary)] transition-colors border-b border-dashed border-[var(--text-mid)]">
                    Shop Deals Now &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuxeHero;