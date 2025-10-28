/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoEnter } from "react-icons/io5";
import { Star } from "lucide-react";
import dayjs from "dayjs";
import GuestDetails from "../Components/GuestDetails";
import RegistrationDetails from "../Components/RegistrationDetails";
import { useGlobalStore } from "../stores/useGlobalStore";
import { useHotelStore } from "../stores/useHotelStore";
import { useBookingStore } from "../stores/useBookingStore";
import { useNavigate, useParams } from "react-router-dom";

function DetailsPage() {
  const { roomId } = useParams();
  const { children, adults, checkIn, checkOut } = useGlobalStore();
  const { getSingle, room } = useHotelStore();
  const { BookNow } = useBookingStore();

  const [nights, setNights] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate(); 

  const [guestData, setGuestData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: ''
    },
    idProof: '',
    specialRequests: ''
  });

  // Format dates for display
  const formatDate = (date) => {
    if (!date) return 'Not selected';
    return dayjs(date).format('DD MMM YYYY');
  };

  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }
    if (!guestData.firstName || !guestData.email || !guestData.phone) {
      alert("Please fill required guest details");
      return;
    }
    
    // Validate address fields
    if (!guestData.address.street || !guestData.address.city || 
        !guestData.address.state || !guestData.address.postalCode) {
      alert("Please fill all address fields");
      return;
    }

    const payload = {
      hotelId: room?.hotelId?._id,
      roomId: room?._id,
      checkIn,
      checkOut,
      adults,
      children,
      guestDetails: guestData,
      roomsRequested: 1
    };

    try {
      const res = await BookNow(payload);
      if (res?.data?.bookingId || res?.data?.data?.bookingId) {
        navigate("/confirmation");
      } else {
        navigate("/confirmation");
      }
    } catch (err) {
      console.error('Booking error:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Booking failed';
      alert(`Booking failed: ${errorMessage}`);
    }
  };

  useEffect(() => {
    getSingle(roomId);
  }, []);

  // Calculate nights and total amount whenever checkIn/checkOut changes
  useEffect(() => {
    if (checkIn && checkOut && room?.basePrice) {
      const inDate = dayjs(checkIn);
      const outDate = dayjs(checkOut);

      const diffDays = outDate.diff(inDate, 'day');
      const nightsCount = diffDays > 0 ? diffDays : 0;

      setNights(nightsCount);

      const taxes = room.taxRate ? Math.ceil(room.basePrice * nightsCount * (room.taxRate / 100)) : 0;
      const total = room.basePrice * nightsCount + taxes;
      setTotalAmount(total);
    }
  }, [checkIn, checkOut, room]);

  return (
    <div className="p-4 sm:p-8 md:p-10 mt-28 space-y-8 sm:space-y-10">
      {/* Hotel + Booking Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-[#FEF4CC] p-3 sm:p-6 rounded-lg">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          {/* Guests / Check-in / Check-out */}
          <div className="bg-[#FEF4CC] rounded-lg p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            {/* Guests */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaUserCircle className="text-red-500 text-5xl" />
                <p className="text-2xl">Guests</p>
              </div>
              <p className="text-gray-600 text-xl">{Number(adults) + Number(children)} Person</p>
              <p className="text-lg text-gray-500">{adults} Adult, {children} Child</p>
            </div>

            {/* Check-in */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <IoEnter className="text-gray-100 bg-red-500 text-5xl border rounded-full p-2" />
                <p className="text-2xl">Check-in</p>
              </div>
              <p className="text-gray-600 text-xl">{formatDate(checkIn)}</p>
            </div>

            {/* Check-out */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <IoEnter className="text-gray-100 bg-red-500 text-5xl border rounded-full p-2" />
                <p className="text-2xl">Check-out</p>
              </div>
              <p className="text-gray-600 text-xl">{formatDate(checkOut)}</p>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-[#FEF4CC] rounded-lg p-6">
            <h1 className="text-5xl font-bold text-red-600">{room?.hotelId?.name}</h1>
            <p className="text-black text-xl">
              📍 {room?.hotelId?.location?.city}
            </p>

            <div className="flex items-center mt-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-red-500 fill-red-500" />
              ))}
              <Star className="w-5 h-5 text-red-300" />

              <span className="ml-2 text-black font-semibold">
                {room?.hotelId?.rating?.average} ({room?.hotelId?.rating?.totalReviews} Reviews)
              </span>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-[#FEF4CC] rounded-lg p-6">
            <h2 className="text-lg font-semibold">Amenities</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 space-x-1">
              {room?.amenities?.map((amen, idx) => (
                <li key={idx}>{amen}</li>
              ))}
            </ul>
          </div>

          {/* Room Info */}
          <div className="bg-[#FEF4CC] rounded-lg p-6">
            <h2 className="text-lg font-semibold">Deluxe Room Available</h2>
            <p className="text-gray-600 mt-2">
              {room?.hotelId?.description}<br/>
              {room?.description}
            </p>
          </div>

          {/* Important Info */}
          <div className="bg-[#FEF4CC] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Important Information</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Check-In Time : {room?.hotelId?.policies?.checkInTime}</li>
              <li>Check-Out Time : {room?.hotelId?.policies?.checkOutTime}</li>
              <li>{room?.hotelId?.policies?.childPolicy}</li>
              <li>{room?.hotelId?.policies?.specialNotes}</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Booking Info */}
        <div className="md:col-span-1 mt-6 md:mt-0">
          <div className="bg-white shadow-md rounded-2xl p-3 sm:p-6 space-y-3 sm:space-y-4">
            <div className="border-4 border-[#FEF4CC] p-4 rounded-2xl">
              <h2 className="text-xl font-bold mb-4 text-center text-red-500">Booking Information</h2>
              <div className="flex justify-between text-gray-700">
                <span>1 Room × {nights}D / {nights - 1 >= 0 ? nights - 1 : 0}N</span>
                <span>₹{room?.basePrice ? room.basePrice * nights : 0}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Hotel Taxes</span>
                <span>₹{room?.taxRate ? Math.ceil(room.basePrice * nights * (room.taxRate / 100)) : 0}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            {/* Coupon Section */}
            <div className="rounded-lg p-3 border-4 border-[#FEF4CC]">
              <p className="text-lg text-red-500 font-bold">Coupon Codes</p>
              <input 
                type="text" 
                placeholder="Have a coupon code" 
                className="mt-2 w-full rounded-lg p-2 text-sm bg-[#FEF4CC]"
              />
            </div>

            {/* Free Cancellation */}
            <div className="border-4 border-[#FEF4CC] rounded-lg p-3 text-lg font-bold text-red-500">
              Free Cancellation
              <p className="text-gray-400/80 text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque quibusdam eaque odit adipisci quos earum ea voluptatibus quia ducimus. 
                Aut incidunt exercitationem dicta!
              </p> 
            </div>
          </div>
        </div>
      </div>

      <GuestDetails
        values={guestData}
        onChange={(field, value) => setGuestData(prev => ({ ...prev, [field]: value }))}
      />

      <RegistrationDetails
        address={guestData.address}
        setAddress={newAddress => setGuestData(prev => ({ ...prev, address: newAddress }))}
      />

      <button 
        onClick={handleBooking} 
        className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-red-700 transition-colors"
      >
        PAY NOW
      </button>
    </div>
  );
}

export default DetailsPage;