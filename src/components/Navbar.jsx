import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-[var(--surface)] shadow-[var(--shadow)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">

          {/* Brand */}
          <Link to="/" className="text-2xl font-bold tracking-wide transition">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">
              Market
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            {/* Links */}
            <Link
              to="/products"
              className="text-[var(--text-mid)] font-medium hover:text-[var(--text-dark)] transition"
            >
              Products
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-[var(--text-mid)] font-medium hover:text-[var(--text-dark)] transition">
              <span className="inline-flex items-center gap-2">
                <span className="text-lg">🛒</span>
                <span className="hidden sm:inline">Cart</span>
              </span>
              <span className="absolute -top-2 -right-4 bg-[var(--primary)] text-[var(--surface)] rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-[var(--shadow)]">
                {cart.length}
              </span>
            </Link>

            {/* Auth */}
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/profile" className="text-[var(--text-mid)] text-sm font-medium hover:text-[var(--text-dark)] transition">
                  {user.name || user.email}
                </Link>

                <button
                  onClick={logout}
                  className="px-4 py-1.5 bg-[var(--background)] border border-[var(--border)] text-[var(--text-dark)] rounded-[var(--radius)] text-sm hover:bg-[var(--surface)] transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--surface)] rounded-full font-semibold shadow-[var(--shadow)] hover:opacity-95 transition"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
