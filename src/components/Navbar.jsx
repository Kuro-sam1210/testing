import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    // Navbar Background: Dark surface, sticky, prominent shadow
    <nav className="bg-[var(--surface)] border-b border-[var(--border)] shadow-luxe sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">

          {/* Brand */}
          <Link to="/" className="text-3xl font-serif font-extrabold tracking-tight transition">
            {/* Title: Use primary text color for the brand, removing the complex gradient */}
            <span className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors">
              LuxeShop
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6 md:gap-8">

            {/* Links */}
            <Link
              to="/products"
              // Link Styling: Light text, primary color on hover
              className="hidden sm:block text-[var(--text-light)] font-medium hover:text-[var(--primary)] transition"
            >
              Products
            </Link>
            
            <Link
              to="/deals"
              className="hidden md:block text-[var(--text-light)] font-medium hover:text-[var(--primary)] transition"
            >
              Deals
            </Link>

            {/* Cart Button */}
            <Link 
              to="/cart" 
              // Cart Button: Prominent text color, primary on hover
              className="relative text-[var(--text-light)] font-medium hover:text-[var(--primary)] transition"
            >
              <span className="inline-flex items-center gap-1.5">
                {/* Cart Icon: Using a simple SVG for better styling control */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                {/* <span className="hidden sm:inline">Cart</span> */}
              </span>
              {/* Cart Counter: High contrast primary background, dark text */}
              <span className="absolute -top-2 -right-4 bg-[var(--primary)] text-[var(--background)] rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-luxe">
                {cart.length}
              </span>
            </Link>

            {/* Auth Block */}
            {user ? (
              <div className="flex items-center gap-4">
                {/* User Link */}
                <Link to="/profile" className="text-[var(--text-mid)] text-sm font-medium hover:text-[var(--primary)] transition">
                  Hi, {user.name || user.email.split('@')[0]}
                </Link>

                {/* Logout Button: Secondary, prominent button */}
                <button
                  onClick={logout}
                  // Styling: Dark background, light border, light text
                  className="px-4 py-1.5 bg-[var(--background)] border border-[var(--border)] text-[var(--text-light)] rounded-lg text-sm hover:bg-[var(--border)] transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Sign In Button: Primary CTA, full contrast
              <Link
                to="/login"
                className="px-5 py-2 bg-[var(--primary)] text-[var(--background)] rounded-lg font-bold shadow-luxe hover:bg-[var(--primary-hover)] transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;