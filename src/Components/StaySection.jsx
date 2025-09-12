// StaySection.jsx
const stays = [
  { id: 1, img: "./mumbai.png", size: "col-span-2 row-span-1 h-[200px]" },
  { id: 2, img: "./Goa.png", size: "col-span-1 row-span-1 h-[200px]" },
  { id: 3, img: "./kerala.png", size: "col-span-1 row-span-1 h-[200px]" },
  { id: 4, img: "./indore.png", size: "col-span-1 row-span-1 h-[250px]" },
  { id: 5, img: "./delhi.png", size: "col-span-1 row-span-1 h-[250px]" },
  { id: 6, img: "./nepal.png", size: "col-span-2 row-span-1 h-[250px]" },
  { id: 7, img: "./odisa.png", size: "col-span-2 row-span-1 h-[200px]" },
  { id: 8, img: "./udaipur.png", size: "col-span-1 row-span-1 h-[200px]" },
];

export default function StaySection() {
  return (
    <section className="bg-[#f8e5c8] py-12 px-6 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Find Your Stay In <span className="text-red-600">Srirangam</span>
          </h2>
          <p className="text-gray-700 text-sm">
            Flash Rooms offers safe and comfortable stays near Srirangam Temple.
          </p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-full">
          View All
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stays.map((stay) => (
          <div
            key={stay.id}
            className={`relative rounded-xl overflow-hidden ${stay.size}`}
          >
            {/* Background Image */}
            <img
              src={stay.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
