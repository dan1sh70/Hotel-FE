// import React from 'react'

import { FaStar, FaLocationDot } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

function HotelCard({name, location, price, img}) {
  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg bg-white">
  
      <img
        src={img}
        alt="Hotel"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-white/15 backdrop-blur-xl px-4 py-2">
        <div className="flex justify-center mb-2">
          <div className="w-12 h-1 bg-white/70 rounded-full"></div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-white">
            {name}
        </h2>

        {/* Location */}
        <p className="flex items-center text-sm text-gray-200 mt-1">
          <FaLocationDot className="mr-2 text-white" />
            {location}
        </p>

        {/* Price */}
        <p className="text-white text-sm mt-2">
          Starting at{" "}
          <span className="font-bold text-lg">₹{price}</span>
          <span className="text-sm font-normal"> /per day</span>
        </p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-yellow-400">
            <FaStar className="mr-1" />
            <span className="text-white">5.0</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
            <FiShare2 className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
