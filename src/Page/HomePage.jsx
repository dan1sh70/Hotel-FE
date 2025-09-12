import React from 'react'
import TempleBooking from '../Components/TempleBooking'
import HomeCards from '../Components/HomeCards'
import { FaLocationDot } from 'react-icons/fa6';

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
      name : "Sri Ranganadha Nilayam Temple",
      location : "Madurai, Tamil Nadu , India",
      img : "./img5.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Madurai, Tamil Nadu , India",
      img : "./img6.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Madurai, Tamil Nadu , India",
      img : "./img7.png",
      price : "2000"
    },
        {
      name : "Sri Ranganadha Nilayam Temple",
      location : "Madurai, Tamil Nadu , India",
      img : "./img8.png",
      price : "2000"
    },
    //     {
    //   name : "Sri Ranganadha Nilayam Temple",
    //   location : "Srinagar Tiruchirappalli, Tamil Nadu , India",
    //   img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
    //   price : "2000"
    // },
    //    {
    //   name : "Sri Ranganadha Nilayam Temple",
    //   location : "Srinagar Tiruchirappalli, Tamil Nadu , India",
    //   img : "https://www.hotelbuddhakathmandu.com/public/images/upload/homeslider/slider1.jpg",
    //   price : "2000"
    // },

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

    <div className="mt-10 grid grid-cols-4 gap-6 px-10 mb-20 margin-right-24px">
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
    

