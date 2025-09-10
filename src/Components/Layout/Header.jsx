import React from "react";

export default function Header() {
  return (
    <header className="fixed left-0 z-50 w-[calc(100%-6rem)] mx-[3rem] px-6 py-4 bg-white bg-opacity-95 shadow-md" style={{ top: "6px" }}>

      {/* change border color to gray and 3px */}
      <div className="flex items-center justify-between rounded-full shadow-md px-8 py-3 border-1 border-gray-300" style={{backgroundColor: '#ffffff', paddingInline: '2rem', border: '3px solid #d1d5db'}}>

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
          <a href="#" className="text-sm font-semibold text-black hover:text-red-600" style={{color: "red", paddingRight: '20px' }} >
            Home
          </a>
          <a href="#" className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }}>
            About Us
          </a>
          <a href="#" className="text-sm font-semibold text-red-600 hover:text-black" style={{ color: "red", paddingRight: '20px' }}>
            Rooms
          </a>
          <a href="#" className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }}>
            Contact
          </a>
          <a href="#" className="text-sm font-semibold text-red-600 hover:text-black" style={{color: "red", paddingRight: '20px' }} >
            Dashboard
          </a>
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
