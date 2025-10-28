import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../stores/useGlobalStore";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function RoomListCard({ listing }) {
  const { children, adults } = useGlobalStore();

  const [liked, setLiked] = useState(false);

  // On mount, check localStorage
  useEffect(() => {
    const likedRooms = JSON.parse(localStorage.getItem("likedRooms")) || [];
    if (likedRooms.includes(listing._id)) {
      setLiked(true);
    }
  }, [listing._id]);

  const toggleLike = (e) => {
    e.preventDefault(); // prevent navigating if clicked heart
    setLiked((prev) => {
      const newLiked = !prev;

      // Update localStorage
      const likedRooms = JSON.parse(localStorage.getItem("likedRooms")) || [];
      if (newLiked) {
        likedRooms.push(listing._id);
      } else {
        const index = likedRooms.indexOf(listing._id);
        if (index > -1) likedRooms.splice(index, 1);
      }
      localStorage.setItem("likedRooms", JSON.stringify(likedRooms));

      return newLiked;
    });
  };

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
    <div
      className="relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 items-start"
    >
      {/* Heart Icon in top-right corner of card */}
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition z-10"
      onClick={toggleLike}
      >
        <Heart  className={`w-5 h-5 ${liked ? "text-red-500 fill-red-500" : "text-gray-500"}`}
         />
      </button>

      {/* Image */}
      <div className="w-full sm:w-48 h-48 sm:h-48 rounded-lg overflow-hidden">
        <img
          src={"/room1.png"}
          alt="jeu"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title & Location */}
        <div>
          <h3 className="text-lg font-semibold text-black">{listing?.hotelId?.name}</h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm mt-1 flex-wrap">
            <MapPin className="w-4 h-4" />
            <span>{listing?.hotelId?.location?.city}</span>
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
          <div className="flex flex-wrap items-center gap-3 mt-3">
            {listing.isActive ? (
              <span className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-600 font-medium">
                Available
              </span>
            ) : (
              <span className="px-3 py-1 text-xs rounded-lg bg-gray-200 text-gray-600 font-medium">
                Sold Out
              </span>
            )}
            <Link to={children && adults ? `/details/${listing._id}` : "#"}
          onClick={(e) => {
          if (!children || !adults) {
          e.preventDefault();
          toast.error("Please select adults and children first");
        }
      }}
      className="px-4 py-1 text-xs rounded-lg bg-green-100 text-green-700 border border-green-300">
              View Details
            </Link>
          </div>
        </div>

        {/* Rating + Price */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-3 gap-2">
          {/* Left: Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-800 flex-wrap">
            <span className="font-semibold">{listing.hotelId.rating.average}</span>
            <div className="flex">{renderStars(listing.hotelId.rating.average)}</div>
            <span className="text-gray-500">
              ({listing.hotelId.rating.totalReviews} Reviews)
            </span>
          </div>

          {/* Right: Price */}
          <div className="text-right">
            <div className="text-lg font-bold text-black">
              ₹{listing.basePrice.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Onwards</div>
          </div>
        </div>
      </div>
    </div>
  );
}
