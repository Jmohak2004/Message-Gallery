import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0">
          <div className="text-xl font-bold text-blue-600">TemplateHub</div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact Us
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
