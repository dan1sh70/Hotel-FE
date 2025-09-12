import React from 'react'
import TempleBooking from '../Components/TempleBooking'
import HomeCards from '../Components/HomeCards'
import { FaLocationDot } from 'react-icons/fa6';

const HomePage = () => {

  const places = [
  {
    name: "Mumbai",
    location: "Thane, Mumbai, Maharashtra, India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Goa",
    location: "Vasco da Gama, North Goa, India",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Kerala",
    location: "Ernakulam Kochi, Kerala, South India",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MXwyMDg5NzN8MHwxfGFsbHwxfHx8fHx8fHwxNjE1Mzg5NjU3&ixlib=rb-1.2.1",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Indore",
    location: "Rajwada Palaces, Indore, India",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Delhi",
    location: "Red Fort (Lal Qila), Delhi, India",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Nepal",
    location: "Thamel Street, Kathmandu, Nepal",
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Odisha",
    location: "Janpath, Bhubaneswar, Odisha, India",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "col-span-2 row-span-1",
  },
  
];

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
    <div>
      <TempleBooking />

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
    <HomeCards key={index}
          name={hotel.name}
          location={hotel.location}
          img={hotel.img} />
  ))}
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

   <div className="mt-10 px-10 mb-20">
      <div className="grid grid-cols-3 gap-4 auto-rows-[250px]">
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
            {/* Overlay */}
            <div className="absolute  inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h2 className="text-white text-xl font-bold">{place.name}</h2>
              <p className="flex items-center gap-2 text-gray-200 text-sm">
                <FaLocationDot /> {place.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    

    
  )
}

export default HomePage
    

