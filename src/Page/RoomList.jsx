/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import RoomListCard from '../Components/RoomListCard';
import MapSection from '../Components/MapSection';
import SidebarFilters from '../Components/RoomFilter';
import Testimonials from '../Components/Testimonials';
import RoomListNav from '../Components/RoomListNav';
import { useHotelStore } from '../stores/useHotelStore';

const RoomList = () => {
  const { getRooms, rooms } = useHotelStore();

  // Master filter state
  const [filters, setFilters] = useState({
    city: '',
    adults: '',
    children: '',
    type: [],
    amenities: [],
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
          {rooms.map((listing) => (
            <RoomListCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default RoomList;

