"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-blue-600">MessageMate</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </a> */}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div> */}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Home
              </a>
              {/* <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Categories
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Contact Us
              </a> */}
              {/* <div className="pt-4 border-t">
                <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
                  Sign In
                </button>
                <button className="block w-full text-left px-3 py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
