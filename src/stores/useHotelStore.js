import {create} from "zustand";
import axios from "axios";
import qs from "qs"


const API_URL = "http://localhost:5000/api" 
export const useHotelStore = create((set,get) => ({
    hotels : [],
    rooms : [],
    room : [],
    randomHotels : [],
    hotelLoading : false,

    getHotels : async() => {
        try{
            const res = await axios.get("http://localhost:5000/api/hotel/get-hotels");
            const data = res.data;
            set({hotels : res.data});
            console.log(data);
        }
        catch(err){
            console.log(err)
        }
    },

   getRooms: async (filters = {}) => {
    try {
      const query = qs.stringify(filters, { arrayFormat: 'comma' });
      const res = await axios.get(
        `http://localhost:5000/api/room/get-all-rooms?${query}`
      );
      set({ rooms: res.data });
    } catch (error) {
      console.error(error);
    }
  },

    getRandom : async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/hotel/get-random");
            set({randomHotels : res.data})
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    },


    getSingle : async(id) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/room/get-room-details/${id}`);
            set({room : res.data});
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }



}));