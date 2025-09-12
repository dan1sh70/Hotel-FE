import React from 'react';
import { MapPin, Users, Calendar, ChevronDown } from 'lucide-react';

const TempleBooking = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./temple.png')`
         }}>
      
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            FlashRooms Available Near
            <br />
            All Major Temples
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Discover the perfect room for your family
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-4 w-full max-w-5xl">
          <div className="flex flex-row items-center gap-2">
            
            {/* Location Search */}
            <div className="relative flex-1 bg-white py-1 px-2 rounded-3xl">
              <div className="flex items-center">
                <div className="bg-red-500 rounded-full p-2 mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <input
                  type="text"
                  placeholder="Search location"
                  className="flex-1 py-3 pr-8 outline-none text-gray-800 text-sm"
                />
                <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Child Selector */}
            <div className="flex items-center px-6 cursor-pointer rounded-3xl bg-white py-4">
              <span className="text-gray-700 text-sm mr-2">Child</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Adult Selector */}
            <div className="flex items-center px-6 cursor-pointer rounded-3xl bg-white py-4">
              <span className="text-gray-700 text-sm mr-2">Adult</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Check Availability Button */}
            <button className="flex items-center gap-2 px-6 py-4 cursor-pointer rounded-3xl bg-white hover:bg-gray-100 transition duration-300">
              <div className="bg-red-500 rounded-full p-1">
                <Calendar className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm font-medium">Check Availability</span>
            </button>

            {/* Book Now Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-3xl font-semibold transition-colors text-sm ml-2">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-4 flex-nowrap">
            <span className="text-white font-medium whitespace-nowrap">Trending Searches -</span>
            <button className="bg-white/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap">
              Srirangam
            </button>
            <button className="bg-white/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap">
              Malai Kottai
            </button>
            <button className="bg-white/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap">
              Thiruvanaikail
            </button>
            <button className="bg-white/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap">
              Samayapuram
            </button>
            <button className="bg-white/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap">
              Thiruverumbur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleBooking;