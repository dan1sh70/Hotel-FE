export default function MapSection({ mapPins }) {
  return (
    <div className="bg-white rounded-xl h-full relative overflow-hidden shadow-sm border border-gray-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.234567890123!2d78.6869!3d10.8505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50f2b26d319%3A0x7b8c9d0e1f2g3h4i!2sSrirangam%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      />

      {/* Floating Price Pins */}
      <div className="absolute inset-0 pointer-events-none">
        {mapPins.map((pin, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow cursor-pointer hover:bg-red-600 transition-colors pointer-events-auto"
            style={{ left: pin.x, top: pin.y }}
          >
            ₹{pin.id}
          </div>
        ))}
      </div>
    </div>
  );
}
