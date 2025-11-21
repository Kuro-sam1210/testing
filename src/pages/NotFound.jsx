import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>
      <Link to="/" className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded">Go home</Link>
    </div>
  </div>
);

export default NotFound;
