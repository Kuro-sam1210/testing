import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">

          {/* Brand */}
          <Link to="/" className="text-2xl font-bold tracking-wide transition">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Market
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            {/* Links */}
            <Link
              to="/products"
              className="text-gray-700 font-medium hover:text-black transition"
            >
              Products
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 font-medium hover:text-black transition">
              <span className="inline-flex items-center gap-2">
                <span className="text-lg">🛒</span>
                <span className="hidden sm:inline">Cart</span>
              </span>
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow">
                {cart.length}
              </span>
            </Link>

            {/* Auth */}
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/profile" className="text-gray-700 text-sm font-medium hover:text-black transition">
                  {user.name || user.email}
                </Link>

                <button
                  onClick={logout}
                  className="px-4 py-1.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-semibold shadow hover:opacity-95 transition"
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
