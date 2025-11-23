import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-1 group"
  >
    {/* Image Area */}
    <div className="relative h-48 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
      {product.originalPrice && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
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
      <h3 className="text-sm font-semibold line-clamp-2 text-gray-800">
        {product.title}
      </h3>

      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
        {product.subtitle || ""}
      </p>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-lg font-bold text-black">
            ₦{product.price?.toLocaleString()}
          </div>
          {product.originalPrice && (
            <div className="text-xs text-gray-400 line-through">₦{product.originalPrice?.toLocaleString()}</div>
          )}
        </div>

        <div className="text-xs font-medium bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
          {product.rating}★
        </div>
      </div>

      <div className="mt-2 text-xs text-green-600 font-medium">Free shipping</div>
    </div>
  </Link>
);

export default ProductCard;
