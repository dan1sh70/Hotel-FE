import React from 'react'

function GuestDetails() {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Guest Details</h2>

        <div className="grid grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-lg text-black mb-2">First Name*</label>
            <input
              type="text"
              placeholder="Anjali"
              className="w-full bg-white shadow-2xl rounded-lg p-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-lg text-black mb-2">Last Name*</label>
            <input
              type="text"
              placeholder="Gupta"
              className="w-full bg-white shadow-2xl rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg text-black mb-2">E-Mail*</label>
            <input
              type="email"
              placeholder="AnjaliGupta@gmail.com"
              className="w-full bg-white shadow-2xl rounded-lg p-2"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg text-black mb-2">Phone Number*</label>
            <input
              type="text"
              placeholder="+91 xxxxxxxxxx"
              className="w-full bg-white shadow-2xl rounded-lg p-2"
            />
          </div>

          {/* ID Proof */}
          <div>
            <label className="block text-lg text-black mb-2">ID Proof</label>
            <input type="file" className="w-full bg-white shadow-2xl rounded-lg p-2" />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-lg text-black mb-2">Special Requests</label>
            <select className="w-full bg-white shadow-2xl rounded-lg p-2">
              <option>Smoking Room</option>
              <option>Late Check-in</option>
              <option>Early Check-in</option>
              <option>High Floor Room</option>
              <option>Double Bed</option>
              <option>Twin/Single Bed</option>
              <option>Pick-up & Drop</option>
              <option>Other Requests</option>
            </select>
            <p className="text-xs text-red-500 mt-1">
              *Special Requests depend on hotel availability and may incur charges.
            </p>
          </div>
        </div>

        {/* Add Guest */}
        <button className="mt-6 text-red-600 font-semibold">
          + Add Guest
        </button>
      </div>

  )
}

export default GuestDetails
