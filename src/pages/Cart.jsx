import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((acc, c) => acc + (c.price || 0) * (c.qty || 1), 0);

  return (
    // Outer container should blend with the background
    <div className="bg-[var(--background)] min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Title: Use the elegant heading font */}
        <h2 className="text-3xl font-serif font-bold mb-8 text-[var(--text-light)] border-b border-[var(--border)] pb-3">
          Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          // Empty Cart State
          <div className="bg-[var(--surface)] p-12 rounded-xl shadow-luxe text-center border border-[var(--border)]">
            <p className="mb-6 text-xl text-[var(--text-mid)] font-serif">
              Your cart is empty. Time to find some luxury!
            </p>
            <Link 
              to="/products" 
              // CTA: High contrast button using primary color
              className="inline-block px-8 py-3 bg-[var(--primary)] text-[var(--background)] font-bold rounded-xl shadow-luxe hover:bg-[var(--primary-hover)] transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  // Cart Item Card: Use surface color, deep shadow, and light text
                  className="bg-[var(--surface)] rounded-xl p-4 flex gap-6 items-center shadow-luxe border border-[var(--border)]"
                >
                  {/* Image: Use surface as background for product image */}
                  <div className="w-24 h-24 flex items-center justify-center bg-[var(--background)] rounded-lg p-2">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[var(--text-light)]">{item.title}</h3>
                    <p className="text-[var(--text-mid)] text-sm">₦{item.price?.toLocaleString()}</p>

                    {/* Quantity Controls */}
                    <div className="mt-3 flex items-center gap-2">
                      <button 
                        onClick={() => updateQty(item.id, Math.max(1, (item.qty || 1) - 1))} 
                        // Qty Button Styling: Light border, light text
                        className="px-3 py-1 border border-[var(--border)] rounded-full text-[var(--text-light)] hover:bg-[var(--border)] transition-colors"
                      >
                        –
                      </button>
                      <div className="px-4 font-bold text-[var(--text-light)]">{item.qty}</div>
                      <button 
                        onClick={() => updateQty(item.id, (item.qty || 1) + 1)} 
                        className="px-3 py-1 border border-[var(--border)] rounded-full text-[var(--text-light)] hover:bg-[var(--border)] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Price & Remove Button */}
                  <div className="text-right">
                    <div className="font-bold text-xl text-[var(--primary)]">
                      ₦{((item.price || 0) * (item.qty || 1)).toLocaleString()}
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      // Remove link styling
                      className="mt-1 text-[var(--text-mid)] text-sm hover:text-[var(--error)] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Continue Shopping Button */}
              <div className="pt-4">
                <Link to="/products" className="text-[var(--text-mid)] hover:text-[var(--primary)] transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary & Checkout Sidebar */}
            <aside 
              className="bg-[var(--surface)] rounded-xl p-6 shadow-luxe h-fit sticky top-5 border border-[var(--border)]"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <h4 className="font-serif font-semibold text-xl text-[var(--text-light)]">Order Summary</h4>
                <button onClick={clearCart} className="text-sm text-[var(--text-mid)] hover:text-[var(--error)] transition-colors">
                  Clear All
                </button>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center pt-4">
                <span className="text-md text-[var(--text-mid)]">Subtotal ({cart.length} items)</span>
                <span className="font-bold text-xl text-[var(--text-light)]">₦{total.toLocaleString()}</span>
              </div>
              
              {/* Optional: Add a subtle divider before the total */}
              <hr className="my-5 border-[var(--border)]" />
              
              {/* Total & Checkout Button */}
              <div className="mt-4">
                 <div className="flex justify-between font-bold text-2xl mb-4 text-[var(--text-light)]">
                    <span>Order Total</span>
                    <span className="text-[var(--primary)]">₦{total.toLocaleString()}</span>
                 </div>
                <button 
                  onClick={() => navigate('/checkout')} 
                  // Checkout CTA: Use strong primary color, background text, and deep shadow
                  className="w-full px-4 py-4 bg-[var(--primary)] text-[var(--background)] rounded-xl font-extrabold shadow-luxe hover:bg-[var(--primary-hover)] transition-all text-lg"
                >
                  Proceed to Secure Checkout
                </button>
              </div>

              <div className="text-xs text-center text-[var(--text-mid)] mt-3">
                <svg className="w-4 h-4 inline-block mr-1 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.617 7.383a5.996 5.996 0 00-7.37-7.37m-1.743-1.744a9.998 9.998 0 0117.747 0m-7.37 7.37a5.996 5.996 0 00-7.37-7.37"></path></svg>
                Secure Payment • Free returns on all orders
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;