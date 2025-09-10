import React from 'react'
import HotelCard from '../Components/HotelCard'

const Rooms = () => {
  const Hotels = [
    {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
        {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },
       {
      name : "Hotel 1",
      location : "Srinagar",
      img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
      price : "2000"
    },

  ]
  return (
    <>
     <div className='mt-28'>
      <div className='relative'>
      <img src="https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg" alt="" className='w-full z-0 h-80' />
      </div>
      <div className="px-20">
        <h1 className='text-5xl text-white font-bold z-10 absolute top-52'>Stay connected to <br /> Faith with <span className="text-red-500">Flash</span> <br /> Rooms</h1>
      </div>
    </div>

    <div className= "mt-10 px-10 flex justify-between items-center">
      <div>
      <h1 className= "text-3xl font-bold text-red-500">Find your Stay in Srinagar </h1>
      <p className = "text-lg text-gray-800">Flash Rooms offer safe and Comfortable stay near Srinagar temple</p>
      </div>

      <button className = "bg-red-600 text-white px-6 py-2 rounded-2xl hover:bg-red-700 transition duration-300">
        View All
      </button>
    </div>


<div className="mt-10 grid grid-cols-4 gap-6 px-10 mb-20">
  {Hotels.map((hotel, index) => (
    <HotelCard key={index}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          img={hotel.img} />
  ))}
</div>


    </>
  )
}



export default Rooms
