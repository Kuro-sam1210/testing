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
    <div className="px-4 md:px-8 lg:px-16 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="md:col-span-1">
          <CategorySidebar active={activeCat} onSelect={setActiveCat} />
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-3">

          {/* Search + Result Count */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-300 bg-white
                           shadow-sm focus:ring-2 focus:ring-black/70 focus:border-black/70
                           transition-all"
              />
            </div>

            <span className="text-sm text-gray-500">
              Results: <span className="font-semibold text-gray-700">{filtered.length}</span>
            </span>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
