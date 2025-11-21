import React from "react";
import ProductSlider from "../components/ProductSlider";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featured = products.slice(0, 4);
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <ProductSlider />

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <a href="/products" className="text-sm text-orange-500">See all</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
