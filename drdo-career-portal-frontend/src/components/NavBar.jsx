import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white font-sans w-full">
      {/* Desktop Navigation */}
      <div className="container mx-auto flex items-center justify-evenly py-3">
        {/* Logo */}
        <img
          className="max-h-13 p-2"
          src="../../public/drdo_logo_header.png"
          alt="DRDO Logo"
        />
        {/* Hamburger Menu Icon (Visible on small screens) */}
        {/* <button
          className="block md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button> */}

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 rounded-full bg-inherit text-white border border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <FiSearch className="absolute top-2/4 left-3 -translate-y-1/2 text-white" />
          </div>
          <button className="bg-white text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex justify-evenly mt-2 w-full rounded-lg p-4`}
      >
        {/* Mobile Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className=" py-2 pl-10 pr-4 rounded-full text-white border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <FiSearch className="absolute top-2/4 left-3 -translate-y-1/2 text-white" />
        </div>

        {/* Mobile Login Button */}
        <button className="relative mb-4 bg-white text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
