import React from "react";
import logo from "../Assets/FixHealthLogo.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Fix Health Logo" />

        <div className="flex space-x-4 text-md">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About</a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
