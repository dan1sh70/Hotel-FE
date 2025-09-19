import React from 'react';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

export default function SingleRoomDetails() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
            <div className="max-w-6xl bg-white rounded-lg shadow-sm p-6 mt-20 mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                    {/* Location */}
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Location</div>
                            <div className="font-semibold">Amirtha HomeStay</div>
                            <div className="text-sm text-gray-500">Tiruchirappalli, Tamil Nadu</div>
                        </div>
                    </div>
                    {/* Guests */}
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Guests</div>
                            <div className="font-semibold">3 Person</div>
                            <div className="text-sm text-gray-500">2 Adult, 1 Child</div>
                        </div>
                    </div>
                    {/* Check-in */}
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Check-in</div>
                            <div className="font-semibold">24 July 2022</div>
                            <div className="text-sm text-blue-500 cursor-pointer">Select date</div>
                        </div>
                    </div>
                    {/* Check-out */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-600">Check-out</div>
                            <div className="font-semibold">28 July 2022</div>
                            <div className="text-sm text-blue-500 cursor-pointer">Select date</div>
                        </div>
                    </div>
                </div>
                

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Section - Property Details */}
                    <div className="md:col-span-2">
                            {/* Header */}
                            <div className="p-6">
                                <h1 className="text-3xl font-bold text-red-500 mb-2">Amirtha HomeStay</h1>
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>Srirangam, Tiruchirappalli, tamil Nadu, India</span>
                                </div>
                            </div>

                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 sm:p-6">
                                {/* Main Image */}
                                <div className="relative">
                                    <img
                                        src="./3rdpg1.png"
                                        alt="City view from property"
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>

                                {/* Side Images */}
                                <div className="space-y-2 mt-2 sm:mt-0">
                                    <div className="relative">
                                        <img
                                            src="./3rdpg2.png"
                                            alt="Interior room"
                                            className="w-full h-31 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="relative w-full h-31">
                                        <img
                                            src="./3rdpg3.png"
                                            alt="Property exterior"
                                            className="w-full h-31 object-cover rounded-lg"
                                        />

                                        {/* justify center flex align items end */}
                                        <div className="absolute inset-0 flex items-end justify-center">
                                            <span className="bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                                More Photos
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Amenities */}
                            
                            
                            <div className="px-2 sm:px-6 pb-12">
                                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                                    <span>WiFi</span> • <span>Air conditioning</span> • <span>Heating</span> •
                                    <span>CCTV</span> • <span>Parking</span> • <span>House Keeping</span> • <span>Animal</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <span className="text-lg font-semibold mr-2">4.0</span>
                                    <div className="flex items-center mr-2">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="w-4 h-4 text-gray-300" />
                                    </div>
                                    <span className="text-sm text-gray-600">(367 Reviews)</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        
                    </div>

                    {/* Right Section - Booking Card */}
                    <div className="md:col-span-1 mt-8 md:mt-0">
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:sticky md:top-4">
                            <h2 className="text-xl font-semibold mb-4">
                                Deluxe Room Available Just 2.5 km from Vishwanath Temple
                            </h2>

                            <div className="text-sm text-gray-600 mb-4">2 Adult, 1 child</div>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>Book with ₹0 Payment</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>2 Meals Included</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>AC Rooms</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>MMTPS Best Available Rates</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>Free Cancellation Before 23 July 2024</span>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="border-t pt-4">
                                <div className="text-sm text-gray-500 mb-1">5D / 4N</div>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-3xl font-bold text-red-500">₹15000</span>
                                    <span className="text-sm text-gray-600 ml-2">+ ₹320 taxs & fees</span>
                                </div>

                                <div className="flex items-center mb-6">
                                    <span className="text-lg font-semibold mr-2">4.0</span>
                                    <div className="flex items-center mr-2">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="w-4 h-4 text-gray-300" />
                                    </div>
                                    <span className="text-sm text-gray-600">(367 Reviews)</span>
                                </div>

                                {/* Book Button */}
                                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}