import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  // Initial values
  children: 0,
  adults: 0,
  checkIn: null,
  checkOut: null,

  // Setters
  setChildren: (value) => set((prev) => ({ ...prev, children: value })),
  setAdults: (value) => set((prev) => ({ ...prev, adults: value })),
  setCheckIn: (date) => set((prev) => ({ ...prev, checkIn: date })),
  setCheckOut: (date) => set((prev) => ({ ...prev, checkOut: date })),
}));
