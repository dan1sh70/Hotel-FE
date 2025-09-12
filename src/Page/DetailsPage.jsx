import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarCheck, FaCalendarDay } from "react-icons/fa6"
import GuestDetails from "../Components/GuestDetails";
import RegistrationDetails from "../Components/RegistrationDetails";

function DetailsPage() {
  return (
    <div className="p-10 mt-28 space-y-10">
      {/* Hotel + Booking Info Section */}
      <div className="grid grid-cols-3 gap-8 bg-gray-50 p-6 rounded-lg">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Guests / Check-in / Check-out */}
          <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-3 gap-4 text-center">
            {/* Guests */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaUserCircle className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Guests</p>
              </div>
              <p className="text-gray-600 text-xl">3 Person</p>
              <p className="text-lg text-gray-500">2 Adult, 1 Child</p>
            </div>

            {/* Check-in */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaCalendarCheck className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Check-in</p>
              </div>
              <p className="text-gray-600 text-xl">24 July 2022</p>
              <p className="text-lg text-gray-500">Select date</p>
            </div>

            {/* Check-out */}
            <div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <FaCalendarDay className="text-red-500 text-5xl" />
                <p className="font-bold text-2xl">Check-out</p>
              </div>
              <p className="text-gray-600 text-xl">28 July 2022</p>
              <p className="text-lg text-gray-500">Select date</p>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-600">Amirtha HomeStay</h1>
            <p className="text-gray-600 text-sm">
              📍 Srirangam, Tiruchirappalli, Tamil Nadu, India
            </p>
            <p className="text-red-500 font-semibold mt-2">⭐ 4.0 (367 Reviews)</p>
          </div>

          {/* Amenities */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">Amenities</h2>
            <p className="text-gray-600">
              Wifi • Air conditioning • Heating • CCTV • Parking • House Keeping • Animal friendly
            </p>
          </div>

          {/* Room Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">Deluxe Room Available</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Book with ₹0 Payment</li>
              <li>2 Meals Included</li>
              <li>AC Rooms</li>
              <li>MMTPS Best Available Rates</li>
              <li>Free Cancellation Before 23 July 2024 (01:59)</li>
            </ul>
          </div>

          {/* Important Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Important Information</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Applicable only for bookings up to 5 rooms.</li>
              <li>Primary guest must be at least 18 years old.</li>
              <li>Valid ID proofs: Passport, Aadhaar, Driving License, etc.</li>
              <li>No pets allowed on the premises.</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Booking Info */}
        <div className="col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">Booking Information</h2>
            <div className="flex justify-between text-gray-700">
              <span>1 Room × 5D / 4N</span>
              <span>₹15,000</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Hotel Taxes</span>
              <span>₹3,240</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total Amount</span>
              <span>₹18,240</span>
            </div>

            {/* Coupon Section */}
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-600">Coupon Codes</p>
              <input
                type="text"
                placeholder="Have a coupon code"
                className="mt-2 w-full border rounded-lg p-2 text-sm"
              />
            </div>

            {/* Free Cancellation */}
            <div className="bg-red-50 border border-red-300 rounded-lg p-3 text-sm text-red-600">
              Free Cancellation before 23 July 01:59 PM. Book with ₹0 Payment.
            </div>
          </div>
        </div>
      </div>

      {/* Guest Details Form Section */}
      <GuestDetails/>

      <RegistrationDetails/>

       
          </div>
  );
}

export default DetailsPage;