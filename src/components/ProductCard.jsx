import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    className="bg-[var(--surface)] rounded-[var(--radius)] p-4 shadow-[var(--shadow)] hover:shadow-[var(--shadow)] transition-all border border-[var(--border)] hover:-translate-y-1 group"
  >
    {/* Image Area */}
    <div className="relative h-48 flex items-center justify-center bg-[var(--background)] rounded-[var(--radius)] overflow-hidden">
      {product.originalPrice && (
        <div className="absolute top-2 left-2 bg-[var(--primary)] text-[var(--surface)] text-xs px-2 py-1 rounded-[var(--radius)] z-10">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Info Area */}
    <div className="mt-3">
      <h3 className="text-sm font-semibold line-clamp-2 text-[var(--text-dark)]">
        {product.title}
      </h3>

      <p className="text-xs text-[var(--text-mid)] mt-1 line-clamp-1">
        {product.subtitle || ""}
      </p>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-lg font-bold text-[var(--text-dark)]">
            ₦{product.price?.toLocaleString()}
          </div>
          {product.originalPrice && (
            <div className="text-xs text-[var(--text-light)] line-through">₦{product.originalPrice?.toLocaleString()}</div>
          )}
        </div>

        <div className="text-xs font-medium bg-[var(--primary-light)] text-[var(--primary)] px-2 py-1 rounded-full">
          {product.rating}★
        </div>
      </div>

      <div className="mt-2 text-xs text-[var(--primary)] font-medium">Free shipping</div>
    </div>
  </Link>
);

export default ProductCard;
