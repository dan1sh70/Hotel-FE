import { useState } from "react";

const faqs = [
  {
    q: "How do I book a room?",
    a: "You can easily book through our platform by selecting your preferred room and completing the payment.",
  },
  {
    q: "Can I book a pooja service online?",
    a: "Yes, pooja services can be booked directly along with your stay.",
  },
  {
    q: "What are Dharshan Tours?",
    a: "Dharshan Tours are guided visits to temples and holy places near your stay.",
  },
  {
    q: "Can I change or cancel my booking?",
    a: "Yes, bookings can be modified or cancelled under our policy terms.",
  },
  {
    q: "What facilities are available at the rooms?",
    a: "Comfortable beds, clean bathrooms, and additional services like meals and transport.",
  },
  {
    q: "Are there any special offers or discounts?",
    a: "Yes, we provide seasonal discounts and special offers.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative rounded-2xl bg-cover bg-center flex items-center m-4 sm:m-6 md:m-10"
      style={{ backgroundImage: "url('/faq-bg.jpg')" }}
    >
      {/* Dark overlay if needed for readability */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        {/* Left side */}
        <div className="flex flex-col justify-end text-center md:text-left px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
          <p className="text-gray-200 text-sm sm:text-base">
            The essential details
          </p>
        </div>

        {/* Right side */}
        <div className="rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-3 sm:px-4 py-3 text-left font-medium text-gray-700 bg-white text-sm sm:text-base"
              >
                {item.q}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-3 sm:px-4 py-3 text-gray-600 bg-white text-sm sm:text-base">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

