import React, { useState ,useEffect } from "react";
import { addBooking ,updateBooking } from "../services/allAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

 const hotel = location.state?.hotel;
const editBooking = location.state?.booking;
const isEdit = location.state?.edit;

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [selectedHotel] = useState(hotel);
const [booking, setBooking] = useState({
  customer: "",
  email: "",
  hotelName: "",
  hotelImage: "",
  location: "",
  room: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
  price: "",
  status: "Booked",
});

useEffect(() => {
  if (isEdit && editBooking) {
    setBooking(editBooking);
  } else if (hotel) {
    setBooking({
      customer: user?.name || "",
      email: user?.email || "",
      hotelName: hotel.name,
      hotelImage: hotel.image,
      location: hotel.location,
      room: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      price: hotel.price,
      status: "Booked",
    });
  }
}, [hotel, editBooking, isEdit]);



  const handleSubmit = async () => {
    const { customer, room, checkIn, checkOut, guests } = booking;

    // Validation
    if (!customer || !room || !checkIn || !checkOut || !guests) {
      alert("Please fill all fields");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after Check-in date");
      return;
    }

    try {
      let result;

   if (isEdit) {
   result = await updateBooking(editBooking.id, booking);
} else {
  result = await addBooking(booking);
}

      if (result.status === 200 || result.status === 201) {
  alert(isEdit ? "Booking Updated" : "Booking Successful");
  navigate("/mybookings");
}
    } 
    
  catch (err) {
  console.log("Update Error:", err);

  if (err.response) {
    console.log(err.response.data);
    console.log(err.response.status);
  }

  alert("Booking Failed");
}



  };



const displayHotel = hotel || {
  name: booking.hotelName,
  image: booking.hotelImage,
  location: booking.location,
  price: booking.price,
};




  

  return (
    <div className="container-fluid  ">

     <h2 className="mt-5 mb-4">{isEdit ? "Edit Booking" : "Book Room"}</h2>

      {displayHotel  && (
        <div className="card mb-4" style={{ width: "22rem" }}>
          <img
            src={displayHotel .image}
            alt={displayHotel .name}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h4>{displayHotel .name}</h4>
            <p>{displayHotel .location}</p>
            <h5>₹ {displayHotel .price}</h5>
          </div>
        </div>
      )}
<label htmlFor="">Customer Name </label>
      <input
        type="text"
        className="form-control w-50 mb-3"
        placeholder="Customer Name"
        value={booking.customer}
        onChange={(e) =>
          setBooking({ ...booking, customer: e.target.value })
        }
      />

      <input
        type="text"
        className="form-control w-50 mb-3"
        placeholder="Room Type (Single/Double/Deluxe)"
        value={booking.room}
        onChange={(e) =>
          setBooking({ ...booking, room: e.target.value })
        }
      />
        <label htmlFor="">Check In </label>
      <input
        type="date"
        className="form-control w-50 mb-3"
        min={new Date().toISOString().split("T")[0]}
        value={booking.checkIn}
        onChange={(e) =>
          setBooking({ ...booking, checkIn: e.target.value })
        }
      />
<label htmlFor="">Check Out</label>
      <input
        type="date"
        className="form-control w-50 mb-3"
        min={booking.checkIn || new Date().toISOString().split("T")[0]}
        value={booking.checkOut}
        onChange={(e) =>
          setBooking({ ...booking, checkOut: e.target.value })
        }
      />
<label htmlFor="">No: of Guest </label>
      <input
        type="number"
        className="form-control w-50 mb-4"
        min="1"
        placeholder="Number of Guests"
        value={booking.guests}
        onChange={(e) =>
          setBooking({
            ...booking,
            guests: Number(e.target.value),
          })
        }
      />

      <button className="btn btn-primary mb-5" onClick={handleSubmit}>{isEdit ? "Update Booking" : "Confirm Booking"}</button>

    </div>
  );
}

export default Booking;