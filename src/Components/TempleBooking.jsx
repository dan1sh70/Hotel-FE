import React from 'react';
import { MapPin, Users, Calendar, ChevronDown } from 'lucide-react';

const TempleBooking = () => {
  return (
<<<<<<< HEAD
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('landing-bg.png')",
      }}
    >
=======
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./temple.png')`
         }}>
      
>>>>>>> 55cdd9dedfbfe59e9fa9684571205fee11f4a8f0
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            FlashRooms Available Near
            <br className="hidden md:block" />
            All Major Temples
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium">
            Discover the perfect room for your family
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-yellow-200/20 backdrop-blur-lg rounded-full shadow-2xl p-2 w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
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

            {/* Divider (hidden on small) */}
            <div className="hidden lg:block h-8 w-px bg-gray-300"></div>

            {/* Child Selector */}
            <div className="flex items-center justify-between lg:justify-center px-4 sm:px-6 cursor-pointer rounded-3xl bg-white py-3 lg:py-4">
              <span className="text-gray-700 text-sm mr-2">Child</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-8 w-px bg-gray-300"></div>

            {/* Adult Selector */}
            <div className="flex items-center justify-between lg:justify-center px-4 sm:px-6 cursor-pointer rounded-3xl bg-white py-3 lg:py-4">
              <span className="text-gray-700 text-sm mr-2">Adult</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-8 w-px bg-gray-300"></div>

            {/* Check Availability Button */}
            <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 lg:py-4 cursor-pointer rounded-3xl bg-white hover:bg-gray-100 transition duration-300">
              <div className="bg-red-500 rounded-full p-1">
                <Calendar className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm font-medium">
                Check Availability
              </span>
            </button>

            {/* Book Now Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-3 rounded-3xl font-semibold transition-colors text-sm lg:ml-2">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-white font-medium whitespace-nowrap">
              Trending Searches -
            </span>
            {['Srirangam','Malai Kottai','Thiruvanaikail','Samayapuram','Thiruverumbur']
              .map((place) => (
              <button
                key={place}
                className="bg-yellow-200/15 backdrop-blur-md hover:bg-opacity-60 text-white px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleBooking;
