import React from 'react';
import { Search, ChevronDown, Calendar } from 'lucide-react';

const RoomListNav = () => {
  return (
    <div className="mt-16 mx-auto flex justify-center py-2 px-2 rounded-full sm:bg-[#fcc900]/20 max-w-4xl w-full">
      <div className="bg-white/90 backdrop-blur-sm sm:rounded-full rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center max-w-4xl w-full gap-2 sm:gap-0">
        
        {/* Search Location */}
  <div className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 flex-1">
          <div className="bg-red-500 rounded-full p-2">
            <Search className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <span className="text-gray-700 text-sm font-medium">Search location</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Divider */}
  <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

        {/* Child Selector */}
  <div className="flex items-center px-3 py-2 sm:px-6 sm:py-3 cursor-pointer" style={{borderRadius: '50px'}}>
          <span className="text-gray-700 text-sm font-medium mr-2">Child</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Divider */}
  <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

        {/* Adult Selector */}
  <div className="flex items-center px-3 py-2 sm:px-6 sm:py-3 cursor-pointer" style={{borderRadius: '50px'}}>
          <span className="text-gray-700 text-sm font-medium mr-2">Adult</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Divider */}
  <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

        {/* Check Availability Button */}
  <div className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 cursor-pointer">
          <div className="bg-red-500 rounded-full p-2">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <span className="text-gray-700 text-sm font-medium">Check Availability</span>
        </div>

        {/* Book Now Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-colors text-sm ml-0 sm:ml-2 mt-2 sm:mt-0">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default RoomListNav;