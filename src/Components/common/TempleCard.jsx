// TempleCard.jsx
import React from "react";
import { Heart, MapPin } from "lucide-react";

function TempleCard({ temple }) {
  return (
    <div className="relative rounded-2xl shadow-lg overflow-hidden group h-64">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${temple.image})` }}
      ></div> */}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Heart Icon (top-right) */}
      <div className="absolute top-3 right-3">
        <div className="bg-white/30 backdrop-blur-md rounded-full p-2">
          <Heart className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Temple Info (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-sm mb-1">
          {temple.title}
        </h3>
        <div className="flex items-start text-white text-xs opacity-90">
          <MapPin className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
          <span className="leading-tight">{temple.location}</span>
        </div>
      </div>
    </div>
  );
}

export default TempleCard;
