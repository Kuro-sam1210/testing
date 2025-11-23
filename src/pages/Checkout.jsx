import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const total = cart.reduce((acc, c) => acc + (c.price || 0) * (c.qty || 1), 0);

  const submit = (e) => {
    e.preventDefault();
    // Mock checkout
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[var(--text-dark)]">Your cart is empty. <a href="/products" className="text-[var(--primary)]">Shop now</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--text-dark)]">Checkout</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[var(--surface)] p-6 rounded-[var(--radius)] shadow-[var(--shadow)]">
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-dark)]">Shipping Information</h3>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">Address</label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => setForm(f => ({ ...f, address: e.target.value }))}
                    className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">City</label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm(f => ({ ...f, city: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={form.zip}
                      onChange={(e) => setForm(f => ({ ...f, zip: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-[var(--surface)] p-6 rounded-[var(--radius)] shadow-[var(--shadow)]">
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-dark)]">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">Card Number</label>
                  <input
                    type="text"
                    required
                    value={form.cardNumber}
                    onChange={(e) => setForm(f => ({ ...f, cardNumber: e.target.value }))}
                    className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={form.expiry}
                      onChange={(e) => setForm(f => ({ ...f, expiry: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-dark)]">CVV</label>
                    <input
                      type="text"
                      required
                      value={form.cvv}
                      onChange={(e) => setForm(f => ({ ...f, cvv: e.target.value }))}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text-dark)]"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface)] p-6 rounded-[var(--radius)] shadow-[var(--shadow)] h-fit">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-dark)]">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-[var(--text-dark)]">
                  <span>{item.title} x{item.qty}</span>
                  <span>₦{((item.price || 0) * (item.qty || 1)).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--border)] pt-4">
              <div className="flex justify-between font-semibold text-[var(--text-dark)]">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={submit}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--surface)] rounded-[var(--radius)] font-semibold shadow-[var(--shadow)]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;