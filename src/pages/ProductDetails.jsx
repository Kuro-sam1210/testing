import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(id)) || products[0];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[var(--surface)] rounded-[var(--radius)] p-4 shadow-[var(--shadow)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden">
              <Swiper spaceBetween={10} slidesPerView={1}>
                {(product.images || [product.image]).map((src, i) => (
                  <SwiperSlide key={i}>
                    <img src={src} alt={`${product.title}-${i}`} className="w-full h-96 object-contain bg-[var(--background)] p-4 rounded-[var(--radius)]" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-2 flex flex-col gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-dark)]">{product.title}</h1>
                <p className="text-sm text-[var(--text-mid)] mt-1">{product.subtitle}</p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="text-2xl font-extrabold text-[var(--text-dark)]">₦{product.price?.toLocaleString()}</div>
                  <div className="px-2 py-1 bg-[var(--primary-light)] text-[var(--primary)] rounded-[var(--radius)] text-sm font-medium">{product.rating} ★</div>
                </div>

                <p className="mt-4 text-[var(--text-dark)]">{product.description}</p>
              </div>

              <div className="bg-[var(--surface)] rounded-[var(--radius)] p-3 shadow-[var(--shadow)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-[var(--text-mid)]">Quantity</div>
                    <div className="flex items-center border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
                      <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 hover:bg-[var(--background)] text-[var(--text-dark)]">-</button>
                      <div className="px-4 text-[var(--text-dark)]">{qty}</div>
                      <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1 hover:bg-[var(--background)] text-[var(--text-dark)]">+</button>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[var(--text-mid)]">Stock</div>
                    <div className="text-sm font-medium text-[var(--text-dark)]">{product.stock ?? "In stock"}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={onAdd} className="flex-1 py-3 rounded-[var(--radius)] bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--surface)] font-semibold shadow-[var(--shadow)] hover:shadow-[var(--shadow)] transform hover:scale-[1.01]">Add to Cart</button>
                  <button onClick={() => navigate("/cart")} className="flex-1 py-3 rounded-[var(--radius)] border border-[var(--border)] text-[var(--text-dark)]">View Cart</button>
                </div>

                <div className="text-sm text-[var(--text-mid)] mt-3">Secure checkout • Free returns • 90-day returns</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[var(--surface)] p-4 rounded-[var(--radius)] shadow-[var(--shadow)]">
            <h3 className="font-semibold text-lg mb-3 text-[var(--text-dark)]">Product Details</h3>
            <ul className="list-disc pl-5 text-[var(--text-dark)]">
              <li>Brand: {product.brand}</li>
              <li>Condition: {product.condition ?? "New"}</li>
              <li>Category: {product.category}</li>
              <li>{product.longDescription}</li>
            </ul>
          </div>

          <div className="mt-6 bg-[var(--surface)] p-4 rounded-[var(--radius)] shadow-[var(--shadow)]">
            <h3 className="font-semibold text-lg mb-3 text-[var(--text-dark)]">Reviews ({product.reviews?.length || 0})</h3>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-3 last:border-b-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[var(--text-dark)]">{review.name}</span>
                      <div className="text-[var(--primary)]">{'★'.repeat(review.rating)}</div>
                    </div>
                    <p className="text-[var(--text-dark)]">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[var(--text-mid)]">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="bg-[var(--surface)] rounded-[var(--radius)] p-4 shadow-[var(--shadow)] sticky top-24">
            <div className="text-sm text-[var(--text-mid)] mb-2">Sponsored</div>
            <img src="/images/aside-ad-1.jpg" alt="ad" className="w-full rounded-[var(--radius)] mb-3 object-cover" />
            <p className="text-sm text-[var(--text-dark)]">Recommended for you.</p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3 text-[var(--text-dark)]">Related</h4>
            <div className="grid grid-cols-1 gap-3">
              {related.map((r) => <ProductCard key={r.id} product={r} />)}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetails;
