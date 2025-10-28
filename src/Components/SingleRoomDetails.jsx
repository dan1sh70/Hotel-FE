/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { useHotelStore } from "../stores/useHotelStore";
import { useGlobalStore } from "../stores/useGlobalStore";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";

export default function SingleRoomDetails() {
  const { roomId } = useParams();
  const { getSingle, room } = useHotelStore();

  const {checkIn,setCheckIn,checkOut,setCheckOut,children,adults} = useGlobalStore();
  const [totalAmount, setTotalAmount] = useState(0);


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

  useEffect(() => {
      if (checkIn && checkOut && room?.basePrice) {
        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
  
        const diffTime = outDate - inDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const nightsCount = diffDays > 0 ? diffDays : 0;

  
        const taxes = room.taxRate ? Math.ceil(room.basePrice * nightsCount * (room.taxRate / 100)) : 0;
        const total = room.basePrice * nightsCount + taxes;
        setTotalAmount(total);
      }
    }, [checkIn, checkOut, room]);

  return (
    <div className="font-sans bg-[#FEF4CC] rounded-xl max-w-5xl mx-auto mt-28 py-10 px-4 md:px-10 shadow-lg border border-gray-200">
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

              {/* Rating */}
    <div className="flex items-center text-base font-semibold text-gray-700">
  {/* Rating Number */}
  <span className="text-red-600 flex items-center gap-1">
    {room?.hotelId?.rating?.average}
  </span>

  {/* Star Icon */}
  <FaStar className="text-red-500 " size={16} />
    <FaStar className="text-red-500 " size={16} />
      <FaStar className="text-red-500 " size={16} />
        <FaStar className="text-red-500 " size={16} />

  {/* Total Reviews */}
  <span className="text-gray-500 text-sm ml-1">
    ({room?.hotelId?.rating?.totalReviews} reviews)
  </span>
</div>
          <div className="font-semibold text-lg mb-2">
            {room?.type} Room Available Just 2.5 km from {room?.hotelId?.location?.city}
          </div>
          <div className="text-gray-400 text-sm mb-3">
            {adults} Adults | {children} Child
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

<div className="flex flex-col items-center md:items-end mt-10 w-full md:w-auto">
  {/* Booking Summary Card */}
  <div className="bg-white/80 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 
                  backdrop-blur-md md:w-80 w-full">
    
    {/* Dates */}
    <div className="flex justify-between mb-6 gap-6">
      {/* Check-in */}
      <div className="flex flex-col flex-1">
        <div className="text-sm text-gray-600 font-medium">Check-in</div>
        <div
          onClick={() => document.getElementById("checkInInput").showPicker()}
          className="text-base font-semibold mt-2 rounded-lg px-3 py-2 
                     cursor-pointer bg-gray-50 hover:bg-red-50 hover:border-red-400 
                     hover:ring-2 hover:ring-red-100 transition-all duration-200"
        >
          {checkIn ? dayjs(checkIn).format("DD MMM YYYY") : "Select date"}
        </div>
        <input
          id="checkInInput"
          type="date"
          value={checkIn || ""}
          onChange={(e) => setCheckIn(e.target.value)}
          className="hidden"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col flex-1">
        <div className="text-sm text-gray-600 font-medium">Check-out</div>
        <div
          onClick={() => document.getElementById("checkOutInput").showPicker()}
          className="text-base font-semibold mt-2  rounded-lg px-3 py-2 
                     cursor-pointer bg-gray-50 hover:bg-red-50 hover:border-red-400 
                     hover:ring-2 hover:ring-red-100 transition-all duration-200"
        >
          {checkOut ? dayjs(checkOut).format("DD MMM YYYY") : "Select date"}
        </div>
        <input
          id="checkOutInput"
          type="date"
          value={checkOut || ""}
          onChange={(e) => setCheckOut(e.target.value)}
          className="hidden"
        />
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-100 my-5"></div>

    {/* Price */}
    <div className="flex flex-col items-start mb-4">
      <div className="flex items-baseline text-red-600 font-bold text-2xl">
        ₹{totalAmount}
        <span className="text-xs text-gray-600 font-medium ml-2">
          Inclusive of taxes
        </span>
      </div>
    </div>

    {/* Rating */}
    <div className="flex items-center text-base font-semibold text-gray-700">
  {/* Rating Number */}
  <span className="text-red-600 flex items-center gap-1">
    {room?.hotelId?.rating?.average}
  </span>

  {/* Star Icon */}
  <FaStar className="text-red-500 " size={16} />
    <FaStar className="text-red-500 " size={16} />
      <FaStar className="text-red-500 " size={16} />
        <FaStar className="text-red-500 " size={16} />

  {/* Total Reviews */}
  <span className="text-gray-500 text-sm ml-1">
    ({room?.hotelId?.rating?.totalReviews} reviews)
  </span>
</div>
  </div>

  {/* BOOK NOW Button */}
  <Link
    to={checkIn && checkOut ? `/room-details/${roomId}` : "#"}
    onClick={(e) => {
      if (!checkIn || !checkOut) {
        e.preventDefault();
        toast.error("Please select check-in and check-out dates first");
      }
    }}
    className="w-full md:w-80 mt-6"
  >
    <button
      className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white 
                 font-bold rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.4)] 
                 hover:scale-[1.02] active:scale-95 transition-all duration-200"
    >
      BOOK NOW
    </button>
  </Link>
</div>
      </div>
    </div>

  );
}
