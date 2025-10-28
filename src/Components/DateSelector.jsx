import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({ checkIn, setCheckIn, checkOut, setCheckOut }) {
  return (
    <div className=" rounded-xl">
      <div className="flex justify-between gap-6">
        {/* Check-in */}
        <div className="flex flex-col w-1/2">
          <div className="text-red-700 font-semibold text-sm">Check-in</div>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            placeholderText="Select date"
            className="mt-2 block w-full border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col w-1/2">
          <div className="text-red-700 font-semibold text-sm">Check-out</div>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            placeholderText="Select date"
            className="mt-2 block w-full border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
