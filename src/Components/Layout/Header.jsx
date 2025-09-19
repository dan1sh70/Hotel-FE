import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed left-0 z-50 w-[calc(100%-6rem)] mx-[3rem] py-2 px-2 rounded-full bg-white/5 backdrop-blur-md" style={{ top: "6px" }}>

      {/* change border color to gray and 3px */}
      <div className="flex items-center justify-between rounded-full shadow-md px-8 py-3 bg-white backdrop-blur-lg" style={{ paddingInline: '2rem'}}>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/flashrooms.png" // replace with your logo path
            alt="Flash Rooms"
            className="h-10"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8">
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
        <div>
          <a
          href="#"
          className="bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          LOG IN
        </a>
        </div>
      </div>
    </header>
  );
}
