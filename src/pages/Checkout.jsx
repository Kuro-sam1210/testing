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

  // Calculate the total cost
  const total = cart.reduce((acc, c) => acc + (c.price || 0) * (c.qty || 1), 0);
  
  // Example shipping cost and tax (added for realism)
  const shipping = total > 50000 ? 0 : 5000;
  const taxRate = 0.05;
  const tax = total * taxRate;
  const grandTotal = total + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Mock checkout
    alert("Order placed successfully! Thank you for choosing LuxeShop.");
    clearCart();
    navigate("/");
  };

  // Empty cart state styling
  if (cart.length === 0) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-16 bg-[var(--background)] min-h-[50vh]">
        <div className="max-w-4xl mx-auto text-center p-8 bg-[var(--surface)] rounded-xl shadow-luxe border border-[var(--border)]">
          <p className="text-xl text-[var(--text-light)]">
            🛒 Your cart is empty. <a href="/products" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-hover)] transition-colors">Shop now</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        
        {/* Title: Elegant font-serif and primary text color */}
        <h2 className="text-4xl font-serif font-bold mb-10 text-[var(--text-light)] border-b border-[var(--border)] pb-4">
          Secure Checkout
        </h2>

        <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT SIDE: Shipping & Payment (span 2 columns) */}
          <div className="space-y-8 lg:col-span-2">
            
            {/* Shipping Information */}
            <div className="bg-[var(--surface)] p-8 rounded-xl shadow-luxe border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)] border-b border-[var(--border)] pb-2">
                1. Shipping Information
              </h3>
              <div className="space-y-4">
                {/* Input Fields: Styled for Dark Theme */}
                {['name', 'email', 'address', 'city', 'zip'].map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-light)] capitalize">
                      {key.replace('zip', 'ZIP Code').replace('cardnumber', 'Card Number')}
                    </label>
                    <input
                      type={key === 'email' ? 'email' : 'text'}
                      name={key}
                      required
                      value={form[key]}
                      onChange={handleInputChange}
                      // Input Styling: Dark background, light text, primary focus ring
                      className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-[var(--surface)] p-8 rounded-xl shadow-luxe border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)] border-b border-[var(--border)] pb-2">
                2. Payment Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-light)]">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    value={form.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-light)]">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      required
                      value={form.expiry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--text-light)]">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      value={form.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE: Order Summary (span 1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--surface)] p-8 rounded-xl shadow-luxe border border-[var(--border)] h-fit sticky top-20">
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary)] border-b border-[var(--border)] pb-2">
                3. Order Summary
              </h3>
              
              {/* Item List */}
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-[var(--text-mid)]">
                    <span className="truncate pr-2">{item.title} ({item.qty})</span>
                    <span className="font-medium text-[var(--text-light)]">₦{((item.price || 0) * (item.qty || 1)).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              
              {/* Cost Details */}
              <div className="border-t border-[var(--border)] pt-4 space-y-2">
                <div className="flex justify-between text-sm text-[var(--text-mid)]">
                  <span>Subtotal:</span>
                  <span className="font-medium">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[var(--text-mid)]">
                  <span>Shipping:</span>
                  <span className="font-medium">{shipping === 0 ? 'FREE' : `₦${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between text-sm text-[var(--text-mid)]">
                  <span>Tax (5%):</span>
                  <span className="font-medium">₦{tax.toLocaleString()}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-t border-[var(--border)] mt-4 pt-4">
                <div className="flex justify-between font-extrabold text-xl text-[var(--primary)]">
                  <span>Grand Total</span>
                  <span>₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit" // Associate with the main form
                className="w-full mt-6 px-4 py-3 bg-[var(--primary)] text-[var(--background)] rounded-lg font-bold shadow-luxe hover:bg-[var(--primary-hover)] transition-colors text-lg"
              >
                Place Order
              </button>
              
              {/* Security Message */}
              <p className="text-center text-xs text-[var(--text-mid)] mt-3">
                <span className="text-[var(--success)] mr-1">🔒</span> Payments are secure and encrypted.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;