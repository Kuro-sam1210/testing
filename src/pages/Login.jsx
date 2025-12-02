import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Mock login logic
    login({ email: form.email, name: form.email.split("@")[0] });
    navigate("/");
  };

  return (
    // Background: Use the main dark background
    <div className="min-h-[80vh] flex items-center justify-center bg-[var(--background)] px-4 py-12">
      {/* Form Card: Dark surface, elegant shadow, border */}
      <div className="w-full max-w-md bg-[var(--surface)] rounded-xl p-8 shadow-luxe border border-[var(--border)]">
        
        {/* Title: Elegant font-serif and light text */}
        <h2 className="text-4xl font-serif font-bold mb-8 text-center text-[var(--text-light)]">
          Welcome Back
        </h2>

        <form onSubmit={submit} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-mid)] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              // Input Styling: Dark background, light text, primary focus
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition placeholder-gray-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-mid)] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              // Input Styling: Dark background, light text, primary focus
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--text-light)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition placeholder-gray-500"
            />
          </div>

          {/* Submit Button: Primary CTA, full contrast */}
          <button
            type="submit"
            className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--background)] rounded-lg font-bold transition shadow-md shadow-amber-900 text-lg mt-8"
          >
            Sign In to LuxeShop
          </button>

          {/* Registration Link */}
          <div className="text-center text-sm text-[var(--text-mid)] pt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              // Link Styling: Primary text accent, subtle hover
              className="text-[var(--primary)] font-medium hover:text-[var(--primary-light)] transition"
            >
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;