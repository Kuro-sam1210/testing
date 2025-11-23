import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((acc, c) => acc + (c.price || 0) * (c.qty || 1), 0);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--text-dark)]">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-[var(--surface)] p-8 rounded-[var(--radius)] shadow-[var(--shadow)] text-center">
            <p className="mb-4 text-[var(--text-dark)]">Your cart is empty.</p>
            <Link to="/products" className="inline-block px-6 py-3 bg-[var(--primary)] text-[var(--surface)] rounded-[var(--radius)]">Shop Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-[var(--surface)] rounded-[var(--radius)] p-4 flex gap-4 items-center shadow-[var(--shadow)]">
                  <img src={item.image} alt={item.title} className="w-28 h-28 object-contain rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text-dark)]">{item.title}</h3>
                    <p className="text-[var(--text-mid)] text-sm">₦{item.price?.toLocaleString()}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, Math.max(1, (item.qty || 1) - 1))} className="px-3 py-1 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]">-</button>
                      <div className="px-4 text-[var(--text-dark)]">{item.qty}</div>
                      <button onClick={() => updateQty(item.id, (item.qty || 1) + 1)} className="px-3 py-1 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]">+</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[var(--text-dark)]">₦{((item.price || 0) * (item.qty || 1)).toLocaleString()}</div>
                    <button onClick={() => removeFromCart(item.id)} className="mt-2 text-[var(--primary)] text-sm hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-[var(--surface)] rounded-[var(--radius)] p-4 shadow-[var(--shadow)]">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg text-[var(--text-dark)]">Order summary</h4>
                <button onClick={clearCart} className="text-sm text-[var(--text-mid)] hover:underline">Clear</button>
              </div>

              <div className="flex justify-between mt-4">
                <span className="text-sm text-[var(--text-light)]">Subtotal</span>
                <span className="font-semibold text-[var(--text-dark)]">₦{total.toLocaleString()}</span>
              </div>

              <div className="mt-4">
                <button onClick={() => navigate('/checkout')} className="w-full px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--surface)] rounded-[var(--radius)] font-semibold shadow-[var(--shadow)]">Checkout</button>
              </div>

              <div className="text-xs text-[var(--text-mid)] mt-3">Secure Checkout • Free returns</div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
