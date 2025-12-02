import React, { useState } from "react";
import productsData from "../data/Products";
import ProductCard from "../components/ProductCard";
import CategorySidebar from "../components/CategorySidebar";

const Products = () => {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = productsData.filter((p) => {
    const matchCat = activeCat === "all" ? true : p.category === activeCat;
    const matchQuery =
      query.trim() === "" ? true : p.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    // Outer Container: Use the deep background color
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SIDEBAR (Wrapped in a dark, luxury container) */}
        <aside 
          className="md:col-span-1 bg-[var(--surface)] p-6 rounded-xl shadow-luxe border border-[var(--border)] h-fit sticky top-20"
        >
          <h4 className="text-xl font-serif font-bold mb-6 border-b border-[var(--border)] pb-2 text-[var(--text-light)]">
            Product Categories
          </h4>
          <CategorySidebar active={activeCat} onSelect={setActiveCat} />
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-3">

          {/* Search + Result Count */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 p-4 bg-[var(--surface)] rounded-xl shadow-luxe border border-[var(--border)]">

            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                // Search Input Styling: Dark background, light text, primary focus
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] 
                           text-[var(--text-light)] shadow-inner shadow-black/30
                           focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent
                           transition-all placeholder-gray-500 outline-none"
              />
            </div>

            {/* Result Count */}
            <span className="text-sm text-[var(--text-mid)]">
              Showing <span className="font-semibold text-[var(--text-light)]">{filtered.length}</span> results
            </span>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          
          {/* No results message */}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-[var(--text-mid)] text-lg">
                No products found matching your criteria.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;