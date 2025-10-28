import React, { useEffect } from 'react';
import { Download, MapPin, Users, Calendar, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useBookingStore } from '../stores/useBookingStore';

export default function BookingReceipt() {
  const {bookingId} = useParams();
  const {getConfirmation,confirmedBooking} = useBookingStore();

  useEffect(() => {
    getConfirmation(bookingId);
  },[bookingId,getConfirmation])


  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center">
      <span className="text-lg font-semibold mr-2">{rating}</span>
      <div className="flex mr-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
        ))}
      </div>
      <span className="text-sm text-gray-600">({reviews} Reviews)</span>
    </div> 
  );

  return (
    <div className="min-h-screen bg-white p-4 pt-20">
      <div className="max-w-4xl mx-auto bg-[#fef4cc] rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-white p-6 border-b border-pink-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">Thanks For Staying With Us!</h1>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>

        {/* Booking ID Section */}
        <div className="p-6 border-b border-pink-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-red-500 font-semibold mb-1">Booking Id</div>
              <div className="text-xl font-bold">{confirmedBooking?._id}</div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <div>Booked by {confirmedBooking?.guestDetails?.firstName} {confirmedBooking?.guestDetails?.lastName} on {confirmedBooking?.createdAt}</div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6 border-b border-pink-200">
          <div className="flex justify-between">
            <div className="flex-1 pr-6" style={{width: '55%'}}>
              <h2 className="text-2xl font-bold text-red-500 mb-2">{confirmedBooking?.hotelId?.name}</h2>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{confirmedBooking?.hotelId?.location?.city}</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-3">
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 space-x-1">
               {confirmedBooking?.hotelId?.amenities?.map((amen,idx) => (
                <li key={idx}>{amen}</li>
              ))}
           </ul>
              </div>
              
              <StarRating rating={confirmedBooking?.hotelId?.rating?.average} reviews={confirmedBooking?.hotelId?.rating?.totalReviews} />
              
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {confirmedBooking?.hotelId?.description}
              </p>
            </div>
            
            {/* Property Images */}
            <div className="grid grid-cols-2 gap-2" style={{width: '45%'}}>
              {/* Main Image */}
              <div className="relative">
                <img
                  src="/3rdpg1.png"
                  alt="City view from property"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Side Images */}
              <div className="space-y-2">
                <div className="relative">
                  <img
                    src="/3rdpg2.png"
                    alt="Interior room"
                    className="w-full h-19 object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/3rdpg3.png"
                    alt="Property exterior"
                    className="w-full h-19 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-end justify-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="p-6 " style={{border:'1px solid pink'}}>
          <div className="sm:grid sm:grid-cols-4 flex flex-col gap-6">
            {/* Guests */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold">Guests</div>
              </div>
              <div className="text-sm text-gray-600 ml-11">{confirmedBooking?.guests?.adults}  {confirmedBooking?.guests?.children}</div>
            </div>

            {/* Check-in */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold">Check-In</div>
              </div>
              <div className="text-lg font-semibold ml-11">{confirmedBooking?.dates?.checkIn}</div>
              <div className="text-sm text-gray-500 ml-11">12:00 AM</div>
            </div>

            {/* Check-out */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold">Check-Out</div>
              </div>
              <div className="text-lg font-semibold ml-11">{confirmedBooking?.dates?.checkOut}</div>
              <div className="text-sm text-gray-500 ml-11">11:00 AM</div>
            </div>

            {/* Duration & Room */}
            <div>
              <div className="text-3xl font-bold text-red-500 mb-1">4D / 5N</div>
              <div className="font-semibold">3 Guests</div>
              <div className="text-sm text-gray-600">1 Classic Room</div>
              <div className="text-sm text-gray-500">( Non-Ac )</div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="p-6 "style={{border:'1px solid pink'}}>
          <h3 className="text-xl font-bold mb-4">Payment Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">1 Room x 5D / 4 N</span>
              <span className="font-semibold">₹{confirmedBooking?.pricing?.basePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hotel Taxes</span>
              <span className="font-semibold">₹{confirmedBooking?.pricing?.taxAmount}</span>
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total Amount</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-500">₹{confirmedBooking?.pricing?.totalAmount}</div>
              <div className="text-sm text-gray-600">({confirmedBooking?.status})</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold mb-1">Want to Know</div>
              <div className="text-sm">
                Something not Right? 
                <button className="text-blue-600 underline ml-1">Chat With us for HELP.</button>
              </div>
            </div>
            <div className="text-right text-sm">
              <div className="mb-1">
                Read FlashRoom <button className="text-blue-600 underline">Terms and Conditions</button>
              </div>
              <div>
                Read FlashRoom <button className="text-blue-600 underline">Cancellation Policy Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}