import commonAPI from "./commonAPI";
import { BASE_URL } from "./baseURL";



// get hotel
export const getHotels = async(Reqbody) => {
  return await commonAPI("GET",`${BASE_URL}/hotels`,Reqbody);
};

// add hotel
export const addHotel = async (Reqbody) => {
  return await commonAPI("POST",`${BASE_URL}/hotels`, Reqbody);
};


// delete hotel
export const deleteHotel = async(id) => {
  return await commonAPI("DELETE",`${BASE_URL}/hotels/${id}`);
};

// update hotel
export const updateHotel =async(id, Reqbody) => {
  return await commonAPI("PUT",`${BASE_URL}/hotels/${id}`, Reqbody);
};

// edit booking status
export const updateBooking = (id, reqBody) => {
  return commonAPI("PUT", `${BASE_URL}/bookings/${id}`, reqBody);
};

// add booking
export const addBooking = async (data) => {
  return await commonAPI("POST",`${BASE_URL}/bookings`, data);
};

// get booking 
export const getBookings = async (Reqbody) => {
  return await commonAPI("GET",`${BASE_URL}/bookings`,Reqbody);
};

// delete Booking
export const deleteBooking =async (id) => {
  return await commonAPI("DELETE",`${BASE_URL}/bookings/${id}`);
};