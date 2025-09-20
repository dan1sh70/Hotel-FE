import RoomListCard from '../Components/RoomListCard'
import RoomListHeader from '../Components/RoomListHeader'
import MapSection from '../Components/MapSection'
import SidebarFilters from '../Components/RoomFilter';
import Testimonials from '../Components/Testimonials';
import RoomListNav from '../Components/RoomListNav';
const RoomList = () => {
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
  const listings = [
    {
      id: 1,
      name: "Sri Ranganadha Nilayam",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room1.png",
      rating: 4.0,
      reviews: 7,
      price: 3000,
      amenities: ["Wifi", "Air conditioning", "Heating", "CCTV", "Parking", "House Keeping", "Animal friendly"],
      available: true
    },
    {
      id: 2,
      name: "Amirtha HomeStay",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room2.png",
      rating: 5.0,
      reviews: 14,
      price: 2440,
      amenities: ["Wifi", "Air conditioning", "Heating", "CCTV", "Parking", "House Keeping", "Animal friendly"],
      available: false
    },
    {
      id: 3,
      name: "Heritage Stay",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room3.png",
      rating: 3.8,
      reviews: 20,
      price: 3600,
      amenities: ["Wifi", "Garden", "Room Service", "Cultural Experience"],
      available: true
    },
    {
      id: 4,
      name: "Cozy Nest Hotel",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room4.png",
      rating: 4.2,
      reviews: 15,
      price: 3800,
      amenities: ["Wifi", "Room Service", "Laundry Service"],
      available: true
    },
    {
      id: 5,
      name: "Serenity Resort",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room5.png",
      rating: 4.5,
      reviews: 25,
      price: 4200,
      amenities: ["Wifi", "Pool", "Bar", "Restaurant"],
      available: true
    },
    {
      id: 6,
      name: "Sundar Villas",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room6.png",
      rating: 3.8,
      reviews: 10,
      price: 2500,
      amenities: ["Wifi", "Family Friendly", "Kitchen"],
      available: true
    },
    {
      id: 7,
      name: "Amirtha HomeStay Deluxe",
      location: "Srirangam, Tiruchirapalli, Tamil Nadu , India",
      image: "./room7.png",
      rating: 4.0,
      reviews: 12,
      price: 3000,
      amenities: ["Wifi", "Air conditioning", "Heating", "CCTV", "Parking", "House Keeping", "Animal friendly"],
      available: true
    },
  ];
  return (
    <div className="min-h-screen pt-10 bg-white">
  
  <RoomListNav/>
      <div className="sm:flex sm:flex-row flex flex-col max-w-6xl mx-auto mt-6 gap-6">
        {/* Right - Map */}
        <div>

        <div className="w-full h-72">
          <MapSection mapPins={mapPins} />
        </div>

        <div className='w-full'>
        <SidebarFilters/>
        </div >
        </div>

        {/* Left - Cards */}
        <div className="sm:w-2/3 w-full flex flex-col gap-6">
          {listings.map((listing) => (
            <RoomListCard key={listing.id} listing={listing} renderStars={listing.rating} />
          ))}
        </div>

      </div>

      <Testimonials/>
    </div>

  )
}

export default RoomList
