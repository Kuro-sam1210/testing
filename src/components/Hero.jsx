import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white market-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold">Market — Best prices, fast delivery</h1>
            <p className="mt-2 text-sm opacity-90">Discover millions of deals across categories. Free shipping and returns.</p>

            <div className="mt-4 w-full max-w-xl">
              <div className="flex items-center bg-white rounded-full p-1 pr-2 shadow-sm">
                <input className="flex-1 px-4 py-3 rounded-full outline-none text-black" placeholder="Search products, brands and more" />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-semibold">Search</button>
              </div>

              <div className="flex gap-2 mt-3 flex-wrap text-xs">
                <Link to="/products?query=phones" className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Phones</Link>
                <Link to="/products?query=shoes" className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Shoes</Link>
                <Link to="/products?query=home" className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Home</Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg text-black">
              <img src="/images/promo-1.svg" alt="promo" className="w-32 h-32 object-contain" />
              <div>
                <div className="text-sm font-semibold">Limited Time Offer</div>
                <div className="text-lg font-bold mt-1">Up to 80% off on selected items</div>
                <div className="mt-2 text-xs text-gray-600">Free returns · 30-day money back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
