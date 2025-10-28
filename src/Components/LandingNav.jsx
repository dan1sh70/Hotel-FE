import React, { useState } from "react";
import { Search, Calendar } from "lucide-react";
import { useGlobalStore } from "../stores/useGlobalStore";
import { Link } from "react-router-dom";
import AvailModal from "./AvailModal";

const LandingNav = () => {
  const [city, setCity] = useState("");
  const { adults, setAdults, children, setChildren } = useGlobalStore();
  const [showModal, setShowModal] = useState(false);

  // Generate dropdown options (1–9)
  const options = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative">
            <AvailModal />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="sm:mt-10 mx-auto flex justify-center px-3 sm:px-2 py-4 sm:py-1 rounded-2xl sm:rounded-full sm:bg-[#fcc900]/20 max-w-4xl w-full">
        <div
          className="
            bg-white/95 backdrop-blur-sm shadow-xl 
            flex flex-col sm:flex-row items-stretch sm:items-center 
            w-full max-w-4xl gap-4 sm:gap-0 
            p-4 sm:p-2 rounded-2xl sm:rounded-full
          "
        >
          {/* Search Location */}
          <div
            className="
              flex items-center gap-3
              px-4 py-3 sm:px-2 sm:py-3 
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search location"
              className="flex-1 bg-transparent outline-none text-base sm:text-sm text-gray-700 placeholder-gray-400"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

          {/* Child Selector */}
          <div
            className="
              flex items-center justify-between sm:justify-start
              px-4 py-3 sm:px-2 sm:py-3 
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <span className="text-gray-700 text-base sm:text-sm font-medium mr-2">
              Child
            </span>
            <select
              className="w-20 rounded-md py-1 text-center text-base sm:text-sm focus:outline-none"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            >
              <option value="0"></option>
              {options.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

          {/* Adult Selector */}
          <div
            className="
              flex items-center justify-between sm:justify-start
              px-4 py-3 sm:px-2 sm:py-3
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <span className="text-gray-700 text-base sm:text-sm font-medium mr-2">
              Adult
            </span>
            <select
              className="w-20  rounded-md py-1 text-center text-base sm:text-sm focus:outline-none"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            >
              <option value="0"></option>
              {options.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

          {/* Availability Button */}
          <button
            onClick={() => setShowModal(true)}
            className="
              flex items-center gap-3 
              px-4 py-3 sm:px-4 sm:py-3 
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 text-base sm:text-sm font-medium">
              Check Availability
            </span>
          </button>

          {/* Book Now Button */}
          <Link to="/rooms" className="w-full sm:w-auto">
            <button
              className="
                w-full sm:w-auto
                mt-2 sm:mt-0
                bg-red-600 hover:bg-red-700 text-white 
                px-6 py-3 rounded-full 
                font-semibold text-base sm:text-sm 
                transition-colors shadow-md sm:shadow-none
              "
            >
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
