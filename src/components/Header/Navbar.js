import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white bg-opacity-70" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex space-x-4">
            {leftNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-dark hover:bg-gray-200 px-3 py-2 rounded-md text-[15px] font-medium font-playfair"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-darkGreen text-[36px] font-bold text-xl"
            >
              biom
            </Link>
          </div>

          <div className="hidden md:flex">
            {rightNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-dark hover:bg-gray-200 px-3 py-2 rounded-md text-[15px] font-medium font-playfair"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`block absolute h-0.5 w-full bg-gray-700 transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 top-2.5" : "top-0"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-full bg-gray-700 transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "top-2.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-full bg-gray-700 transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 top-2.5" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {leftNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </Link>
            ))}
            {rightNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const leftNavLinks = [
  { path: "/shop", text: "Shop" },
  { path: "/why-biom", text: "Why biom" },
  { path: "/scents", text: "Scents" },
];

const rightNavLinks = [
  { path: "/chart", text: "Chart" },
  { path: "/signIn", text: "Sign In" },
];
