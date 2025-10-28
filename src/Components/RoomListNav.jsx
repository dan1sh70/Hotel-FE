import React, { useEffect, useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import { useGlobalStore } from '../stores/useGlobalStore';
import AvailModal from './AvailModal';
import dayjs from 'dayjs';

const RoomListNav = ({ onChange }) => {
  const [city, setCity] = useState('');
  const { 
    adults, 
    setAdults, 
    children, 
    setChildren,
    checkIn,
    checkOut 
  } = useGlobalStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Convert Date objects to ISO strings for API
    const startDate = checkIn ? dayjs(checkIn).format('YYYY-MM-DD') : '';
    const endDate = checkOut ? dayjs(checkOut).format('YYYY-MM-DD') : '';
    
    onChange?.({ city, adults, children, startDate, endDate });
  }, [city, adults, children, checkIn, checkOut]);

  const formatDateRange = () => {
    if (!checkIn || !checkOut) return 'Check Availability';
    
    const start = dayjs(checkIn).format('MMM D');
    const end = dayjs(checkOut).format('MMM D');
    
    return `${start} - ${end}`;
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <AvailModal onClose={() => setShowModal(false)} />
        </div>
      )}

      <div className="mt-16 mx-auto flex justify-center px-3 sm:px-2 py-4 sm:py-2 rounded-2xl sm:rounded-full sm:bg-[#fcc900]/20 max-w-4xl w-full">
        <div
          className="
            bg-white/95 backdrop-blur-sm shadow-xl
            flex flex-col sm:flex-row items-stretch sm:items-center
            justify-between
            w-full max-w-4xl gap-4 sm:gap-0
            p-4 sm:p-2 rounded-2xl sm:rounded-full
          "
        >
          {/* Search Location */}
          <div
            className="
              flex items-center gap-3
              px-4 py-3 sm:px-4 sm:py-3
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
              flex-1
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
              px-4 py-3 sm:px-8 sm:py-3
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <span className="text-gray-700 text-base sm:text-sm font-medium mr-2">
              Child
            </span>
            <select
              className="rounded-md py-1 px-2 text-base sm:text-sm "
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              <option value=""></option>
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

          {/* Adult Selector */}
          <div
            className="
              flex items-center justify-between sm:justify-start
              px-4 py-3 sm:px-8 sm:py-3
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            "
          >
            <span className="text-gray-700 text-base sm:text-sm font-medium mr-2">
              Adult
            </span>
            <select
              className="rounded-md py-1 px-2 text-base sm:text-sm "
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            >
              <option value=""></option>
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

          {/* Availability */}
          <button
            onClick={() => setShowModal(true)}
            className={`
              flex items-center gap-3
              px-4 py-3 sm:px-4 sm:py-3
              rounded-xl sm:rounded-none
              bg-gray-50 sm:bg-transparent
            `}
          >
            <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 text-base sm:text-sm font-medium">
              {formatDateRange()}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomListNav;