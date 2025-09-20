import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 z-50 w-[calc(100%-6rem)] mx-[3rem] py-2 px-2 rounded-full bg-white/5 backdrop-blur-md" style={{ top: "6px" }}>
      <div className="flex items-center justify-between rounded-full shadow-md px-8 py-3 bg-white backdrop-blur-lg" style={{ paddingInline: '2rem'}}>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/flashrooms.png"
            alt="Flash Rooms"
            className="h-10"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to={"/"} className="text-sm font-semibold text-black hover:text-red-600" style={{color: "red", paddingRight: '20px' }} >
            Home
          </Link>
          <Link to={"/about-us"} className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }}>
            About Us
          </Link>
          <Link to={"/rooms"} className="text-sm font-semibold text-red-600 hover:text-black" style={{ color: "red", paddingRight: '20px' }}>
            Rooms
          </Link>
          <Link to={"/contact"} className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }}>
            Contact
          </Link>
          <Link to={"/"} className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }} >
            Dashboard
          </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            LOG IN
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col items-center space-y-4 z-50">
          <Link to={"/"} className="text-sm font-semibold text-red-600 hover:text-black w-full text-center" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to={"/about-us"} className="text-sm font-semibold text-red-600 hover:text-black w-full text-center" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to={"/rooms"} className="text-sm font-semibold text-red-600 hover:text-black w-full text-center" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>
          <Link to={"/contact"} className="text-sm font-semibold text-red-600 hover:text-black w-full text-center" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to={"/"} className="text-sm font-semibold text-red-600 hover:text-black w-full text-center" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <a
            href="#"
            className="bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            LOG IN
          </a>
        </div>
      )}
    </header>
  );
}
