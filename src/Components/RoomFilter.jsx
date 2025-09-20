import React from "react";

const popularFilters = [
  { label: "4 Stars", count: 1272, checked: true },
  { label: "Hotels", count: 3352 },
  { label: "Apartments", count: 324 },
  { label: "Lisbon City Centre", count: 4589 },
  { label: "Private Pool", count: 65, checked: true },
  { label: "Bed and Breakfast", count: 34 },
  { label: "Free wifi", count: 4761 },
  { label: "Luxury Suites", count: 219, checked: true },
  { label: "Hostels", count: 180 },
  { label: "Vacation Rentals", count: 1223 },
];

const propertyTypes = [
  { label: "Apartments", count: 1272, checked: true },
  { label: "Guest Houses", count: 3352, checked: true },
  { label: "Home Stays", count: 324 },
  { label: "Hostels", count: 4589, checked: true },
  { label: "Boats", count: 65 },
  { label: "Bed and Breakfast", count: 34 },
  { label: "Holiday Homes", count: 4761 },
  { label: "Villas", count: 1220 },
  { label: "Cottages", count: 887, checked: true },
  { label: "Chalets", count: 112 },
  { label: "Farm Stays", count: 302 },
  { label: "Resorts", count: 2705 },
  { label: "Timeshares", count: 195 },
  { label: "Luxury Suites", count: 400 }
];

function FilterSection({ title, options }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold text-gray-800 mb-1">{title}</div>
      <div className="border-t-2 border-dotted border-blue-200 mb-2 w-[85%]" />
      <ul className="space-y-2">
        {options.map((opt, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center">
              {opt.checked ? (
                <span className="h-3 w-3 mr-2 rounded bg-red-600 border border-red-600 flex items-center justify-center">
                  <span className="bg-white h-1.5 w-1.5 rounded-sm block" />
                </span>
              ) : (
                <span className="h-3 w-3 mr-2 rounded border border-gray-400 bg-white flex-shrink-0" />
              )}
              <span className={
                (opt.checked ? "text-red-600 font-medium" : "text-gray-800") +
                " text-[13px]"
              }>
                {opt.label}
              </span>
            </div>
            <span
              className={
                "ml-2 text-gray-400 text-xs " +
                (opt.checked ? "font-semibold" : "")
              }
            >
              {opt.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SidebarFilters() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 w-full mt-10 min-w-[240px]">
      <FilterSection title="Popular Filters" options={popularFilters} />
      <FilterSection title="Property Types" options={propertyTypes} />
    </div>
  );
}
