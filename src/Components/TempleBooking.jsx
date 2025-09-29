import React from 'react';
import { MapPin, Users, Calendar, ChevronDown } from 'lucide-react';
import LandingNav from './LandingNav';

const TempleBooking = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-16 sm:pt-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('landing-bg.png')",
      }}
    >
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
<LandingNav/>

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
