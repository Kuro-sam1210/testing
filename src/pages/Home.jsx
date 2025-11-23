import React from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import PromoCarousel from "../components/PromoCarousel";
import CategoriesGrid from "../components/CategoriesGrid";
import DealsSection from "../components/DealsSection";
import MarketFooter from "../components/MarketFooter";

const Home = () => {
  return (
    <main>
      <Hero />
      <PromoCarousel />
      <CategoriesGrid />
      <DealsSection />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-4 text-[var(--text-dark)]">Recommended for you</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <MarketFooter />
    </main>
  );
};

export default Home;
