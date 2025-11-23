import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const DealsSection = () => {
  
  const deals = products.slice(0, 6).map((p) => ({
    ...p,
    originalPrice: p.price,
    price: Math.round(p.price * 0.8), 
    discount: "20% OFF",
  }));

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Deals of the Day
            </span>
          </h2>
          <div className="text-sm text-gray-500">Ends in 23:59:59</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deals.map((p) => (
            <div key={p.id} className="relative">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;