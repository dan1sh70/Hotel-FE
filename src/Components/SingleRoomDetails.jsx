/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useHotelStore } from "../stores/useHotelStore";
import { useGlobalStore } from "../stores/useGlobalStore";

export default function SingleRoomDetails() {
  const { roomId } = useParams();
  const { getSingle, room } = useHotelStore();

  // --- NEW: local state for dates ---
  // const [checkInDate, setCheckInDate] = useState("");
  const {checkIn,setCheckIn,checkOut,setCheckOut} = useGlobalStore();
  // const [checkOutDate, setCheckOutDate] = useState("");

  useEffect(() => {
    getSingle(roomId);
  }, []);

  const images = [
    "/singleroom1.jpg",
    "/singleroom2.jpg",
    "/singleroom3.jpg",
    "/singleroom4.jpg",
    "/singleroom5.jpg",
  ];

  return (
    <div className="font-sans bg-[#fffbfb] rounded-xl max-w-5xl mx-auto mt-20 py-10 px-4 md:px-10 shadow-lg border border-gray-200">
      {/* Header */}
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-red-600 mb-1">
          {room?.hotelId?.name}
        </h1>
        <span className="text-gray-600 text-sm">
          {room?.hotelId?.city},{room?.hotelId?.state},{room?.hotelId?.country}
        </span>
      </div>

      {/* === IMAGE GALLERY === */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:flex-1">
          <img src={images[0]} alt="" className="rounded-lg w-full h-72 object-cover" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/4">
          <img src={images[1]} alt="" className="rounded-lg w-full h-36 object-cover" />
          <img src={images[2]} alt="" className="rounded-lg w-full h-36 object-cover" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/4">
          <img src={images[3]} alt="" className="rounded-lg w-full h-36 object-cover" />
          <img src={images[4]} alt="" className="rounded-lg w-full h-36 object-cover" />
        </div>
      </div>

      {/* === MAIN INFO + BOOKING BOX === */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-10">
        {/* Left: Details */}
        <div className="flex-1">
         <div className="text-gray-700 font-medium text-sm mb-2 flex flex-wrap gap-2">
  {room?.amenities?.map((amen, idx) => (
    <span
      key={idx}
      className="bg-gray-100 px-2 py-1 rounded text-xs"
    >
      {amen}
    </span>
  ))}
</div>

          <div className="mb-3 font-medium text-base">
            <span className="text-red-600 text-lg mr-2">
              {room?.hotelId?.rating?.average}
            </span>
            ({room?.hotelId?.rating?.totalReviews} reviews)
          </div>
          <div className="font-semibold text-lg mb-2">
            {room?.type} Room Available Just 2.5 km from {room?.hotelId?.location?.city}
          </div>
          <div className="text-gray-400 text-sm mb-3">
            {room?.capacity?.adults} Adults | {room?.capacity?.children} Child
          </div>

          <ul className="ml-4 text-gray-700 list-disc space-y-1 text-sm mb-6">
            <li>Check-In Time : {room?.hotelId?.policies?.checkInTime}</li>
            <li>Check-Out Time : {room?.hotelId?.policies?.checkOutTime}</li>
            <li>{room?.hotelId?.policies?.childPolicy}</li>
            <li>{room?.hotelId?.policies?.specialNotes}</li>
          </ul>

          <div className="text-sm text-gray-700 leading-relaxed">
            {room?.hotelId?.description}
            <br />
            <br />
            {room?.description}
          </div>
        </div>

        {/* Right: Booking Box */}
<div className="bg-gray-50 rounded-xl p-6 shadow border border-gray-200 mt-8 md:mt-0 md:w-80">
  <div className="flex justify-between mb-4">
    {/* Check-in */}
    <div className="flex flex-col">
      <div className="text-red-700 font-semibold text-sm">Check-in</div>
      {/* Show the selected date as text */}
      <div className="text-base font-semibold mt-1">
        {checkIn ? checkIn : "Select date"}
      </div>
      {/* Hidden-value input for calendar picker only */}
      <input
        type="date"
        value="" // keep empty so no date shows inside
        onChange={(e) => setCheckIn(e.target.value)}
        className="mt-2 block w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400"
        // placeholder="Select date"
      />
    </div>

    {/* Check-out */}
    <div className="flex flex-col">
      <div className="text-red-700 font-semibold text-sm">Check-out</div>
      <div className="text-base font-semibold mt-1">
        {checkOut ? checkOut : "Select date"}
      </div>
      <input
        type="date"
        value=""
        onChange={(e) => setCheckOut(e.target.value)}
        className="mt-2 block w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400"
        // placeholder="Select date"
      />
    </div>
  </div>
{/* </div> */}


          <div className="border-t border-gray-200 my-4"></div>
          <div className="font-bold text-2xl text-red-600 flex items-center mb-2">
            ₹15,000
            <span className="text-xs text-gray-700 font-semibold ml-2">
              + ₹320 taxes
            </span>
          </div>
          <div className="font-semibold text-red-600 text-base mb-4">
            {room?.hotelId?.rating?.average}
            <span className="text-gray-600 text-xs">
              ({room?.hotelId?.rating?.totalReviews} reviews)
            </span>
          </div>
          <Link to={`/room-details/${roomId}`}>
          <button  className="bg-red-600 text-white font-bold rounded-md w-full py-3 shadow hover:bg-red-700 transition">
            BOOK NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

{/* <div className="text-base font-semibold mt-1">28 July 2022</div> */}