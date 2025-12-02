import React from "react";
import { Link } from "react-router-dom";

const MarketFooter = () => (
  // Update: Use dark surface background, light text, and the dark border
  <footer className="bg-[var(--surface)] text-[var(--text-mid)] mt-16 border-t border-[var(--border)] shadow-inner shadow-black/30">
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16">
      
      {/* Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[var(--border)] pb-8 mb-8">
        
        {/* Brand & Mission Statement */}
        <div className="col-span-2 md:col-span-2">
          {/* Use the elegant font for the brand name */}
          <h3 className="text-3xl font-serif font-bold text-[var(--primary)] mb-3">
            LuxeShop
          </h3>
          <p className="text-sm text-[var(--text-mid)] leading-relaxed">
            Discover the world's finest curated electronics and accessories. Experience high-contrast luxury with every purchase.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg text-[var(--text-light)] mb-4">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-[var(--primary)] transition-colors">All Products</Link></li>
            <li><Link to="/deals" className="hover:text-[var(--primary)] transition-colors">Today's Deals</Link></li>
            <li><Link to="/categories" className="hover:text-[var(--primary)] transition-colors">Categories</Link></li>
            <li><Link to="/new" className="hover:text-[var(--primary)] transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-lg text-[var(--text-light)] mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-[var(--primary)] transition-colors">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-[var(--primary)] transition-colors">Returns & Refunds</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-[var(--primary)] transition-colors">Shipping Info</Link></li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg text-[var(--text-light)] mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Legal Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-md">
        
        {/* Copyright */}
        <div className="text-[var(--text-mid)] font-medium">
          © {new Date().getFullYear()} LuxeShop. All rights reserved.
        </div>
        
        {/* Secure Bar */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-[var(--text-dim)]">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Secure payments
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            Free returns
          </span>
        </div>
      </div>

    </div>
  </footer>
);

export default MarketFooter;