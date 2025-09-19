import React from "react";
import Testimonials from "../Components/Testimonials";

const AboutUs = () => {
  return (
    <>
      {/* Banner */}
      <div className="mt-24 px-4 sm:px-8 lg:px-16">
        <img
          src="/about-bg.jpg"
          alt="About background"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mx-4 sm:mx-8 lg:mx-20 mt-10 md:mt-20 mb-20">
        {/* Image with Info Card */}
        <div className="relative flex-shrink-0">
          <img
            src="/about-img1.jpg"
            alt="About Us"
            className="rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />

          {/* Info Card */}
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 sm:translate-x-1/3 bg-red-100 border border-red-300 rounded-2xl w-44 max-w-[70%] p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-red-600 text-lg sm:text-xl font-bold mb-3 text-center">
              Flash Rooms
            </h1>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              {[
                "50+ Employees",
                "24 Hrs Services",
                "Comfortable Stay",
                "Family Friendly",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left px-2">
          <h1 className="text-red-500 text-3xl sm:text-4xl md:text-6xl mb-5 font-extrabold tracking-wide">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            Flash Rooms offers convenient and budget-friendly accommodation
            options near temples throughout India. Whether you're on a short
            visit or a long pilgrimage, we prioritize your safety and comfort,
            ensuring that your stay is just a stone's throw from the temple.
            Immerse yourself fully in your spiritual practices without
            distractions—making your journey of devotion more serene and
            fulfilling.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-4 sm:px-8 lg:px-40 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-extrabold text-left">
          Our Hotel Gallery
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-semibold text-gray-700 mt-2">
          Photos
        </p>

        <div className="flex justify-center mt-8 mb-10">
          <img
            src="/about-gallery.png"
            alt="Gallery"
            className="w-full max-w-4xl object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default AboutUs;

