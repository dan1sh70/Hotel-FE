import { Heart, MapPin, Star } from "lucide-react";

export default function RoomListCard({ listing }) {
    const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 text-red-500 fill-red-500" />);
  }

  if (hasHalfStar) {
    stars.push(<Star key="half" className="w-4 h-4 text-red-500 opacity-50 fill-red-500" />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
  }

  return stars;
};

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden p-4 flex gap-4 items-start">
      {/* Image */}
      <div className="w-44 h-36 relative rounded-lg overflow-hidden">
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition">
          <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title & Location */}
        <div>
          <h3 className="text-lg font-semibold text-black">{listing.name}</h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>{listing.location}</span>
          </div>

          {/* Amenities */}
          <div className="text-sm text-gray-700 mt-2 flex flex-wrap gap-2">
            {listing.amenities.map((amenity, idx) => (
              <span key={idx} className="flex items-center">
                {amenity}
                {idx < listing.amenities.length - 1 && (
                  <span className="mx-1 text-gray-400">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Availability & Buttons */}
          <div className="flex items-center gap-3 mt-6">
            {listing.available ? (
              <span className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-600 font-medium">
                Available
              </span>
            ) : (
              <span className="px-3 py-1 text-xs rounded-lg bg-gray-200 text-gray-600 font-medium">
                Sold Out
              </span>
            )}
            <button className="px-4 py-1 text-xs rounded-lg bg-green-100 text-green-700 border border-green-300">
              View Details
            </button>
          </div>
        </div>

        {/* Rating + Price */}
        <div className="flex justify-between items-end mt-3">
          <div className="flex items-center gap-1 text-sm text-gray-800">
            <span className="font-semibold">{listing.rating}</span>
            {/* render star icons here */}
            <div className="flex">{renderStars(listing.rating)}</div>
            <span className="text-gray-500">({listing.reviews} Reviews)</span>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold text-black">
              ₹{listing.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Onwards</div>
          </div>
        </div>
      </div>
    </div>
  );
}
