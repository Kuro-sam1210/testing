import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "shoes", name: "Shoes", icon: "👟" },
  { id: "speakers", name: "Speakers", icon: "🔊" },
  { id: "apparel", name: "Apparel", icon: "👕" },
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "watches", name: "Watches", icon: "⌚" },
  { id: "bags", name: "Bags", icon: "👜" },
  { id: "gaming", name: "Gaming", icon: "🎮" },
  { id: "laptops", name: "Laptops", icon: "💻" },
  { id: "phones", name: "Phones", icon: "📞" },
  { id: "accessories", name: "Accessories", icon: "🛍️" },
  { id: "home", name: "Home", icon: "🏠" },
  { id: "all", name: "All", icon: "🛒" },
];

const CategoriesGrid = () => {
  return (
    // Update: Remove white background and rely on the inherited background
    <section className="py-8"> 
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Title: Use the elegant font-serif and light text */}
        <h2 className="text-3xl font-serif font-bold mb-8 text-[var(--text-light)]">
          Browse Categories
        </h2>
        {/* Layout: Increased gap for better spacing in dark theme */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              // Card Styling: Dark surface, sharp shadow, light text
              className="flex flex-col items-center p-4 bg-[var(--surface)] rounded-xl shadow-luxe hover:scale-[1.03] transition-transform duration-300 border border-[var(--border)]"
            >
              {/* Icon Container: Use deep background for maximum icon visibility */}
              <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-full bg-[var(--background)] text-3xl">
                {cat.icon}
              </div>
              {/* Text Styling: Light text, bolded for emphasis */}
              <span className="text-sm font-bold text-[var(--text-light)] text-center mt-2">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;