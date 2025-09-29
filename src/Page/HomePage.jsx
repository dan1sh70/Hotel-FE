/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import TempleBooking from '../Components/TempleBooking'
import HomeCards from '../Components/HomeCards'
import { FaLocationDot } from 'react-icons/fa6';
import Faq from '../Components/Faq';
import Testimonials from '../Components/Testimonials';
import { useHotelStore } from '../stores/useHotelStore';

const HomePage = () => {
  const {getRandom,randomHotels} = useHotelStore();

  useEffect(() => {
    getRandom();
  },[])


    const Hotels = [
    {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Srinagar Tiruchirappalli, Tamil Nadu , India",
      img : "./img1.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Srinagar Tiruchirappalli, Tamil Nadu , India",
      img : "./img2.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Srinagar Tiruchirappalli, Tamil Nadu , India",
      img : "./img3.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Srinagar, Tiruchirappalli, Tamil Nadu , India",
      img : "./img4.png",
      price : "2000"
    }

  ]

return (
    <div>
      <TempleBooking />

      {/* Section: Hotels */}
      <div className="mt-10 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black text-center sm:text-left">
          Find your Stay in <span className="text-red-500">Srinagar</span>
        </h1>

        <button className="bg-red-600 text-white px-5 sm:px-6 py-2 rounded-2xl hover:bg-red-700 transition duration-300 self-center sm:self-auto">
          View All
        </button>
      </div>

    <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-6 sm:px-10 px-7 mb-20">
  {randomHotels.map((hotel) => (
    <HomeCards key={hotel._id}
          name={hotel.name}
          location={hotel.location.city}
          img= "/room1.png"/>
  ))}
</div>

      {/* Section: Places */}
      <div className="mt-10 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Find your Stay in Srinagar
          </h1>
          <p className="text-base sm:text-lg text-gray-800 mt-1">
            Flash Rooms offer safe and Comfortable stay near Srinagar temple
          </p>
        </div>

        <button className="bg-red-600 text-white px-5 sm:px-6 py-2 rounded-2xl hover:bg-red-700 transition duration-300 self-center sm:self-auto">
          View All
        </button>
      </div>

      <div className='mt-10 px-4 sm:px-6 md:px-10'>
        <img src="home-wrapper.png" alt="" className='object-cover w-full rounded-2xl ' />
      </div>

      {/* Existing sections */}
      <Faq />
      <Testimonials />
    </div>
  );
}

export default HomePage;
    

