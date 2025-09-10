import React from 'react'

const AboutUs = () => {
  return (
    <>

    <div className='mt-28'>
      <img src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg" alt="" className='w-full h-80' />
    </div>

   <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 mx-6 md:mx-20 mt-10 md:mt-20 mb-32">
  {/* Image Section */}
  <div className="flex-shrink-0 relative">
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="About Us"
      className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover shadow-xl hover:scale-105 transition-transform duration-300 "
    />
   <div className="absolute top-40 right-40 bg-red-100 border border-red-300 rounded-2xl w-44 h-auto p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h1 className="text-red-600 text-xl font-bold mb-3 text-center">
    Flash Rooms
  </h1>
  <ul className="space-y-2 text-sm text-gray-700">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
      50+ Employees
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
      24 Hrs Services
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
      Comfortable Stay
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
      Family Friendly
    </li>
  </ul>
</div>

  </div>

  {/* Text Section */}
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-red-500 text-4xl md:text-6xl mb-5 font-extrabold tracking-wide">
      About Us
    </h1>
    <p className="text-xl md:text-xl text-gray-800 leading-relaxed">
      Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk  <br />
      Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk  <br />
      Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk  <br />
      Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk Lorem ishkfknsfskfskfjsfk lorem ishkfknsfskfskfjsfk 
    </p>
  </div>
</div>

<div className="px-6 md:px-40 py-12">
  {/* Heading */}
  <h1 className="text-4xl md:text-5xl text-red-500 font-extrabold text-left">
    Our Hotel Gallery
  </h1>
  <p className="text-lg md:text-2xl font-semibold text-gray-700 mt-2">
    Photos
  </p>

  {/* Gallery */}
  <div className="flex justify-center items-end gap-10 mt-10 mb-10">
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="Gallery 1"
      className="h-32 w-28 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="Gallery 2"
      className="h-44 w-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="Gallery 3"
      className="h-60 w-44 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
    />
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="Gallery 4"
      className="h-44 w-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg"
      alt="Gallery 5"
      className="h-32 w-28 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>


    </>
  )
}

export default AboutUs
