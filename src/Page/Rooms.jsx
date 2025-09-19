import React from 'react'
import HotelCard from '../Components/HotelCard'

const Rooms = () => {
  const Hotels = [
    {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },
       {
      name : "Hotel 1",
      location : "Srinagar",
      img : "about-img1.jpg",
      price : "2000"
    },

  ]
  return (
<>
  <div className="mt-28">
    {/* Hero Image & Heading */}
    <div className="relative px-4 md:px-16">
      <img
        src="/rooms-bg.jpg"
        alt=""
        className="w-full h-80 object-cover rounded-xl shadow z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center text-white font-bold">
          Stay connected to Faith with <br />
          <span className="text-red-500">Flash Rooms</span>
        </h1>
      </div>
    </div>

    {/* Section Header */}
    <div className="mt-10 px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-red-500">
          Find your Stay in Srinagar
        </h1>
        <p className="text-base sm:text-lg text-gray-800">
          Flash Rooms offer safe and comfortable stay near Srinagar temple
        </p>
      </div>

      <button className="bg-red-600 text-white px-6 py-2 rounded-2xl hover:bg-red-700 transition duration-300">
        View All
      </button>
    </div>

    {/* Hotels Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-10 mb-20">
      {Hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          img={hotel.img}
        />
      ))}
    </div>
  </div>
</>

  )
}



export default Rooms
