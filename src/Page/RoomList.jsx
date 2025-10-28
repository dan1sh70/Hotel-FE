/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import RoomListCard from '../Components/RoomListCard';
import MapSection from '../Components/MapSection';
import SidebarFilters from '../Components/RoomFilter';
import Testimonials from '../Components/Testimonials';
import RoomListNav from '../Components/RoomListNav';
import { useHotelStore } from '../stores/useHotelStore';
// import dayjs from 'dayjs';

const RoomList = () => {
  const { getRooms, rooms } = useHotelStore();

  // Master filter state
  const [filters, setFilters] = useState({
    city: '',
    adults: '',
    children: '',
    type: [],
    amenities: [],
    startDate: '',
    endDate: ''
  });

  // Fetch rooms whenever filters change
  useEffect(() => {
    getRooms(filters);
  }, [filters]);

  const handleNavChange = (navFilters) => {
    setFilters((prev) => ({ ...prev, ...navFilters }));
  }; 

  const handleSidebarChange = (sidebarFilters) => {
    setFilters((prev) => ({ ...prev, ...sidebarFilters }));
  };

  const mapPins = [
    { id: '1526', x: '15%', y: '25%' },
    { id: '1639', x: '75%', y: '20%' },
    { id: '1727', x: '25%', y: '45%' },
    { id: '2695', x: '55%', y: '55%' },
    { id: '2342', x: '70%', y: '65%' },
    { id: '1900', x: '85%', y: '70%' },
    { id: '1645', x: '80%', y: '80%' },
    { id: '4443', x: '85%', y: '85%' },
  ];

  return (
    <div className="min-h-screen pt-10 bg-white">
      <RoomListNav onChange={handleNavChange} />
      
      {/* Show selected date range if available */}
      {filters.startDate && filters.endDate && (
        <div className="max-w-6xl mx-auto mt-4 px-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-700">
                Showing available rooms from{' '}
                <span className="text-red-600">
                  {new Date(filters.startDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                {' to '}
                <span className="text-red-600">
                  {new Date(filters.endDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </span>
              <span className="text-xs text-gray-500 ml-2">
                ({Math.ceil((new Date(filters.endDate) - new Date(filters.startDate)) / (1000 * 60 * 60 * 24))} nights)
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="sm:flex sm:flex-row flex flex-col max-w-6xl mx-auto mt-6 gap-6">
        {/* Right - Map + Filters */}
        <div>
          <div className="w-full h-72">
            <MapSection mapPins={mapPins} />
          </div>
          <div className="w-full">
            <SidebarFilters onChange={handleSidebarChange} />
          </div>
        </div>

        {/* Left - Cards */}
        <div className="sm:w-2/3 w-full flex flex-col gap-6">
          {rooms.length > 0 ? (
            rooms.map((listing) => (
              <RoomListCard key={listing._id} listing={listing} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No rooms available for the selected dates and filters.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default RoomList;