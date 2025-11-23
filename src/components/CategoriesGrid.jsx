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
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 border border-gray-200"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-full bg-gray-50 text-2xl">
                {cat.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
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
