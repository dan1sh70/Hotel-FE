// RoomDetailsPage.jsx
import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";


export default function RoomDetailsPage() {
  const [checkIn, setCheckIn] = useState("24 July 2022");
  const [checkOut, setCheckOut] = useState("28 July 2022");

  // Example room details (can later be fetched from API)
  const room = {
    hotelName: "Amirtha HomeStay",
    location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
    roomName: "Deluxe Room",
    distance: "2.5 km from Vishwanath Temple",
    guests: "2 Adults, 1 Child",
    stay: "5D / 4N",
    price: "₹15000",
    taxes: "₹320",
    rating: 4.0,
    reviews: 367,
    description:
      "Spacious Deluxe Room with modern interiors, private balcony, and scenic views. Perfect for families looking for comfort and convenience near Vishwanath Temple.",
    amenities: [
      "Free Wifi",
      "Air Conditioning",
      "Heating",
      "CCTV Security",
      "Parking",
      "Daily Housekeeping",
      "Pet Friendly",
      "Flat Screen TV",
    ],
    images: [
      "https://source.unsplash.com/600x400/?hotel-room",
      "https://source.unsplash.com/600x400/?bedroom",
      "https://source.unsplash.com/600x400/?balcony",
      
    ],
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        {/* Top Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b pb-6">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">
                {room.hotelName} <br /> {room.location}
              </p>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold">Guests</h3>
              <p className="text-sm text-gray-600">{room.guests}</p>
            </div>
          </div>

          {/* Check-in */}
          <div className="flex items-start gap-3">
            <Calendar className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold">Check-in</h3>
              <p className="text-sm text-gray-600">{checkIn}</p>
              <p className="text-xs text-gray-400">Select date</p>
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-start gap-3">
            <Calendar className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold">Check-out</h3>
              <p className="text-sm text-gray-600">{checkOut}</p>
              <p className="text-xs text-gray-400">Select date</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left: Room Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-red-600">{room.roomName}</h2>
            <p className="text-gray-600">@ {room.location}</p>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {room.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Room ${index + 1}`}
                  className="rounded-lg object-cover w-full h-40"
                />
              ))}
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-3">
              {room.amenities.map((item, i) => (
                <span key={i} className="after:content-['•'] last:after:content-none">
                  {item}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="mt-4">
              <p className="flex items-center text-sm">
                <span className="text-red-500 font-semibold mr-1">
                  {room.rating} ★
                </span>
                ({room.reviews} Reviews)
              </p>
              <p className="text-gray-500 text-sm mt-2">{room.description}</p>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="bg-gray-50 rounded-xl border p-6 shadow-md">
            <h3 className="font-semibold">{room.roomName}</h3>
            <p className="text-sm text-gray-600">{room.distance}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Book with ₹0 Payment</li>
              <li>• 2 Meals Included</li>
              <li>• AC Room</li>
              <li>• Best Available Rates</li>
              <li>• Free Cancellation Before 23 July 2024</li>
            </ul>

            <p className="mt-4 text-sm text-gray-500">{room.stay}</p>
            <p className="text-2xl font-bold text-red-600">
              {room.price}{" "}
              <span className="text-sm font-medium text-gray-500">
                + {room.taxes} taxes & fees
              </span>
            </p>

            <p className="text-sm text-gray-600 mt-1">
              {room.rating} ★ ({room.reviews} Reviews)
            </p>

            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
