import React from "react";

export default function SingleRoomDetails() {
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
          Amirtha HomeStay
        </h1>
        <span className="text-gray-600 text-sm">
          @ Srirangam, Thiruchirappalli Kamal Naka, India
        </span>
      </div>

      {/* === IMAGE GALLERY === */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Left: single big image */}
        <div className="md:flex-1">
          <img
            src={images[0]}
            alt=""
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        {/* Middle: 2 stacked images */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <img
            src={images[1]}
            alt=""
            className="rounded-lg w-full h-36 object-cover"
          />
          <img
            src={images[2]}
            alt=""
            className="rounded-lg w-full h-36 object-cover"
          />
        </div>

        {/* Right: 2 stacked images */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <img
            src={images[3]}
            alt=""
            className="rounded-lg w-full h-36 object-cover"
          />
          <img
            src={images[4]}
            alt=""
            className="rounded-lg w-full h-36 object-cover"
          />
        </div>
      </div>

      {/* === MAIN INFO + BOOKING BOX === */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-10">
        {/* Left: Details */}
        <div className="flex-1">
          <div className="text-gray-700 font-medium text-sm mb-2">
            Wifi · Air conditioning · Heating · CCTV · Parking · House Keeping ·
            Animal Friendly
          </div>
          <div className="mb-3 font-medium text-base">
            <span className="text-red-600 text-lg mr-2">4.0 ★</span>(387 reviews)
          </div>
          <div className="font-semibold text-lg mb-2">
            Deluxe Room Available Just 2.5 km from Vishwanath Temple
          </div>
          <div className="text-gray-400 text-sm mb-3">2 Adults | 1 Child</div>

          <ul className="ml-4 text-gray-700 list-disc space-y-1 text-sm mb-6">
            <li>Book with 0% Payment</li>
            <li>2 Meals included</li>
            <li>AC Rooms</li>
            <li>MMTPS Best Available Rates</li>
            <li>Free Cancellation Before 23 July 2024</li>
          </ul>

          <div className="text-sm text-gray-700 leading-relaxed">
            Welcome to your serene getaway just 10-minute walk from Benualim
            Vodai Beach. Nestled in a friendly neighborhood, this cozy room is
            adorned with modern Portuguese-style furniture, offering everything
            you need for a relaxing stay.
            <br />
            <br />
            Relax, explore local sights, or indulge in delicious cuisine—ideal
            for solo adventurers, groups, and families.
          </div>
        </div>

        {/* Right: Booking Box */}
        <div className="bg-gray-50 rounded-xl p-6 shadow border border-gray-200 mt-8 md:mt-0 md:w-80">
          <div className="flex justify-between mb-4">
            <div>
              <div className="text-red-700 font-semibold text-sm">Check-in</div>
              <div className="text-base font-semibold mt-1">24 July 2022</div>
              <div className="text-xs text-gray-500">Select date</div>
            </div>
            <div>
              <div className="text-red-700 font-semibold text-sm">Check-out</div>
              <div className="text-base font-semibold mt-1">28 July 2022</div>
              <div className="text-xs text-gray-500">Select date</div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="font-bold text-2xl text-red-600 flex items-center mb-2">
            ₹15,000
            <span className="text-xs text-gray-700 font-semibold ml-2">
              + ₹320 taxes
            </span>
          </div>
          <div className="font-semibold text-red-600 text-base mb-4">
            4.0 ★ <span className="text-gray-600 text-xs">(387 reviews)</span>
          </div>
          <button className="bg-red-600 text-white font-bold rounded-md w-full py-3 shadow hover:bg-red-700 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
