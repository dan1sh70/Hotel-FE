

function Testimonials() {
  return (
    <section className="relative md:p-10 p-5 bg-white">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Client <span className="text-red-500">Testimonials</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Flash Rooms offers safe and comfortable stays near Srirangam Temple.
        </p>
      </div>

      <div className="flex flex-row w-full items-stretch justify-center">
        {/* Img 1 */}
        <img
          src="/testimonials.png"
          alt="client"
          className="rounded-lg object-cover mt-10 w-full"
        />

      </div>
    </section>
  );
}

export default Testimonials;

