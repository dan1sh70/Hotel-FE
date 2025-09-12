import { useState } from 'react';
import { Heart, Wifi, Thermometer, Eye, Car, MapPin, Search } from 'lucide-react';

export default function RoomListCard() {
  const [showSharing, setShowSharing] = useState(true);

  

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
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-red-500">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-red-500">★</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="text-gray-400">★</span>);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-[#f6d68e] px-6 py-4 border-b border-gray-300 pt-24" >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-xl font-bold text-black">
              Rooms In <span className="text-red-600">Srirangam</span>
            </h1>
            <p className="text-gray-700 text-xs">1248 results • Jul 24 - 28</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <span>Sharing Rooms</span>
              <div 
                className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${showSharing ? 'bg-red-500' : 'bg-gray-400'}`}
                onClick={() => setShowSharing(!showSharing)}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform mt-0.5 ${showSharing ? 'translate-x-5 ml-1' : 'translate-x-0.5'}`}></div>
              </div>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs text-black placeholder-gray-500"
              />
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-3 mt-3 max-w-7xl mx-auto text-xs">
          <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">💰 Price</button>
          <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">❄️ Ac/Non-Ac</button>
          <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">👤 Single</button>
          <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">⚙️ More</button>
          <div className="ml-auto text-gray-700">
            <span>Sort by: <span className="text-red-600 font-medium">Price</span></span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Side - Listings */}
        <div className="w-1/2 p-5 flex flex-col gap-5">
          {listings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300 mt-8 mb-8"
            >
              <div className="flex gap-4">
                {/* Property Image */}
                <div className="w-40 h-36 relative">
                  <img 
                    src={listing.image} 
                    alt={listing.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="flex-1 p-3">
                  <div className="flex justify-between items-start mb-1.5">
                    <div>
                      <h3 className="text-sm font-semibold text-black">{listing.name}</h3>
                      <div className="flex items-center gap-1 text-gray-600 text-xs mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{listing.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-black">₹{listing.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Onwards</div>
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="text-xs text-gray-600 mb-2">
                    <span className="flex flex-wrap gap-1.5">
                      {listing.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="flex items-center gap-0.5">
                          {amenity === 'Wifi' && <Wifi className="w-3 h-3" />}
                          {amenity === 'Air conditioning' && <Thermometer className="w-3 h-3" />}
                          {amenity === 'CCTV' && <Eye className="w-3 h-3" />}
                          {amenity === 'Parking' && <Car className="w-3 h-3" />}
                          <span>{amenity}</span>
                          {index < 2 && <span className="text-gray-400">•</span>}
                        </span>
                      ))}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-gray-700">
                      <span className="font-semibold">{listing.rating}</span>
                      <div className="flex">{renderStars(listing.rating)}</div>
                      <span className="text-gray-600">({listing.reviews} Reviews)</span>
                    </div>
                    <div>
                      {listing.available ? (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded border border-green-300">
                          Available
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded border border-red-300">
                          Sold-out
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Map */}
        <div className="w-1/2 p-5">
          <div className="bg-white rounded-xl h-full relative overflow-hidden shadow-sm border border-gray-300 mt-8 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.234567890123!2d78.6869!3d10.8505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50f2b26d319%3A0x7b8c9d0e1f2g3h4i!2sSrirangam%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
            
            {/* Price Pins */}
            <div className="absolute inset-0 pointer-events-none">
              {mapPins.map((pin, index) => (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow cursor-pointer hover:bg-red-600 transition-colors pointer-events-auto"
                  style={{ left: pin.x, top: pin.y }}
                >
                  ₹{pin.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
