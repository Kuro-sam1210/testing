import React from "react";
// Assuming these components are adapted for the new theme
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import PromoCarousel from "../components/PromoCarousel";
import CategoriesGrid from "../components/CategoriesGrid";
import DealsSection from "../components/DealsSection";
import MarketFooter from "../components/MarketFooter";

const Home = () => {
  return (
    // The main tag inherits the background and text colors from the index.css @layer base
    <main className="min-h-screen"> 
      
      {/* 1. Hero & Initial Content (Full Width) */}
      <Hero /> 
      
      {/* 2. Promo Carousel (Quickly catches the eye) */}
      <section className="bg-[var(--background)] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <PromoCarousel />
        </div>
      </section>

      {/* 3. Main Content Wrapper - Adds Padding & Separation */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-20 pt-16 pb-20">

        {/* 4. Deals & Featured Section - Prominently Placed */}
        <section>
          {/* Section Title: Use font-serif for a premium feel */}
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--text-light)] mb-8 border-b border-[var(--border)] pb-3">
            🔥 Exclusive Today's Deals
          </h2>
          <DealsSection />
        </section>

        {/* 5. Categories Grid - Clean & Minimalist */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--text-light)] mb-8">
            Explore Categories
          </h2>
          <CategoriesGrid />
        </section>

        {/* 6. Recommended Products - The Main Product Showcase */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--text-light)] mb-10 border-b border-[var(--border)] pb-3">
            ✨ Handpicked For You
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.slice(0, 8).map((p) => (
              // ProductCard must now use bg-[var(--surface)] and shadow-luxe
              <ProductCard key={p.id} product={p} /> 
            ))}
          </div>
          
        </section>
        
      </div>
      
      {/* 7. Market Footer (Full Width) */}
      <MarketFooter />

    </main>
  );
};

export default Home;