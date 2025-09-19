import React from 'react'
import TempleBooking from '../Components/TempleBooking'
import HomeCards from '../Components/HomeCards'
import { FaLocationDot } from 'react-icons/fa6';
import Faq from '../Components/Faq';
import Testimonials from '../Components/Testimonials';

const HomePage = () => {

  const places = [
  {
    name: "Mumbai",
    location: "Thane, Mumbai, Maharashtra, India",
    image: "./mumbai.png",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Goa",
    location: "Vasco da Gama, North Goa, India",
    image: "./Goa.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Kerala",
    location: "Ernakulam Kochi, Kerala, South India",
    image: "./kerela.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Indore",
    location: "Rajwada Palaces, Indore, India",
    image: "./indore.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Delhi",
    location: "Red Fort (Lal Qila), Delhi, India",
    image: "./delhi.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Nepal",
    location: "Thamel Street, Kathmandu, Nepal",
    image: "./nepal.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Odisha",
    location: "Janpath, Bhubaneswar, Odisha, India",
    image: "./odisa.png",
    span: "col-span-2 row-span-1",
  },
  
];

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

    <div className="mt-10 grid grid-cols-4 gap-6 px-10 mb-20">
  {Hotels.map((hotel, index) => (
    <HomeCards key={index}
          name={hotel.name}
          location={hotel.location}
          img={hotel.img} />
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

      {/* Places grid */}
      <div className="mt-10 px-4 sm:px-6 md:px-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {places.map((place, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg ${place.span}`}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h2 className="text-white text-lg sm:text-xl font-bold">
                  {place.name}
                </h2>
                <p className="flex items-center gap-2 text-gray-200 text-sm">
                  <FaLocationDot /> {place.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Existing sections */}
      <Faq />
      <Testimonials />
    </div>
  );
}

export default HomePage;
    

