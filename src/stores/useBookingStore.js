import { create } from "zustand";
import axios from "axios";

export const useBookingStore = create((set, get) => ({
    bookings: [],
    confirmedBooking : null,
    loading: false,

    BookNow: async (payload) => {
        set({ loading: true });
        try {
            const res = await axios.post("https://hotel-be-n0rh.onrender.com/api/bookings/book-now", payload);
            console.log('Booking response:', res.data);
            
            set(state => ({ 
                bookings: [...state.bookings, res.data],
                loading: false 
            }));
            
            return res;
        } catch (error) {
            set({ loading: false });
            console.error('Booking error:', error.response?.data || error.message);
            throw error;
        }
    },

    getConfirmation : async(bookingId) => {
        try {
            const res = await axios.get(`https://hotel-be-n0rh.onrender.com/api/bookings/confirm-booking/${bookingId}`)
            set({confirmedBooking : res.data});
            console.log(res.data);
        } catch (error) {
            set({ loading: false });
            console.error('Booking error:', error.response?.data || error.message);
            throw error;
        }
    }
}));
