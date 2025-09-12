import { useState } from "react";
import { Search, List } from "lucide-react";

export default function RoomListHeader() {
  const [showSharing, setShowSharing] = useState(true);

  return (
  
    <div className="bg-[#fff5e1] px-6 py-4 border-b border-gray-300" style={{paddingTop: '4rem'}}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left - Title */}
        <div>
          <h1 className="text-xl font-bold text-black" style={{ color: "black" }}>
            Rooms In <span style={{ color: "red" }}>Srirangam</span>
          </h1>
          <p className="text-gray-700 text-xs">1248 results • Jul 24 - 28</p>
        </div>

        {/* Right - Controls */}
        <div className="flex items-center gap-4">
          {/* Toggle Sharing */}
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span>Sharing Rooms</span>
            <div
              className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${
                showSharing ? "bg-red-500" : "bg-gray-400"
              }`}
              onClick={() => setShowSharing(!showSharing)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform mt-0.5 ${
                  showSharing ? "translate-x-5 ml-1" : "translate-x-0.5"
                }`}
              ></div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs text-black placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Filters + Sort */}
      <div className="flex items-center gap-3 mt-3 max-w-7xl mx-auto text-xs">
        <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
          💰 Price
        </button>
        <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
          ❄️ Ac/Non-Ac
        </button>
        <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
          👤 Single
        </button>
        <button className="px-3 py-1.5 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
          ⚙️ More
        </button>

        <div className="ml-auto flex items-center gap-2 text-gray-700">
          <List className="w-4 h-4 text-red-600" />
          <span>
            Sort by: <span className="text-red-600 font-medium">Price</span>
          </span>
        </div>
      </div>
    </div>
  );
}
