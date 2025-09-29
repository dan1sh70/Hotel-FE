/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarCheck, FaCalendarDay } from "react-icons/fa6";
import GuestDetails from "../Components/GuestDetails";
import RegistrationDetails from "../Components/RegistrationDetails";
import { useGlobalStore } from "../stores/useGlobalStore";
import { useHotelStore } from "../stores/useHotelStore";
// import { useBookingStore } from "../stores/useBookingStore";
import { useParams } from "react-router-dom";
import { useBookingStore } from "../stores/useBookingStore";

function DetailsPage() {
  const { roomId } = useParams();
  const { children, adults, checkIn, checkOut } = useGlobalStore();
  const { getSingle, room } = useHotelStore();
  const { BookNow } = useBookingStore();

  const [nights, setNights] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [data, setData] = useState({
    roomId,
    checkIn,
    checkOut,
    adults,
    children,
    hotelId: room?.hotelId?._id,
    userId: '68d2886fd0839f2bcc03afb4',
    guestDetails: {
      primaryGuest: {
        name: '',
        email: '',
        phone: ''
      },
      idProof: '',
      specialRequests: ''
    }
  })


  const handleBooking = async () => {
    try {
      const payload = {
        ...data,
        hotelId: room?.hotelId?._id,
        roomId: room?._id
      }
      const res = await BookNow(payload)
      alert(`Booking successful! ID: ${res.data._id}`)
    } catch (err) {
      console.error(err)
      alert('Booking failed')
    }
  }

  useEffect(() => {
    getSingle(roomId);
  }, []);

  // Calculate nights and total amount whenever checkIn/checkOut changes
  useEffect(() => {
    if (checkIn && checkOut && room?.basePrice) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);

      const diffTime = outDate - inDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
          <div className="bg-[#FEF4CC] shadow-md rounded-lg p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            {/* Guests */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaUserCircle className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Guests</p>
              </div>
              <p className="text-gray-600 text-xl">{Number(adults) + Number(children)} Person</p>
              <p className="text-lg text-gray-500">{adults} Adult, {children} Child</p>
            </div>

            {/* Check-in */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaCalendarCheck className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Check-in</p>
              </div>
              <p className="text-gray-600 text-xl">{checkIn}</p>
            </div>

            {/* Check-out */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaCalendarDay className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Check-out</p>
              </div>
              <p className="text-gray-600 text-xl">{checkOut}</p>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-[#FEF4CC] shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-600">{room?.hotelId?.name}</h1>
            <p className="text-gray-600 text-sm">📍 {room?.hotelId?.location?.city}</p>
            <p className="text-red-500 font-semibold mt-2">⭐ {room?.hotelId?.rating?.average} ({room?.hotelId?.rating?.totalReviews} Reviews)</p>
          </div>

          {/* Amenities */}
           <div className="bg-[#FEF4CC] shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold">Amenities</h2>
                                    <p className="text-gray-600">
               <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 space-x-1">
               {room?.amenities?.map((amen,idx) => (
                
                <li key={idx}>{amen}</li>
                
              ))}
           </ul>
             </p>
           </div>

          {/* Room Info */}
          <div className="bg-[#FEF4CC] shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">Deluxe Room Available</h2>
            <p className="text-gray-600 mt-2">
              {room?.hotelId?.description}<br/>
              {room?.description}
            </p>
          </div>

          {/* Important Info */}
          <div className="bg-[#FEF4CC] shadow-md rounded-lg p-6">
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
          <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 space-y-3 sm:space-y-4">
            <h2 className="text-xl font-bold mb-4">Booking Information</h2>
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

            {/* Coupon Section */}
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-600">Coupon Codes</p>
              <input type="text" placeholder="Have a coupon code" className="mt-2 w-full border rounded-lg p-2 text-sm"/>
            </div>

            {/* Free Cancellation */}
            <div className="bg-red-50 border border-red-300 rounded-lg p-3 text-sm text-red-600">
              Free Cancellation before 23 July 01:59 PM. Book with ₹0 Payment.
            </div>
          </div>
        </div>
      </div>

     <GuestDetails
        values={data.guestDetails}
        onChange={(field, value) =>
          setData(prev => ({
            ...prev,
            guestDetails: {
              ...prev.guestDetails,
              [field]: value
            }
          }))
        }
      />

      <RegistrationDetails />
      <button  onClick={handleBooking} className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg mt-4">
        PAY NOW
      </button>
    </div>
  );
}

export default DetailsPage;

//  <div className="bg-[#FEF4CC] shadow-md rounded-lg p-6">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             <p className="text-gray-600">
//               <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 space-x-1">
//               {room.amenities.map((amen,idx) => (
                
//                 <li key={idx}>{amen}</li>
                
//               ))}
//               </ul>
//             </p>
//           </div>