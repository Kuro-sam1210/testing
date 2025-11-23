import React from "react";

const Footer = () => (
  <footer className="bg-white text-gray-700 mt-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm md:text-base font-medium">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
      <div className="text-xs md:text-sm text-gray-500 mt-2 md:mt-0 flex flex-col md:flex-row gap-2 md:gap-4">
        <span>Secure payments</span>
        <span>•</span>
        <span>Free returns</span>
      </div>
    </div>
  </footer>
);

export default Footer;
