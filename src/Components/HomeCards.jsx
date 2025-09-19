// import React from 'react'

import { FaLocationDot } from "react-icons/fa6"

function HomeCards({name, location, img}) {
  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg bg-white">
      
          <img
            src={img}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
    
          <div className="absolute bottom-0 left-0 w-full bg-yellow-400/25 backdrop-blur-md px-4 py-2">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-white/70 rounded-full"></div>
            </div>
    
            {/* Title */}
            <h2 className="text-lg text-center font-bold text-white">
                {name}
            </h2>
    
            {/* Location */}
            <p className="flex items-center text-sm text-gray-200 mt-1 justify-center">
              <FaLocationDot className="mr-2 text-white" />
                {location}
            </p>
    
          </div>
        </div>
  )
}

export default HomeCards
