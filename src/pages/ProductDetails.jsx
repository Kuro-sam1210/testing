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
  // Ensure product existence check is robust
  const product = products.find((p) => String(p.id) === String(id)) || products[0];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    // Outer container blends with background
    <div className="bg-[var(--background)] min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* === MAIN PRODUCT INFO (Image, Details, Specs) === */}
        <div className="lg:col-span-2 space-y-6">
            
          {/* Main Product Card Container */}
          <div className="bg-[var(--surface)] rounded-xl p-6 shadow-luxe border border-[var(--border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Product Image Gallery */}
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
                <Swiper spaceBetween={15} slidesPerView={1} className="w-full">
                  {(product.images || [product.image]).map((src, i) => (
                    <SwiperSlide key={i}>
                      {/* Image container should use the deep background to highlight the product */}
                      <img 
                        src={src} 
                        alt={`${product.title}-${i}`} 
                        className="w-full h-96 object-contain bg-[var(--background)] p-6 rounded-lg" 
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Product Details & Actions */}
              <div className="p-2 flex flex-col gap-6">
                
                <div>
                  {/* Title: Use font-serif for elegance */}
                  <h1 className="text-3xl font-serif font-bold text-[var(--text-light)]">{product.title}</h1>
                  <p className="text-sm text-[var(--text-mid)] mt-1">{product.subtitle}</p>

                  <div className="mt-4 flex items-center gap-4 border-b border-[var(--border)] pb-4">
                    {/* Price: Highlighted with primary color */}
                    <div className="text-3xl font-extrabold text-[var(--primary)]">
                      ₦{product.price?.toLocaleString()}
                    </div>
                    {/* Rating Pill */}
                    <div className="px-3 py-1 bg-yellow-700/50 text-yellow-300 rounded-full text-sm font-medium">
                      {product.rating} ★
                    </div>
                  </div>

                  <p className="mt-4 text-[var(--text-mid)] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quantity, Stock & CTA Block */}
                <div className="bg-[var(--background)] rounded-lg p-4 shadow-inner border border-[var(--border)]">
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-md text-[var(--text-mid)]">Quantity</div>
                      <div className="flex items-center border border-[var(--border)] rounded-full overflow-hidden">
                        {/* Quantity Buttons */}
                        <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 hover:bg-[var(--surface)] text-[var(--text-light)] transition-colors">–</button>
                        <div className="px-4 font-bold text-[var(--text-light)] bg-[var(--surface)]">{qty}</div>
                        <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1 hover:bg-[var(--surface)] text-[var(--text-light)] transition-colors">+</button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-md text-[var(--text-mid)]">Stock</div>
                      <div className={`text-lg font-bold ${product.stock ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
                        {product.stock ? "In Stock" : "Sold Out"}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart & View Cart Buttons */}
                  <div className="flex gap-3 mt-3">
                    <button 
                      onClick={onAdd} 
                      disabled={!product.stock}
                      // Primary CTA: High contrast, gold background
                      className={`flex-1 py-3 rounded-xl ${!product.stock ? 'bg-gray-700 text-gray-400' : 'bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary-hover)]'} font-extrabold shadow-luxe transition-all transform hover:scale-[1.01]`}
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => navigate("/cart")} 
                      // Secondary CTA: Bordered, light text
                      className="flex-1 py-3 rounded-xl border border-[var(--border)] text-[var(--text-light)] hover:bg-[var(--surface)] transition-colors font-medium"
                    >
                      View Cart
                    </button>
                  </div>

                  <div className="text-xs text-[var(--text-mid)] mt-4 text-center">
                    Secure checkout • Free returns • 90-day returns
                  </div>
                </div> {/* End CTA Block */}

              </div> {/* End Product Details */}
            </div> {/* End Grid */}
          </div> {/* End Main Product Card */}

          {/* Product Details Section */}
          <div className="bg-[var(--surface)] p-6 rounded-xl shadow-luxe border border-[var(--border)]">
            <h3 className="font-serif text-2xl mb-4 text-[var(--text-light)] border-b border-[var(--border)] pb-2">
              Technical Specifications
            </h3>
            <ul className="list-disc pl-5 text-[var(--text-mid)] space-y-1">
              <li className="text-[var(--text-light)]">Brand: <span className="text-[var(--text-mid)]">{product.brand}</span></li>
              <li className="text-[var(--text-light)]">Condition: <span className="text-[var(--text-mid)]">{product.condition ?? "New"}</span></li>
              <li className="text-[var(--text-light)]">Category: <span className="text-[var(--text-mid)]">{product.category}</span></li>
              <li className="text-[var(--text-mid)]">{product.longDescription}</li>
            </ul>
          </div>
          
          {/* Reviews Section */}
          <div className="bg-[var(--surface)] p-6 rounded-xl shadow-luxe border border-[var(--border)]">
            <h3 className="font-serif text-2xl mb-4 text-[var(--text-light)] border-b border-[var(--border)] pb-2">
              Customer Reviews ({product.reviews?.length || 0})
            </h3>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-4 last:border-b-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium text-[var(--text-light)]">{review.name}</span>
                      <div className="text-[var(--primary)]">{'★'.repeat(review.rating)}</div>
                      <span className="text-sm text-[var(--text-mid)] ml-auto">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-[var(--text-mid)] italic">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[var(--text-mid)]">
                No reviews yet. <span className="text-[var(--primary)] cursor-pointer">Write the first review!</span>
              </p>
            )}
          </div>

        </div> {/* === END MAIN PRODUCT INFO === */}

        {/* === RELATED PRODUCTS SIDEBAR === */}
        <aside className="hidden lg:block space-y-6">
          
          {/* Ad/Sponsored Block (Sticky) */}
          <div className="bg-[var(--surface)] rounded-xl p-4 shadow-luxe sticky top-24 border border-[var(--border)]">
            <div className="text-xs text-[var(--text-dim)] mb-2 uppercase tracking-wider">Sponsored</div>
            <img src="/images/aside-ad-1.jpg" alt="ad" className="w-full rounded-lg mb-3 object-cover" />
            <p className="text-sm text-[var(--text-mid)]">Discover more exclusive luxury accessories.</p>
          </div>

          {/* Related Products List */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-[var(--text-light)] border-b border-[var(--border)] pb-2">
              You Might Also Like
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {/* ProductCard must be styled for the dark theme */}
              {related.map((r) => <ProductCard key={r.id} product={r} />)}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ProductDetails;