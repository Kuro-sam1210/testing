import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    // Card Styling: Dark surface, sharp shadow (shadow-luxe), and distinct hover effect
    className="block bg-[var(--surface)] rounded-xl p-4 shadow-luxe transition-all border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-2xl hover:-translate-y-1 group"
  >
    {/* Image Area */}
    {/* Image Container: Uses the deeper background color to make the product stand out */}
    <div className="relative h-48 flex items-center justify-center bg-[var(--background)] rounded-lg overflow-hidden">
      
      {/* Discount Badge */}
      {product.originalPrice && (
        <div 
          // Discount Badge: Use the bright primary color for the background
          className="absolute top-2 left-2 bg-[var(--primary)] text-[var(--background)] text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md"
        >
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="max-h-40 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    {/* Info Area */}
    <div className="mt-4">
      
      {/* Title */}
      <h3 className="text-md font-semibold line-clamp-2 text-[var(--text-light)]">
        {product.title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs text-[var(--text-mid)] mt-1 line-clamp-1">
        {product.subtitle || product.category || ""}
      </p>

      <div className="flex items-center justify-between mt-3">
        <div>
          {/* Current Price: Highlighted with primary color */}
          <div className="text-xl font-extrabold text-[var(--primary)]">
            ₦{product.price?.toLocaleString()}
          </div>
          
          {/* Original Price (Strikethrough) */}
          {product.originalPrice && (
            <div className="text-xs text-[var(--text-mid)] line-through mt-0.5">
              ₦{product.originalPrice?.toLocaleString()}
            </div>
          )}
        </div>

        {/* Rating Badge */}
        <div className="text-xs font-medium bg-yellow-700/50 text-yellow-300 px-2 py-1 rounded-full">
          {product.rating}★
        </div>
      </div>

      {/* Free Shipping Callout */}
      <div className="mt-2 text-xs text-[var(--text-mid)] font-medium">
        <span className="text-[var(--success)] mr-1">✓</span> Free shipping
      </div>
    </div>
  </Link>
);

export default ProductCard;