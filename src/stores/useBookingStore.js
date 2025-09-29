import { create } from "zustand";
import axios from "axios"

export const useBookingStore = create((set,get) => ({
    bookings : [],
    loading : false,

    BookNow : async(payload) => {
        try {
            const res = await axios.post("http://localhost:5000/api/bookings/book-now",payload);
            // set({bookings : res.data});
            console.log(res.data);
            return res.data;
            
        } catch (error) {
            console.log(error);
        }
    }

}))