import React, { useState } from "react";
import dayjs from "dayjs";
import { X } from "lucide-react";
import { useGlobalStore } from "../stores/useGlobalStore";

function AvailModal({ onClose }) {
  const { checkIn, checkOut, setCheckIn, setCheckOut } = useGlobalStore();

  const [currentDate, setCurrentDate] = useState(dayjs()); // tracks the displayed month/year

  const year = currentDate.year();
  const month = currentDate.month(); // 0-indexed
  const daysInMonth = currentDate.daysInMonth();

  // Navigate months
  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const handleDateClick = (day) => {
    const date = dayjs(new Date(year, month, day)).toDate();
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (!checkOut && dayjs(date).isAfter(checkIn)) {
      setCheckOut(date);
    } else {
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  const isSelected = (day) => {
    const date = dayjs(new Date(year, month, day));
    if (!checkIn) return false;
    if (checkIn && !checkOut) return date.isSame(checkIn, "day");
    return date.isSame(checkIn, "day") || date.isSame(checkOut, "day") || (date.isAfter(dayjs(checkIn)) && date.isBefore(dayjs(checkOut)));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto w-full relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 pr-8">
        <button onClick={prevMonth} className="text-gray-600 font-bold px-2 py-1 rounded hover:bg-gray-100">
          ‹
        </button>
        <h2 className="text-center text-lg font-semibold">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button onClick={nextMonth} className="text-gray-600 font-bold px-2 py-1 rounded hover:bg-gray-100">
          ›
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="font-medium text-gray-600">{d}</div>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`p-2 rounded-lg cursor-pointer flex items-center justify-center
              ${isSelected(day) ? "bg-yellow-200 border-2 border-yellow-500" : "hover:bg-gray-100"}`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center bg-gray-50 rounded-lg p-3">
        <span className="text-sm text-gray-600">
          {checkIn && checkOut
            ? `${dayjs(checkIn).format("DD MMM YYYY")} → ${dayjs(checkOut).format("DD MMM YYYY")}`
            : "Select Check-in and Check-out"}
        </span>
      </div>
    </div>
  );
}

export default AvailModal;