import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const DealsSection = () => {
  // Mock data setup remains correct
  const deals = products.slice(0, 6).map((p) => ({
    ...p,
    originalPrice: p.price,
    price: Math.round(p.price * 0.8), 
    discount: "20% OFF",
  }));

  // Mock countdown timer display (Replace with actual state/logic if needed)
  const timer = "05:42:18"; 

  return (
    // Outer section styling is clean
    <section className="py-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Header: Title and Countdown Timer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-3 border-b border-[var(--border)]">
          
          {/* Title: Use the elegant font-serif and enhance the gradient */}
          <h2 className="text-3xl font-serif font-bold text-[var(--text-light)]">
            <span className="inline-block">
              ⚡ Exclusive Deals of the Day
            </span>
          </h2>
          
          {/* Countdown Timer: Bold, accented, and highly visible */}
          <div className="flex items-center gap-3 mt-2 sm:mt-0 text-[var(--text-mid)]">
            <span className="text-sm uppercase tracking-wider">Ends in:</span>
            <div className="bg-[var(--primary)] text-[var(--background)] font-extrabold text-xl px-3 py-1 rounded-md shadow-luxe">
              {timer}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {deals.map((p) => (
            <div key={p.id} className="relative">
              {/* Discount Badge: Added outside the ProductCard for clear visibility */}
              <div className="absolute top-2 left-2 bg-[var(--error)] text-[var(--text-light)] text-xs font-bold px-2 py-1 rounded-full z-10 shadow-luxe">
                {p.discount}
              </div>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DealsSection;