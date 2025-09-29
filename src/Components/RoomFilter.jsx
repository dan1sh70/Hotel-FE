import React, { useState } from "react";

const popularFilters = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Air Conditioning",
  "Ocean View Balcony",
  "Private Pool",
  "Gym",
  "Hot Tub",
  "Spa",
  "Restaurant",
  "Bar",
  "All Inclusive meals",
  "Parking",
];

const propertyTypes = [
  "Apartments","Guest Houses","Home Stays","Hostels","Boats","Bed and Breakfast",
  "Holiday Homes","Villas","Cottages","Chalets","Farm Stays","Resorts","Timeshares",
  "Luxury Suites","single","double","family","deluxe"
];

function FilterSection({ title, options, selected, onToggle }) {
  return (
    <div className="mb-6">
      <div className="text-lg font-bold text-gray-800 mb-1">{title}</div>
      <div className="border-t-2 border-black mb-2 w-[85%]" />
      <ul className="space-y-2">
        {options.map((label) => {
          const checked = selected.includes(label);
          return (
            <li key={label} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={checked}
                  onChange={() => onToggle(label)}
                />
                <span className={checked ? "text-red-600 font-medium text-[13px]" : "text-gray-800 text-[13px]"}>
                  {label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function SidebarFilters({ onChange }) {
  const [amenities, setAmenities] = useState([]);
  const [type, setType] = useState([]);

  const toggleAmenity = (label) => {
    setAmenities((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };
  const toggleType = (label) => {
    setType((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  // Notify parent whenever either list changes
  React.useEffect(() => {
    onChange?.({ amenities, type });
  }, [amenities, type]);

  return (
    <div className="bg-white p-4 rounded-xl w-full mt-10 min-w-[240px]">
      <FilterSection
        title="Popular Filters"
        options={popularFilters}
        selected={amenities}
        onToggle={toggleAmenity}
      />
      <FilterSection
        title="Property Types"
        options={propertyTypes}
        selected={type}
        onToggle={toggleType}
      />
    </div>
  );
}
