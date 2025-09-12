import React from 'react';

import TempleCard from './common/TempleCard';

const TempleListings = () => {
  const templeData = [
    {
      id: 1,
      image: "./img1.png",
      title: "Sri Ranganadha Nilayam Temple",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
    },
    {
      id: 2,
      image: "./img2.png",
      title: "Sri Ranganadha Nilayam Temple",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
    },
    {
      id: 3,
      image: "./img3.png",
      title: "Sri Ranganadha Nilayam Temple",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
    },
    {
      id: 4,
      image: "./img4.png",
      title: "Sri Ranganadha Nilayam Temple",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
    },
    {
      id: 5,
      image: "./img5.png",
      title: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu, India",
    },
    {
      id: 6,
      image: "./img6.png",
      title: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu, India",
    },
    {
      id: 7,
      image: "./img7.png",
      title: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu, India",
    },
    {
      id: 8,
      image: "./img8.png",
      title: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu, India",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdeedc] px-8 py-10">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10">
        <div >
          <h1 className="text-2xl font-bold text-gray-900 " style={{color:'black',  marginBottom:'10px'}}>
            Find Your Stay Near By{" "}
            <span className="text-red-400" style={{color:'red'}}>Srirangam Temple</span>
          </h1>
          <p className="text-gray-700 text-base max-w-2xl mt-2" style={{color:'gray'}}>
            Experience a enriching spiritual journey with Flash Rooms,
            conveniently located near the Srirangam Temple.
          </p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition">
          View All
        </button>
      </div>

      {/* Temple Cards */}

        {templeData.map((temple) => (
          <TempleCard key={temple.id} temple={temple} />
        ))}

    </div>
  );
};

export default TempleListings;
